import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Optional. Configuration to handle the startup of instances during cluster create and update
 * process.
 */
export type StartupConfig2 = {
  /**
   * Optional. The config setting to enable cluster creation/ updation to be successful only after
   * required_registration_fraction of instances are up and running. This configuration is
   * applicable to only secondary workers for now. The cluster will fail if
   * required_registration_fraction of instances are not available. This will include instance
   * creation, agent registration, and service registration (if enabled).
   */
  requiredRegistrationFraction?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startupConfig2Schema: Schema<StartupConfig2> = s.object<StartupConfig2>(
  {
    requiredRegistrationFraction: s.optional(s.float64()),
  },
  { additionalProperties: s.json() },
);
