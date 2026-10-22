import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultClientSideAvailability = {
  /** Whether to enable availability for mobile SDKs */
  usingMobileKey: boolean;
  /** Whether to enable availability for client-side SDKs */
  usingEnvironmentId: boolean;
};

export const defaultClientSideAvailabilitySchema: Schema<DefaultClientSideAvailability> =
  s.object<DefaultClientSideAvailability>({
    usingMobileKey: s.boolean(),
    usingEnvironmentId: s.boolean(),
  });
