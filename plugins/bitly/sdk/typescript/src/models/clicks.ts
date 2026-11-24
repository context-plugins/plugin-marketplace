import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { linkClicksSchema, type LinkClicks } from "./link-clicks.js";
import { unitSchema, type Unit } from "./unit.js";

export type Clicks = {
  linkClicks?: LinkClicks[];
  units?: number;
  unit?: Unit;
  unitReference?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const clicksSchema: Schema<Clicks> = s.object<Clicks>(
  {
    linkClicks: s.optional(s.array(s.lazy(() => linkClicksSchema))),
    units: s.optional(s.int()),
    unit: s.optional(s.lazy(() => unitSchema)),
    unitReference: s.optional(s.string()),
    _keysMap: {
      linkClicks: "link_clicks",
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
