import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  shortcutMutablePropertiesSchema,
  type ShortcutMutableProperties,
} from "./shortcut-mutable-properties.js";

export type CreateShortcutRequest = {
  data: ShortcutMutableProperties;
};

export const createShortcutRequestSchema: Schema<CreateShortcutRequest> = s.object<CreateShortcutRequest>({
  data: shortcutMutablePropertiesSchema,
});
