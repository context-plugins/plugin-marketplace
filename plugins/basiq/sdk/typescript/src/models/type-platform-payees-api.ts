import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of identifier. */
export const TypePlatformPayeesApi = {
  Email: "EMAIL",
  Phone: "PHONE",
  ContactName: "CONTACT_NAME",
} as const;
export type TypePlatformPayeesApi =
  | (typeof TypePlatformPayeesApi)[keyof typeof TypePlatformPayeesApi]
  | (string & {});

export const typePlatformPayeesApiSchema: EnumSchema<TypePlatformPayeesApi> =
  s.enumOf<TypePlatformPayeesApi>(TypePlatformPayeesApi);
