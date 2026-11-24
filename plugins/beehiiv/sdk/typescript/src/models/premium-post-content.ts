import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The requested premium post HTML. This HTML does not have paywalls enforced. */
export type PremiumPostContent = {
  /** The website HTML rendered to a free reader */
  web?: string;
  /** The email HTML rendered to a premium reader */
  email?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const premiumPostContentSchema: Schema<PremiumPostContent> = s.object<PremiumPostContent>(
  {
    web: s.optional(s.string()),
    email: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
