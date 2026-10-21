import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cursorMetaSchema, type CursorMeta } from "./cursor-meta.js";
import { data2Schema, type Data2 } from "./data2.js";

export type V1OracleAgentsActivityResponse = {
  data: Data2[];
  pagination: CursorMeta;
};

export const v1OracleAgentsActivityResponseSchema: Schema<V1OracleAgentsActivityResponse> =
  s.object<V1OracleAgentsActivityResponse>({
    data: s.array(s.lazy(() => data2Schema)),
    pagination: cursorMetaSchema,
  });
