import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardAgingModeSchema, type CardAgingMode } from "./card-aging-mode.js";
import { colorKeySchema, type ColorKey } from "./color-key.js";

export type UpdateGroup = {
  /** The description of this Group. */
  description?: string;
  /** Whether or not this Group is archived. */
  archived?: boolean | null;
  /**
   * The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4
   * weeks), "immediate", or "off" (explicitly disabled for this Group). Set to null to inherit the
   * Workspace default.
   */
  cardAgingMode?: CardAgingMode | null;
  /** The color you wish to use for the Group in the system. */
  color?: string | null;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale.
   * Required when card_aging_mode is "immediate"; not allowed otherwise.
   */
  cardAgingThresholdDays?: number | null;
  /** The Icon id for the avatar of this Group. */
  displayIconId?: string | null;
  /** The mention name of this Group. */
  mentionName?: string;
  /** The name of this Group. */
  name?: string;
  /** The color key you wish to use for the Group in the system. */
  colorKey?: ColorKey;
  /** The ID of the default workflow for stories created in this group. */
  defaultWorkflowId?: number | null;
  /** The Member ids to add to this Group. */
  memberIds?: string[];
  /** The Workflow ids to add to the Group. */
  workflowIds?: number[];
};

const updateGroupProperties: s.Shape<UpdateGroup> = {
  description: s.optional(s.string()),
  archived: s.optionalNullable(s.boolean()),
  cardAgingMode: s.optionalNullable(s.lazy(() => cardAgingModeSchema)),
  color: s.optionalNullable(s.string()),
  cardAgingThresholdDays: s.optionalNullable(s.int()),
  displayIconId: s.optionalNullable(s.string()),
  mentionName: s.optional(s.string()),
  name: s.optional(s.string()),
  colorKey: s.optional(s.lazy(() => colorKeySchema)),
  defaultWorkflowId: s.optionalNullable(s.int()),
  memberIds: s.optional(s.array(s.string())),
  workflowIds: s.optional(s.array(s.int())),
  _keysMap: {
    cardAgingMode: "card_aging_mode",
    cardAgingThresholdDays: "card_aging_threshold_days",
    displayIconId: "display_icon_id",
    mentionName: "mention_name",
    colorKey: "color_key",
    defaultWorkflowId: "default_workflow_id",
    memberIds: "member_ids",
    workflowIds: "workflow_ids",
  },
};

export const updateGroupInternalSchema: Schema<UpdateGroup> = s.object<UpdateGroup>(updateGroupProperties);

export const updateGroupSchema: Schema<UpdateGroup> = s.lazySchema(() =>
  s.object<UpdateGroup>({
    ...updateGroupProperties,
    description: s.optional(s.string().check(s.maxLength(4096))),
    color: s.optionalNullable(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    mentionName: s.optional(s.string().check(s.minLength(1), s.maxLength(63))),
    name: s.optional(s.string().check(s.minLength(1), s.maxLength(63))),
    memberIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
  }),
);
