import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { directoryExtensionSchema, type DirectoryExtension } from "./directory-extension.js";
import { comments2Schema, type Comments2 } from "./unions/comments2.js";
import { operationSchema, type Operation } from "./unions/operation.js";

/** API response for one version in a directory member's history (GET /{member_id}/history). */
export type DirectoryMemberHistoryResponse = {
  /** ID of the directory member */
  directoryMemberId: number;
  /** 1-based ordinal in the history list (1 = oldest) */
  version: number;
  /** When this version was recorded */
  timestamp: Date;
  /** Name at this version */
  name: string;
  /** Type at this version */
  type: string;
  /** Extensions at this version */
  extensions?: DirectoryExtension[];
  /** Contact tags at this version */
  contactTags?: Record<string, Record<string, unknown>>;
  /** User who made the change */
  userEmail: string;
  /** Optional comment for this version */
  comments?: Comments2;
  /**
   * What produced this row: create, update, delete, restore, bulk_load. Null for rows created
   * before this field existed.
   */
  operation?: Operation;
};

export const directoryMemberHistoryResponseSchema: Schema<DirectoryMemberHistoryResponse> =
  s.object<DirectoryMemberHistoryResponse>({
    directoryMemberId: s.int(),
    version: s.int(),
    timestamp: s.dateTime(),
    name: s.string(),
    type: s.string(),
    extensions: s.optional(s.array(s.lazy(() => directoryExtensionSchema))),
    contactTags: s.optional(s.record(s.string(), s.record(s.string(), s.unknown()))),
    userEmail: s.string(),
    comments: s.optional(s.lazy(() => comments2Schema)),
    operation: s.optional(s.lazy(() => operationSchema)),
    _keysMap: {
      directoryMemberId: "directory_member_id",
      contactTags: "contact_tags",
      userEmail: "user_email",
    },
  });
