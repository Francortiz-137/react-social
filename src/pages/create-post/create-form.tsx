import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { addDoc, collection } from 'firebase/firestore';
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from 'react-router-dom';

interface CreateFormData {
    title:string;
    description: string;
}

export const CreateForm = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const schema = yup.object().shape({
        title: yup.string().required("You must add a title."),
        description: yup.string().required("You must add a description"),
    });

    const { register, handleSubmit, formState: {errors} } = useForm<CreateFormData>({
        resolver: yupResolver(schema),
    });

    const postsRef = collection(db, "posts");

    const onCreatePost = async(data: CreateFormData) => {
        await addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userId: user?.uid,
        })
        navigate("/");
    };

    return <form className='post-form' onSubmit={handleSubmit(onCreatePost)}>
            <label htmlFor="">
                <input type="text" placeholder='Title...' {...register("title")}/>
                <p>{errors.title?.message}</p>
            </label>
            <label htmlFor="">
                <textarea placeholder='Description...' {...register("description")}/>
                <p>{errors.description?.message}</p>
            </label>
            <input type="submit" />
            </form>
}