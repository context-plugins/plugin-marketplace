import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { organizationSchema, type Organization } from "./organization.js";
import { profileSchema, type Profile } from "./profile.js";

export type V2OnboardingMeRequest = {
  organization?: Organization;
  profile?: Profile;
};

export const v2OnboardingMeRequestSchema: Schema<V2OnboardingMeRequest> = s.object<V2OnboardingMeRequest>({
  organization: s.optional(s.lazy(() => organizationSchema)),
  profile: s.optional(s.lazy(() => profileSchema)),
});
