import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  monitoredResourceIdentifierSchema,
  type MonitoredResourceIdentifier,
} from "./monitored-resource-identifier.js";

export type ListMonitoredResourcesResponse = {
  /**
   * Information about the resource that is being monitored, including the name of the resource, the
   * type of resource, and whether or not permission is given to DevOps Guru to access that
   * resource.
   */
  monitoredResourceIdentifiers: MonitoredResourceIdentifier[];
  /**
   * The pagination token to use to retrieve the next page of results for this operation. If there
   * are no more pages, this value is null.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMonitoredResourcesResponseSchema: Schema<ListMonitoredResourcesResponse> =
  s.object<ListMonitoredResourcesResponse>(
    {
      monitoredResourceIdentifiers: s.array(s.lazy(() => monitoredResourceIdentifierSchema)),
      nextToken: s.optional(s.string()),
      _keysMap: {
        monitoredResourceIdentifiers: "MonitoredResourceIdentifiers",
        nextToken: "NextToken",
      },
    },
    { additionalProperties: s.json() },
  );
