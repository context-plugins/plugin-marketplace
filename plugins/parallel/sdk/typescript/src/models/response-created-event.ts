import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type ResponseCreatedEvent = {
  /**
   * A response from the `parallel` model. A completed response contains a single assistant message
   * whose text is annotated with URL citations grounding the answer.
   */
  response: Response;
  sequenceNumber: number;
  /** @default "response.created" */
  type?: "response.created";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseCreatedEventSchema: Schema<ResponseCreatedEvent> = s.object<ResponseCreatedEvent>(
  {
    response: responseSchema,
    sequenceNumber: s.int(),
    type: s.defaulted(s.literal("response.created"), "response.created"),
    _keysMap: {
      sequenceNumber: "sequence_number",
    },
  },
  { additionalProperties: s.json() },
);
