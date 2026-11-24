import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { introspectionStatus1Schema, type IntrospectionStatus1 } from "./introspection-status1.js";

export type StartDataSourceIntrospectionResponse = {
  /**
   * The introspection ID. Each introspection contains a unique ID that can be used to reference the
   * instrospection record.
   */
  introspectionId?: string;
  /**
   * The status of the introspection during creation. By default, when a new instrospection has been
   * created, the status will be set to PROCESSING. Once the operation has been completed, the
   * status will change to SUCCESS or FAILED depending on how the data was parsed. A FAILED
   * operation will return an error and its details as an introspectionStatusDetail.
   */
  introspectionStatus?: IntrospectionStatus1;
  /**
   * The error detail field. When a FAILED introspectionStatus is returned, the
   * introspectionStatusDetail will also return the exact error that was generated during the
   * operation.
   */
  introspectionStatusDetail?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const startDataSourceIntrospectionResponseSchema: Schema<StartDataSourceIntrospectionResponse> =
  s.object<StartDataSourceIntrospectionResponse>(
    {
      introspectionId: s.optional(s.string()),
      introspectionStatus: s.optional(s.lazy(() => introspectionStatus1Schema)),
      introspectionStatusDetail: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
