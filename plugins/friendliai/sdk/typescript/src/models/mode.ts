import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Primary API endpoint type for this model.
 *
 * ``chat`` routes requests to ``/v1/chat/completions``, ``completion`` to ``/v1/completions``, and
 * ``embedding`` to ``/v1/embeddings``.
 */
export const Mode = {
  Chat: "chat",
  Completion: "completion",
  Embedding: "embedding",
} as const;
export type Mode = (typeof Mode)[keyof typeof Mode] | (string & {});

export const modeSchema: EnumSchema<Mode> = s.enumOf<Mode>(Mode);
