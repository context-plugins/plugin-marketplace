import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pairSchema, type Pair } from "./pair.js";

export type UserinfoIssueRequest = {
  /**
   * The access token that has been passed to the userinfo endpoint by the client application. In
   * other words, the access token which was contained in the userinfo request.
   */
  token: string;
  /**
   * Claims in JSON format. As for the format, see [OpenID Connect Core 1.0, 5.1. Standard
   * Claims](https://openid.net/specs/openid-connect-core-1_0.html#StandardClaims).
   */
  claims?: string;
  /**
   * The value of the `sub` claim. If the value of this request parameter is not empty, it is used
   * as the value of the `sub` claim. Otherwise, the value of the subject associated with the access
   * token is used.
   */
  sub?: string;
  /** Claim key-value pairs that are used to compute transformed claims. */
  claimsForTx?: string;
  /** The Signature header value from the request. */
  requestSignature?: string;
  /**
   * HTTP headers to be included in processing the signature. If this is a signed request, this must
   * include the Signature and Signature-Input headers, as well as any additional headers covered by
   * the signature.
   */
  headers?: Pair[];
  /** Values of verified claims requested indirectly by "transformed claims". */
  verifiedClaimsForTx?: string[];
};

export const userinfoIssueRequestSchema: Schema<UserinfoIssueRequest> = s.object<UserinfoIssueRequest>({
  token: s.string(),
  claims: s.optional(s.string()),
  sub: s.optional(s.string()),
  claimsForTx: s.optional(s.string()),
  requestSignature: s.optional(s.string()),
  headers: s.optional(s.array(s.lazy(() => pairSchema))),
  verifiedClaimsForTx: s.optional(s.array(s.string())),
});
