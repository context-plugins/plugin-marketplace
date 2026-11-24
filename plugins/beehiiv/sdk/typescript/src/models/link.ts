import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Link = {
  /** The URL of the link. */
  href: string;
  /** The target of the link (e.g., _blank). */
  target?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkSchema: Schema<Link> = s.object<Link>(
  {
    href: s.string(),
    target: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
