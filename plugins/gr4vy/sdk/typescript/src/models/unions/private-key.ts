import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * The PEM-encoded private key. Only returned once, in the response to creating the API key pair,
 * and only when Gr4vy generated the key pair. Store it securely, as it cannot be retrieved later.
 */
export type PrivateKey = string;

export const privateKeySchema: Schema<PrivateKey> = s.of<PrivateKey>(s.union([s.string()]));
