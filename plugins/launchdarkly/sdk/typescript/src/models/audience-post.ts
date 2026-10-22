import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audienceConfigurationSchema, type AudienceConfiguration } from "./audience-configuration.js";

export type AudiencePost = {
  /** A project-unique key for the environment. */
  environmentKey: string;
  /** The audience name */
  name: string;
  /** Segments targeted by this audience. */
  segmentKeys?: string[];
  configuration?: AudienceConfiguration;
};

export const audiencePostSchema: Schema<AudiencePost> = s.object<AudiencePost>({
  environmentKey: s.string(),
  name: s.string(),
  segmentKeys: s.optional(s.array(s.string())),
  configuration: s.optional(s.lazy(() => audienceConfigurationSchema)),
});
