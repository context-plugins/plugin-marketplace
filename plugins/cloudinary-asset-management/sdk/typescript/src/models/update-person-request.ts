import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personStatusSchema, type PersonStatus } from "./person-status.js";

export type UpdatePersonRequest = {
  /** The display name for the person. Maximum 255 characters. */
  name?: string;
  /** The status of a person. */
  status?: PersonStatus;
  /** The external ID of an asset containing this person's face to use as the thumbnail. */
  thumbnailAssetId?: string;
};

export const updatePersonRequestSchema: Schema<UpdatePersonRequest> = s.object<UpdatePersonRequest>({
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => personStatusSchema)),
  thumbnailAssetId: s.optional(s.string()),
  _keysMap: {
    thumbnailAssetId: "thumbnail_asset_id",
  },
});
