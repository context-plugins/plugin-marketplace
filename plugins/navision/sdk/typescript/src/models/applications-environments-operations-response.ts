import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { environmentOperationSchema, type EnvironmentOperation } from "./environment-operation.js";

export type ApplicationsEnvironmentsOperationsResponse = {
  value?: EnvironmentOperation[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const applicationsEnvironmentsOperationsResponseSchema: Schema<ApplicationsEnvironmentsOperationsResponse> =
  s.object<ApplicationsEnvironmentsOperationsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => environmentOperationSchema))),
    },
    { additionalProperties: s.json() },
  );
