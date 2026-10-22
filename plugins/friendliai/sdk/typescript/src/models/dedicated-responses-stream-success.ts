import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesStreamEventSchema, type ResponsesStreamEvent } from "./unions/responses-stream-event.js";

export type DedicatedResponsesStreamSuccess = {
  /** A server-sent event containing a streamed Responses API update. */
  data: ResponsesStreamEvent;
};

export const dedicatedResponsesStreamSuccessSchema: Schema<DedicatedResponsesStreamSuccess> =
  s.object<DedicatedResponsesStreamSuccess>({
    data: responsesStreamEventSchema,
  });
