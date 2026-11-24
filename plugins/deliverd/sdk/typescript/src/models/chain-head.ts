import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The audit chain head the pack recorded when it was taken. */
export type ChainHead = {
  seq: number;
  hash: string;
  at: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const chainHeadSchema: Schema<ChainHead> = s.object<ChainHead>(
  {
    seq: s.int(),
    hash: s.string(),
    at: s.string(),
  },
  { additionalProperties: s.json() },
);
