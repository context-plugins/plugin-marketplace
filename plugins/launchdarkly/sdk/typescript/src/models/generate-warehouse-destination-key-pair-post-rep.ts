import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GenerateWarehouseDestinationKeyPairPostRep = {
  /** The public key used by LaunchDarkly */
  publicKey?: string;
  /** The public key to assign in your Snowflake worksheet */
  publicKeyPkcs8?: string;
};

export const generateWarehouseDestinationKeyPairPostRepSchema: Schema<GenerateWarehouseDestinationKeyPairPostRep> =
  s.object<GenerateWarehouseDestinationKeyPairPostRep>({
    publicKey: s.optional(s.string()),
    publicKeyPkcs8: s.optional(s.string()),
    _keysMap: {
      publicKey: "public_key",
      publicKeyPkcs8: "public_key_pkcs8",
    },
  });
