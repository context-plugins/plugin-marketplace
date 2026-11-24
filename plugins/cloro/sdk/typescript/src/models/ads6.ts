import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ads7InternalSchema, ads7Schema, type Ads7 } from "./ads7.js";

/** Sponsored ad section extracted from the response */
export type Ads6 = {
  /** Section title for the ads */
  title?: string;
  /** Array of sponsored ads */
  ads?: Ads7[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ads6Properties: s.Shape<Ads6> = {
  title: s.optional(s.string()),
  ads: s.optional(s.array(s.lazy(() => ads7InternalSchema))),
};

export const ads6InternalSchema: Schema<Ads6> = s.object<Ads6>(ads6Properties, {
  additionalProperties: s.json(),
});

export const ads6Schema: Schema<Ads6> = s.lazySchema(() =>
  s.object<Ads6>(
    {
      ...ads6Properties,
      ads: s.optional(s.array(s.lazy(() => ads7Schema))),
    },
    { additionalProperties: s.json() },
  ),
);
