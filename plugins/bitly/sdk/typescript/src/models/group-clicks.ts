import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { countItemSchema, type CountItem } from "./count-item.js";

export type GroupClicks = {
  unit?: string;
  units?: number;
  unitReference?: string;
  data?: CountItem[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const groupClicksSchema: Schema<GroupClicks> = s.object<GroupClicks>(
  {
    unit: s.optional(s.string()),
    units: s.optional(s.int()),
    unitReference: s.optional(s.string()),
    data: s.optional(s.array(s.lazy(() => countItemSchema))),
    _keysMap: {
      unitReference: "unit_reference",
    },
  },
  { additionalProperties: s.json() },
);
