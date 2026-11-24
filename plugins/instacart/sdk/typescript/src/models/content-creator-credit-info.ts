import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Information for crediting the content creator on the recipe page. */
export type ContentCreatorCreditInfo = {
  /** The name of the content creator. */
  name?: string;
  /** URL to the content creator's website or profile. */
  url?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contentCreatorCreditInfoProperties: s.Shape<ContentCreatorCreditInfo> = {
  name: s.optional(s.string()),
  url: s.optional(s.string()),
};

export const contentCreatorCreditInfoInternalSchema: Schema<ContentCreatorCreditInfo> =
  s.object<ContentCreatorCreditInfo>(contentCreatorCreditInfoProperties, { additionalProperties: s.json() });

export const contentCreatorCreditInfoSchema: Schema<ContentCreatorCreditInfo> = s.lazySchema(() =>
  s.object<ContentCreatorCreditInfo>(
    {
      ...contentCreatorCreditInfoProperties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
