import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  colorAsanaProjectStatusesApiSchema,
  type ColorAsanaProjectStatusesApi,
} from "./color-asana-project-statuses-api.js";

export type ProjectStatusRequest = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** The title of the project status update. */
  title?: string;
  /** The text content of the status update. */
  text: string;
  /**
   * [Opt In](/docs/input-output-options). The text content of the status update with formatting as
   * HTML.
   */
  htmlText?: string;
  /** The color associated with the status update. */
  color: ColorAsanaProjectStatusesApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectStatusRequestSchema: Schema<ProjectStatusRequest> = s.object<ProjectStatusRequest>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    text: s.string(),
    htmlText: s.optional(s.string()),
    color: colorAsanaProjectStatusesApiSchema,
    _keysMap: {
      resourceType: "resource_type",
      htmlText: "html_text",
    },
  },
  { additionalProperties: s.json() },
);
