import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type ReferenceId = string;

export const referenceIdSchema: Schema<ReferenceId> = s.of<ReferenceId>(s.union([s.string()]));
