import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { findStrategySchema, type FindStrategy } from "./find-strategy.js";
import { mergeStrategySchema, type MergeStrategy } from "./merge-strategy.js";
import { personInputSchema, type PersonInput } from "./person-input.js";

export type PersonMergeRequest = {
  people: PersonInput[];
  /** Up to 3 field IDs used to identify existing records. */
  mergeBy: string[];
  /** 1 = append only, 2 = overwrite existing, 3 = ignore. */
  mergeStrategy?: MergeStrategy;
  /** 0 = any, 1 = sequential, 2 = all. */
  findStrategy?: FindStrategy;
  /** Queue processing when true; recommended for large batches. */
  async?: boolean;
  /** When true, only updates existing records. */
  skipNonExisting?: boolean;
  suppressionListFieldId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const personMergeRequestProperties: s.Shape<PersonMergeRequest> = {
  people: s.array(s.lazy(() => personInputSchema)),
  mergeBy: s.array(s.string()),
  mergeStrategy: s.optional(s.lazy(() => mergeStrategySchema)),
  findStrategy: s.optional(s.lazy(() => findStrategySchema)),
  async: s.optional(s.boolean()),
  skipNonExisting: s.optional(s.boolean()),
  suppressionListFieldId: s.optional(s.string()),
  _keysMap: {
    mergeBy: "merge_by",
    mergeStrategy: "merge_strategy",
    findStrategy: "find_strategy",
    skipNonExisting: "skip_non_existing",
    suppressionListFieldId: "suppression_list_field_id",
  },
};

export const personMergeRequestInternalSchema: Schema<PersonMergeRequest> = s.object<PersonMergeRequest>(
  personMergeRequestProperties,
  { additionalProperties: s.json() },
);

export const personMergeRequestSchema: Schema<PersonMergeRequest> = s.lazySchema(() =>
  s.object<PersonMergeRequest>(
    {
      ...personMergeRequestProperties,
      people: s.array(s.lazy(() => personInputSchema)).check(s.maxLength(100)),
      mergeBy: s.array(s.string()).check(s.maxLength(3)),
    },
    { additionalProperties: s.json() },
  ),
);
