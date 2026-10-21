import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthRequestHeaderConfHealthCheckAuthenticationLogin = {
  /** Header name. */
  name: string;
  /** JavaScript expression to compute the header value (can be a constant). */
  value: string;
};

export const authRequestHeaderConfHealthCheckAuthenticationLoginSchema: Schema<AuthRequestHeaderConfHealthCheckAuthenticationLogin> =
  s.object<AuthRequestHeaderConfHealthCheckAuthenticationLogin>({
    name: s.string(),
    value: s.string(),
  });
