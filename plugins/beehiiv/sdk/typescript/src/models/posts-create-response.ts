import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { postCreateSchema, type PostCreate } from "./post-create.js";

export type PostsCreateResponse = {
  data: PostCreate;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const postsCreateResponseSchema: Schema<PostsCreateResponse> = s.object<PostsCreateResponse>(
  {
    data: postCreateSchema,
  },
  { additionalProperties: s.json() },
);
