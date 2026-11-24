import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { color1Schema, type Color1 } from "./color1.js";

export type ProjectStatusBaseAsanaProjectsApi = {
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
  color: Color1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectStatusBaseAsanaProjectsApiSchema: Schema<ProjectStatusBaseAsanaProjectsApi> =
  s.object<ProjectStatusBaseAsanaProjectsApi>(
    {
      gid: s.optional(s.string()),
      resourceType: s.optional(s.string()),
      title: s.optional(s.string()),
      text: s.string(),
      htmlText: s.optional(s.string()),
      color: color1Schema,
      _keysMap: {
        resourceType: "resource_type",
        htmlText: "html_text",
      },
    },
    { additionalProperties: s.json() },
  );
