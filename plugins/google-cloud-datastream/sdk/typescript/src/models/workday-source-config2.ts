import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sourceCatalog1Schema, type SourceCatalog1 } from "./source-catalog1.js";
import { sourceCatalog5Schema, type SourceCatalog5 } from "./source-catalog5.js";

/** Optional. Workday data source configuration. */
export type WorkdaySourceConfig2 = {
  /**
   * Required. Incremental sync polling interval for all objects. If not set, a default value of `5
   * minutes` is used. The duration must be from `5 minutes` to `24 hours`, inclusive.
   */
  pollingInterval?: string;
  /** Optional. The objects to retrieve from the source. */
  includeObjects?: SourceCatalog5;
  /** Optional. The objects to exclude from the stream. */
  excludeObjects?: SourceCatalog1;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const workdaySourceConfig2Schema: Schema<WorkdaySourceConfig2> = s.object<WorkdaySourceConfig2>(
  {
    pollingInterval: s.optional(s.string()),
    includeObjects: s.optional(s.lazy(() => sourceCatalog5Schema)),
    excludeObjects: s.optional(s.lazy(() => sourceCatalog1Schema)),
  },
  { additionalProperties: s.json() },
);
