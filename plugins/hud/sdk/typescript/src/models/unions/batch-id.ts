import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type BatchId = string;

export const batchIdSchema: Schema<BatchId> = s.of<BatchId>(s.union([s.string()]));
