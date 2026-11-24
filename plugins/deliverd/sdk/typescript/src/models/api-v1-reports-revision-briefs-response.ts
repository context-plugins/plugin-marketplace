import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { thread1Schema, type Thread1 } from "./thread1.js";

export type ApiV1ReportsRevisionBriefsResponse = {
  id: string;
  reportId: string;
  fromVersion: number | null;
  prompt: string;
  threads: Thread1[];
  createdAt: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsRevisionBriefsResponseSchema: Schema<ApiV1ReportsRevisionBriefsResponse> =
  s.object<ApiV1ReportsRevisionBriefsResponse>(
    {
      id: s.string(),
      reportId: s.string(),
      fromVersion: s.nullable(s.int()),
      prompt: s.string(),
      threads: s.array(s.lazy(() => thread1Schema)),
      createdAt: s.string(),
    },
    { additionalProperties: s.json() },
  );
