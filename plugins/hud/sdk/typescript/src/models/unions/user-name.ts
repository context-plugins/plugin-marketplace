import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UserName = string;

export const userNameSchema: Schema<UserName> = s.of<UserName>(s.union([s.string()]));
