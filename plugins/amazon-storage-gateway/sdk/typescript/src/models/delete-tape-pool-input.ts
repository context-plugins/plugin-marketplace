import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type DeleteTapePoolInput = {
  /** The Amazon Resource Name (ARN) of the custom tape pool to delete. */
  poolArn: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deleteTapePoolInputSchema: Schema<DeleteTapePoolInput> = s.object<DeleteTapePoolInput>(
  {
    poolArn: s.string(),
    _keysMap: {
      poolArn: "PoolARN",
    },
  },
  { additionalProperties: s.json() },
);
