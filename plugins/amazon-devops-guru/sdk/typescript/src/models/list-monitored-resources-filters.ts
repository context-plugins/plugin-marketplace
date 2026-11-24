import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourcePermissionSchema, type ResourcePermission } from "./resource-permission.js";
import { resourceTypeFilterSchema, type ResourceTypeFilter } from "./resource-type-filter.js";

export type ListMonitoredResourcesFilters = {
  /** The permission status of a resource. */
  resourcePermission: ResourcePermission;
  /** The type of resource that you wish to retrieve, such as log groups. */
  resourceTypeFilters: ResourceTypeFilter[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMonitoredResourcesFiltersSchema: Schema<ListMonitoredResourcesFilters> =
  s.object<ListMonitoredResourcesFilters>(
    {
      resourcePermission: resourcePermissionSchema,
      resourceTypeFilters: s.array(s.lazy(() => resourceTypeFilterSchema)),
      _keysMap: {
        resourcePermission: "ResourcePermission",
        resourceTypeFilters: "ResourceTypeFilters",
      },
    },
    { additionalProperties: s.json() },
  );
