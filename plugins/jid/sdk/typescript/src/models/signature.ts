import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { algSchema, type Alg } from "./alg.js";
import { canonicalizationSchema, type Canonicalization } from "./canonicalization.js";

export type Signature = {
  alg?: Alg;
  kid?: string;
  canonicalization?: Canonicalization;
  /** base64url */
  sig?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signatureSchema: Schema<Signature> = s.object<Signature>(
  {
    alg: s.optional(s.lazy(() => algSchema)),
    kid: s.optional(s.string()),
    canonicalization: s.optional(s.lazy(() => canonicalizationSchema)),
    sig: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
