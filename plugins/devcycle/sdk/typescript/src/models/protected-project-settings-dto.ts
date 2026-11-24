import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  featureApprovalWorkflowDtoSchema,
  type FeatureApprovalWorkflowDto,
} from "./feature-approval-workflow-dto.js";
import { stalenessSettingsDtoSchema, type StalenessSettingsDto } from "./staleness-settings-dto.js";

export type ProtectedProjectSettingsDto = {
  featureApprovalWorkflow: FeatureApprovalWorkflowDto;
  staleness: StalenessSettingsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const protectedProjectSettingsDtoSchema: Schema<ProtectedProjectSettingsDto> =
  s.object<ProtectedProjectSettingsDto>(
    {
      featureApprovalWorkflow: featureApprovalWorkflowDtoSchema,
      staleness: stalenessSettingsDtoSchema,
    },
    { additionalProperties: s.json() },
  );
