import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Test verdict, whether the page is mobile friendly or not. */
export const MobileFriendliness = {
  MobileFriendlyTestResultUnspecified: "MOBILE_FRIENDLY_TEST_RESULT_UNSPECIFIED",
  MobileFriendly: "MOBILE_FRIENDLY",
  NotMobileFriendly: "NOT_MOBILE_FRIENDLY",
} as const;
export type MobileFriendliness = (typeof MobileFriendliness)[keyof typeof MobileFriendliness] | (string & {});

export const mobileFriendlinessSchema: EnumSchema<MobileFriendliness> =
  s.enumOf<MobileFriendliness>(MobileFriendliness);
