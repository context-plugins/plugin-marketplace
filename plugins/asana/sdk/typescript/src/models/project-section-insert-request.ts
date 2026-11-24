import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectSectionInsertRequest = {
  /** The project in which to reorder the given section. */
  project: string;
  /** The section to reorder. */
  section: string;
  /** Insert the given section immediately before the section specified by this parameter. */
  beforeSection?: string;
  /** Insert the given section immediately after the section specified by this parameter. */
  afterSection?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSectionInsertRequestSchema: Schema<ProjectSectionInsertRequest> =
  s.object<ProjectSectionInsertRequest>(
    {
      project: s.string(),
      section: s.string(),
      beforeSection: s.optional(s.string()),
      afterSection: s.optional(s.string()),
      _keysMap: {
        beforeSection: "before_section",
        afterSection: "after_section",
      },
    },
    { additionalProperties: s.json() },
  );
