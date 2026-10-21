import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateReleaseInput = {
  /** The variation id to release to across all phases */
  releaseVariationId?: string;
  /** The key of the release pipeline to attach the flag to */
  releasePipelineKey: string;
};

export const createReleaseInputSchema: Schema<CreateReleaseInput> = s.object<CreateReleaseInput>({
  releaseVariationId: s.optional(s.string()),
  releasePipelineKey: s.string(),
});
