import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ClientSideAvailability = {
  usingMobileKey?: boolean;
  usingEnvironmentId?: boolean;
};

export const clientSideAvailabilitySchema: Schema<ClientSideAvailability> = s.object<ClientSideAvailability>({
  usingMobileKey: s.optional(s.boolean()),
  usingEnvironmentId: s.optional(s.boolean()),
});
