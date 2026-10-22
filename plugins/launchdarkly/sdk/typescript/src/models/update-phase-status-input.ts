import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  releaserAudienceConfigInputSchema,
  type ReleaserAudienceConfigInput,
} from "./releaser-audience-config-input.js";

export type UpdatePhaseStatusInput = {
  status?: string;
  /** Extra configuration for audiences required upon phase initialization. */
  audiences?: ReleaserAudienceConfigInput[];
};

export const updatePhaseStatusInputSchema: Schema<UpdatePhaseStatusInput> = s.object<UpdatePhaseStatusInput>({
  status: s.optional(s.string()),
  audiences: s.optional(s.array(s.lazy(() => releaserAudienceConfigInputSchema))),
});
