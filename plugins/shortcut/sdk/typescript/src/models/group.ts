import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardAgingMode1Schema, type CardAgingMode1 } from "./card-aging-mode1.js";
import { colorKey1Schema, type ColorKey1 } from "./color-key1.js";
import { iconSchema, type Icon } from "./icon.js";

/** A Group. */
export type Group = {
  /** The Shortcut application url for the Group. */
  appUrl: string;
  /** The description of the Group. */
  description: string;
  /** Whether or not the Group is archived. */
  archived: boolean;
  /** A string description of this resource. */
  entityType: string;
  /**
   * The card aging mode for stories in this Group: "gradual" or "immediate". Null if card aging is
   * off.
   */
  cardAgingMode: CardAgingMode1 | null;
  /** The hex color to be displayed with the Group (for example, "#ff0000"). */
  color: string | null;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale.
   */
  cardAgingThresholdDays: number | null;
  /** The number of stories assigned to the group which are in a started workflow state. */
  numStoriesStarted: number;
  /** The mention name of the Group. */
  mentionName: string;
  /** The name of the Group. */
  name: string;
  globalId: string;
  /** The color key to be displayed with the Group. */
  colorKey: ColorKey1 | null;
  /** The total number of stories assigned to the group. */
  numStories: number;
  /** The number of epics assigned to the group which are in the started workflow state. */
  numEpicsStarted: number;
  /** The ID of the Member who created this Group, or null when unknown. */
  creatorId: string | null;
  /** The last instant when this group was updated. */
  updatedAt: Date;
  /** The number of stories assigned to the group which are in a backlog workflow state. */
  numStoriesBacklog: number;
  /** The id of the Group. */
  id: string;
  /**
   * Icons are used to attach images to Groups, Workspaces, Members, and Loading screens in the
   * Shortcut web application.
   */
  displayIcon: Icon;
  /** The ID of the default workflow for stories created in this group. */
  defaultWorkflowId?: number | null;
  /** The Member IDs contain within the Group. */
  memberIds: string[];
  /** The Workflow IDs contained within the Group. */
  workflowIds: number[];
  /** The instant when this group was created. */
  createdAt: Date;
};

const groupProperties: s.Shape<Group> = {
  appUrl: s.string(),
  description: s.string(),
  archived: s.boolean(),
  entityType: s.string(),
  cardAgingMode: s.nullable(s.lazy(() => cardAgingMode1Schema)),
  color: s.nullable(s.string()),
  cardAgingThresholdDays: s.nullable(s.int()),
  numStoriesStarted: s.int(),
  mentionName: s.string(),
  name: s.string(),
  globalId: s.string(),
  colorKey: s.nullable(s.lazy(() => colorKey1Schema)),
  numStories: s.int(),
  numEpicsStarted: s.int(),
  creatorId: s.nullable(s.string()),
  updatedAt: s.dateTime(),
  numStoriesBacklog: s.int(),
  id: s.string(),
  displayIcon: iconSchema,
  defaultWorkflowId: s.optionalNullable(s.int()),
  memberIds: s.array(s.string()),
  workflowIds: s.array(s.int()),
  createdAt: s.dateTime(),
  _keysMap: {
    appUrl: "app_url",
    entityType: "entity_type",
    cardAgingMode: "card_aging_mode",
    cardAgingThresholdDays: "card_aging_threshold_days",
    numStoriesStarted: "num_stories_started",
    mentionName: "mention_name",
    globalId: "global_id",
    colorKey: "color_key",
    numStories: "num_stories",
    numEpicsStarted: "num_epics_started",
    creatorId: "creator_id",
    updatedAt: "updated_at",
    numStoriesBacklog: "num_stories_backlog",
    displayIcon: "display_icon",
    defaultWorkflowId: "default_workflow_id",
    memberIds: "member_ids",
    workflowIds: "workflow_ids",
    createdAt: "created_at",
  },
};

export const groupInternalSchema: Schema<Group> = s.object<Group>(groupProperties);

export const groupSchema: Schema<Group> = s.lazySchema(() =>
  s.object<Group>({
    ...groupProperties,
    color: s.nullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    mentionName: s.string().check(s.minLength(1), s.pattern("^[a-z0-9._-]+$")),
  }),
);
