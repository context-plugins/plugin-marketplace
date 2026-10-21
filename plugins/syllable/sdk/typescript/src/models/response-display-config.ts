import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { displayCardMappingSchema, type DisplayCardMapping } from "./display-card-mapping.js";
import { Version4, version4Schema } from "./version4.js";

/** Declarative presentation metadata stored with a tool definition. */
export type ResponseDisplayConfig = {
  /** @default Version4._1 */
  version?: Version4;
  /** @default "card-list" */
  type?: "card-list";
  itemsPath: string;
  /** Supported mappings from one result item to the existing card shape. */
  mapping: DisplayCardMapping;
};

export const responseDisplayConfigSchema: Schema<ResponseDisplayConfig> = s.object<ResponseDisplayConfig>({
  version: s.defaulted(version4Schema, Version4._1),
  type: s.defaulted(s.literal("card-list"), "card-list"),
  itemsPath: s.string(),
  mapping: displayCardMappingSchema,
  _keysMap: {
    itemsPath: "items_path",
  },
});
