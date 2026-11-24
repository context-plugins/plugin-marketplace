import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the entity. Amazon Comprehend supports a variety of entity types. */
export const Type4AmazonComprehendOperationsApi = {
  Person: "PERSON",
  Location: "LOCATION",
  Organization: "ORGANIZATION",
  Facility: "FACILITY",
  Brand: "BRAND",
  CommercialItem: "COMMERCIAL_ITEM",
  Movie: "MOVIE",
  Music: "MUSIC",
  Book: "BOOK",
  Software: "SOFTWARE",
  Game: "GAME",
  PersonalTitle: "PERSONAL_TITLE",
  Event: "EVENT",
  Date: "DATE",
  Quantity: "QUANTITY",
  Attribute: "ATTRIBUTE",
  Other: "OTHER",
} as const;
export type Type4AmazonComprehendOperationsApi =
  | (typeof Type4AmazonComprehendOperationsApi)[keyof typeof Type4AmazonComprehendOperationsApi]
  | (string & {});

export const type4AmazonComprehendOperationsApiSchema: EnumSchema<Type4AmazonComprehendOperationsApi> =
  s.enumOf<Type4AmazonComprehendOperationsApi>(Type4AmazonComprehendOperationsApi);
