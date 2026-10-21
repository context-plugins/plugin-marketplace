import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsSecuritylake = {
  SecurityLake: "security_lake",
} as const;
export type TypeOptionsSecuritylake =
  | (typeof TypeOptionsSecuritylake)[keyof typeof TypeOptionsSecuritylake]
  | (string & {});

export const typeOptionsSecuritylakeSchema: EnumSchema<TypeOptionsSecuritylake> =
  s.enumOf<TypeOptionsSecuritylake>(TypeOptionsSecuritylake);
