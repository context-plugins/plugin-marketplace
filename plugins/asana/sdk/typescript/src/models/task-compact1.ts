import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { resourceSubtypeSchema, type ResourceSubtype } from "./resource-subtype.js";

/**
 * *Conditional*
 */
export type TaskCompact1 = {
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
  resourceSubtype?: ResourceSubtype;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const taskCompact1Schema: Schema<TaskCompact1> = s.object<TaskCompact1>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    resourceSubtype: s.optional(s.lazy(() => resourceSubtypeSchema)),
    _keysMap: {
      resourceType: "resource_type",
      resourceSubtype: "resource_subtype",
    },
  },
  { additionalProperties: s.json() },
);
