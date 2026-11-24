import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Mobile-usability issue type. */
export const IssueType = {
  MobileUsabilityIssueTypeUnspecified: "MOBILE_USABILITY_ISSUE_TYPE_UNSPECIFIED",
  UsesIncompatiblePlugins: "USES_INCOMPATIBLE_PLUGINS",
  ConfigureViewport: "CONFIGURE_VIEWPORT",
  FixedWidthViewport: "FIXED_WIDTH_VIEWPORT",
  SizeContentToViewport: "SIZE_CONTENT_TO_VIEWPORT",
  UseLegibleFontSizes: "USE_LEGIBLE_FONT_SIZES",
  TapTargetsTooClose: "TAP_TARGETS_TOO_CLOSE",
} as const;
export type IssueType = (typeof IssueType)[keyof typeof IssueType] | (string & {});

export const issueTypeSchema: EnumSchema<IssueType> = s.enumOf<IssueType>(IssueType);
