import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { responsesStreamEventSchema, type ResponsesStreamEvent } from "./unions/responses-stream-event.js";

export type ServerlessResponsesStreamSuccess = {
  /** A server-sent event containing a streamed Responses API update. */
  data: ResponsesStreamEvent;
};

export const serverlessResponsesStreamSuccessSchema: Schema<ServerlessResponsesStreamSuccess> =
  s.object<ServerlessResponsesStreamSuccess>({
    data: responsesStreamEventSchema,
  });
