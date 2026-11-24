import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V1EmojidecoratorRequest = {
  /** The text you want decorated with emojis */
  text: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v1EmojidecoratorRequestSchema: Schema<V1EmojidecoratorRequest> =
  s.object<V1EmojidecoratorRequest>(
    {
      text: s.string(),
    },
    { additionalProperties: s.json() },
  );
