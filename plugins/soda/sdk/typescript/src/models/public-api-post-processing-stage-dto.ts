import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  publicApiPostProcessingStageStateDtoSchema,
  type PublicApiPostProcessingStageStateDto,
} from "./public-api-post-processing-stage-state-dto.js";

export type PublicApiPostProcessingStageDto = {
  ended?: Date;
  /** @default "diagnosticWarehouse" */
  name?: "diagnosticWarehouse";
  started?: Date;
  state?: PublicApiPostProcessingStageStateDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publicApiPostProcessingStageDtoSchema: Schema<PublicApiPostProcessingStageDto> =
  s.object<PublicApiPostProcessingStageDto>(
    {
      ended: s.optional(s.dateTime()),
      name: s.defaulted(s.literal("diagnosticWarehouse"), "diagnosticWarehouse"),
      started: s.optional(s.dateTime()),
      state: s.optional(s.lazy(() => publicApiPostProcessingStageStateDtoSchema)),
    },
    { additionalProperties: s.json() },
  );
