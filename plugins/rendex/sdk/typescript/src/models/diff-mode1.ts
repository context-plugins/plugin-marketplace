import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * How changes are detected. Default `both` = a pixel diff (with a highlighted overlay) AND a
 * full-page text diff, alerting on either — catches any change, visual or text. `visual` or `text`
 * narrow to a single signal. (`text`/`both` extract the full visible page text, not just the
 * article body.)
 */
export const DiffMode1 = {
  Visual: "visual",
  Text: "text",
  Both: "both",
} as const;
export type DiffMode1 = (typeof DiffMode1)[keyof typeof DiffMode1] | (string & {});

export const diffMode1Schema: EnumSchema<DiffMode1> = s.enumOf<DiffMode1>(DiffMode1);
