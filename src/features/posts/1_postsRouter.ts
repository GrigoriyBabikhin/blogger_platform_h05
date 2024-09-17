import {Router} from "express";
import {postInputValidations} from "./postInputValidations";
import {adminAuthentication} from "../../global-middiewares/adminAuthentication";
import {postsController} from "./2_postsController";

export const postsRouter = Router()

postsRouter.get('/', postsController.getAllPosts)
postsRouter.post('/', adminAuthentication, ...postInputValidations(), postsController.createPost)
postsRouter.get("/:postId", postsController.getPostById)
postsRouter.put("/:postId", adminAuthentication, ...postInputValidations(), postsController.updatePost)
postsRouter.delete("/:postId", adminAuthentication, postsController.deletePost)