import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testSetSchema, type TestSet } from "./test-set.js";

/** Paginated response containing test sets */
export type TestSetListResponse = {
  /** Total number of test sets */
  totalCount?: number;
  testSets?: TestSet[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetListResponseSchema: Schema<TestSetListResponse> = s.object<TestSetListResponse>(
  {
    totalCount: s.optional(s.int()),
    testSets: s.optional(s.array(s.lazy(() => testSetSchema))),
  },
  { additionalProperties: s.json() },
);
