import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ParentId = string;

export const parentIdSchema: Schema<ParentId> = s.of<ParentId>(s.union([s.string()]));
