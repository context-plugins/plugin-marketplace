import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type AvatarUrl = string;

export const avatarUrlSchema: Schema<AvatarUrl> = s.of<AvatarUrl>(s.union([s.string()]));
