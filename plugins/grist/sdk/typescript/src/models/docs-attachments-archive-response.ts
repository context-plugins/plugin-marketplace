import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DocsAttachmentsArchiveResponse = {
  /** Total files added to external storage. */
  added?: number;
  /** Total files that errored when attempting to process them. */
  errored?: number;
  /** Total files that aren't needed, or don't match an existing attachment. */
  unused?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const docsAttachmentsArchiveResponseSchema: Schema<DocsAttachmentsArchiveResponse> =
  s.object<DocsAttachmentsArchiveResponse>(
    {
      added: s.optional(s.int()),
      errored: s.optional(s.int()),
      unused: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
