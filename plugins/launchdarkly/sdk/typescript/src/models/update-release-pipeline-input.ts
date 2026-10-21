import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { createPhaseInputSchema, type CreatePhaseInput } from "./create-phase-input.js";

export type UpdateReleasePipelineInput = {
  /** The release pipeline description */
  description?: string;
  /** The name of the release pipeline */
  name: string;
  /**
   * A logical grouping of one or more environments that share attributes for rolling out changes
   */
  phases: CreatePhaseInput[];
  /** A list of tags for this release pipeline */
  tags?: string[];
};

export const updateReleasePipelineInputSchema: Schema<UpdateReleasePipelineInput> =
  s.object<UpdateReleasePipelineInput>({
    description: s.optional(s.string()),
    name: s.string(),
    phases: s.array(s.lazy(() => createPhaseInputSchema)),
    tags: s.optional(s.array(s.string())),
  });
