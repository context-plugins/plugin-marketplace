import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source7 = {
  /** The position index of the source in the response */
  position?: number;
  /** The URL of the source */
  url?: string;
  /** The display label for the source */
  label?: string;
  /** A description of the source content */
  description?: string;
  /**
   * Google's `/goto` redirect for this link, in the absolute form `POST /v1/monitor/google/goto`
   * accepts. Present only when Google served the link as a redirect — the sibling link field holds
   * the destination cloro resolved it to.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source7Schema: Schema<Source7> = s.object<Source7>(
  {
    position: s.optional(s.float64()),
    url: s.optional(s.string()),
    label: s.optional(s.string()),
    description: s.optional(s.string()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
