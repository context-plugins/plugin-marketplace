import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProjectSaveAsTemplateRequest = {
  /** The name of the new project template. */
  name: string;
  /**
   * Sets the team of the new project template. If the project exists in an organization, specify
   * team and not workspace.
   */
  team?: string;
  /**
   * Sets the workspace of the new project template. Only specify workspace if the project exists in
   * a workspace.
   */
  workspace?: string;
  /** Sets the project template to public to its team. */
  public: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSaveAsTemplateRequestSchema: Schema<ProjectSaveAsTemplateRequest> =
  s.object<ProjectSaveAsTemplateRequest>(
    {
      name: s.string(),
      team: s.optional(s.string()),
      workspace: s.optional(s.string()),
      public: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
