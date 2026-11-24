import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data10Schema, type Data10 } from "./data10.js";

export type PoliciesSslInspectionRequest = {
  data: Data10;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesSslInspectionRequestSchema: Schema<PoliciesSslInspectionRequest> =
  s.object<PoliciesSslInspectionRequest>(
    {
      data: data10Schema,
    },
    { additionalProperties: s.json() },
  );
