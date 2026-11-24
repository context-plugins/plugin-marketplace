import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { turnSpecificationSchema, type TurnSpecification } from "./turn-specification.js";

export type TestSetTurnRecord = {
  /** The record number associated with the turn. */
  recordNumber: number;
  /** The unique identifier for the conversation associated with the turn. */
  conversationId?: string;
  /** The number of turns that has elapsed up to that turn. */
  turnNumber?: number;
  turnSpecification: TurnSpecification;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const testSetTurnRecordSchema: Schema<TestSetTurnRecord> = s.object<TestSetTurnRecord>(
  {
    recordNumber: s.int(),
    conversationId: s.optional(s.string()),
    turnNumber: s.optional(s.int()),
    turnSpecification: turnSpecificationSchema,
  },
  { additionalProperties: s.json() },
);
