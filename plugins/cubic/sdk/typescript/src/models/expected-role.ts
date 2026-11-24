import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Current role from your latest read; send only with role. */
export const ExpectedRole = {
  Member: "member",
  Admin: "admin",
  Viewer: "viewer",
} as const;
export type ExpectedRole = (typeof ExpectedRole)[keyof typeof ExpectedRole] | (string & {});

export const expectedRoleSchema: EnumSchema<ExpectedRole> = s.enumOf<ExpectedRole>(ExpectedRole);
