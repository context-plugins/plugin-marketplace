import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { chainHeadSchema, type ChainHead } from "./chain-head.js";
import { signatureSchema, type Signature } from "./signature.js";

export type ApiV1EvidenceVerifyResponse = {
  /** The digest recomputes and the signature is valid. */
  verified: boolean;
  digestValid: boolean;
  /**
   * `unsigned`: the pack carries no signature. `no_key`: it is signed but this deployment has no
   * key to check it with. `invalid`: the signature or key id does not match.
   */
  signature: Signature;
  /** The key the pack says it was signed with. */
  keyId: string | null;
  /** The key this deployment signs with now. */
  currentKeyId: string | null;
  /** The audit chain head the pack recorded when it was taken. */
  chainHead: ChainHead | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1EvidenceVerifyResponseSchema: Schema<ApiV1EvidenceVerifyResponse> =
  s.object<ApiV1EvidenceVerifyResponse>(
    {
      verified: s.boolean(),
      digestValid: s.boolean(),
      signature: signatureSchema,
      keyId: s.nullable(s.string()),
      currentKeyId: s.nullable(s.string()),
      chainHead: s.nullable(s.lazy(() => chainHeadSchema)),
    },
    { additionalProperties: s.json() },
  );
