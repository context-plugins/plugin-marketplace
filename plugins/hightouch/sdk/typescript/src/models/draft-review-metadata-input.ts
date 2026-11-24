import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Identifies the reviewer in the caller's own approval system. */
export type DraftReviewMetadataInput = {
  /** The reviewer's id in the caller's approval system */
  extId: string;
};

const draftReviewMetadataInputProperties: s.Shape<DraftReviewMetadataInput> = {
  extId: s.string(),
};

export const draftReviewMetadataInputInternalSchema: Schema<DraftReviewMetadataInput> =
  s.object<DraftReviewMetadataInput>(draftReviewMetadataInputProperties);

export const draftReviewMetadataInputSchema: Schema<DraftReviewMetadataInput> = s.lazySchema(() =>
  s.object<DraftReviewMetadataInput>({
    ...draftReviewMetadataInputProperties,
    extId: s.string().check(s.minLength(1), s.maxLength(255)),
  }),
);
