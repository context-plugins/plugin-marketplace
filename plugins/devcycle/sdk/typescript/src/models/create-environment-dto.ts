import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  environmentSettingsInternalSchema,
  environmentSettingsSchema,
  type EnvironmentSettings,
} from "./environment-settings.js";
import {
  typeDevCycleManagementEnvironmentsApiSchema,
  type TypeDevCycleManagementEnvironmentsApi,
} from "./type-dev-cycle-management-environments-api.js";

export type CreateEnvironmentDto = {
  /** A unique display name */
  name: string;
  /**
   * Unique Environment identifier, can be used in the SDK / API to reference by key rather than ID.
   * Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** Environment description. */
  description?: string;
  /**
   * Environment display color, used to highlight different environments on the dashboard. Must use
   * Hex color code.
   */
  color?: string;
  /** The environment type */
  type: TypeDevCycleManagementEnvironmentsApi;
  /** Environment based settings */
  settings?: EnvironmentSettings;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createEnvironmentDtoProperties: s.Shape<CreateEnvironmentDto> = {
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  color: s.optional(s.string()),
  type: typeDevCycleManagementEnvironmentsApiSchema,
  settings: s.optional(s.lazy(() => environmentSettingsInternalSchema)),
};

export const createEnvironmentDtoInternalSchema: Schema<CreateEnvironmentDto> =
  s.object<CreateEnvironmentDto>(createEnvironmentDtoProperties, { additionalProperties: s.json() });

export const createEnvironmentDtoSchema: Schema<CreateEnvironmentDto> = s.lazySchema(() =>
  s.object<CreateEnvironmentDto>(
    {
      ...createEnvironmentDtoProperties,
      name: s.string().check(s.minLength(1), s.maxLength(100)),
      key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      description: s.optional(s.string().check(s.maxLength(1000))),
      color: s.optional(
        s
          .string()
          .check(
            s.maxLength(9),
            s.pattern("^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{4}|[0-9A-Fa-f]{6}|[0-9A-Fa-f]{8})$"),
          ),
      ),
      settings: s.optional(s.lazy(() => environmentSettingsSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
