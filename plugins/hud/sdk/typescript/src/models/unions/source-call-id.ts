import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type SourceCallId = string;

export const sourceCallIdSchema: Schema<SourceCallId> = s.of<SourceCallId>(s.union([s.string()]));
