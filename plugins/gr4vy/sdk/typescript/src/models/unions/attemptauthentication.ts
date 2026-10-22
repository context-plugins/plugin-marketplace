import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `authenticationData.attemptAuthentication` to Adyen. */
export type Attemptauthentication = string;

export const attemptauthenticationSchema: Schema<Attemptauthentication> = s.of<Attemptauthentication>(
  s.union([s.string()]),
);
