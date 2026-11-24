import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type SectionCompact = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The name of the section (i.e. the text displayed as the section header). */
  name?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionCompactSchema: Schema<SectionCompact> = s.object<SectionCompact>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
    },
  },
  { additionalProperties: s.json() },
);
