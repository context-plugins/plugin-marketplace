import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1DomainnamesRequest1 = {
  /** A description of the DomainName. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1DomainnamesRequest1Schema: Schema<V1DomainnamesRequest1> = s.object<V1DomainnamesRequest1>(
  {
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
