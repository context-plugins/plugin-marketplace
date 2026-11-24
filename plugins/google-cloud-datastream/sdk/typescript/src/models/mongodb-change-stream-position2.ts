import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** MongoDB change stream position to start replicating from. */
export type MongodbChangeStreamPosition2 = {
  /** Required. The timestamp to start change stream from. */
  startTime?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const mongodbChangeStreamPosition2Schema: Schema<MongodbChangeStreamPosition2> =
  s.object<MongodbChangeStreamPosition2>(
    {
      startTime: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
