import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesSuccess2Schema, type ResponsesSuccess2 } from "./responses-success2.js";
import { type6Schema, type Type6 } from "./type6.js";

export type ResponsesStreamResponseEvent = {
  /** The type of the event. */
  type: Type6;
  /** The response snapshot associated with this lifecycle event. */
  response: ResponsesSuccess2;
  /** The sequence number for this event. */
  sequenceNumber: number;
};

export const responsesStreamResponseEventSchema: Schema<ResponsesStreamResponseEvent> =
  s.object<ResponsesStreamResponseEvent>({
    type: type6Schema,
    response: responsesSuccess2Schema,
    sequenceNumber: s.int(),
    _keysMap: {
      sequenceNumber: "sequence_number",
    },
  });
