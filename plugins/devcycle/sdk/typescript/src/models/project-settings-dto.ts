import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dynatraceProjectSettingsDtoSchema,
  type DynatraceProjectSettingsDto,
} from "./dynatrace-project-settings-dto.js";
import { edgeDbSettingsDtoSchema, type EdgeDbSettingsDto } from "./edge-db-settings-dto.js";
import { lifeCycleSettingsDtoSchema, type LifeCycleSettingsDto } from "./life-cycle-settings-dto.js";
import { obfuscationSettingsDtoSchema, type ObfuscationSettingsDto } from "./obfuscation-settings-dto.js";
import {
  optInSettingsDtoInternalSchema,
  optInSettingsDtoSchema,
  type OptInSettingsDto,
} from "./opt-in-settings-dto.js";
import {
  sdkTypeVisibilitySettingsDtoSchema,
  type SdkTypeVisibilitySettingsDto,
} from "./sdk-type-visibility-settings-dto.js";

export type ProjectSettingsDto = {
  edgeDb: EdgeDbSettingsDto;
  optIn: OptInSettingsDto;
  sdkTypeVisibility: SdkTypeVisibilitySettingsDto;
  lifeCycle: LifeCycleSettingsDto;
  obfuscation: ObfuscationSettingsDto;
  disablePassthroughRollouts: boolean;
  dynatrace: DynatraceProjectSettingsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const projectSettingsDtoProperties: s.Shape<ProjectSettingsDto> = {
  edgeDb: edgeDbSettingsDtoSchema,
  optIn: optInSettingsDtoInternalSchema,
  sdkTypeVisibility: sdkTypeVisibilitySettingsDtoSchema,
  lifeCycle: lifeCycleSettingsDtoSchema,
  obfuscation: obfuscationSettingsDtoSchema,
  disablePassthroughRollouts: s.boolean(),
  dynatrace: dynatraceProjectSettingsDtoSchema,
  _keysMap: {
    edgeDb: "edgeDB",
  },
};

export const projectSettingsDtoInternalSchema: Schema<ProjectSettingsDto> = s.object<ProjectSettingsDto>(
  projectSettingsDtoProperties,
  { additionalProperties: s.json() },
);

export const projectSettingsDtoSchema: Schema<ProjectSettingsDto> = s.lazySchema(() =>
  s.object<ProjectSettingsDto>(
    {
      ...projectSettingsDtoProperties,
      optIn: optInSettingsDtoSchema,
    },
    { additionalProperties: s.json() },
  ),
);
