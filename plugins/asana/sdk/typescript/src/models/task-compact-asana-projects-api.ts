import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  resourceSubtype1AsanaProjectsApiSchema,
  type ResourceSubtype1AsanaProjectsApi,
} from "./resource-subtype1-asana-projects-api.js";

export type TaskCompactAsanaProjectsApi = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the task. */
  name?: string;
  /**
   * The subtype of this resource. Different subtypes retain many of the same fields and behavior,
   * but may render differently in Asana or represent resources with different semantic meaning. The
   * resource_subtype `milestone` represent a single moment in time. This means tasks with this
   * subtype cannot have a start_date.
   */
  resourceSubtype?: ResourceSubtype1AsanaProjectsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskCompactAsanaProjectsApiSchema: Schema<TaskCompactAsanaProjectsApi> =
  s.object<TaskCompactAsanaProjectsApi>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      name: s.optional(s.string()),
      resourceSubtype: s.optional(s.lazy(() => resourceSubtype1AsanaProjectsApiSchema)),
      _keysMap: {
        resourceType: "resource_type",
        resourceSubtype: "resource_subtype",
      },
    },
    { additionalProperties: s.json() },
  );
