import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { testSetTurnResultSchema, type TestSetTurnResult } from "./test-set-turn-result.js";

export type UtteranceLevelTestResultItem = {
  /** The record number of the result. */
  recordNumber: number;
  /** The unique identifier for the conversation associated with the result. */
  conversationId?: string;
  turnResult: TestSetTurnResult;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const utteranceLevelTestResultItemSchema: Schema<UtteranceLevelTestResultItem> =
  s.object<UtteranceLevelTestResultItem>(
    {
      recordNumber: s.int(),
      conversationId: s.optional(s.string()),
      turnResult: testSetTurnResultSchema,
    },
    { additionalProperties: s.json() },
  );
