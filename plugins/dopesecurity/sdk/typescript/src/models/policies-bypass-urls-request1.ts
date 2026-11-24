import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data6Schema, type Data6 } from "./data6.js";

export type PoliciesBypassUrlsRequest1 = {
  data: Data6;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesBypassUrlsRequest1Schema: Schema<PoliciesBypassUrlsRequest1> =
  s.object<PoliciesBypassUrlsRequest1>(
    {
      data: data6Schema,
    },
    { additionalProperties: s.json() },
  );
