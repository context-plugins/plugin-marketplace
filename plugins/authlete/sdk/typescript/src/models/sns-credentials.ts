import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SnsCredentials = {
  /** SNS. */
  sns?: string;
  /** API key. */
  apiKey?: string;
  /** API secret. */
  apiSecret?: string;
};

export const snsCredentialsSchema: Schema<SnsCredentials> = s.object<SnsCredentials>({
  sns: s.optional(s.string()),
  apiKey: s.optional(s.string()),
  apiSecret: s.optional(s.string()),
});
