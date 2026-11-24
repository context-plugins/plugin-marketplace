import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { projectSettingsSchema, type ProjectSettings } from "./project-settings.js";
import {
  vercelEdgeConfigConnectionSchema,
  type VercelEdgeConfigConnection,
} from "./vercel-edge-config-connection.js";

export type Project = {
  /** A unique Project ID */
  id: string;
  /** ID of the Organization owning the Project */
  organization: string;
  /** ID of the User who created the project */
  createdBy: string;
  /** Project name */
  name: string;
  /** A unique key to identify the Project */
  key: string;
  /** A description of the Project */
  description?: string;
  /**
   * Project display color, used to highlight different projects on the dashboard. Must use Hex
   * color code.
   */
  color?: string;
  settings: ProjectSettings;
  /** The date the Project was created */
  createdAt: Date;
  /** The date the Project was last updated */
  updatedAt: Date;
  /** Boolean tracking whether this project has a jira integration set up */
  hasJiraIntegration: boolean;
  /** Describe if a project has ever received code usages for any variable */
  hasReceivedCodeUsages: boolean;
  /** Boolean indicating whether a user config has been fetched for this project */
  hasUserConfigFetch: boolean;
  /** Jira project base url, if the integration is defined */
  jiraBaseUrl: string;
  /** Controls whether the feature is editable for a given user */
  readonly: boolean;
  /** Edge Config Connections for the project */
  vercelEdgeConfigConnections?: VercelEdgeConfigConnection[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const projectSchema: Schema<Project> = s.object<Project>(
  {
    id: s.string(),
    organization: s.string(),
    createdBy: s.string(),
    name: s.string(),
    key: s.string(),
    description: s.optional(s.string()),
    color: s.optional(s.string()),
    settings: projectSettingsSchema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    hasJiraIntegration: s.boolean(),
    hasReceivedCodeUsages: s.boolean(),
    hasUserConfigFetch: s.boolean(),
    jiraBaseUrl: s.string(),
    readonly: s.boolean(),
    vercelEdgeConfigConnections: s.optional(s.array(s.lazy(() => vercelEdgeConfigConnectionSchema))),
    _keysMap: {
      id: "_id",
      organization: "_organization",
      createdBy: "_createdBy",
    },
  },
  { additionalProperties: s.json() },
);
