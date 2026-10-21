import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { entityCapabilitySchema, type EntityCapability } from "./entity-capability.js";
import { entityOnboardingStatusSchema, type EntityOnboardingStatus } from "./entity-onboarding-status.js";
import { entityOrganizationSchema, type EntityOrganization } from "./entity-organization.js";

export type Embedded13 = {
  organization?: EntityOrganization;
  onboarding?: EntityOnboardingStatus;
  capabilities?: EntityCapability[];
};

export const embedded13Schema: Schema<Embedded13> = s.object<Embedded13>({
  organization: s.optional(s.lazy(() => entityOrganizationSchema)),
  onboarding: s.optional(s.lazy(() => entityOnboardingStatusSchema)),
  capabilities: s.optional(s.array(s.lazy(() => entityCapabilitySchema))),
});
