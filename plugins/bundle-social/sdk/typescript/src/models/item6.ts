import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { location1Schema, type Location1 } from "./location1.js";

export type Item6 = {
  /** Facebook Page ID to use in a Page mention token */
  pageId: string;
  /** Facebook Page name */
  name: string;
  /** Public Facebook Page link */
  link?: string | null;
  /** Physical location metadata when the Page represents a place */
  location?: Location1 | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const item6Schema: Schema<Item6> = s.object<Item6>(
  {
    pageId: s.string(),
    name: s.string(),
    link: s.optionalNullable(s.string()),
    location: s.optionalNullable(s.lazy(() => location1Schema)),
  },
  { additionalProperties: s.json() },
);
