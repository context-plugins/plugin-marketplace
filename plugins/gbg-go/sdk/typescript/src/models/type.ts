import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type = {
  ActiveAuthentication: "ActiveAuthentication",
  BasicAccessControl: "BasicAccessControl",
  ChipAuthentication: "ChipAuthentication",
  PassiveAuthentication: "PassiveAuthentication",
  SupplementalAccessControl: "SupplementalAccessControl",
  ExtendedAccessControl: "ExtendedAccessControl",
  TerminalAuthentication: "TerminalAuthentication",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
