import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import {
  invalidResourceStateSchemaSchema,
  type InvalidResourceStateSchema,
} from "../invalid-resource-state-schema.js";
import { notAuthorizedSchemaSchema, type NotAuthorizedSchema } from "../not-authorized-schema.js";

export type CustomersDocumentsResponse1 = InvalidResourceStateSchema | NotAuthorizedSchema;

export const customersDocumentsResponse1Schema: Schema<CustomersDocumentsResponse1> =
  s.of<CustomersDocumentsResponse1>(
    s.union([s.lazy(() => invalidResourceStateSchemaSchema), s.lazy(() => notAuthorizedSchemaSchema)]),
  );
