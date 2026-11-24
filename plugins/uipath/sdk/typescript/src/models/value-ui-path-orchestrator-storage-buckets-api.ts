import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { storageProviderSchema, type StorageProvider } from "./storage-provider.js";

export type ValueUiPathOrchestratorStorageBucketsApi = {
  /** Unique storage bucket identifier */
  id?: number;
  /** Display name of the storage bucket */
  name?: string;
  /** Optional description of the bucket */
  description?: string;
  /** Cloud storage backend provider */
  storageProvider?: StorageProvider;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const valueUiPathOrchestratorStorageBucketsApiSchema: Schema<ValueUiPathOrchestratorStorageBucketsApi> =
  s.object<ValueUiPathOrchestratorStorageBucketsApi>(
    {
      id: s.optional(s.int()),
      name: s.optional(s.string()),
      description: s.optional(s.string()),
      storageProvider: s.optional(s.lazy(() => storageProviderSchema)),
      _keysMap: {
        id: "Id",
        name: "Name",
        description: "Description",
        storageProvider: "StorageProvider",
      },
    },
    { additionalProperties: s.json() },
  );
