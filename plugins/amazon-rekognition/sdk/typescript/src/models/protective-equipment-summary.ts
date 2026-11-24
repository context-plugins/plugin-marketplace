import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ProtectiveEquipmentSummary = {
  /** An array of IDs for persons who are wearing detected personal protective equipment. */
  personsWithRequiredEquipment?: number[];
  /**
   * An array of IDs for persons who are not wearing all of the types of PPE specified in the
   * RequiredEquipmentTypes field of the detected personal protective equipment.
   */
  personsWithoutRequiredEquipment?: number[];
  /**
   * An array of IDs for persons where it was not possible to determine if they are wearing personal
   * protective equipment.
   */
  personsIndeterminate?: number[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const protectiveEquipmentSummarySchema: Schema<ProtectiveEquipmentSummary> =
  s.object<ProtectiveEquipmentSummary>(
    {
      personsWithRequiredEquipment: s.optional(s.array(s.int())),
      personsWithoutRequiredEquipment: s.optional(s.array(s.int())),
      personsIndeterminate: s.optional(s.array(s.int())),
      _keysMap: {
        personsWithRequiredEquipment: "PersonsWithRequiredEquipment",
        personsWithoutRequiredEquipment: "PersonsWithoutRequiredEquipment",
        personsIndeterminate: "PersonsIndeterminate",
      },
    },
    { additionalProperties: s.json() },
  );
