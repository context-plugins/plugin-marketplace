import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentOperationSchema, type EnvironmentOperation } from "./environment-operation.js";

export type EnvironmentsOperationsResponse = {
  value?: EnvironmentOperation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentsOperationsResponseSchema: Schema<EnvironmentsOperationsResponse> =
  s.object<EnvironmentsOperationsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => environmentOperationSchema))),
    },
    { additionalProperties: s.json() },
  );
