import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Block14 = {
  /** Discriminator value: content_break @default "content_break" */
  type?: "content_break";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const block14Schema: Schema<Block14> = s.object<Block14>(
  {
    type: s.defaulted(s.literal("content_break"), "content_break"),
  },
  { additionalProperties: s.json() },
);
