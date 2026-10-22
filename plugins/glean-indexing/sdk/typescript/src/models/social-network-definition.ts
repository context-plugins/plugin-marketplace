import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Employee's social network profile */
export type SocialNetworkDefinition = {
  /** Possible values are "twitter", "linkedin". */
  name?: string;
  /** Human-readable profile name. */
  profileName?: string;
  /** Link to profile. */
  profileUrl?: string;
};

export const socialNetworkDefinitionSchema: Schema<SocialNetworkDefinition> =
  s.object<SocialNetworkDefinition>({
    name: s.optional(s.string()),
    profileName: s.optional(s.string()),
    profileUrl: s.optional(s.string()),
  });
