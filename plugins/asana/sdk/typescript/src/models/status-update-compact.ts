import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourceSubtype1AsanaGoalsApiSchema,
  type ResourceSubtype1AsanaGoalsApi,
} from "./resource-subtype1-asana-goals-api.js";

export type StatusUpdateCompact = {
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
  resourceSubtype?: ResourceSubtype1AsanaGoalsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const statusUpdateCompactSchema: Schema<StatusUpdateCompact> = s.object<StatusUpdateCompact>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtype1AsanaGoalsApiSchema)),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
    },
  },
  { additionalProperties: s.json() },
);
