import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { projectStatsSchema, type ProjectStats } from "./project-stats.js";

/**
 * Projects typically map to teams (such as Frontend, Backend, Mobile, Devops, etc) but can
 * represent any open-ended product, component, or initiative.
 */
export type Project = {
  /** The Shortcut application url for the Project. */
  appUrl: string;
  /** The description of the Project. */
  description: string | null;
  /** True/false boolean indicating whether the Project is in an Archived state. */
  archived: boolean;
  /** A string description of this resource. */
  entityType: string;
  /** The number of days before the thermometer appears in the Story summary. */
  daysToThermometer: number;
  /** The color associated with the Project in the Shortcut member interface. */
  color: string | null;
  /** The ID of the workflow the project belongs to. */
  workflowId: number;
  /** The name of the Project */
  name: string;
  /** The Global ID of the Project. */
  globalId: string;
  /** The date at which the Project was started. */
  startTime: Date;
  /** The time/date that the Project was last updated. */
  updatedAt: Date | null;
  /** An array of UUIDs for any Members listed as Followers. */
  followerIds: string[];
  /**
   * This field can be set to another unique ID. In the case that the Project has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId: string | null;
  /** The unique ID of the Project. */
  id: number;
  /** Configuration to enable or disable thermometers in the Story summary. */
  showThermometer: boolean;
  /** The ID of the team the project belongs to. */
  teamId: number;
  /** The number of weeks per iteration in this Project. */
  iterationLength: number;
  /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
  abbreviation: string | null;
  /** A group of calculated values for this Project. */
  stats: ProjectStats;
  /** The time/date that the Project was created. */
  createdAt: Date | null;
};

const projectProperties: s.Shape<Project> = {
  appUrl: s.string(),
  description: s.nullable(s.string()),
  archived: s.boolean(),
  entityType: s.string(),
  daysToThermometer: s.int(),
  color: s.nullable(s.string()),
  workflowId: s.int(),
  name: s.string(),
  globalId: s.string(),
  startTime: s.dateTime(),
  updatedAt: s.nullable(s.dateTime()),
  followerIds: s.array(s.string()),
  externalId: s.nullable(s.string()),
  id: s.int(),
  showThermometer: s.boolean(),
  teamId: s.int(),
  iterationLength: s.int(),
  abbreviation: s.nullable(s.string()),
  stats: projectStatsSchema,
  createdAt: s.nullable(s.dateTime()),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    daysToThermometer: "days_to_thermometer",
    workflowId: "workflow_id",
    globalId: "global_id",
    startTime: "start_time",
    updatedAt: "updated_at",
    followerIds: "follower_ids",
    externalId: "external_id",
    showThermometer: "show_thermometer",
    teamId: "team_id",
    iterationLength: "iteration_length",
    createdAt: "created_at",
  },
};

export const projectInternalSchema: Schema<Project> = s.object<Project>(projectProperties);

export const projectSchema: Schema<Project> = s.lazySchema(() =>
  s.object<Project>({
    ...projectProperties,
    color: s.nullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
  }),
);
