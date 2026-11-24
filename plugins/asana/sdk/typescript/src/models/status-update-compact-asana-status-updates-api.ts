import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourceSubtypeAsanaStatusUpdatesApiSchema,
  type ResourceSubtypeAsanaStatusUpdatesApi,
} from "./resource-subtype-asana-status-updates-api.js";

export type StatusUpdateCompactAsanaStatusUpdatesApi = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The title of the status update. */
  title?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning. The
   * `resource_subtype`s for `status` objects represent the type of their parent.
   */
  resourceSubtype?: ResourceSubtypeAsanaStatusUpdatesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdateCompactAsanaStatusUpdatesApiSchema: Schema<StatusUpdateCompactAsanaStatusUpdatesApi> =
  s.object<StatusUpdateCompactAsanaStatusUpdatesApi>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      title: s.optional(s.string()),
      resourceSubtype: s.optional(s.lazy(() => resourceSubtypeAsanaStatusUpdatesApiSchema)),
      _keysMap: {
        resourceType: "resource_type",
        resourceSubtype: "resource_subtype",
      },
    },
    { additionalProperties: s.json() },
  );
