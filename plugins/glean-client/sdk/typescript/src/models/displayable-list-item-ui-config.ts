import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** UI configurations for each item of the list */
export type DisplayableListItemUiConfig = {
  /** show a "New" pill next to the item */
  showNewIndicator?: boolean;
};

export const displayableListItemUiConfigSchema: Schema<DisplayableListItemUiConfig> =
  s.object<DisplayableListItemUiConfig>({
    showNewIndicator: s.optional(s.boolean()),
  });
