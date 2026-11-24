import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Sport = {
  key: string;
  group: string;
  title: string;
  description: string;
  active: boolean;
  hasOutrights: boolean;
  regions: string[];
  /** Market keys seen under it on the matched boards. */
  markets: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const sportSchema: Schema<Sport> = s.object<Sport>(
  {
    key: s.string(),
    group: s.string(),
    title: s.string(),
    description: s.string(),
    active: s.boolean(),
    hasOutrights: s.boolean(),
    regions: s.array(s.string()),
    markets: s.array(s.string()),
    _keysMap: {
      hasOutrights: "has_outrights",
    },
  },
  { additionalProperties: s.json() },
);
