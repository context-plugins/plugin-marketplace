import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categoryBlockSchema, type CategoryBlock } from "./category-block.js";
import { customCategoryBlockSchema, type CustomCategoryBlock } from "./custom-category-block.js";

export type Data1FlightdeckDopeSecurityPublicApiSpecification = {
  /** Wrapper for category data with inheritance flag */
  categories: CategoryBlock;
  /** Wrapper for custom category data with inheritance flag */
  customCategories: CustomCategoryBlock;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data1FlightdeckDopeSecurityPublicApiSpecificationSchema: Schema<Data1FlightdeckDopeSecurityPublicApiSpecification> =
  s.object<Data1FlightdeckDopeSecurityPublicApiSpecification>(
    {
      categories: categoryBlockSchema,
      customCategories: customCategoryBlockSchema,
    },
    { additionalProperties: s.json() },
  );
