import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  colorAsanaProjectTemplatesApiSchema,
  type ColorAsanaProjectTemplatesApi,
} from "./color-asana-project-templates-api.js";
import { dateVariableCompactSchema, type DateVariableCompact } from "./date-variable-compact.js";
import { teamCompactSchema, type TeamCompact } from "./team-compact.js";
import { userCompactSchema, type UserCompact } from "./user-compact.js";

export type ProjectTemplateBase = {
  /** Globally unique identifier of the resource, as a string. */
  gid?: string;
  /** The base type of this resource. */
  resourceType?: string;
  /** Name of the project template. */
  name?: string;
  /** Free-form textual information associated with the project template */
  description?: string;
  /** The description of the project template with formatting as HTML. */
  htmlDescription?: string;
  /** True if the project template is public to its team. */
  public?: boolean;
  /** The current owner of the project template, may be null. */
  owner?: UserCompact;
  team?: TeamCompact;
  /**
   * Array of date variables in this project template. Calendar dates must be provided for these
   * variables when instantiating a project.
   */
  requestedDates?: DateVariableCompact[];
  /** Color of the project template. */
  color?: ColorAsanaProjectTemplatesApi | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplateBaseSchema: Schema<ProjectTemplateBase> = s.object<ProjectTemplateBase>(
  {
    gid: s.optional(s.string()),
    resourceType: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    htmlDescription: s.optional(s.string()),
    public: s.optional(s.boolean()),
    owner: s.optional(s.lazy(() => userCompactSchema)),
    team: s.optional(s.lazy(() => teamCompactSchema)),
    requestedDates: s.optional(s.array(s.lazy(() => dateVariableCompactSchema))),
    color: s.optionalNullable(s.lazy(() => colorAsanaProjectTemplatesApiSchema)),
    _keysMap: {
      resourceType: "resource_type",
      htmlDescription: "html_description",
      requestedDates: "requested_dates",
    },
  },
  { additionalProperties: s.json() },
);
