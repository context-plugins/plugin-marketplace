import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FeatureApprovalWorkflowSettings = {
  enabled: boolean;
  allowPublisherBypass: boolean;
  defaultReviewers: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const featureApprovalWorkflowSettingsSchema: Schema<FeatureApprovalWorkflowSettings> =
  s.object<FeatureApprovalWorkflowSettings>(
    {
      enabled: s.boolean(),
      allowPublisherBypass: s.boolean(),
      defaultReviewers: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
