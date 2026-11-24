import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const SupportedEvent = {
  SupportedEventUnspecified: "SUPPORTED_EVENT_UNSPECIFIED",
  RequestHeaders: "REQUEST_HEADERS",
  RequestBody: "REQUEST_BODY",
  ResponseHeaders: "RESPONSE_HEADERS",
  ResponseBody: "RESPONSE_BODY",
  RequestTrailers: "REQUEST_TRAILERS",
  ResponseTrailers: "RESPONSE_TRAILERS",
} as const;
export type SupportedEvent = (typeof SupportedEvent)[keyof typeof SupportedEvent] | (string & {});

export const supportedEventSchema: EnumSchema<SupportedEvent> = s.enumOf<SupportedEvent>(SupportedEvent);
