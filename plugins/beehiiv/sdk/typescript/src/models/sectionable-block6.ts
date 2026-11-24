import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { listTypeSchema, type ListType } from "./list-type.js";
import { listBlockItemSchema, type ListBlockItem } from "./unions/list-block-item.js";
import { visibilitySettings1Schema, type VisibilitySettings1 } from "./visibility-settings1.js";
import { visualSettings1Schema, type VisualSettings1 } from "./visual-settings1.js";

export type SectionableBlock6 = {
  /** Discriminator value: list @default "list" */
  type?: "list";
  /** Optional styling for borders, spacing, colors, etc. */
  visualSettings?: VisualSettings1;
  /**
   * Optional rules for when/where this block is shown, including dynamic content targeting via
   * condition sets.
   */
  visibilitySettings?: VisibilitySettings1;
  /** The items in the list. */
  items: ListBlockItem[];
  /** The type of list (e.g., ordered, unordered). */
  listType?: ListType;
  /** The number to start the list at. Only applicable if listType is ordered. */
  startNumber?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sectionableBlock6Schema: Schema<SectionableBlock6> = s.object<SectionableBlock6>(
  {
    type: s.defaulted(s.literal("list"), "list"),
    visualSettings: s.optional(s.lazy(() => visualSettings1Schema)),
    visibilitySettings: s.optional(s.lazy(() => visibilitySettings1Schema)),
    items: s.array(s.lazy(() => listBlockItemSchema)),
    listType: s.optional(s.lazy(() => listTypeSchema)),
    startNumber: s.optional(s.int()),
    _keysMap: {
      visualSettings: "visual_settings",
      visibilitySettings: "visibility_settings",
    },
  },
  { additionalProperties: s.json() },
);
