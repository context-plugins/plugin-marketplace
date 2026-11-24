import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { backupSchema, type Backup } from "./backup.js";

/** Response message for DataprocMetastore.ListBackups. */
export type ListBackupsResponse = {
  /** Locations that could not be reached. */
  unreachable?: string[];
  /**
   * A token that can be sent as page_token to retrieve the next page. If this field is omitted,
   * there are no subsequent pages.
   */
  nextPageToken?: string;
  /** The backups of the specified service. */
  backups?: Backup[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBackupsResponseSchema: Schema<ListBackupsResponse> = s.object<ListBackupsResponse>(
  {
    unreachable: s.optional(s.array(s.string())),
    nextPageToken: s.optional(s.string()),
    backups: s.optional(s.array(s.lazy(() => backupSchema))),
  },
  { additionalProperties: s.json() },
);
