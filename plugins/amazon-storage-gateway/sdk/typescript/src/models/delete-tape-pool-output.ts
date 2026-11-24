import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTapePoolOutput = {
  /** The Amazon Resource Name (ARN) of the custom tape pool being deleted. */
  poolArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTapePoolOutputSchema: Schema<DeleteTapePoolOutput> = s.object<DeleteTapePoolOutput>(
  {
    poolArn: s.optional(s.string()),
    _keysMap: {
      poolArn: "PoolARN",
    },
  },
  { additionalProperties: s.json() },
);
