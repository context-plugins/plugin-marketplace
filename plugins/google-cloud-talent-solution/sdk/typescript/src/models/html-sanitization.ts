import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Option for job HTML content sanitization. Applied fields are: * description *
 * applicationInfo.instruction * incentives * qualifications * responsibilities HTML tags in these
 * fields may be stripped if sanitiazation isn't disabled. Defaults to
 * HtmlSanitization.SIMPLE_FORMATTING_ONLY.
 */
export const HtmlSanitization = {
  HtmlSanitizationUnspecified: "HTML_SANITIZATION_UNSPECIFIED",
  HtmlSanitizationDisabled: "HTML_SANITIZATION_DISABLED",
  SimpleFormattingOnly: "SIMPLE_FORMATTING_ONLY",
} as const;
export type HtmlSanitization = (typeof HtmlSanitization)[keyof typeof HtmlSanitization] | (string & {});

export const htmlSanitizationSchema: EnumSchema<HtmlSanitization> =
  s.enumOf<HtmlSanitization>(HtmlSanitization);
