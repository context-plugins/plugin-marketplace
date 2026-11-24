import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypeCallnodeIoPhoneNumbersApi = {
  Basic: "basic",
  Bearer: "bearer",
  Header: "header",
} as const;
export type TypeCallnodeIoPhoneNumbersApi =
  | (typeof TypeCallnodeIoPhoneNumbersApi)[keyof typeof TypeCallnodeIoPhoneNumbersApi]
  | (string & {});

export const typeCallnodeIoPhoneNumbersApiSchema: EnumSchema<TypeCallnodeIoPhoneNumbersApi> =
  s.enumOf<TypeCallnodeIoPhoneNumbersApi>(TypeCallnodeIoPhoneNumbersApi);
