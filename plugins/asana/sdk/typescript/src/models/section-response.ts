import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";

export type SectionResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the section (i.e. the text displayed as the section header). */
  name?: string;
  /** The time at which this resource was created. */
  createdAt?: Date;
  project?: ProjectCompact;
  /**
   * *Deprecated - please use project instead*
   */
  projects?: ProjectCompact[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionResponseSchema: Schema<SectionResponse> = s.object<SectionResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    createdAt: s.optional(s.dateTime()),
    project: s.optional(s.lazy(() => projectCompactSchema)),
    projects: s.optional(s.array(s.lazy(() => projectCompactSchema))),
    _keysMap: {
      resourceType: "resource_type",
      createdAt: "created_at",
    },
  },
  { additionalProperties: s.json() },
);
