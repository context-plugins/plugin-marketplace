import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audienceConfigurationSchema, type AudienceConfiguration } from "./audience-configuration.js";
import { environmentSummarySchema, type EnvironmentSummary } from "./environment-summary.js";

export type Audience = {
  environment?: EnvironmentSummary;
  /** The release phase name */
  name: string;
  configuration?: AudienceConfiguration;
  /** A list of segment keys */
  segmentKeys?: string[];
};

export const audienceSchema: Schema<Audience> = s.object<Audience>({
  environment: s.optional(s.lazy(() => environmentSummarySchema)),
  name: s.string(),
  configuration: s.optional(s.lazy(() => audienceConfigurationSchema)),
  segmentKeys: s.optional(s.array(s.string())),
});
