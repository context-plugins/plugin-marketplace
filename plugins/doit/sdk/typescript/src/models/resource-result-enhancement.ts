import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { prioritySchema, type Priority } from "./priority.js";

/** DoiT-managed metadata associated with a resource result. */
export type ResourceResultEnhancement = {
  /** Tags assigned to this resource result. */
  tags?: string[];
  /** Priority information for this resource result. */
  priority?: Priority;
  /** The user who last updated this enhancement. */
  lastUpdatedBy?: string;
  /** Timestamp of the last update. */
  lastUpdatedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceResultEnhancementSchema: Schema<ResourceResultEnhancement> =
  s.object<ResourceResultEnhancement>(
    {
      tags: s.optional(s.array(s.string())),
      priority: s.optional(s.lazy(() => prioritySchema)),
      lastUpdatedBy: s.optional(s.string()),
      lastUpdatedAt: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
