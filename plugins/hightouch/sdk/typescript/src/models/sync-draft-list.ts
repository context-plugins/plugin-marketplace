import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { syncDraftSchema, type SyncDraft } from "./sync-draft.js";

export type SyncDraftList = {
  data: SyncDraft[];
  /**
   * Pass as `cursor` to read the next page; null on the last page. A page can hold fewer than
   * `limit` drafts and still have a next page.
   */
  nextCursor: string | null;
};

export const syncDraftListSchema: Schema<SyncDraftList> = s.object<SyncDraftList>({
  data: s.array(s.lazy(() => syncDraftSchema)),
  nextCursor: s.nullable(s.string()),
});
