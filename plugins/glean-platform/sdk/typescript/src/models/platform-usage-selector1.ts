import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { platformPeriod1Schema, type PlatformPeriod1 } from "./platform-period1.js";

/** Usage counted against this limit. */
export type PlatformUsageSelector1 = {
  /**
   * Opaque, case-sensitive spend-client ID, such as glean or an external gateway spend-client ID.
   * Case and leading or trailing padding are preserved exactly; this is not inferred from the
   * authenticating OAuth application, prefixed, or normalized. Empty and whitespace-only IDs
   * (including Unicode whitespace), synthetic UI aggregation IDs, and control characters are
   * invalid. Unknown IDs are valid and can have no applicable configured policies.
   */
  clientId?: string;
  /** Reset cadence for counted usage. */
  period: PlatformPeriod1;
};

export const platformUsageSelector1Schema: Schema<PlatformUsageSelector1> = s.object<PlatformUsageSelector1>({
  clientId: s.optional(s.string()),
  period: platformPeriod1Schema,
  _keysMap: {
    clientId: "client_id",
  },
});
