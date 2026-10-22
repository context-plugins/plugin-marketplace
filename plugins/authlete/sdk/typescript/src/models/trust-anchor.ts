import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type TrustAnchor = {
  /** the entity ID of the trust anchor */
  entityId?: string;
  /** the JWK Set document containing public keys of the trust anchor */
  jwks?: string;
};

export const trustAnchorSchema: Schema<TrustAnchor> = s.object<TrustAnchor>({
  entityId: s.optional(s.string()),
  jwks: s.optional(s.string()),
});
