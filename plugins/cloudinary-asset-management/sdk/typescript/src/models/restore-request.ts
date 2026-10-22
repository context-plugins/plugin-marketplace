import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestoreRequest = {
  /** The unique and immutable asset IDs of backed up assets to restore. */
  assetIds: string[];
  /**
   * If you specify versions, the number of versions in the array must exactly match the number of
   * asset_ids.
   */
  versions?: string[];
  /** The URL that will receive notification when restore is complete. */
  notificationUrl?: string;
};

export const restoreRequestSchema: Schema<RestoreRequest> = s.object<RestoreRequest>({
  assetIds: s.array(s.string()),
  versions: s.optional(s.array(s.string())),
  notificationUrl: s.optional(s.string()),
  _keysMap: {
    assetIds: "asset_ids",
    notificationUrl: "notification_url",
  },
});
