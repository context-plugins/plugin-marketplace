import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectRequestParamConfHealthCheckCollectMethodPost1 = {
  /** Parameter name */
  name: string;
  /** JavaScript expression to compute the parameter value (can be a constant). */
  value: string;
};

export const collectRequestParamConfHealthCheckCollectMethodPost1Schema: Schema<CollectRequestParamConfHealthCheckCollectMethodPost1> =
  s.object<CollectRequestParamConfHealthCheckCollectMethodPost1>({
    name: s.string(),
    value: s.string(),
  });
