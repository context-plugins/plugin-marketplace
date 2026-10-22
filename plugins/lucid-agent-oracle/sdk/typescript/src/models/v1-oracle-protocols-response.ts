import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { data3Schema, type Data3 } from "./data3.js";

export type V1OracleProtocolsResponse = {
  data: Data3[];
};

export const v1OracleProtocolsResponseSchema: Schema<V1OracleProtocolsResponse> =
  s.object<V1OracleProtocolsResponse>({
    data: s.array(s.lazy(() => data3Schema)),
  });
