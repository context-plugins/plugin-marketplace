import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MongoDB change stream position */
export type MongodbChangeStreamPosition = {
  /** Required. The timestamp to start change stream from. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbChangeStreamPositionSchema: Schema<MongodbChangeStreamPosition> =
  s.object<MongodbChangeStreamPosition>(
    {
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
