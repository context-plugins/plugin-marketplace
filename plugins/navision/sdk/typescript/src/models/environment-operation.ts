import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";
import { typeSchema, type Type } from "./type.js";

export type EnvironmentOperation = {
  /** Operation ID used for tracking */
  id?: string;
  /** Type of operation */
  type?: Type;
  /** Status of the operation */
  status?: Status;
  /** Microsoft Entra tenant ID */
  aadTenantId?: string;
  /** When the operation was created */
  createdOn?: Date;
  /** When the operation started executing */
  startedOn?: Date;
  /** When the operation completed */
  completedOn?: Date;
  /** Who created the operation */
  createdBy?: string;
  /** Error message for failed operations */
  errorMessage?: string;
  /** Operation-specific parameters */
  parameters?: Record<string, unknown>;
  /** Name of the affected environment */
  environmentName?: string;
  /** Type of the affected environment */
  environmentType?: string;
  /** Product family of the affected environment */
  productFamily?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const environmentOperationSchema: Schema<EnvironmentOperation> = s.object<EnvironmentOperation>(
  {
    id: s.optional(s.string()),
    type: s.optional(s.lazy(() => typeSchema)),
    status: s.optional(s.lazy(() => statusSchema)),
    aadTenantId: s.optional(s.string()),
    createdOn: s.optional(s.dateTime()),
    startedOn: s.optional(s.dateTime()),
    completedOn: s.optional(s.dateTime()),
    createdBy: s.optional(s.string()),
    errorMessage: s.optional(s.string()),
    parameters: s.optional(s.record(s.string(), s.unknown())),
    environmentName: s.optional(s.string()),
    environmentType: s.optional(s.string()),
    productFamily: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
