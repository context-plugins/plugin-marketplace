import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { clickMetricSchema, type ClickMetric } from "./click-metric.js";
import { facet1BitlyGroupsApiSchema, type Facet1BitlyGroupsApi } from "./facet1-bitly-groups-api.js";

export type GroupsLinksClicksDevicesResponse = {
  unit?: string;
  units?: number;
  facet?: Facet1BitlyGroupsApi;
  unitReference?: string;
  metrics?: ClickMetric[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupsLinksClicksDevicesResponseSchema: Schema<GroupsLinksClicksDevicesResponse> =
  s.object<GroupsLinksClicksDevicesResponse>(
    {
      unit: s.optional(s.string()),
      units: s.optional(s.int()),
      facet: s.optional(s.lazy(() => facet1BitlyGroupsApiSchema)),
      unitReference: s.optional(s.string()),
      metrics: s.optional(s.array(s.lazy(() => clickMetricSchema))),
      _keysMap: {
        unitReference: "unit_reference",
      },
    },
    { additionalProperties: s.json() },
  );
