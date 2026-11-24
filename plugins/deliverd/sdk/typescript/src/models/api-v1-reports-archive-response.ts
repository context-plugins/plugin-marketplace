import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { status11Schema, type Status11 } from "./status11.js";

export type ApiV1ReportsArchiveResponse = {
  id: string;
  status: Status11;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ReportsArchiveResponseSchema: Schema<ApiV1ReportsArchiveResponse> =
  s.object<ApiV1ReportsArchiveResponse>(
    {
      id: s.string(),
      status: status11Schema,
    },
    { additionalProperties: s.json() },
  );
