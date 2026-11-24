import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type UserAvatarUrl = string;

export const userAvatarUrlSchema: Schema<UserAvatarUrl> = s.of<UserAvatarUrl>(s.union([s.string()]));
