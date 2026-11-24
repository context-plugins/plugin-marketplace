import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type EventResource = {
  /** The type of resource that emitted an event. */
  type?: string;
  /** The name of the resource that emitted an event. */
  name?: string;
  /** The Amazon Resource Name (ARN) of the resource that emitted an event. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const eventResourceSchema: Schema<EventResource> = s.object<EventResource>(
  {
    type: s.optional(s.string()),
    name: s.optional(s.string()),
    arn: s.optional(s.string()),
    _keysMap: {
      type: "Type",
      name: "Name",
      arn: "Arn",
    },
  },
  { additionalProperties: s.json() },
);
