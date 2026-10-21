import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cursorMetaSchema, type CursorMeta } from "./cursor-meta.js";
import { datumSchema, type Datum } from "./datum.js";

export type V1OracleAgentsSearchResponse = {
  data: Datum[];
  pagination: CursorMeta;
};

export const v1OracleAgentsSearchResponseSchema: Schema<V1OracleAgentsSearchResponse> =
  s.object<V1OracleAgentsSearchResponse>({
    data: s.array(s.lazy(() => datumSchema)),
    pagination: cursorMetaSchema,
  });
