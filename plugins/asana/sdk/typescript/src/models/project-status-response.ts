import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  colorAsanaProjectStatusesApiSchema,
  type ColorAsanaProjectStatusesApi,
} from "./color-asana-project-statuses-api.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type ProjectStatusResponse = {
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
  author?: UserCompact;
  /** The time at which this resource was created. */
  createdAt?: Date;
  createdBy?: UserCompact;
  /**
   * The time at which this project status was last modified. *Note: This does not currently reflect
   * any changes in associations such as comments that may have been added or removed from the
   * project status.*
   */
  modifiedAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectStatusResponseSchema: Schema<ProjectStatusResponse> = s.object<ProjectStatusResponse>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    title: s.optional(s.string()),
    text: s.string(),
    htmlText: s.optional(s.string()),
    color: colorAsanaProjectStatusesApiSchema,
    author: s.optional(s.lazy(() => userCompactSchema)),
    createdAt: s.optional(s.dateTime()),
    createdBy: s.optional(s.lazy(() => userCompactSchema)),
    modifiedAt: s.optional(s.dateTime()),
    _keysMap: {
      resourceType: "resource_type",
      htmlText: "html_text",
      createdAt: "created_at",
      createdBy: "created_by",
      modifiedAt: "modified_at",
    },
  },
  { additionalProperties: s.json() },
);
