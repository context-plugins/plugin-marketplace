import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  displayableListItemUiConfigSchema,
  type DisplayableListItemUiConfig,
} from "./displayable-list-item-ui-config.js";
import { formatSchema, type Format } from "./format.js";

export type UiConfig = {
  /** defines how to render this particular displayable list card */
  format?: Format;
  /** UI configurations for each item of the list */
  additionalFlags?: DisplayableListItemUiConfig;
};

export const uiConfigSchema: Schema<UiConfig> = s.object<UiConfig>({
  format: s.optional(s.lazy(() => formatSchema)),
  additionalFlags: s.optional(s.lazy(() => displayableListItemUiConfigSchema)),
});
