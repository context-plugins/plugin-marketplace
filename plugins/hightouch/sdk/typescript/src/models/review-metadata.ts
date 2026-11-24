import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The metadata sent with the approval or rejection */
export type ReviewMetadata = {
  extId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const reviewMetadataSchema: Schema<ReviewMetadata> = s.object<ReviewMetadata>(
  {
    extId: s.string(),
  },
  { additionalProperties: s.json() },
);
