import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type OwnerAvatarUrl = string;

export const ownerAvatarUrlSchema: Schema<OwnerAvatarUrl> = s.of<OwnerAvatarUrl>(s.union([s.string()]));
