import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { cursorMetaSchema, type CursorMeta } from "./cursor-meta.js";
import { datum1Schema, type Datum1 } from "./datum1.js";

export type V1OracleAgentsLeaderboardResponse = {
  data: Datum1[];
  pagination: CursorMeta;
};

export const v1OracleAgentsLeaderboardResponseSchema: Schema<V1OracleAgentsLeaderboardResponse> =
  s.object<V1OracleAgentsLeaderboardResponse>({
    data: s.array(s.lazy(() => datum1Schema)),
    pagination: cursorMetaSchema,
  });
