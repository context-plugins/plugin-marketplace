import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { givenUpBlockSchema, type GivenUpBlock } from "./given-up-block.js";
import { modeSchema, type Mode } from "./mode.js";
import { orderSchema, type Order } from "./order.js";
import { record2Schema, type Record2 } from "./record2.js";
import { threadSchema, type Thread } from "./thread.js";

/**
 * Response returned by GET /connectors/record/{recordId}/content.
 *
 * `content` is the record's full parsed content flattened into a single plain-text string: a
 * metadata header (title, source, key fields, and a short summary), then the record's block/table
 * text in reading order, and finally a foreign-key related-tables footer for `SQL_TABLE` records.
 *
 * For `TICKET` records (e.g. Jira) the metadata header is refreshed with live ticket fields
 * (status, assignee, comments) at request time rather than the last-indexed snapshot. `content` may
 * be empty for an indexed record with no extractable text (e.g. image-only).
 *
 * A record that exists and that the caller may read, but whose content is not indexed yet
 * (`indexingStatus` other than `COMPLETED`), has no parsed text. `content` is then a description of
 * the record instead: its metadata header (name, link, dates, type-specific fields) followed by a
 * paragraph that starts `Not indexed:` and names the status, e.g. `(status: AUTO_INDEX_OFF)`. It is
 * not the record's text.
 *
 * `content` is the literal `No record found` when the caller may read an indexed record but its
 * stored content could not be loaded. An id that does not exist, a record in the trash, and a
 * record the caller may not read all answer `403` instead.
 */
export type GetRecordContentResponseSchema = {
  /**
   * The record's full parsed content as a single plain-text string; for a record whose content is
   * not indexed yet, a description of the record and its indexing status instead (see above). In a
   * budgeted read, the part of the record (or thread) that fit.
   */
  content: string;
  /** Budgeted reads only. Which kind of read this was. */
  mode?: Mode;
  /** Budgeted record reads only. The record read. */
  recordId?: string;
  /**
   * Budgeted record reads only. `relevance` when `query` chose which blocks to show; the blocks are
   * then not contiguous.
   */
  order?: Order;
  /**
   * Budgeted reads only. Where this read started (in a thread read, within the record at
   * `startRecord`).
   */
  startBlock?: number;
  /** Budgeted record reads only. Blocks in the record. */
  totalBlocks?: number;
  /** Budgeted record reads only. The block ranges shown, as `[first, last]` pairs. */
  shownBlocks?: number[][];
  /**
   * Budgeted reads only. True when nothing of the record (or thread) is left to read after this
   * one. A block larger than the largest `maxChars` (140000) is returned cut and given up; when
   * nothing follows it, `complete` is true and `truncatedBy` is `clipped`.
   */
  complete?: boolean;
  /**
   * Budgeted reads. Why the read stopped short: `chars`, `selection`, or `clipped` (a block larger
   * than `maxChars` was cut; it takes precedence over the others). Null when the read lost nothing.
   * `clipped` can come with `complete: true`: a block given up at the largest `maxChars` with
   * nothing after it.
   */
  truncatedBy?: string | null;
  /**
   * Budgeted record reads only. A block larger than the largest `maxChars` (140000) that this read
   * cut and gave up: no read can return the rest of it. Set in the read that gave it up, even when
   * more of the record follows.
   */
  givenUpBlock?: number | null;
  /** Thread reads only. Every block this read gave up at the largest `maxChars`, by record. */
  givenUpBlocks?: GivenUpBlock[];
  /**
   * Pass as `startBlock` to read on; null when nothing is left. In a thread read it is the block of
   * the record at `nextStartRecord` (0 unless that record was cut short). A block larger than
   * `maxChars` holds it on that block: send it again with a larger `maxChars` (up to 140000) to
   * read the block whole.
   */
  nextStartBlock?: number | null;
  /** Thread reads only. Records in the thread the caller may see. */
  threadRecordCount?: number;
  /** Thread reads only. Where this read started. */
  startRecord?: number;
  /**
   * Thread reads only. Pass as `startRecord`, with `nextStartBlock` as `startBlock`, to read on. It
   * stays on a record that was cut short until that record has been read to its end. A block larger
   * than `maxChars` holds the cursor on that block; send the same cursor with a larger `maxChars`
   * to read it. Null when nothing is left to read, and `complete` is then true. A block given up at
   * the largest `maxChars` is named in the text, and its record's entry in `records` has
   * `truncatedBy: clipped`.
   */
  nextStartRecord?: number | null;
  /** Thread reads only. The records shown, oldest first. */
  records?: Record2[];
  /**
   * Thread reads only. Records of the thread the caller may see whose content could not be loaded.
   */
  unreadableRecordIds?: string[];
  /**
   * Thread reads of a Slack record in no single thread only (several channel messages in one
   * record, or a message without replies). The threads its messages started whose replies follow it
   * in `records`, in the order their first messages were posted; empty when none of its messages
   * has replies the caller may see.
   */
  threads?: Thread[];
  /**
   * Thread reads of a Slack record in no single thread only. Threads of its messages left out
   * because one read covers at most 10.
   */
  threadsNotRead?: number;
  /** Budgeted reads only. Characters in `content`. */
  chars?: number;
  /** Budgeted reads only. The budget this read used. */
  maxChars?: number;
};

export const getRecordContentResponseSchemaSchema: Schema<GetRecordContentResponseSchema> =
  s.object<GetRecordContentResponseSchema>({
    content: s.string(),
    mode: s.optional(s.lazy(() => modeSchema)),
    recordId: s.optional(s.string()),
    order: s.optional(s.lazy(() => orderSchema)),
    startBlock: s.optional(s.int()),
    totalBlocks: s.optional(s.int()),
    shownBlocks: s.optional(s.array(s.array(s.int()))),
    complete: s.optional(s.boolean()),
    truncatedBy: s.optionalNullable(s.string()),
    givenUpBlock: s.optionalNullable(s.int()),
    givenUpBlocks: s.optional(s.array(s.lazy(() => givenUpBlockSchema))),
    nextStartBlock: s.optionalNullable(s.int()),
    threadRecordCount: s.optional(s.int()),
    startRecord: s.optional(s.int()),
    nextStartRecord: s.optionalNullable(s.int()),
    records: s.optional(s.array(s.lazy(() => record2Schema))),
    unreadableRecordIds: s.optional(s.array(s.string())),
    threads: s.optional(s.array(s.lazy(() => threadSchema))),
    threadsNotRead: s.optional(s.int()),
    chars: s.optional(s.int()),
    maxChars: s.optional(s.int()),
  });
