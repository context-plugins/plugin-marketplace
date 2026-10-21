import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ChatCustomEntitySource = {
  /** @default "CUSTOM_ENTITY" */
  type?: "CUSTOM_ENTITY";
  entityId: string;
  name?: string;
  title?: string;
  url?: string;
  datasource?: string;
};

export const chatCustomEntitySourceSchema: Schema<ChatCustomEntitySource> = s.object<ChatCustomEntitySource>({
  type: s.defaulted(s.literal("CUSTOM_ENTITY"), "CUSTOM_ENTITY"),
  entityId: s.string(),
  name: s.optional(s.string()),
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  datasource: s.optional(s.string()),
  _keysMap: {
    entityId: "entity_id",
  },
});
