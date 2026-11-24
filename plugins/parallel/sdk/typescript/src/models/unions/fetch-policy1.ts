import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { fetchPolicySchema, type FetchPolicy } from "../fetch-policy.js";

/**
 * Fetch policy: determines when to return cached content from the index (faster) vs fetching live
 * content (fresher). Default is to use a dynamic policy based on the search objective and url.
 * Note: enabling live fetch significantly increases extract latency because it requires fetching
 * content from source websites., Fetch policy: determines when to return cached content from the
 * index (faster) vs fetching live content (fresher). Default is to disable live fetch and return
 * cached content from the index. Note: enabling live fetch significantly increases search latency
 * because it requires fetching content from source websites.
 */
export type FetchPolicy1 = FetchPolicy;

export const fetchPolicy1Schema: Schema<FetchPolicy1> = s.of<FetchPolicy1>(
  s.union([s.lazy(() => fetchPolicySchema)]),
);
