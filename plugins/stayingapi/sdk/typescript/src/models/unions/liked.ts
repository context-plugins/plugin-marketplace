import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Liked = string;

export const likedSchema: Schema<Liked> = s.of<Liked>(s.union([s.string()]));
