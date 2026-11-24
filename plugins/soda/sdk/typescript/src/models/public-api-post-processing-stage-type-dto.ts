import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const PublicApiPostProcessingStageTypeDto = {
  DiagnosticWarehouse: "diagnosticWarehouse",
} as const;
export type PublicApiPostProcessingStageTypeDto =
  | (typeof PublicApiPostProcessingStageTypeDto)[keyof typeof PublicApiPostProcessingStageTypeDto]
  | (string & {});

export const publicApiPostProcessingStageTypeDtoSchema: EnumSchema<PublicApiPostProcessingStageTypeDto> =
  s.enumOf<PublicApiPostProcessingStageTypeDto>(PublicApiPostProcessingStageTypeDto);
