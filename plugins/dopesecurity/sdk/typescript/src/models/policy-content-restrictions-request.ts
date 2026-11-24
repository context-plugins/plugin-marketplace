import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  dataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesSchema,
  type DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories,
} from "./data-flightdeck-dope-security-public-api-specification-with-categories.js";

/** Request body for updating restrictions on dope and custom categories */
export type PolicyContentRestrictionsRequest = {
  data: DataFlightdeckDopeSecurityPublicApiSpecificationWithCategories;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policyContentRestrictionsRequestSchema: Schema<PolicyContentRestrictionsRequest> =
  s.object<PolicyContentRestrictionsRequest>(
    {
      data: dataFlightdeckDopeSecurityPublicApiSpecificationWithCategoriesSchema,
    },
    { additionalProperties: s.json() },
  );
