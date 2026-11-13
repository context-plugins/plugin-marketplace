import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cardAgingModeSchema, type CardAgingMode } from "./card-aging-mode.js";
import { colorKeySchema, type ColorKey } from "./color-key.js";

export type CreateGroup = {
  /** The description of the Group. */
  description?: string;
  /**
   * The card aging mode for stories in this Group: "gradual" (fixed fade steps at 1, 2, and 4
   * weeks), "immediate", or "off" (explicitly disabled for this Group). Set to null to inherit the
   * Workspace default.
   */
  cardAgingMode?: CardAgingMode | null;
  /** The color you wish to use for the Group in the system. */
  color?: string;
  /**
   * The number of days an in-progress Story can go without activity before it is considered stale.
   * Required when card_aging_mode is "immediate"; not allowed otherwise.
   */
  cardAgingThresholdDays?: number | null;
  /** The Icon id for the avatar of this Group. */
  displayIconId?: string;
  /** The mention name of this Group. */
  mentionName: string;
  /** The name of this Group. */
  name: string;
  /** The color key you wish to use for the Group in the system. */
  colorKey?: ColorKey;
  /** The Member ids to add to this Group. */
  memberIds?: string[];
  /** The Workflow ids to add to the Group. */
  workflowIds?: number[];
};

const createGroupProperties: s.Shape<CreateGroup> = {
  description: s.optional(s.string()),
  cardAgingMode: s.optionalNullable(s.lazy(() => cardAgingModeSchema)),
  color: s.optional(s.string()),
  cardAgingThresholdDays: s.optionalNullable(s.int()),
  displayIconId: s.optional(s.string()),
  mentionName: s.string(),
  name: s.string(),
  colorKey: s.optional(s.lazy(() => colorKeySchema)),
  memberIds: s.optional(s.array(s.string())),
  workflowIds: s.optional(s.array(s.int())),
  _keysMap: {
    cardAgingMode: "card_aging_mode",
    cardAgingThresholdDays: "card_aging_threshold_days",
    displayIconId: "display_icon_id",
    mentionName: "mention_name",
    colorKey: "color_key",
    memberIds: "member_ids",
    workflowIds: "workflow_ids",
  },
};

export const createGroupInternalSchema: Schema<CreateGroup> = s.object<CreateGroup>(createGroupProperties);

export const createGroupSchema: Schema<CreateGroup> = s.lazySchema(() =>
  s.object<CreateGroup>({
    ...createGroupProperties,
    description: s.optional(s.string().check(s.maxLength(4096))),
    color: s.optional(s.string().check(s.minLength(1), s.pattern("^#[a-fA-F0-9]{6}$"))),
    mentionName: s.string().check(s.minLength(1), s.maxLength(63)),
    name: s.string().check(s.minLength(1), s.maxLength(63)),
    memberIds: s.optional(s.array(s.string()).check(s.uniqueItems())),
  }),
);
