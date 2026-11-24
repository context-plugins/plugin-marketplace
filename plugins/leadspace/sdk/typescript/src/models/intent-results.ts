import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { intentDataSchema, type IntentData } from "./intent-data.js";
import { status1Schema, type Status1 } from "./status1.js";

export type IntentResults = {
  status?: Status1;
  externalId?: string;
  data?: IntentData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const intentResultsSchema: Schema<IntentResults> = s.object<IntentResults>(
  {
    status: s.optional(s.lazy(() => status1Schema)),
    externalId: s.optional(s.string()),
    data: s.optional(s.lazy(() => intentDataSchema)),
    _keysMap: {
      externalId: "external_id",
    },
  },
  { additionalProperties: s.json() },
);
