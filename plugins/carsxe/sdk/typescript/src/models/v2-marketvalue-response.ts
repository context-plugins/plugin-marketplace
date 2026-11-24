import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type V2MarketvalueResponse = {
  uid?: string;
  input?: Record<string, unknown>;
  publishDate?: string;
  state?: string;
  country?: string;
  modelYear?: string;
  make?: string;
  model?: string;
  series?: string;
  style?: string;
  className?: string;
  wholeXclean?: Record<string, unknown>;
  wholeClean?: Record<string, unknown>;
  wholeAvg?: Record<string, unknown>;
  wholeRough?: Record<string, unknown>;
  retailXclean?: Record<string, unknown>;
  retailClean?: Record<string, unknown>;
  retailAvg?: Record<string, unknown>;
  retailRough?: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const v2MarketvalueResponseSchema: Schema<V2MarketvalueResponse> = s.object<V2MarketvalueResponse>(
  {
    uid: s.optional(s.string()),
    input: s.optional(s.record(s.string(), s.unknown())),
    publishDate: s.optional(s.string()),
    state: s.optional(s.string()),
    country: s.optional(s.string()),
    modelYear: s.optional(s.string()),
    make: s.optional(s.string()),
    model: s.optional(s.string()),
    series: s.optional(s.string()),
    style: s.optional(s.string()),
    className: s.optional(s.string()),
    wholeXclean: s.optional(s.record(s.string(), s.unknown())),
    wholeClean: s.optional(s.record(s.string(), s.unknown())),
    wholeAvg: s.optional(s.record(s.string(), s.unknown())),
    wholeRough: s.optional(s.record(s.string(), s.unknown())),
    retailXclean: s.optional(s.record(s.string(), s.unknown())),
    retailClean: s.optional(s.record(s.string(), s.unknown())),
    retailAvg: s.optional(s.record(s.string(), s.unknown())),
    retailRough: s.optional(s.record(s.string(), s.unknown())),
    _keysMap: {
      publishDate: "publish_date",
      modelYear: "model_year",
      className: "class_name",
      wholeXclean: "whole_xclean",
      wholeClean: "whole_clean",
      wholeAvg: "whole_avg",
      wholeRough: "whole_rough",
      retailXclean: "retail_xclean",
      retailClean: "retail_clean",
      retailAvg: "retail_avg",
      retailRough: "retail_rough",
    },
  },
  { additionalProperties: s.json() },
);
