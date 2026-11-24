import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of the field. */
export const Type = {
  SingleLineText: "singleLineText",
  Email: "email",
  Url: "url",
  MultilineText: "multilineText",
  Number: "number",
  Percent: "percent",
  Currency: "currency",
  SingleSelect: "singleSelect",
  MultipleSelects: "multipleSelects",
  SingleCollaborator: "singleCollaborator",
  MultipleCollaborators: "multipleCollaborators",
  MultipleRecordLinks: "multipleRecordLinks",
  Date: "date",
  DateTime: "dateTime",
  PhoneNumber: "phoneNumber",
  MultipleAttachments: "multipleAttachments",
  Checkbox: "checkbox",
  Formula: "formula",
  CreatedTime: "createdTime",
  Rollup: "rollup",
  Count: "count",
  Lookup: "lookup",
  MultipleLookupValues: "multipleLookupValues",
  AutoNumber: "autoNumber",
  Barcode: "barcode",
  Rating: "rating",
  RichText: "richText",
  Duration: "duration",
  LastModifiedTime: "lastModifiedTime",
  Button: "button",
  CreatedBy: "createdBy",
  LastModifiedBy: "lastModifiedBy",
  ExternalSyncSource: "externalSyncSource",
  AiText: "aiText",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
