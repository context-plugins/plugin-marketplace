import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseSchema, type Response } from "./response.js";

export type ResponseIncompleteEvent = {
  /**
   * A response from the `parallel` model. A completed response contains a single assistant message
   * whose text is annotated with URL citations grounding the answer.
   */
  response: Response;
  sequenceNumber: number;
  /** @default "response.incomplete" */
  type?: "response.incomplete";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseIncompleteEventSchema: Schema<ResponseIncompleteEvent> =
  s.object<ResponseIncompleteEvent>(
    {
      response: responseSchema,
      sequenceNumber: s.int(),
      type: s.defaulted(s.literal("response.incomplete"), "response.incomplete"),
      _keysMap: {
        sequenceNumber: "sequence_number",
      },
    },
    { additionalProperties: s.json() },
  );
