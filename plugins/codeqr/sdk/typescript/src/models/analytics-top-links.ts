import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AnalyticsTopLinks = {
  /**
   * The unique ID of the short link
   *
   * @deprecated
   */
  link: string;
  /** The unique ID of the short link */
  id: string;
  /** The domain of the short link */
  domain: string;
  /** The key of the short link */
  key: string;
  /** The short link URL */
  shortLink: string;
  /** The destination URL of the short link */
  url: string;
  /** The creation timestamp of the short link */
  createdAt: string;
  /** The number of clicks from this link @default 0 */
  clicks?: number;
  /** The number of leads from this link @default 0 */
  leads?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const analyticsTopLinksSchema: Schema<AnalyticsTopLinks> = s.object<AnalyticsTopLinks>(
  {
    link: s.string(),
    id: s.string(),
    domain: s.string(),
    key: s.string(),
    shortLink: s.string(),
    url: s.string(),
    createdAt: s.string(),
    clicks: s.defaulted(s.float64(), 0),
    leads: s.defaulted(s.float64(), 0),
  },
  { additionalProperties: s.json() },
);
