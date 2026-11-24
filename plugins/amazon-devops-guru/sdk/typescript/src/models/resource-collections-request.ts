import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import {
  updateResourceCollectionFilterSchema,
  type UpdateResourceCollectionFilter,
} from "./update-resource-collection-filter.js";

export type ResourceCollectionsRequest = {
  /**
   * Specifies if the resource collection in the request is added or deleted to the resource
   * collection.
   */
  action: Action;
  resourceCollection: UpdateResourceCollectionFilter;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceCollectionsRequestSchema: Schema<ResourceCollectionsRequest> =
  s.object<ResourceCollectionsRequest>(
    {
      action: actionSchema,
      resourceCollection: updateResourceCollectionFilterSchema,
      _keysMap: {
        action: "Action",
        resourceCollection: "ResourceCollection",
      },
    },
    { additionalProperties: s.json() },
  );
