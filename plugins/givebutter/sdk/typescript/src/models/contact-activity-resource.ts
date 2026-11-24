import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicUserResourceSchema, type PublicUserResource } from "./public-user-resource.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";
import { resource1InternalSchema, resource1Schema, type Resource1 } from "./unions/resource1.js";

export type ContactActivityResource = {
  id: string;
  type: string;
  source: string;
  data: string;
  resource: Resource1;
  resourceType: ResourceType | null;
  createdBy?: PublicUserResource;
  occurredAt: string;
  createdAt: string;
  updatedAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const contactActivityResourceProperties: s.Shape<ContactActivityResource> = {
  id: s.string(),
  type: s.string(),
  source: s.string(),
  data: s.string(),
  resource: resource1InternalSchema,
  resourceType: s.nullable(s.lazy(() => resourceTypeSchema)),
  createdBy: s.optional(s.lazy(() => publicUserResourceSchema)),
  occurredAt: s.string(),
  createdAt: s.string(),
  updatedAt: s.string(),
  _keysMap: {
    resourceType: "resource_type",
    createdBy: "created_by",
    occurredAt: "occurred_at",
    createdAt: "created_at",
    updatedAt: "updated_at",
  },
};

export const contactActivityResourceInternalSchema: Schema<ContactActivityResource> =
  s.object<ContactActivityResource>(contactActivityResourceProperties, { additionalProperties: s.json() });

export const contactActivityResourceSchema: Schema<ContactActivityResource> = s.lazySchema(() =>
  s.object<ContactActivityResource>(
    {
      ...contactActivityResourceProperties,
      resource: resource1Schema,
    },
    { additionalProperties: s.json() },
  ),
);
