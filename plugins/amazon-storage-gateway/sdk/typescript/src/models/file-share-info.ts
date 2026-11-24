import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fileShareTypeSchema, type FileShareType } from "./file-share-type.js";

export type FileShareInfo = {
  fileShareType?: FileShareType;
  fileShareArn?: string;
  fileShareId?: string;
  fileShareStatus?: string;
  gatewayArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const fileShareInfoSchema: Schema<FileShareInfo> = s.object<FileShareInfo>(
  {
    fileShareType: s.optional(s.lazy(() => fileShareTypeSchema)),
    fileShareArn: s.optional(s.string()),
    fileShareId: s.optional(s.string()),
    fileShareStatus: s.optional(s.string()),
    gatewayArn: s.optional(s.string()),
    _keysMap: {
      fileShareType: "FileShareType",
      fileShareArn: "FileShareARN",
      fileShareId: "FileShareId",
      fileShareStatus: "FileShareStatus",
      gatewayArn: "GatewayARN",
    },
  },
  { additionalProperties: s.json() },
);
