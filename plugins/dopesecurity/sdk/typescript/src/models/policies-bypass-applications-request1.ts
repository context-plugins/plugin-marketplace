import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { data8Schema, type Data8 } from "./data8.js";

export type PoliciesBypassApplicationsRequest1 = {
  data: Data8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const policiesBypassApplicationsRequest1Schema: Schema<PoliciesBypassApplicationsRequest1> =
  s.object<PoliciesBypassApplicationsRequest1>(
    {
      data: data8Schema,
    },
    { additionalProperties: s.json() },
  );
