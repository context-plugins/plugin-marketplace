import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { azureBlobStorageSchema, type AzureBlobStorage } from "./azure-blob-storage.js";

/** Azure Blob Storage settings used to persist Event Hubs checkpoints. */
export type Checkpointing = {
  /** Azure Blob Storage */
  blobStore: AzureBlobStorage;
};

export const checkpointingSchema: Schema<Checkpointing> = s.object<Checkpointing>({
  blobStore: azureBlobStorageSchema,
});
