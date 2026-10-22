import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AuthRequestHeaderConfHealthCheckAuthenticationOauth = {
  /** Header name. */
  name: string;
  /**
   * JavaScript expression to compute the header's value, normally enclosed in backticks (e.g.,
   * `${earliest}`). If a constant, use single quotes (e.g., 'earliest'). Values without delimiters
   * (e.g., earliest) are evaluated as strings.
   */
  value: string;
};

export const authRequestHeaderConfHealthCheckAuthenticationOauthSchema: Schema<AuthRequestHeaderConfHealthCheckAuthenticationOauth> =
  s.object<AuthRequestHeaderConfHealthCheckAuthenticationOauth>({
    name: s.string(),
    value: s.string(),
  });
