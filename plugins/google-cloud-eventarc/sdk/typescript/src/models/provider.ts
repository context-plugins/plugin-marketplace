import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { eventTypeSchema, type EventType } from "./event-type.js";

/** A representation of the Provider resource. */
export type Provider = {
  /** Output only. In `projects/{project}/locations/{location}/providers/{provider_id}` format. */
  name?: string;
  /** Output only. Human friendly name for the Provider. For example "Cloud Storage". */
  displayName?: string;
  /** Output only. Event types for this provider. */
  eventTypes?: EventType[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const providerSchema: Schema<Provider> = s.object<Provider>(
  {
    name: s.optional(s.string()),
    displayName: s.optional(s.string()),
    eventTypes: s.optional(s.array(s.lazy(() => eventTypeSchema))),
  },
  { additionalProperties: s.json() },
);
