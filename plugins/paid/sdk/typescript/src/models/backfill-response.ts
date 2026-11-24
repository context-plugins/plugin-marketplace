import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type BackfillResponse = {
  valueModelId: string;
  version: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const backfillResponseSchema: Schema<BackfillResponse> = s.object<BackfillResponse>(
  {
    valueModelId: s.string(),
    version: s.int(),
  },
  { additionalProperties: s.json() },
);
