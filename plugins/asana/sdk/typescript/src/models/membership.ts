import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";
import { sectionCompactSchema, type SectionCompact } from "./section-compact.js";

export type Membership = {
  project?: ProjectCompact;
  section?: SectionCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const membershipSchema: Schema<Membership> = s.object<Membership>(
  {
    project: s.optional(s.lazy(() => projectCompactSchema)),
    section: s.optional(s.lazy(() => sectionCompactSchema)),
  },
  { additionalProperties: s.json() },
);
