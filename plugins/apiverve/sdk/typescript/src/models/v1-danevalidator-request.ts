import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1DanevalidatorRequest = {
  /** The DANE/TLSA record string to validate */
  record: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DanevalidatorRequestSchema: Schema<V1DanevalidatorRequest> = s.object<V1DanevalidatorRequest>(
  {
    record: s.string(),
  },
  { additionalProperties: s.json() },
);
