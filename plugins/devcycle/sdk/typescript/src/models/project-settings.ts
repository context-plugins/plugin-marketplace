import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dynatraceProjectSettingsSchema,
  type DynatraceProjectSettings,
} from "./dynatrace-project-settings.js";
import { edgeDbSettingsSchema, type EdgeDbSettings } from "./edge-db-settings.js";
import {
  featureApprovalWorkflowSettingsSchema,
  type FeatureApprovalWorkflowSettings,
} from "./feature-approval-workflow-settings.js";
import { lifeCycleSettingsSchema, type LifeCycleSettings } from "./life-cycle-settings.js";
import { obfuscationSettingsSchema, type ObfuscationSettings } from "./obfuscation-settings.js";
import { optInSettingsSchema, type OptInSettings } from "./opt-in-settings.js";
import {
  sdkTypeVisibilitySettingsSchema,
  type SdkTypeVisibilitySettings,
} from "./sdk-type-visibility-settings.js";
import { stalenessSettingsSchema, type StalenessSettings } from "./staleness-settings.js";

export type ProjectSettings = {
  edgeDb: EdgeDbSettings;
  optIn: OptInSettings;
  sdkTypeVisibility: SdkTypeVisibilitySettings;
  lifeCycle: LifeCycleSettings;
  obfuscation: ObfuscationSettings;
  featureApprovalWorkflow: FeatureApprovalWorkflowSettings;
  disablePassthroughRollouts: boolean;
  staleness: StalenessSettings;
  dynatrace: DynatraceProjectSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSettingsSchema: Schema<ProjectSettings> = s.object<ProjectSettings>(
  {
    edgeDb: edgeDbSettingsSchema,
    optIn: optInSettingsSchema,
    sdkTypeVisibility: sdkTypeVisibilitySettingsSchema,
    lifeCycle: lifeCycleSettingsSchema,
    obfuscation: obfuscationSettingsSchema,
    featureApprovalWorkflow: featureApprovalWorkflowSettingsSchema,
    disablePassthroughRollouts: s.boolean(),
    staleness: stalenessSettingsSchema,
    dynatrace: dynatraceProjectSettingsSchema,
    _keysMap: {
      edgeDb: "edgeDB",
    },
  },
  { additionalProperties: s.json() },
);
