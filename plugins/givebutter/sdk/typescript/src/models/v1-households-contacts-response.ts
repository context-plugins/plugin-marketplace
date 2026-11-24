import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactResourceSchema, type ContactResource } from "./contact-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1HouseholdsContactsResponse = {
  data: ContactResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1HouseholdsContactsResponseProperties: s.Shape<V1HouseholdsContactsResponse> = {
  data: s.array(s.lazy(() => contactResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1HouseholdsContactsResponseInternalSchema: Schema<V1HouseholdsContactsResponse> =
  s.object<V1HouseholdsContactsResponse>(v1HouseholdsContactsResponseProperties, {
    additionalProperties: s.json(),
  });

export const v1HouseholdsContactsResponseSchema: Schema<V1HouseholdsContactsResponse> = s.lazySchema(() =>
  s.object<V1HouseholdsContactsResponse>(
    {
      ...v1HouseholdsContactsResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
