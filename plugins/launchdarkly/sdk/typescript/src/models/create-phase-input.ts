import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { audiencePostSchema, type AudiencePost } from "./audience-post.js";

export type CreatePhaseInput = {
  /**
   * An ordered list of the audiences for this release phase. Each audience corresponds to a
   * LaunchDarkly environment.
   */
  audiences: AudiencePost[];
  /** The release phase name */
  name: string;
  configuration?: Record<string, unknown>;
};

export const createPhaseInputSchema: Schema<CreatePhaseInput> = s.object<CreatePhaseInput>({
  audiences: s.array(s.lazy(() => audiencePostSchema)),
  name: s.string(),
  configuration: s.optional(s.record(s.string(), s.unknown())),
});
