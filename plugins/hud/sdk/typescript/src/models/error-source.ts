import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Who is at fault for a failure.
 *
 * ``user``: the customer's input, account, environment, or agent code. ``platform``: HUD
 * infrastructure or a broken platform invariant. ``provider``: a third-party dependency (cloud
 * runtime, upstream LLM API).
 */
export const ErrorSource = {
  User: "user",
  Platform: "platform",
  Provider: "provider",
} as const;
export type ErrorSource = (typeof ErrorSource)[keyof typeof ErrorSource] | (string & {});

export const errorSourceSchema: EnumSchema<ErrorSource> = s.enumOf<ErrorSource>(ErrorSource);
