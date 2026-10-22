import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Type of breakdown to return. */
export const BreakdownType = {
  Users: "USERS",
  HostApplications: "HOST_APPLICATIONS",
  Tools: "TOOLS",
  Servers: "SERVERS",
  AuthMethods: "AUTH_METHODS",
} as const;
export type BreakdownType = (typeof BreakdownType)[keyof typeof BreakdownType] | (string & {});

export const breakdownTypeSchema: EnumSchema<BreakdownType> = s.enumOf<BreakdownType>(BreakdownType);
