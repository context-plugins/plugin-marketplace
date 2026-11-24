import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Hyperlink object included in the Links schema */
export type HyperLink = {
  /** Link to the endpoint */
  href?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const hyperLinkSchema: Schema<HyperLink> = s.object<HyperLink>(
  {
    href: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
