import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A media asset stored in the stack. */
export type Asset2 = {
  /** Unique identifier of the asset. */
  uid?: string;
  /** Display name of the asset. */
  title?: string;
  /** URL to access the asset file. */
  url?: string;
  /** Original file name of the uploaded file. */
  filename?: string;
  /** MIME type of the asset. */
  contentType?: string;
  /** File size in bytes. */
  fileSize?: string;
  /** ISO 8601 timestamp when the asset was created. */
  createdAt?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const asset2Properties: s.Shape<Asset2> = {
  uid: s.optional(s.string()),
  title: s.optional(s.string()),
  url: s.optional(s.string()),
  filename: s.optional(s.string()),
  contentType: s.optional(s.string()),
  fileSize: s.optional(s.string()),
  createdAt: s.optional(s.dateTime()),
  _keysMap: {
    contentType: "content_type",
    fileSize: "file_size",
    createdAt: "created_at",
  },
};

export const asset2InternalSchema: Schema<Asset2> = s.object<Asset2>(asset2Properties, {
  additionalProperties: s.json(),
});

export const asset2Schema: Schema<Asset2> = s.lazySchema(() =>
  s.object<Asset2>(
    {
      ...asset2Properties,
      url: s.optional(s.string().check(s.url())),
    },
    { additionalProperties: s.json() },
  ),
);
