import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source9 = {
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
   * accepts. Present only when Google served the link as a redirect. The sibling link field holds
   * the destination cloro resolved it to, or is empty, missing or a `google.com/goto` URL when the
   * link is not resolved yet. In that case, resolve this value with `POST /v1/monitor/google/goto`.
   */
  redirectLink?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source9Schema: Schema<Source9> = s.object<Source9>(
  {
    label: s.optional(s.string()),
    url: s.optional(s.string()),
    description: s.optional(s.string()),
    position: s.optional(s.float64()),
    redirectLink: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
