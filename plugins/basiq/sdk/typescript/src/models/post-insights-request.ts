import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeInsightsApiSchema, type TypeInsightsApi } from "./type-insights-api.js";
import {
  dataInsightsApiInternalSchema,
  dataInsightsApiSchema,
  type DataInsightsApi,
} from "./unions/data-insights-api.js";

export type PostInsightsRequest = {
  /** Array of user IDs to generate the insight for. Minimum 1, maximum 10 users. */
  users: string[];
  /** The type of insight to generate. */
  type: TypeInsightsApi;
  /** Input data for the insight. The required fields vary by `type`. */
  data: DataInsightsApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const postInsightsRequestProperties: s.Shape<PostInsightsRequest> = {
  users: s.array(s.string()),
  type: typeInsightsApiSchema,
  data: dataInsightsApiInternalSchema,
};

export const postInsightsRequestInternalSchema: Schema<PostInsightsRequest> = s.object<PostInsightsRequest>(
  postInsightsRequestProperties,
  { additionalProperties: s.json() },
);

export const postInsightsRequestSchema: Schema<PostInsightsRequest> = s.lazySchema(() =>
  s.object<PostInsightsRequest>(
    {
      ...postInsightsRequestProperties,
      users: s.array(s.string()).check(s.minLength(1), s.maxLength(10)),
      data: dataInsightsApiSchema,
    },
    { additionalProperties: s.json() },
  ),
);
