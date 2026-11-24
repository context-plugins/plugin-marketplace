import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { actionSchema, type Action } from "./action.js";
import { segmentSchema, type Segment } from "./segment.js";

export type KillSwitchSegmentUpdateRequest = {
  segment: Segment;
  action: Action;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const killSwitchSegmentUpdateRequestSchema: Schema<KillSwitchSegmentUpdateRequest> =
  s.object<KillSwitchSegmentUpdateRequest>(
    {
      segment: segmentSchema,
      action: actionSchema,
    },
    { additionalProperties: s.json() },
  );
