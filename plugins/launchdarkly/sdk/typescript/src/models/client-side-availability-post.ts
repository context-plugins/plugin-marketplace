import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientSideAvailabilityPost = {
  /** Whether to enable availability for client-side SDKs. Defaults to <code>false</code>. */
  usingEnvironmentId: boolean;
  /** Whether to enable availability for mobile SDKs. Defaults to <code>true</code>. */
  usingMobileKey: boolean;
};

export const clientSideAvailabilityPostSchema: Schema<ClientSideAvailabilityPost> =
  s.object<ClientSideAvailabilityPost>({
    usingEnvironmentId: s.boolean(),
    usingMobileKey: s.boolean(),
  });
