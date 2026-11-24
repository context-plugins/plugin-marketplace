import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectBriefBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The title of the project brief. */
  title?: string;
  /** HTML formatted text for the project brief. */
  htmlText?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBriefBaseSchema: Schema<ProjectBriefBase> = s.object<ProjectBriefBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    htmlText: s.optional(s.string()),
    _keysMap: {
      resourceType: "resource_type",
      htmlText: "html_text",
    },
  },
  { additionalProperties: s.json() },
);
