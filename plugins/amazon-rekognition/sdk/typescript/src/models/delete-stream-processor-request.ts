import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteStreamProcessorRequest = {
  /** The name of the stream processor you want to delete. */
  name: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteStreamProcessorRequestSchema: Schema<DeleteStreamProcessorRequest> =
  s.object<DeleteStreamProcessorRequest>(
    {
      name: s.string(),
      _keysMap: {
        name: "Name",
      },
    },
    { additionalProperties: s.json() },
  );
