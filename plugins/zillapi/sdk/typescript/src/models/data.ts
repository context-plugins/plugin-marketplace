import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { buildingUnitSchema, type BuildingUnit } from "./building-unit.js";

export type Data = {
  /**
   * Unit listings. The first item is sometimes the building's parent record (no unitNumber); units
   * follow.
   */
  units?: BuildingUnit[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSchema: Schema<Data> = s.object<Data>(
  {
    units: s.optional(s.array(s.lazy(() => buildingUnitSchema))),
  },
  { additionalProperties: s.json() },
);
