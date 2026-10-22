import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * A PEM-encoded ECDSA P-521 (ES512) public key. Provide this to register your own key pair (bring
 * your own key); If omitted, Gr4vy will generate the key pair and return the private key.
 */
export type PublicKey = string;

export const publicKeySchema: Schema<PublicKey> = s.of<PublicKey>(s.union([s.string()]));
