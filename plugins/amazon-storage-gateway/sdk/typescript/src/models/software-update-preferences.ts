import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { automaticUpdatePolicySchema, type AutomaticUpdatePolicy } from "./automatic-update-policy.js";

export type SoftwareUpdatePreferences = {
  /**
   * Indicates the automatic update policy for a gateway. ALL_VERSIONS - Enables regular gateway
   * maintenance updates. EMERGENCY_VERSIONS_ONLY - Disables regular gateway maintenance updates.
   * The gateway will still receive emergency version updates on rare occasions if necessary to
   * remedy highly critical security or durability issues. You will be notified before an emergency
   * version update is applied. These updates are applied during your gateway's scheduled
   * maintenance window.
   */
  automaticUpdatePolicy?: AutomaticUpdatePolicy;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const softwareUpdatePreferencesSchema: Schema<SoftwareUpdatePreferences> =
  s.object<SoftwareUpdatePreferences>(
    {
      automaticUpdatePolicy: s.optional(s.lazy(() => automaticUpdatePolicySchema)),
      _keysMap: {
        automaticUpdatePolicy: "AutomaticUpdatePolicy",
      },
    },
    { additionalProperties: s.json() },
  );
