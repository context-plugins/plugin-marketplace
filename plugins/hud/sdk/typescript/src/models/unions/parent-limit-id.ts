import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ParentLimitId = string;

export const parentLimitIdSchema: Schema<ParentLimitId> = s.of<ParentLimitId>(s.union([s.string()]));
