import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { triggerSchema, type Trigger } from "./trigger.js";

/** The response message for the `ListTriggers` method. */
export type ListTriggersResponse = {
  /** Unreachable resources, if any. */
  unreachable?: string[];
  /**
   * A page token that can be sent to `ListTriggers` to request the next page. If this is empty,
   * then there are no more pages.
   */
  nextPageToken?: string;
  /** The requested triggers, up to the number specified in `page_size`. */
  triggers?: Trigger[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listTriggersResponseSchema: Schema<ListTriggersResponse> = s.object<ListTriggersResponse>(
  {
    unreachable: s.optional(s.array(s.string())),
    nextPageToken: s.optional(s.string()),
    triggers: s.optional(s.array(s.lazy(() => triggerSchema))),
  },
  { additionalProperties: s.json() },
);
