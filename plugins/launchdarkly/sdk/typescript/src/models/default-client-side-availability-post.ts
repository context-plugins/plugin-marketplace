import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type DefaultClientSideAvailabilityPost = {
  /** Whether to enable availability for client-side SDKs. */
  usingEnvironmentId: boolean;
  /** Whether to enable availability for mobile SDKs. */
  usingMobileKey: boolean;
};

export const defaultClientSideAvailabilityPostSchema: Schema<DefaultClientSideAvailabilityPost> =
  s.object<DefaultClientSideAvailabilityPost>({
    usingEnvironmentId: s.boolean(),
    usingMobileKey: s.boolean(),
  });
