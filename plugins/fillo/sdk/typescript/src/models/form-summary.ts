import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type FormSummary = {
  id: string;
  slug: string;
  name: string;
  status: Status;
  createdAt: Date;
  responseCount: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const formSummarySchema: Schema<FormSummary> = s.object<FormSummary>(
  {
    id: s.string(),
    slug: s.string(),
    name: s.string(),
    status: statusSchema,
    createdAt: s.dateTime(),
    responseCount: s.int(),
  },
  { additionalProperties: s.json() },
);
