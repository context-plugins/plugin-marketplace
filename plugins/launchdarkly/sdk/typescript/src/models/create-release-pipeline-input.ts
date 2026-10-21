import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createPhaseInputSchema, type CreatePhaseInput } from "./create-phase-input.js";

export type CreateReleasePipelineInput = {
  /** The release pipeline description */
  description?: string;
  /** The unique identifier of this release pipeline */
  key: string;
  /** The name of the release pipeline */
  name: string;
  /**
   * A logical grouping of one or more environments that share attributes for rolling out changes
   */
  phases: CreatePhaseInput[];
  /** A list of tags for this release pipeline */
  tags?: string[];
  /**
   * Whether or not the newly created pipeline should be set as the default pipeline for this
   * project
   */
  isProjectDefault?: boolean;
  /** Whether or not the pipeline is enabled for Release Automation. */
  isLegacy?: boolean;
};

export const createReleasePipelineInputSchema: Schema<CreateReleasePipelineInput> =
  s.object<CreateReleasePipelineInput>({
    description: s.optional(s.string()),
    key: s.string(),
    name: s.string(),
    phases: s.array(s.lazy(() => createPhaseInputSchema)),
    tags: s.optional(s.array(s.string())),
    isProjectDefault: s.optional(s.boolean()),
    isLegacy: s.optional(s.boolean()),
  });
