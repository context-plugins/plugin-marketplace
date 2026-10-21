import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Private key */
export type PrivateKey = {
  /**
   * Select the stored secret containing the RSA private key (PEM format) for Snowflake key-pair
   * authentication
   */
  keyName: string;
};

export const privateKeySchema: Schema<PrivateKey> = s.object<PrivateKey>({
  keyName: s.string(),
});
