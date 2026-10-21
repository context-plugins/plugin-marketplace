import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { authentication4Schema, type Authentication4 } from "./authentication4.js";

export type RestAuthenticationHmac = {
  /** Discriminator value. */
  authentication?: Authentication4;
  /** Select or create an HMAC Function to use with authentication */
  hmacFunctionId: string;
};

export const restAuthenticationHmacSchema: Schema<RestAuthenticationHmac> = s.object<RestAuthenticationHmac>({
  authentication: s.optional(s.lazy(() => authentication4Schema)),
  hmacFunctionId: s.string(),
});
