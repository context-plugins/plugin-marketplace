import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Link = {
  url: string;
  title: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const linkSchema: Schema<Link> = s.object<Link>(
  {
    url: s.string(),
    title: s.string(),
  },
  { additionalProperties: s.json() },
);
