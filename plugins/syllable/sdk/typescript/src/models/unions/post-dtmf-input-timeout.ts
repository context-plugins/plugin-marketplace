import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Post dtmf silence timeout to determine input as ended. */
export type PostDtmfInputTimeout = number;

export const postDtmfInputTimeoutSchema: Schema<PostDtmfInputTimeout> = s.of<PostDtmfInputTimeout>(
  s.union([s.float64()]),
);
