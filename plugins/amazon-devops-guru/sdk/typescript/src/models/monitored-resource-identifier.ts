import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceCollectionSchema, type ResourceCollection } from "./resource-collection.js";
import { resourcePermissionSchema, type ResourcePermission } from "./resource-permission.js";

export type MonitoredResourceIdentifier = {
  /** The name of the resource being monitored. */
  monitoredResourceName?: string;
  /** The type of resource being monitored. */
  type?: string;
  /** The permission status of a resource. */
  resourcePermission?: ResourcePermission;
  /** The time at which DevOps Guru last updated this resource. */
  lastUpdated?: Date;
  resourceCollection?: ResourceCollection;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const monitoredResourceIdentifierSchema: Schema<MonitoredResourceIdentifier> =
  s.object<MonitoredResourceIdentifier>(
    {
      monitoredResourceName: s.optional(s.string()),
      type: s.optional(s.string()),
      resourcePermission: s.optional(s.lazy(() => resourcePermissionSchema)),
      lastUpdated: s.optional(s.dateTime()),
      resourceCollection: s.optional(s.lazy(() => resourceCollectionSchema)),
      _keysMap: {
        monitoredResourceName: "MonitoredResourceName",
        type: "Type",
        resourcePermission: "ResourcePermission",
        lastUpdated: "LastUpdated",
        resourceCollection: "ResourceCollection",
      },
    },
    { additionalProperties: s.json() },
  );
