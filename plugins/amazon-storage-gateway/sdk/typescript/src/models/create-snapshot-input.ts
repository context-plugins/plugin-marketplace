import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { tagSchema, type Tag } from "./tag.js";

export type CreateSnapshotInput = {
  /**
   * The Amazon Resource Name (ARN) of the volume. Use the ListVolumes operation to return a list of
   * gateway volumes.
   */
  volumeArn: string;
  /**
   * Textual description of the snapshot that appears in the Amazon EC2 console, Elastic Block Store
   * snapshots panel in the Description field, and in the Storage Gateway snapshot Details pane,
   * Description field.
   */
  snapshotDescription: string;
  /**
   * A list of up to 50 tags that can be assigned to a snapshot. Each tag is a key-value pair. Valid
   * characters for key and value are letters, spaces, and numbers representable in UTF-8 format,
   * and the following special characters: + - = . _ : / \@. The maximum length of a tag's key is
   * 128 characters, and the maximum length for a tag's value is 256.
   */
  tags?: Tag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createSnapshotInputSchema: Schema<CreateSnapshotInput> = s.object<CreateSnapshotInput>(
  {
    volumeArn: s.string(),
    snapshotDescription: s.string(),
    tags: s.optional(s.array(s.lazy(() => tagSchema))),
    _keysMap: {
      volumeArn: "VolumeARN",
      snapshotDescription: "SnapshotDescription",
      tags: "Tags",
    },
  },
  { additionalProperties: s.json() },
);
