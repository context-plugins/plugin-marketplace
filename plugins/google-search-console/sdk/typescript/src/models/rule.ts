import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Rule violated. */
export const Rule = {
  MobileFriendlyRuleUnspecified: "MOBILE_FRIENDLY_RULE_UNSPECIFIED",
  UsesIncompatiblePlugins: "USES_INCOMPATIBLE_PLUGINS",
  ConfigureViewport: "CONFIGURE_VIEWPORT",
  FixedWidthViewport: "FIXED_WIDTH_VIEWPORT",
  SizeContentToViewport: "SIZE_CONTENT_TO_VIEWPORT",
  UseLegibleFontSizes: "USE_LEGIBLE_FONT_SIZES",
  TapTargetsTooClose: "TAP_TARGETS_TOO_CLOSE",
} as const;
export type Rule = (typeof Rule)[keyof typeof Rule] | (string & {});

export const ruleSchema: EnumSchema<Rule> = s.enumOf<Rule>(Rule);
