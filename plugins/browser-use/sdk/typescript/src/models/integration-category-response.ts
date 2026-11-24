import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Response for integration categories. */
export type IntegrationCategoryResponse = {
  categories: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const integrationCategoryResponseSchema: Schema<IntegrationCategoryResponse> =
  s.object<IntegrationCategoryResponse>(
    {
      categories: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
