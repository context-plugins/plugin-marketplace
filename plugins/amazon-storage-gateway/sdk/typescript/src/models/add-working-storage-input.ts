import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AddWorkingStorageInput = {
  gatewayArn: string;
  /**
   * An array of strings that identify disks that are to be configured as working storage. Each
   * string has a minimum length of 1 and maximum length of 300. You can get the disk IDs from the
   * ListLocalDisks API.
   */
  diskIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const addWorkingStorageInputSchema: Schema<AddWorkingStorageInput> = s.object<AddWorkingStorageInput>(
  {
    gatewayArn: s.string(),
    diskIds: s.array(s.string()),
    _keysMap: {
      gatewayArn: "GatewayARN",
      diskIds: "DiskIds",
    },
  },
  { additionalProperties: s.json() },
);
