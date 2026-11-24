import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { source1Schema, type Source1 } from "./source1.js";
import { status2Schema, type Status2 } from "./status2.js";
import { type4Schema, type Type4 } from "./type4.js";
import {
  variableValidationEntitySchema,
  type VariableValidationEntity,
} from "./variable-validation-entity.js";

export type VariableDevCycleManagementDeprecatedFeaturesV1Api = {
  /** Variable name */
  name?: string;
  /** A description of the Variable */
  description?: string;
  /**
   * Unique Variable identifier, can be used in the SDK / API to reference by key rather then ID.
   * Must only contain lower-case characters and `_`, `-` or `.`.
   */
  key: string;
  /** A unique Variable ID */
  id: string;
  /** The ID of the Project this Variable belongs to */
  project: string;
  /** The ID of the Feature this Variable belongs to */
  feature?: string;
  /** The type of Variable. Must be one of [String | Boolean | Number | JSON] */
  type: Type4;
  /** The status of a Variable. Must be one of [active | archived] */
  status: Status2;
  /** The system that was used for the creation of the Variable. */
  source: Source1;
  /** ID of the User who created the Variable. */
  createdBy?: string;
  /** The date the Variable was created */
  createdAt: Date;
  /** The date the Variable was last updated */
  updatedAt: Date;
  /** Validation schema for variable values */
  validationSchema?: VariableValidationEntity;
  /** Boolean indicating if the variable is intended to be long-lived within a feature */
  persistent?: boolean;
  /** Tags to organize Variables on the dashboard */
  tags?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const variableDevCycleManagementDeprecatedFeaturesV1ApiProperties: s.Shape<VariableDevCycleManagementDeprecatedFeaturesV1Api> =
  {
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    key: s.string(),
    id: s.string(),
    project: s.string(),
    feature: s.optional(s.string()),
    type: type4Schema,
    status: status2Schema,
    source: source1Schema,
    createdBy: s.optional(s.string()),
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    validationSchema: s.optional(s.lazy(() => variableValidationEntitySchema)),
    persistent: s.optional(s.boolean()),
    tags: s.optional(s.array(s.string())),
    _keysMap: {
      id: "_id",
      project: "_project",
      feature: "_feature",
      createdBy: "_createdBy",
    },
  };

export const variableDevCycleManagementDeprecatedFeaturesV1ApiInternalSchema: Schema<VariableDevCycleManagementDeprecatedFeaturesV1Api> =
  s.object<VariableDevCycleManagementDeprecatedFeaturesV1Api>(
    variableDevCycleManagementDeprecatedFeaturesV1ApiProperties,
    { additionalProperties: s.json() },
  );

export const variableDevCycleManagementDeprecatedFeaturesV1ApiSchema: Schema<VariableDevCycleManagementDeprecatedFeaturesV1Api> =
  s.lazySchema(() =>
    s.object<VariableDevCycleManagementDeprecatedFeaturesV1Api>(
      {
        ...variableDevCycleManagementDeprecatedFeaturesV1ApiProperties,
        name: s.optional(s.string().check(s.minLength(1), s.maxLength(100))),
        description: s.optional(s.string().check(s.maxLength(1000))),
        key: s.string().check(s.minLength(1), s.maxLength(100), s.pattern("^[a-z0-9-_.]+$")),
      },
      { additionalProperties: s.json() },
    ),
  );
