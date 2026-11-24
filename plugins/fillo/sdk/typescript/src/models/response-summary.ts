import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { fieldSchema, type Field } from "./field.js";
import { recentSchema, type Recent } from "./recent.js";

export type ResponseSummary = {
  formId: string;
  /** Accepted responses counted. */
  total: number;
  firstAt: Date | null;
  lastAt: Date | null;
  fields: Field[];
  recent: Recent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSummarySchema: Schema<ResponseSummary> = s.object<ResponseSummary>(
  {
    formId: s.string(),
    total: s.int(),
    firstAt: s.nullable(s.dateTime()),
    lastAt: s.nullable(s.dateTime()),
    fields: s.array(s.lazy(() => fieldSchema)),
    recent: s.array(s.lazy(() => recentSchema)),
  },
  { additionalProperties: s.json() },
);
