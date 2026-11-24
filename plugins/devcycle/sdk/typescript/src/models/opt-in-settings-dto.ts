import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  colorSettingsDtoInternalSchema,
  colorSettingsDtoSchema,
  type ColorSettingsDto,
} from "./color-settings-dto.js";
import {
  poweredByAlignmentDevCycleManagementProjectsApiSchema,
  type PoweredByAlignmentDevCycleManagementProjectsApi,
} from "./powered-by-alignment-dev-cycle-management-projects-api.js";

export type OptInSettingsDto = {
  title: string;
  description: string;
  enabled: boolean;
  imageUrl: string;
  colors: ColorSettingsDto;
  poweredByAlignment: PoweredByAlignmentDevCycleManagementProjectsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const optInSettingsDtoProperties: s.Shape<OptInSettingsDto> = {
  title: s.string(),
  description: s.string(),
  enabled: s.boolean(),
  imageUrl: s.string(),
  colors: colorSettingsDtoInternalSchema,
  poweredByAlignment: poweredByAlignmentDevCycleManagementProjectsApiSchema,
  _keysMap: {
    imageUrl: "imageURL",
  },
};

export const optInSettingsDtoInternalSchema: Schema<OptInSettingsDto> = s.object<OptInSettingsDto>(
  optInSettingsDtoProperties,
  { additionalProperties: s.json() },
);

export const optInSettingsDtoSchema: Schema<OptInSettingsDto> = s.lazySchema(() =>
  s.object<OptInSettingsDto>(
    {
      ...optInSettingsDtoProperties,
      title: s.string().check(s.minLength(1), s.maxLength(100)),
      description: s.string().check(s.maxLength(1000)),
      colors: colorSettingsDtoSchema,
    },
    { additionalProperties: s.json() },
  ),
);
