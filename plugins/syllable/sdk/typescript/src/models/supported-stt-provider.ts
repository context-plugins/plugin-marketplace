import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { fallback2Schema, type Fallback2 } from "./unions/fallback2.js";
import { status3Schema, type Status3 } from "./unions/status3.js";
import { sunsetDate2Schema, type SunsetDate2 } from "./unions/sunset-date2.js";

/** An STT provider offered to agents, with its resolved deprecation lifecycle. */
export type SupportedSttProvider = {
  /** Speech-to-text provider value, as stored on the agent. */
  provider: string;
  /** Human-readable name of the provider. */
  displayName: string;
  /** Whether the provider is in the deprecation warning window. @default false */
  deprecated?: boolean;
  /** Date the provider becomes retired and can no longer be saved or selected. */
  sunsetDate?: SunsetDate2;
  /** Whether the provider is force-retired regardless of sunset_date. @default false */
  removed?: boolean;
  /** Provider substituted at runtime for critical features once this one is retired. */
  fallback?: Fallback2;
  /** Effective lifecycle status, resolved server-side against the current date. */
  status?: Status3;
};

export const supportedSttProviderSchema: Schema<SupportedSttProvider> = s.object<SupportedSttProvider>({
  provider: s.string(),
  displayName: s.string(),
  deprecated: s.defaulted(s.boolean(), false),
  sunsetDate: s.optional(s.lazy(() => sunsetDate2Schema)),
  removed: s.defaulted(s.boolean(), false),
  fallback: s.optional(s.lazy(() => fallback2Schema)),
  status: s.optional(s.lazy(() => status3Schema)),
  _keysMap: {
    displayName: "display_name",
    sunsetDate: "sunset_date",
  },
});
