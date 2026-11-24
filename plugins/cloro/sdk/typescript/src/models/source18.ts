import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Source18 = {
  /** 1-based position of the source in this array */
  position: number;
  /** Title of the source page. Can be an empty string. */
  label: string;
  /** URL of the source page */
  url: string;
  /** Snippet that Bing shows for the source. Omitted when Bing shows none. */
  description?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const source18Schema: Schema<Source18> = s.object<Source18>(
  {
    position: s.int(),
    label: s.string(),
    url: s.string(),
    description: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
