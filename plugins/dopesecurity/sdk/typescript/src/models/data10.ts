import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sslInspection1Schema, type SslInspection1 } from "./unions/ssl-inspection1.js";

export type Data10 = {
  sslInspection: SslInspection1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const data10Schema: Schema<Data10> = s.object<Data10>(
  {
    sslInspection: sslInspection1Schema,
  },
  { additionalProperties: s.json() },
);
