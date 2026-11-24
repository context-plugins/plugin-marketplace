import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { messageBusSchema, type MessageBus } from "./message-bus.js";

/** The response message for the `ListMessageBuses` method. */
export type ListMessageBusesResponse = {
  /**
   * A page token that can be sent to `ListMessageBuses` to request the next page. If this is empty,
   * then there are no more pages.
   */
  nextPageToken?: string;
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /** The requested message buses, up to the number specified in `page_size`. */
  messageBuses?: MessageBus[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listMessageBusesResponseSchema: Schema<ListMessageBusesResponse> =
  s.object<ListMessageBusesResponse>(
    {
      nextPageToken: s.optional(s.string()),
      unreachable: s.optional(s.array(s.string())),
      messageBuses: s.optional(s.array(s.lazy(() => messageBusSchema))),
    },
    { additionalProperties: s.json() },
  );
