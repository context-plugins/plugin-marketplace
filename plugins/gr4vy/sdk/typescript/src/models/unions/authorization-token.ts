import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An authorization token returned by the Klarna Express Checkout JS SDK after the buyer completes
 * payment in the embedded widget. When provided, the connector skips the HPP redirect and places
 * the Klarna order directly using this token.
 */
export type AuthorizationToken = string;

export const authorizationTokenSchema: Schema<AuthorizationToken> = s.of<AuthorizationToken>(
  s.union([s.string()]),
);
