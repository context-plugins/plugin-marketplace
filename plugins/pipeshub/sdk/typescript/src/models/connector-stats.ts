import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { dataSchema, type Data } from "./data.js";

/** Statistics for a connector's records */
export type ConnectorStats = {
  success: boolean;
  data: Data;
};

export const connectorStatsSchema: Schema<ConnectorStats> = s.object<ConnectorStats>({
  success: s.boolean(),
  data: dataSchema,
});
