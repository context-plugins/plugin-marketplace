import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1PhishingcheckRequest = {
  /** The domain to check (e.g., example.com) */
  domain: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1PhishingcheckRequestSchema: Schema<V1PhishingcheckRequest> = s.object<V1PhishingcheckRequest>(
  {
    domain: s.string(),
  },
  { additionalProperties: s.json() },
);
