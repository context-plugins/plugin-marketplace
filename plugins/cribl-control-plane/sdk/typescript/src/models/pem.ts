import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** RSA private key configuration for Snowflake key-pair authentication. */
export type Pem = {
  /** RSA private key (PEM format) for Snowflake key-pair authentication. */
  keyName: string;
};

export const pemSchema: Schema<Pem> = s.object<Pem>({
  keyName: s.string(),
});
