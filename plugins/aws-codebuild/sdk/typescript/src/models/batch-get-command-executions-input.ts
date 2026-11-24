import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BatchGetCommandExecutionsInput = {
  /** A sandboxId or sandboxArn. */
  sandboxId: string;
  /** A comma separated list of commandExecutionIds. */
  commandExecutionIds: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const batchGetCommandExecutionsInputSchema: Schema<BatchGetCommandExecutionsInput> =
  s.object<BatchGetCommandExecutionsInput>(
    {
      sandboxId: s.string(),
      commandExecutionIds: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
