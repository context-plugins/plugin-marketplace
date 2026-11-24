import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Stream Block Data. */
export type StreamBlockData = {
  deserialized?: boolean;
  diskSize?: string;
  useMemory?: boolean;
  name?: string;
  useDisk?: boolean;
  hostPort?: string;
  executorId?: string;
  memSize?: string;
  storageLevel?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const streamBlockDataSchema: Schema<StreamBlockData> = s.object<StreamBlockData>(
  {
    deserialized: s.optional(s.boolean()),
    diskSize: s.optional(s.string()),
    useMemory: s.optional(s.boolean()),
    name: s.optional(s.string()),
    useDisk: s.optional(s.boolean()),
    hostPort: s.optional(s.string()),
    executorId: s.optional(s.string()),
    memSize: s.optional(s.string()),
    storageLevel: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
