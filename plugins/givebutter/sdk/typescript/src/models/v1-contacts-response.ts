import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactResourceSchema, type ContactResource } from "./contact-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1ContactsResponse = {
  data: ContactResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ContactsResponseProperties: s.Shape<V1ContactsResponse> = {
  data: s.array(s.lazy(() => contactResourceSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1ContactsResponseInternalSchema: Schema<V1ContactsResponse> = s.object<V1ContactsResponse>(
  v1ContactsResponseProperties,
  { additionalProperties: s.json() },
);

export const v1ContactsResponseSchema: Schema<V1ContactsResponse> = s.lazySchema(() =>
  s.object<V1ContactsResponse>(
    {
      ...v1ContactsResponseProperties,
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
