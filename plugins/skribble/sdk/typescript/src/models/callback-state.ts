import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The state of the callback.
 *
 * Possible values:
 *   - **OPEN** The callback request will be executed in the next execution cycle.
 *   - **COMPLETED** The callback request was executed successfully. The API received an HTTP 2xx
 *     success code in response.
 *   - **RESIGNATED** The callback request has been attempted `attempts` times but was unsuccessful.
 *     The API did not receive a valid HTTP 2xx response.
 */
export const CallbackState = {
  Open: "OPEN",
  Completed: "COMPLETED",
  Resignated: "RESIGNATED",
} as const;
export type CallbackState = (typeof CallbackState)[keyof typeof CallbackState] | (string & {});

export const callbackStateSchema: EnumSchema<CallbackState> = s.enumOf<CallbackState>(CallbackState);
