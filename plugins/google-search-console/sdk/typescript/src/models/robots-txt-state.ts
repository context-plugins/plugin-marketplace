import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Whether or not the page is blocked to Google by a robots.txt rule. */
export const RobotsTxtState = {
  RobotsTxtStateUnspecified: "ROBOTS_TXT_STATE_UNSPECIFIED",
  Allowed: "ALLOWED",
  Disallowed: "DISALLOWED",
} as const;
export type RobotsTxtState = (typeof RobotsTxtState)[keyof typeof RobotsTxtState] | (string & {});

export const robotsTxtStateSchema: EnumSchema<RobotsTxtState> = s.enumOf<RobotsTxtState>(RobotsTxtState);
