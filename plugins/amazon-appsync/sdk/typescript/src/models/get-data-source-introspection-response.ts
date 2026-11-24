import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataSourceIntrospectionResultSchema,
  type DataSourceIntrospectionResult,
} from "./data-source-introspection-result.js";
import { introspectionStatusSchema, type IntrospectionStatus } from "./introspection-status.js";

export type GetDataSourceIntrospectionResponse = {
  /**
   * The introspection ID. Each introspection contains a unique ID that can be used to reference the
   * instrospection record.
   */
  introspectionId?: string;
  /**
   * The status of the introspection during retrieval. By default, when a new instrospection is
   * being retrieved, the status will be set to PROCESSING. Once the operation has been completed,
   * the status will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED
   * operation will return an error and its details as an introspectionStatusDetail.
   */
  introspectionStatus?: IntrospectionStatus;
  /**
   * The error detail field. When a FAILED introspectionStatus is returned, the
   * introspectionStatusDetail will also return the exact error that was generated during the
   * operation.
   */
  introspectionStatusDetail?: string;
  introspectionResult?: DataSourceIntrospectionResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getDataSourceIntrospectionResponseSchema: Schema<GetDataSourceIntrospectionResponse> =
  s.object<GetDataSourceIntrospectionResponse>(
    {
      introspectionId: s.optional(s.string()),
      introspectionStatus: s.optional(s.lazy(() => introspectionStatusSchema)),
      introspectionStatusDetail: s.optional(s.string()),
      introspectionResult: s.optional(s.lazy(() => dataSourceIntrospectionResultSchema)),
    },
    { additionalProperties: s.json() },
  );
