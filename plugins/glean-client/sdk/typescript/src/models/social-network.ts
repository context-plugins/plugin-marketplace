import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type SocialNetwork = {
  /** Possible values are "twitter", "linkedin". */
  name: string;
  /** Human-readable profile name. */
  profileName?: string;
  /** Link to profile. */
  profileUrl: string;
  /** URL of the icon to display for this social network, when available. */
  iconUrl?: string;
};

export const socialNetworkSchema: Schema<SocialNetwork> = s.object<SocialNetwork>({
  name: s.string(),
  profileName: s.optional(s.string()),
  profileUrl: s.string(),
  iconUrl: s.optional(s.string()),
});
