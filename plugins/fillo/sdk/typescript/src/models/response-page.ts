import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { responseRowSchema, type ResponseRow } from "./response-row.js";

export type ResponsePage = {
  data: ResponseRow[];
  nextCursor: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responsePageSchema: Schema<ResponsePage> = s.object<ResponsePage>(
  {
    data: s.array(s.lazy(() => responseRowSchema)),
    nextCursor: s.nullable(s.string()),
  },
  { additionalProperties: s.json() },
);
