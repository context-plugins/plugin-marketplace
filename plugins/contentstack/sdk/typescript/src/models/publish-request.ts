import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { entry1Schema, type Entry1 } from "./entry1.js";

/** Parameters for publishing or unpublishing an entry or asset. */
export type PublishRequest = {
  /** Publish configuration. */
  entry?: Entry1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const publishRequestSchema: Schema<PublishRequest> = s.object<PublishRequest>(
  {
    entry: s.optional(s.lazy(() => entry1Schema)),
  },
  { additionalProperties: s.json() },
);
