import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1CsrparserRequest = {
  /** The PEM-formatted Certificate Signing Request to parse */
  csr: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1CsrparserRequestSchema: Schema<V1CsrparserRequest> = s.object<V1CsrparserRequest>(
  {
    csr: s.string(),
  },
  { additionalProperties: s.json() },
);
