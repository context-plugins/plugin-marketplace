import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { scopeSchema, type Scope } from "./scope.js";
import {
  statusHudPlatformDataApiSchema,
  type StatusHudPlatformDataApi,
} from "./status-hud-platform-data-api.js";
import { contentTypeSchema, type ContentType } from "./unions/content-type.js";
import { sizeBytesSchema, type SizeBytes } from "./unions/size-bytes.js";

/** Size is reserved up front and verified against the stored object on completion. */
export type DataFileResponse = {
  id: string;
  teamId: string;
  membershipId: number;
  scope: Scope;
  status: StatusHudPlatformDataApi;
  filename: string;
  contentType: ContentType;
  sizeBytes: SizeBytes;
  createdAt: Date;
  updatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataFileResponseSchema: Schema<DataFileResponse> = s.object<DataFileResponse>(
  {
    id: s.string(),
    teamId: s.string(),
    membershipId: s.int(),
    scope: scopeSchema,
    status: statusHudPlatformDataApiSchema,
    filename: s.string(),
    contentType: contentTypeSchema,
    sizeBytes: sizeBytesSchema,
    createdAt: s.dateTime(),
    updatedAt: s.dateTime(),
    _keysMap: {
      teamId: "team_id",
      membershipId: "membership_id",
      contentType: "content_type",
      sizeBytes: "size_bytes",
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  },
  { additionalProperties: s.json() },
);
