import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data9Schema, type Data9 } from "./data9.js";

export type PoliciesSslInspectionResponse = {
  data: Data9;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesSslInspectionResponseSchema: Schema<PoliciesSslInspectionResponse> =
  s.object<PoliciesSslInspectionResponse>(
    {
      data: data9Schema,
    },
    { additionalProperties: s.json() },
  );
