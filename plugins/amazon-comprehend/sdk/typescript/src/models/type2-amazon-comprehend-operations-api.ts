import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The entity type. For entity detection using the built-in model, this field contains one of the
 * standard entity types listed below. For custom entity detection, this field contains one of the
 * entity types that you specified when you trained your custom model.
 */
export const Type2AmazonComprehendOperationsApi = {
  Person: "PERSON",
  Location: "LOCATION",
  Organization: "ORGANIZATION",
  CommercialItem: "COMMERCIAL_ITEM",
  Event: "EVENT",
  Date: "DATE",
  Quantity: "QUANTITY",
  Title: "TITLE",
  Other: "OTHER",
} as const;
export type Type2AmazonComprehendOperationsApi =
  | (typeof Type2AmazonComprehendOperationsApi)[keyof typeof Type2AmazonComprehendOperationsApi]
  | (string & {});

export const type2AmazonComprehendOperationsApiSchema: EnumSchema<Type2AmazonComprehendOperationsApi> =
  s.enumOf<Type2AmazonComprehendOperationsApi>(Type2AmazonComprehendOperationsApi);
