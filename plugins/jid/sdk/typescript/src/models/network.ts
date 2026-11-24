import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeJidQualifyApiSchema, type TypeJidQualifyApi } from "./type-jid-qualify-api.js";

export type Network = {
  type?: TypeJidQualifyApi;
  asn?: number | null;
  source?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const networkSchema: Schema<Network> = s.object<Network>(
  {
    type: s.optional(s.lazy(() => typeJidQualifyApiSchema)),
    asn: s.optionalNullable(s.int()),
    source: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
