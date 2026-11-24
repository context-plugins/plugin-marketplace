import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Input model for FindAll ingest. */
export type IngestInput = {
  /** Natural language objective to create a FindAll run spec. */
  objective: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ingestInputSchema: Schema<IngestInput> = s.object<IngestInput>(
  {
    objective: s.string(),
  },
  { additionalProperties: s.json() },
);
