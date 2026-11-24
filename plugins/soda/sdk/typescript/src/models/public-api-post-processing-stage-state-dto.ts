import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiPostProcessingStageStateDto = {
  Ongoing: "ongoing",
  Completed: "completed",
  Failed: "failed",
} as const;
export type PublicApiPostProcessingStageStateDto =
  | (typeof PublicApiPostProcessingStageStateDto)[keyof typeof PublicApiPostProcessingStageStateDto]
  | (string & {});

export const publicApiPostProcessingStageStateDtoSchema: EnumSchema<PublicApiPostProcessingStageStateDto> =
  s.enumOf<PublicApiPostProcessingStageStateDto>(PublicApiPostProcessingStageStateDto);
