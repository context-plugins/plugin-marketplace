import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { excludeCandidateSchema, type ExcludeCandidate } from "../exclude-candidate.js";

/** List of entity names/IDs to exclude from results. At most 10,000 entries are allowed. */
export type ExcludeList = ExcludeCandidate[];

export const excludeListInternalSchema: Schema<ExcludeList> = s.of<ExcludeList>(
  s.union([s.array(s.lazy(() => excludeCandidateSchema))]),
);

export const excludeListSchema: Schema<ExcludeList> = s.lazySchema(() =>
  s.of<ExcludeList>(s.union([s.array(s.lazy(() => excludeCandidateSchema)).check(s.maxLength(10000))])),
);
