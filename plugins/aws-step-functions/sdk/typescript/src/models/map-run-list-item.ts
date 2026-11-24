import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type MapRunListItem = {
  /** The executionArn of the execution from which the Map Run was started. */
  executionArn: string;
  /** The Amazon Resource Name (ARN) of the Map Run. */
  mapRunArn: string;
  /** The Amazon Resource Name (ARN) of the executed state machine. */
  stateMachineArn: string;
  /** The date on which the Map Run started. */
  startDate: Date;
  /** The date on which the Map Run stopped. */
  stopDate?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mapRunListItemSchema: Schema<MapRunListItem> = s.object<MapRunListItem>(
  {
    executionArn: s.string(),
    mapRunArn: s.string(),
    stateMachineArn: s.string(),
    startDate: s.dateTime(),
    stopDate: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
