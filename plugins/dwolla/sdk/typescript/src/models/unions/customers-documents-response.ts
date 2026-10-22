import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { duplicateResourceSchemaSchema, type DuplicateResourceSchema } from "../duplicate-resource-schema.js";
import { invalidFileTypeSchemaSchema, type InvalidFileTypeSchema } from "../invalid-file-type-schema.js";
import {
  maximumNumberOfResourcesSchemaSchema,
  type MaximumNumberOfResourcesSchema,
} from "../maximum-number-of-resources-schema.js";

export type CustomersDocumentsResponse =
  | MaximumNumberOfResourcesSchema
  | InvalidFileTypeSchema
  | DuplicateResourceSchema;

export const customersDocumentsResponseSchema: Schema<CustomersDocumentsResponse> =
  s.of<CustomersDocumentsResponse>(
    s.union([
      s.lazy(() => maximumNumberOfResourcesSchemaSchema),
      s.lazy(() => invalidFileTypeSchemaSchema),
      s.lazy(() => duplicateResourceSchemaSchema),
    ]),
  );
