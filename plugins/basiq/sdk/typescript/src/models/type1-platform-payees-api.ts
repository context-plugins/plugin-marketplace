import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** The type of PayID identifier. */
export const Type1PlatformPayeesApi = {
  Email: "EMAIL",
  Phone: "PHONE",
  Abn: "ABN",
  OrgId: "ORG_ID",
} as const;
export type Type1PlatformPayeesApi =
  | (typeof Type1PlatformPayeesApi)[keyof typeof Type1PlatformPayeesApi]
  | (string & {});

export const type1PlatformPayeesApiSchema: EnumSchema<Type1PlatformPayeesApi> =
  s.enumOf<Type1PlatformPayeesApi>(Type1PlatformPayeesApi);
