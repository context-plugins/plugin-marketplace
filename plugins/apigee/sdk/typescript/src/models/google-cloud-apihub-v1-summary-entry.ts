import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { severity1Schema, type Severity1 } from "./severity1.js";

/** Count of issues with a given severity. */
export type GoogleCloudApihubV1SummaryEntry = {
  /** Required. Severity of the issue. */
  severity?: Severity1;
  /** Required. Count of issues with the given severity. */
  count?: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApihubV1SummaryEntrySchema: Schema<GoogleCloudApihubV1SummaryEntry> =
  s.object<GoogleCloudApihubV1SummaryEntry>(
    {
      severity: s.optional(s.lazy(() => severity1Schema)),
      count: s.optional(s.int()),
    },
    { additionalProperties: s.json() },
  );
