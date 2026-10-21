import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { forbiddenErrorSchema, type ForbiddenError } from "../forbidden-error.js";
import {
  invalidResourceStateSchemaSchema,
  type InvalidResourceStateSchema,
} from "../invalid-resource-state-schema.js";

export type CustomersKbaResponse = InvalidResourceStateSchema | ForbiddenError;

export const customersKbaResponseSchema: Schema<CustomersKbaResponse> = s.of<CustomersKbaResponse>(
  s.union([s.lazy(() => invalidResourceStateSchemaSchema), s.lazy(() => forbiddenErrorSchema)]),
);
