import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  environmentSettingsInternalSchema,
  environmentSettingsSchema,
  type EnvironmentSettings,
} from "./environment-settings.js";
import { sdkKeysSchema, type SdkKeys } from "./sdk-keys.js";
import {
  typeDevCycleManagementEnvironmentsApiSchema,
  type TypeDevCycleManagementEnvironmentsApi,
} from "./type-dev-cycle-management-environments-api.js";

export type Environment = {
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
  /** A unique Environment ID */
  id: string;
  /** The Project owning the Environment */
  project: string;
  /** The environment type */
  type: TypeDevCycleManagementEnvironmentsApi;
  /** ID of the User who created the Environment. */
  createdBy: string;
  /** The date the Environment was created */
  createdAt: Date;
  /** The date the Environment was last updated */
  updatedAt: Date;
  /**
   * SDK Keys for mobile SDKs / client SDKs / server SDKs. Multiple keys can be created to allow for
   * key rotation.
   */
  sdkKeys?: SdkKeys;
  /** Environment based settings */
  settings?: EnvironmentSettings;
  /** Controls whether the environment is editable for a given user */
  readonly: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const environmentProperties: s.Shape<Environment> = {
  name: s.string(),
  key: s.string(),
  description: s.optional(s.string()),
  color: s.optional(s.string()),
  id: s.string(),
  project: s.string(),
  type: typeDevCycleManagementEnvironmentsApiSchema,
  createdBy: s.string(),
  createdAt: s.dateTime(),
  updatedAt: s.dateTime(),
  sdkKeys: s.optional(s.lazy(() => sdkKeysSchema)),
  settings: s.optional(s.lazy(() => environmentSettingsInternalSchema)),
  readonly: s.boolean(),
  _keysMap: {
    id: "_id",
    project: "_project",
    createdBy: "_createdBy",
  },
};

export const environmentInternalSchema: Schema<Environment> = s.object<Environment>(environmentProperties, {
  additionalProperties: s.json(),
});

export const environmentSchema: Schema<Environment> = s.lazySchema(() =>
  s.object<Environment>(
    {
      ...environmentProperties,
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
