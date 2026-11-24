import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The link of the text. */
export type Link2 = {
  /** The URL of the link. */
  href: string;
  /** The target of the link (e.g., _blank). */
  target?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const link2Schema: Schema<Link2> = s.object<Link2>(
  {
    href: s.string(),
    target: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
