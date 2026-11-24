import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The synced item for the story. */
export type SyncedItem = {
  /** The id used to reference an external entity. */
  externalId: string;
  /** The url to the external entity. */
  url: string;
};

export const syncedItemSchema: Schema<SyncedItem> = s.object<SyncedItem>({
  externalId: s.string(),
  url: s.string(),
  _keysMap: {
    externalId: "external_id",
  },
});
