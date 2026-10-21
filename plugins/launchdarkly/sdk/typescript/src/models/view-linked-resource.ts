import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { parentAndSelfLinksSchema, type ParentAndSelfLinks } from "./parent-and-self-links.js";
import { resourceTypeSchema, type ResourceType } from "./resource-type.js";
import {
  viewLinkedResourceDetailsSchema,
  type ViewLinkedResourceDetails,
} from "./view-linked-resource-details.js";

export type ViewLinkedResource = {
  /** The location and content type of related resources */
  links: ParentAndSelfLinks;
  /** Key of the resource (flag, segment, AI config or metric) */
  resourceKey: string;
  /** Environment ID of the resource (only present for segments) */
  environmentId?: string;
  /** Environment Key of the resource (only present for segments) */
  environmentKey?: string;
  resourceType: ResourceType;
  linkedAt: number;
  resourceDetails?: ViewLinkedResourceDetails;
};

export const viewLinkedResourceSchema: Schema<ViewLinkedResource> = s.object<ViewLinkedResource>({
  links: parentAndSelfLinksSchema,
  resourceKey: s.string(),
  environmentId: s.optional(s.string()),
  environmentKey: s.optional(s.string()),
  resourceType: resourceTypeSchema,
  linkedAt: s.int(),
  resourceDetails: s.optional(s.lazy(() => viewLinkedResourceDetailsSchema)),
  _keysMap: {
    links: "_links",
  },
});
