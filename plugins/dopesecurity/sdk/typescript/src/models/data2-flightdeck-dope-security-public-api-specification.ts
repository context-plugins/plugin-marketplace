import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryExceptionUpdateSchema, type CategoryExceptionUpdate } from "./category-exception-update.js";

export type Data2FlightdeckDopeSecurityPublicApiSpecification = {
  /** Exception updates keyed first by category name, then by user or group identifier. */
  categories?: Record<string, CategoryExceptionUpdate>;
  /** Exception updates keyed first by custom category name, then by user or group identifier. */
  customCategories?: Record<string, CategoryExceptionUpdate>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data2FlightdeckDopeSecurityPublicApiSpecificationSchema: Schema<Data2FlightdeckDopeSecurityPublicApiSpecification> =
  s.object<Data2FlightdeckDopeSecurityPublicApiSpecification>(
    {
      categories: s.optional(
        s.record(
          s.string(),
          s.lazy(() => categoryExceptionUpdateSchema),
        ),
      ),
      customCategories: s.optional(
        s.record(
          s.string(),
          s.lazy(() => categoryExceptionUpdateSchema),
        ),
      ),
    },
    { additionalProperties: s.json() },
  );
