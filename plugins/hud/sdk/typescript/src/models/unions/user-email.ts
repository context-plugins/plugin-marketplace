import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UserEmail = string;

export const userEmailSchema: Schema<UserEmail> = s.of<UserEmail>(s.union([s.string()]));
