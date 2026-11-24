import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source3 = {
  /** Title of the source */
  label?: string;
  /** URL of the source */
  url?: string;
  /** Description of the source */
  description?: string;
  /** Position of source (1-indexed) */
  position?: number;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source3Schema: Schema<Source3> = s.object<Source3>(
  {
    label: s.optional(s.string()),
    url: s.optional(s.string()),
    description: s.optional(s.string()),
    position: s.optional(s.float64()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
