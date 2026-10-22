import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type LastUpdated = {
  accessControlUpdatedAt?: Date;
  contextUpdatedAt?: Date;
  metadataUpdatedAt?: Date;
  publicIdUpdatedAt?: Date;
  tagsUpdatedAt?: Date;
  updatedAt?: Date;
};

export const lastUpdatedSchema: Schema<LastUpdated> = s.object<LastUpdated>({
  accessControlUpdatedAt: s.optional(s.dateTime()),
  contextUpdatedAt: s.optional(s.dateTime()),
  metadataUpdatedAt: s.optional(s.dateTime()),
  publicIdUpdatedAt: s.optional(s.dateTime()),
  tagsUpdatedAt: s.optional(s.dateTime()),
  updatedAt: s.optional(s.dateTime()),
  _keysMap: {
    accessControlUpdatedAt: "access_control_updated_at",
    contextUpdatedAt: "context_updated_at",
    metadataUpdatedAt: "metadata_updated_at",
    publicIdUpdatedAt: "public_id_updated_at",
    tagsUpdatedAt: "tags_updated_at",
    updatedAt: "updated_at",
  },
});
