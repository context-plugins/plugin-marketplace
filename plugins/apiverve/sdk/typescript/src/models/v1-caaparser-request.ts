import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1CaaparserRequest = {
  /** The CAA record string to parse */
  record: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CaaparserRequestSchema: Schema<V1CaaparserRequest> = s.object<V1CaaparserRequest>(
  {
    record: s.string(),
  },
  { additionalProperties: s.json() },
);
