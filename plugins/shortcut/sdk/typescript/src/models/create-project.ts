import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CreateProject = {
  /** The Project description. */
  description?: string;
  /** The color you wish to use for the Project in the system. */
  color?: string;
  /** The name of the Project. */
  name: string;
  /** The date at which the Project was started. */
  startTime?: Date;
  /** Defaults to the time/date it is created but can be set to reflect another date. */
  updatedAt?: Date;
  /** An array of UUIDs for any members you want to add as Owners on this new Epic. */
  followerIds?: string[];
  /**
   * This field can be set to another unique ID. In the case that the Project has been imported from
   * another tool, the ID in the other tool can be indicated here.
   */
  externalId?: string;
  /** The ID of the team the project belongs to. */
  teamId: number;
  /** The number of weeks per iteration in this Project. */
  iterationLength?: number;
  /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
  abbreviation?: string;
  /** Defaults to the time/date it is created but can be set to reflect another date. */
  createdAt?: Date;
};

const createProjectProperties: s.Shape<CreateProject> = {
  description: s.optional(s.string()),
  color: s.optional(s.string()),
  name: s.string(),
  startTime: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  followerIds: s.optional(s.array(s.string())),
  externalId: s.optional(s.string()),
  teamId: s.int(),
  iterationLength: s.optional(s.int()),
  abbreviation: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    startTime: "start_time",
    updatedAt: "updated_at",
    followerIds: "follower_ids",
    externalId: "external_id",
    teamId: "team_id",
    iterationLength: "iteration_length",
    createdAt: "created_at",
  },
};

export const createProjectInternalSchema: Schema<CreateProject> =
  s.object<CreateProject>(createProjectProperties);

export const createProjectSchema: Schema<CreateProject> = s.lazySchema(() =>
  s.object<CreateProject>({
    ...createProjectProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    name: s.string().check(s.minLength(1), s.maxLength(128)),
    externalId: s.optional(s.string().check(s.maxLength(128))),
    abbreviation: s.optional(s.string().check(s.maxLength(63))),
  }),
);
