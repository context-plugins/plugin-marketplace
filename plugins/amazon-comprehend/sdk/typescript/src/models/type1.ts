import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the entity. Amazon Comprehend supports a variety of entity types. */
export const Type1 = {
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
export type Type1 = (typeof Type1)[keyof typeof Type1] | (string & {});

export const type1Schema: EnumSchema<Type1> = s.enumOf<Type1>(Type1);
