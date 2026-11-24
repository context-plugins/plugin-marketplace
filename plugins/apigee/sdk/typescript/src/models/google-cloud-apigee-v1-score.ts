import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  googleCloudApigeeV1ScoreComponentSchema,
  type GoogleCloudApigeeV1ScoreComponent,
} from "./google-cloud-apigee-v1-score-component.js";
import {
  googleCloudApigeeV1ScoreComponent2Schema,
  type GoogleCloudApigeeV1ScoreComponent2,
} from "./google-cloud-apigee-v1-score-component2.js";
import { googleTypeInterval5Schema, type GoogleTypeInterval5 } from "./google-type-interval5.js";

/** Represents Security Score. */
export type GoogleCloudApigeeV1Score = {
  /** Component containing score, recommendations and actions. */
  component?: GoogleCloudApigeeV1ScoreComponent2;
  /** Start and end time for the score. */
  timeRange?: GoogleTypeInterval5;
  /** List of all the drilldown score components. */
  subcomponents?: GoogleCloudApigeeV1ScoreComponent[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const googleCloudApigeeV1ScoreSchema: Schema<GoogleCloudApigeeV1Score> =
  s.object<GoogleCloudApigeeV1Score>(
    {
      component: s.optional(s.lazy(() => googleCloudApigeeV1ScoreComponent2Schema)),
      timeRange: s.optional(s.lazy(() => googleTypeInterval5Schema)),
      subcomponents: s.optional(s.array(s.lazy(() => googleCloudApigeeV1ScoreComponentSchema))),
    },
    { additionalProperties: s.json() },
  );
