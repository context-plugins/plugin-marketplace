import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectBadge = {
  /** Set this to true to generate a publicly accessible URL for your project's build badge. */
  badgeEnabled?: boolean;
  /** The publicly-accessible URL through which you can access the build badge for your project. */
  badgeRequestUrl?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBadgeSchema: Schema<ProjectBadge> = s.object<ProjectBadge>(
  {
    badgeEnabled: s.optional(s.boolean()),
    badgeRequestUrl: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
