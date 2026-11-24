import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";
import { responseCompletedEventSchema, type ResponseCompletedEvent } from "../response-completed-event.js";
import {
  responseContentPartAddedEventSchema,
  type ResponseContentPartAddedEvent,
} from "../response-content-part-added-event.js";
import {
  responseContentPartDoneEventSchema,
  type ResponseContentPartDoneEvent,
} from "../response-content-part-done-event.js";
import { responseCreatedEventSchema, type ResponseCreatedEvent } from "../response-created-event.js";
import { responseFailedEventSchema, type ResponseFailedEvent } from "../response-failed-event.js";
import {
  responseInProgressEventSchema,
  type ResponseInProgressEvent,
} from "../response-in-progress-event.js";
import { responseIncompleteEventSchema, type ResponseIncompleteEvent } from "../response-incomplete-event.js";
import {
  responseOutputItemAddedEventSchema,
  type ResponseOutputItemAddedEvent,
} from "../response-output-item-added-event.js";
import {
  responseOutputItemDoneEventSchema,
  type ResponseOutputItemDoneEvent,
} from "../response-output-item-done-event.js";
import {
  responseOutputTextAnnotationAddedEventSchema,
  type ResponseOutputTextAnnotationAddedEvent,
} from "../response-output-text-annotation-added-event.js";
import { responseTextDeltaEventSchema, type ResponseTextDeltaEvent } from "../response-text-delta-event.js";
import { responseTextDoneEventSchema, type ResponseTextDoneEvent } from "../response-text-done-event.js";

/** An event in the Responses API SSE stream; `type` identifies the event. */
export type ResponseStreamEvent =
  | ResponseCreatedEvent
  | ResponseInProgressEvent
  | ResponseOutputItemAddedEvent
  | ResponseContentPartAddedEvent
  | ResponseTextDeltaEvent
  | ResponseTextDoneEvent
  | ResponseOutputTextAnnotationAddedEvent
  | ResponseContentPartDoneEvent
  | ResponseOutputItemDoneEvent
  | ResponseCompletedEvent
  | ResponseFailedEvent
  | ResponseIncompleteEvent;

export const responseStreamEventSchema: Schema<ResponseStreamEvent> = s.of<ResponseStreamEvent>(
  s.union([
    s.lazy(() => responseCreatedEventSchema),
    s.lazy(() => responseInProgressEventSchema),
    s.lazy(() => responseOutputItemAddedEventSchema),
    s.lazy(() => responseContentPartAddedEventSchema),
    s.lazy(() => responseTextDeltaEventSchema),
    s.lazy(() => responseTextDoneEventSchema),
    s.lazy(() => responseOutputTextAnnotationAddedEventSchema),
    s.lazy(() => responseContentPartDoneEventSchema),
    s.lazy(() => responseOutputItemDoneEventSchema),
    s.lazy(() => responseCompletedEventSchema),
    s.lazy(() => responseFailedEventSchema),
    s.lazy(() => responseIncompleteEventSchema),
  ]),
);
