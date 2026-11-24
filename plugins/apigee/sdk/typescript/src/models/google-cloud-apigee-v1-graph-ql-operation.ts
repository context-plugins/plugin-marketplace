import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Represents the pairing of GraphQL operation types and the GraphQL operation name. */
export type GoogleCloudApigeeV1GraphQlOperation = {
  /**
   * Required. GraphQL operation types. Valid values include `query` or `mutation`. **Note**: Apigee
   * does not currently support `subscription` types.
   */
  operationTypes?: string[];
  /**
   * GraphQL operation name. The name and operation type will be used to apply quotas. If no name is
   * specified, the quota will be applied to all GraphQL operations irrespective of their operation
   * names in the payload.
   */
  operation?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1GraphQlOperationSchema: Schema<GoogleCloudApigeeV1GraphQlOperation> =
  s.object<GoogleCloudApigeeV1GraphQlOperation>(
    {
      operationTypes: s.optional(s.array(s.string())),
      operation: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
