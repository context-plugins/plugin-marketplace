import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Users = {
  Owners: "owners",
  Editors: "editors",
  Viewers: "viewers",
  Members: "members",
} as const;
export type Users = (typeof Users)[keyof typeof Users] | (string & {});

export const usersSchema: EnumSchema<Users> = s.enumOf<Users>(Users);
