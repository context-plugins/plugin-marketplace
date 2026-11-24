import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ParentJobId = string;

export const parentJobIdSchema: Schema<ParentJobId> = s.of<ParentJobId>(s.union([s.string()]));
