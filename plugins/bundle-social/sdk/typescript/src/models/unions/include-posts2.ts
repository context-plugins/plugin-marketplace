import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { includePostsSchema, type IncludePosts } from "../include-posts.js";
import { includePosts1Schema, type IncludePosts1 } from "../include-posts1.js";

export type IncludePosts2 = boolean | IncludePosts | IncludePosts1;

export const includePosts2Schema: Schema<IncludePosts2> = s.of<IncludePosts2>(
  s.union([s.boolean(), s.lazy(() => includePostsSchema), s.lazy(() => includePosts1Schema)]),
);
