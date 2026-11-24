import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Thread1 = {
  threadId: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, unknown>;
};

export const thread1Schema: Schema<Thread1> = s.object<Thread1>(
  {
    threadId: s.string(),
  },
  { additionalProperties: s.unknown() },
);
