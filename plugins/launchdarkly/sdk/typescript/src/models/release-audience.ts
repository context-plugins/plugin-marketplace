import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audienceConfigurationSchema, type AudienceConfiguration } from "./audience-configuration.js";
import { environmentSummarySchema, type EnvironmentSummary } from "./environment-summary.js";
import { linkSchema, type Link } from "./link.js";

export type ReleaseAudience = {
  /** The audience ID */
  id: string;
  /** The location and content type of related resources */
  links?: Record<string, Link>;
  environment?: EnvironmentSummary;
  /** The release phase name */
  name: string;
  configuration?: AudienceConfiguration;
  /** A list of segment keys */
  segmentKeys?: string[];
  status?: string;
  /** The rules IDs added or updated by this audience */
  ruleIds?: string[];
};

export const releaseAudienceSchema: Schema<ReleaseAudience> = s.object<ReleaseAudience>({
  id: s.string(),
  links: s.optional(
    s.record(
      s.string(),
      s.lazy(() => linkSchema),
    ),
  ),
  environment: s.optional(s.lazy(() => environmentSummarySchema)),
  name: s.string(),
  configuration: s.optional(s.lazy(() => audienceConfigurationSchema)),
  segmentKeys: s.optional(s.array(s.string())),
  status: s.optional(s.string()),
  ruleIds: s.optional(s.array(s.string())),
  _keysMap: {
    id: "_id",
    links: "_links",
    ruleIds: "_ruleIds",
  },
});
