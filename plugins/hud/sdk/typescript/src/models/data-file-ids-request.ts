import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DataFileIdsRequest = {
  fileIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const dataFileIdsRequestProperties: s.Shape<DataFileIdsRequest> = {
  fileIds: s.array(s.string()),
  _keysMap: {
    fileIds: "file_ids",
  },
};

export const dataFileIdsRequestInternalSchema: Schema<DataFileIdsRequest> = s.object<DataFileIdsRequest>(
  dataFileIdsRequestProperties,
  { additionalProperties: s.json() },
);

export const dataFileIdsRequestSchema: Schema<DataFileIdsRequest> = s.lazySchema(() =>
  s.object<DataFileIdsRequest>(
    {
      ...dataFileIdsRequestProperties,
      fileIds: s.array(s.string()).check(s.minLength(1), s.maxLength(500)),
    },
    { additionalProperties: s.json() },
  ),
);
