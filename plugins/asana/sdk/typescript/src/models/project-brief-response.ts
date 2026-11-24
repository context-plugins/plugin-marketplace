import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectCompactSchema, type ProjectCompact } from "./project-compact.js";

export type ProjectBriefResponse = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The title of the project brief. */
  title?: string;
  /** HTML formatted text for the project brief. */
  htmlText?: string;
  /** [Opt In](/docs/input-output-options). The plain text of the project brief. */
  text?: string;
  /** A url that points directly to the object within Asana. */
  permalinkUrl?: string;
  project?: ProjectCompact;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectBriefResponseSchema: Schema<ProjectBriefResponse> = s.object<ProjectBriefResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    htmlText: s.optional(s.string()),
    text: s.optional(s.string()),
    permalinkUrl: s.optional(s.string()),
    project: s.optional(s.lazy(() => projectCompactSchema)),
    _keysMap: {
      resourceType: "resource_type",
      htmlText: "html_text",
      permalinkUrl: "permalink_url",
    },
  },
  { additionalProperties: s.json() },
);
