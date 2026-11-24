import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  protectedProjectSettingsDtoSchema,
  type ProtectedProjectSettingsDto,
} from "./protected-project-settings-dto.js";

export type UpdateProtectedProjectSettingsDto = {
  settings: ProtectedProjectSettingsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateProtectedProjectSettingsDtoSchema: Schema<UpdateProtectedProjectSettingsDto> =
  s.object<UpdateProtectedProjectSettingsDto>(
    {
      settings: protectedProjectSettingsDtoSchema,
    },
    { additionalProperties: s.json() },
  );
