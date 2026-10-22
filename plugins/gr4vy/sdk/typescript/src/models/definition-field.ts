import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { definitionFieldFormat2Schema, type DefinitionFieldFormat2 } from "./definition-field-format2.js";

/** A single field that needs to be submitted for a payment service when it is created. */
export type DefinitionField = {
  /** The key of a field that can be submitted. */
  key: string;
  /** The human readable name for this field. */
  displayName: string;
  /** Defines if this field is required when the service is created. */
  required: boolean;
  /** Defines the type of input that needs to be rendered for this field. */
  format: DefinitionFieldFormat2;
  /**
   * Defines if this field is secret. When `true` the field's value is not returned when querying
   * the payment service information.
   */
  secret: boolean;
  /** Defines if this field can be verified through the verify credentials button. */
  verifiable: boolean;
};

export const definitionFieldSchema: Schema<DefinitionField> = s.object<DefinitionField>({
  key: s.string(),
  displayName: s.string(),
  required: s.boolean(),
  format: definitionFieldFormat2Schema,
  secret: s.boolean(),
  verifiable: s.boolean(),
  _keysMap: {
    displayName: "display_name",
  },
});
