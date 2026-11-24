import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Output only. The type of the plugin, indicating whether it is 'SYSTEM_OWNED' or 'USER_OWNED'. */
export const OwnershipType = {
  OwnershipTypeUnspecified: "OWNERSHIP_TYPE_UNSPECIFIED",
  SystemOwned: "SYSTEM_OWNED",
  UserOwned: "USER_OWNED",
} as const;
export type OwnershipType = (typeof OwnershipType)[keyof typeof OwnershipType] | (string & {});

export const ownershipTypeSchema: EnumSchema<OwnershipType> = s.enumOf<OwnershipType>(OwnershipType);
