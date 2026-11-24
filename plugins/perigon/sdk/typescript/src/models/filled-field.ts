import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  methodPerigonMonitorsApiSchema,
  type MethodPerigonMonitorsApi,
} from "./method-perigon-monitors-api.js";
import { sourceSchema, type Source } from "./source.js";
import { source1Schema, type Source1 } from "./source1.js";

/** Event fields populated by enrichment and the sources used for each field. */
export type FilledField = {
  /** Name of the event data field populated by enrichment. */
  field: string;
  /** Search method used to populate the field. Accepts WEB_SEARCH or ARTICLE_SEARCH. */
  method: MethodPerigonMonitorsApi;
  /** How enrichment was initiated. Accepts MANUAL or BACKGROUND. */
  source: Source1;
  /** Sources used to populate the field. */
  sources?: Source[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const filledFieldSchema: Schema<FilledField> = s.object<FilledField>(
  {
    field: s.string(),
    method: methodPerigonMonitorsApiSchema,
    source: source1Schema,
    sources: s.optionalNullable(s.array(s.lazy(() => sourceSchema))),
  },
  { additionalProperties: s.json() },
);
