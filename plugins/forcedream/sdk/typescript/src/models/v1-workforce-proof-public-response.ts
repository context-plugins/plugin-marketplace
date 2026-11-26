import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fdProofSchema, type FdProof } from "./fd-proof.js";

export type V1WorkforceProofPublicResponse = {
  /**
   * The exact fields signed and verified. See x-forcedream-canonicalization for the precise reduced
   * "signable" object this maps to -- it is not simply this whole object.
   */
  proof?: FdProof;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1WorkforceProofPublicResponseSchema: Schema<V1WorkforceProofPublicResponse> =
  s.object<V1WorkforceProofPublicResponse>(
    {
      proof: s.optional(s.lazy(() => fdProofSchema)),
    },
    { additionalProperties: s.json() },
  );
