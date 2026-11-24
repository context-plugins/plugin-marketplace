import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dataType3Schema, type DataType3 } from "./data-type3.js";
import { definitionTypeSchema, type DefinitionType } from "./definition-type.js";
import {
  googleCloudApihubV1AllowedValueSchema,
  type GoogleCloudApihubV1AllowedValue,
} from "./google-cloud-apihub-v1-allowed-value.js";
import { scopeSchema, type Scope } from "./scope.js";

/**
 * An attribute in the API Hub. An attribute is a name value pair which can be attached to different
 * resources in the API hub based on the scope of the attribute. Attributes can either be
 * pre-defined by the API Hub or created by users.
 */
export type GoogleCloudApihubV1Attribute = {
  /** Required. The type of the data of the attribute. */
  dataType?: DataType3;
  /** Output only. The time at which the attribute was last updated. */
  updateTime?: string;
  /** Output only. The time at which the attribute was created. */
  createTime?: string;
  /**
   * Identifier. The name of the attribute in the API Hub. Format:
   * `projects/{project}/locations/{location}/attributes/{attribute}`
   */
  name?: string;
  /**
   * Output only. When mandatory is true, the attribute is mandatory for the resource specified in
   * the scope. Only System defined attributes can be mandatory.
   */
  mandatory?: boolean;
  /** Optional. The description of the attribute. */
  description?: string;
  /** Output only. The definition type of the attribute. */
  definitionType?: DefinitionType;
  /**
   * Optional. The maximum number of values that the attribute can have when associated with an API
   * Hub resource. Cardinality 1 would represent a single-valued attribute. It must not be less than
   * 1 or greater than 20. If not specified, the cardinality would be set to 1 by default and
   * represent a single-valued attribute.
   */
  cardinality?: number;
  /**
   * Optional. The list of allowed values when the attribute value is of type enum. This is required
   * when the data_type of the attribute is ENUM. The maximum number of allowed values of an
   * attribute will be 1000.
   */
  allowedValues?: GoogleCloudApihubV1AllowedValue[];
  /** Required. The display name of the attribute. */
  displayName?: string;
  /**
   * Required. The scope of the attribute. It represents the resource in the API Hub to which the
   * attribute can be linked.
   */
  scope?: Scope;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1AttributeSchema: Schema<GoogleCloudApihubV1Attribute> =
  s.object<GoogleCloudApihubV1Attribute>(
    {
      dataType: s.optional(s.lazy(() => dataType3Schema)),
      updateTime: s.optional(s.string()),
      createTime: s.optional(s.string()),
      name: s.optional(s.string()),
      mandatory: s.optional(s.boolean()),
      description: s.optional(s.string()),
      definitionType: s.optional(s.lazy(() => definitionTypeSchema)),
      cardinality: s.optional(s.int()),
      allowedValues: s.optional(s.array(s.lazy(() => googleCloudApihubV1AllowedValueSchema))),
      displayName: s.optional(s.string()),
      scope: s.optional(s.lazy(() => scopeSchema)),
    },
    { additionalProperties: s.json() },
  );
