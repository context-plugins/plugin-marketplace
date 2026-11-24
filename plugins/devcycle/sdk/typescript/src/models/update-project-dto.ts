import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  projectSettingsDtoInternalSchema,
  projectSettingsDtoSchema,
  type ProjectSettingsDto,
} from "./project-settings-dto.js";

export type UpdateProjectDto = {
  /** Project name */
  name?: string;
  /** A unique key to identify the Project */
  key?: string;
  /** A description of the Project */
  description?: string;
  /**
   * Project display color, used to highlight different projects on the dashboard. Must use Hex
   * color code.
   */
  color?: string;
  settings?: ProjectSettingsDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const updateProjectDtoProperties: s.Shape<UpdateProjectDto> = {
  name: s.optional(s.string()),
  key: s.optional(s.string()),
  description: s.optional(s.string()),
  color: s.optional(s.string()),
  settings: s.optional(s.lazy(() => projectSettingsDtoInternalSchema)),
};

export const updateProjectDtoInternalSchema: Schema<UpdateProjectDto> = s.object<UpdateProjectDto>(
  updateProjectDtoProperties,
  { additionalProperties: s.json() },
);

export const updateProjectDtoSchema: Schema<UpdateProjectDto> = s.lazySchema(() =>
  s.object<UpdateProjectDto>(
    {
      ...updateProjectDtoProperties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
      key: s.optional(s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$"))),
      description: s.optional(s.string().check(s.maxLength(1000))),
      color: s.optional(
        s
          .string()
          .check(
            s.maxLength(9),
            s.pattern("^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$"),
          ),
      ),
      settings: s.optional(s.lazy(() => projectSettingsDtoSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
