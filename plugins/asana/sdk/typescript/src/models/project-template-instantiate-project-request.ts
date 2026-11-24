import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { dateVariableRequestSchema, type DateVariableRequest } from "./date-variable-request.js";

export type ProjectTemplateInstantiateProjectRequest = {
  /** The name of the new project. */
  name: string;
  /**
   * *Conditional*. Sets the team of the new project. If the project template exists in an
   * _organization_, you must specify a value for `team` and not `workspace`.
   */
  team?: string;
  /**
   * *Conditional*. Sets the workspace of the new project. If the project template exists in a
   * _workspace_, you must specify a value for `workspace` and not `team`.
   */
  workspace?: string;
  /** Sets the project to public to its team. */
  public: boolean;
  /**
   * *Optional*. If set to `true`, the endpoint returns an "Unprocessable Entity" error if you fail
   * to provide a calendar date value for any date variable. If set to `false`, a default date is
   * used for each unfulfilled date variable (e.g., the current date is used as the Start Date of a
   * project).
   */
  isStrict?: boolean;
  /** Array of mappings of date variables to calendar dates. */
  requestedDates?: DateVariableRequest[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectTemplateInstantiateProjectRequestSchema: Schema<ProjectTemplateInstantiateProjectRequest> =
  s.object<ProjectTemplateInstantiateProjectRequest>(
    {
      name: s.string(),
      team: s.optional(s.string()),
      workspace: s.optional(s.string()),
      public: s.boolean(),
      isStrict: s.optional(s.boolean()),
      requestedDates: s.optional(s.array(s.lazy(() => dateVariableRequestSchema))),
      _keysMap: {
        isStrict: "is_strict",
        requestedDates: "requested_dates",
      },
    },
    { additionalProperties: s.json() },
  );
