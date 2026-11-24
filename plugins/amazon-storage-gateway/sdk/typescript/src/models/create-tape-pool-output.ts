import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateTapePoolOutput = {
  /**
   * The unique Amazon Resource Name (ARN) that represents the custom tape pool. Use the
   * ListTapePools operation to return a list of tape pools for your account and Amazon Web Services
   * Region.
   */
  poolArn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createTapePoolOutputSchema: Schema<CreateTapePoolOutput> = s.object<CreateTapePoolOutput>(
  {
    poolArn: s.optional(s.string()),
    _keysMap: {
      poolArn: "PoolARN",
    },
  },
  { additionalProperties: s.json() },
);
