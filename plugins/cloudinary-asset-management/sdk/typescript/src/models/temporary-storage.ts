import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** A generated asset stored as a short-lived asset on the upload service. */
export type TemporaryStorage = {
  /** Discriminator identifying this as temporary storage. @default "temporary" */
  storageType?: "temporary";
  /** The URL to fetch the generated asset. */
  secureUrl: string;
  /** Time in UTC when secure_url stops being valid. */
  expiresAt: Date;
};

export const temporaryStorageSchema: Schema<TemporaryStorage> = s.object<TemporaryStorage>({
  storageType: s.defaulted(s.literal("temporary"), "temporary"),
  secureUrl: s.string(),
  expiresAt: s.dateTime(),
  _keysMap: {
    storageType: "storage_type",
    secureUrl: "secure_url",
    expiresAt: "expires_at",
  },
});
