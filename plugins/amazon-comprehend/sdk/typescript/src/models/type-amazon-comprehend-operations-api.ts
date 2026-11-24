import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Only supported relationship is a child relationship. */
export const TypeAmazonComprehendOperationsApi = {
  Child: "CHILD",
} as const;
export type TypeAmazonComprehendOperationsApi =
  | (typeof TypeAmazonComprehendOperationsApi)[keyof typeof TypeAmazonComprehendOperationsApi]
  | (string & {});

export const typeAmazonComprehendOperationsApiSchema: EnumSchema<TypeAmazonComprehendOperationsApi> =
  s.enumOf<TypeAmazonComprehendOperationsApi>(TypeAmazonComprehendOperationsApi);
