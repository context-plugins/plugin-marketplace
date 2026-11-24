import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testSetTurnRecordSchema, type TestSetTurnRecord } from "./test-set-turn-record.js";

export type ListTestSetRecordsResponse = {
  /** The list of records from the test set. */
  testSetRecords?: TestSetTurnRecord[];
  /**
   * A token that indicates whether there are more records to return in a response to the
   * ListTestSetRecords operation. If the nextToken field is present, you send the contents as the
   * nextToken parameter of a ListTestSetRecords operation request to get the next page of records.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTestSetRecordsResponseSchema: Schema<ListTestSetRecordsResponse> =
  s.object<ListTestSetRecordsResponse>(
    {
      testSetRecords: s.optional(s.array(s.lazy(() => testSetTurnRecordSchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
