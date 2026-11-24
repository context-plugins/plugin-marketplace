import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ObjectRelmCrmContactsApi = {
  Contact: "contact",
} as const;
export type ObjectRelmCrmContactsApi =
  | (typeof ObjectRelmCrmContactsApi)[keyof typeof ObjectRelmCrmContactsApi]
  | (string & {});

export const objectRelmCrmContactsApiSchema: EnumSchema<ObjectRelmCrmContactsApi> =
  s.enumOf<ObjectRelmCrmContactsApi>(ObjectRelmCrmContactsApi);
