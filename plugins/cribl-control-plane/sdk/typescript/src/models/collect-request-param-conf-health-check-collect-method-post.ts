import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectRequestParamConfHealthCheckCollectMethodPost = {
  /** Parameter name. */
  name: string;
  /** JavaScript expression to compute the parameter value (can be a constant). */
  value: string;
};

export const collectRequestParamConfHealthCheckCollectMethodPostSchema: Schema<CollectRequestParamConfHealthCheckCollectMethodPost> =
  s.object<CollectRequestParamConfHealthCheckCollectMethodPost>({
    name: s.string(),
    value: s.string(),
  });
