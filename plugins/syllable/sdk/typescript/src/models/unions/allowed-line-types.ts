import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { lineTypeBucketSchema, type LineTypeBucket } from "../line-type-bucket.js";

/**
 * Line-type buckets this campaign is allowed to dial. Empty or omitted means no filter (all line
 * types are dialed).
 */
export type AllowedLineTypes = LineTypeBucket[];

export const allowedLineTypesSchema: Schema<AllowedLineTypes> = s.of<AllowedLineTypes>(
  s.union([s.array(s.lazy(() => lineTypeBucketSchema))]),
);
