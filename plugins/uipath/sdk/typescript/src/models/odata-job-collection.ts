import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { jobSchema, type Job } from "./job.js";

/** OData collection response containing jobs */
export type ODataJobCollection = {
  /** OData context URL */
  odataContext?: string;
  /** Total number of matching records (when $count=true) */
  odataCount?: number;
  value?: Job[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const oDataJobCollectionSchema: Schema<ODataJobCollection> = s.object<ODataJobCollection>(
  {
    odataContext: s.optional(s.string()),
    odataCount: s.optional(s.int()),
    value: s.optional(s.array(s.lazy(() => jobSchema))),
    _keysMap: {
      odataContext: "@odata.context",
      odataCount: "@odata.count",
    },
  },
  { additionalProperties: s.json() },
);
