import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const NamedEntityKind = {
  Person: "person",
  PersonType: "person_type",
  Organization: "organization",
  Event: "event",
  Product: "product",
  Skill: "skill",
  Location: "location",
  City: "city",
  State: "state",
  CountryRegion: "country_region",
  Address: "address",
  Date: "date",
  DateRange: "date_range",
  DateTime: "date_time",
  Duration: "duration",
  Currency: "currency",
  Percentage: "percentage",
  Age: "age",
  Dimension: "dimension",
  Email: "email",
  Url: "url",
  Phone: "phone",
  Ip: "ip",
} as const;
export type NamedEntityKind = (typeof NamedEntityKind)[keyof typeof NamedEntityKind] | (string & {});

export const namedEntityKindSchema: EnumSchema<NamedEntityKind> = s.enumOf<NamedEntityKind>(NamedEntityKind);
