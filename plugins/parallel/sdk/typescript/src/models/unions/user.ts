import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type User = string;

export const userSchema: Schema<User> = s.of<User>(s.union([s.string()]));
