import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * Passes the 3DS status to the Braintree API using `customFields` with the key set to the value of
 * `three_ds_auth_status`
 */
export type ThreeDsAuthStatus = string;

export const threeDsAuthStatusSchema: Schema<ThreeDsAuthStatus> = s.of<ThreeDsAuthStatus>(
  s.union([s.string()]),
);
