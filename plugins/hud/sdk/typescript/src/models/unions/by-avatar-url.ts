import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ByAvatarUrl = string;

export const byAvatarUrlSchema: Schema<ByAvatarUrl> = s.of<ByAvatarUrl>(s.union([s.string()]));
