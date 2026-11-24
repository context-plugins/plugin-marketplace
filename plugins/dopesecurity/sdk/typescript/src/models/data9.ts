import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sslInspectionResponseSchema, type SslInspectionResponse } from "./ssl-inspection-response.js";

export type Data9 = {
  /** SSL inspection configuration for a policy. */
  sslInspection: SslInspectionResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data9Schema: Schema<Data9> = s.object<Data9>(
  {
    sslInspection: sslInspectionResponseSchema,
  },
  { additionalProperties: s.json() },
);
