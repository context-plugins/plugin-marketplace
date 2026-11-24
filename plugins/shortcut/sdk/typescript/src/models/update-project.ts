import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UpdateProject = {
  /** The Project's description. */
  description?: string;
  /** A true/false boolean indicating whether the Story is in archived state. */
  archived?: boolean;
  /** The number of days before the thermometer appears in the Story summary. */
  daysToThermometer?: number;
  /** The color that represents the Project in the UI. */
  color?: string;
  /** The Project's name. */
  name?: string;
  /** An array of UUIDs for any Members you want to add as Followers. */
  followerIds?: string[];
  /** Configuration to enable or disable thermometers in the Story summary. */
  showThermometer?: boolean;
  /** The ID of the team the project belongs to. */
  teamId?: number;
  /** The Project abbreviation used in Story summaries. Should be kept to 3 characters at most. */
  abbreviation?: string;
};

const updateProjectProperties: s.Shape<UpdateProject> = {
  description: s.optional(s.string()),
  archived: s.optional(s.boolean()),
  daysToThermometer: s.optional(s.int()),
  color: s.optional(s.string()),
  name: s.optional(s.string()),
  followerIds: s.optional(s.array(s.string())),
  showThermometer: s.optional(s.boolean()),
  teamId: s.optional(s.int()),
  abbreviation: s.optional(s.string()),
  _keysMap: {
    daysToThermometer: "days_to_thermometer",
    followerIds: "follower_ids",
    showThermometer: "show_thermometer",
    teamId: "team_id",
  },
};

export const updateProjectInternalSchema: Schema<UpdateProject> =
  s.object<UpdateProject>(updateProjectProperties);

export const updateProjectSchema: Schema<UpdateProject> = s.lazySchema(() =>
  s.object<UpdateProject>({
    ...updateProjectProperties,
    description: s.optional(s.string().check(s.maxLength(100000))),
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(128))),
  }),
);
