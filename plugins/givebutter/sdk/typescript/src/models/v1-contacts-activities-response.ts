import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  contactActivityResourceInternalSchema,
  contactActivityResourceSchema,
  type ContactActivityResource,
} from "./contact-activity-resource.js";
import { linksSchema, type Links } from "./links.js";
import { metaInternalSchema, metaSchema, type Meta } from "./meta.js";

export type V1ContactsActivitiesResponse = {
  data: ContactActivityResource[];
  links: Links;
  meta: Meta;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const v1ContactsActivitiesResponseProperties: s.Shape<V1ContactsActivitiesResponse> = {
  data: s.array(s.lazy(() => contactActivityResourceInternalSchema)),
  links: linksSchema,
  meta: metaInternalSchema,
};

export const v1ContactsActivitiesResponseInternalSchema: Schema<V1ContactsActivitiesResponse> =
  s.object<V1ContactsActivitiesResponse>(v1ContactsActivitiesResponseProperties, {
    additionalProperties: s.json(),
  });

export const v1ContactsActivitiesResponseSchema: Schema<V1ContactsActivitiesResponse> = s.lazySchema(() =>
  s.object<V1ContactsActivitiesResponse>(
    {
      ...v1ContactsActivitiesResponseProperties,
      data: s.array(s.lazy(() => contactActivityResourceSchema)),
      meta: metaSchema,
    },
    { additionalProperties: s.json() },
  ),
);
