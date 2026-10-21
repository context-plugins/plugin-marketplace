import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data4Schema, type Data4 } from "./data4.js";

export type V1OracleProtocolsResponse1 = {
  data: Data4;
};

export const v1OracleProtocolsResponse1Schema: Schema<V1OracleProtocolsResponse1> =
  s.object<V1OracleProtocolsResponse1>({
    data: data4Schema,
  });
