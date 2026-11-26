import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Create a custom field */
export type CreateCustomFieldRequestDto = {
  /** Custom field name */
  name: string;
  /** Custom field description */
  description?: string;
  /** Set as `true` if the custom field can have multiple selected values */
  multiSelect?: boolean;
  /** Set as `true` if the custom field can have custom values */
  allowCustomValues: boolean;
  /** Minimum transaction amount where the custom field is required */
  minimumAmountForRequirement?: number;
  /**
   * Set as `true` if the custom field is required for all budgets. The default value is `false`.
   */
  required: boolean;
  /** Set as `true` if the custom field applies to all budgets. The default value is `false`. */
  global: boolean;
  /** List of custom field values */
  values?: string[];
  /** List of budgets where the custom field is available. Set the budget ID or UUID values. */
  selectedBudgetIds?: string[];
  /** List of budgets where the custom field is required. Set the budget ID or UUID values. */
  requiredBudgetIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const createCustomFieldRequestDtoSchema: Schema<CreateCustomFieldRequestDto> =
  s.object<CreateCustomFieldRequestDto>(
    {
      name: s.string(),
      description: s.optional(s.string()),
      multiSelect: s.optional(s.boolean()),
      allowCustomValues: s.boolean(),
      minimumAmountForRequirement: s.optional(s.float64()),
      required: s.boolean(),
      global: s.boolean(),
      values: s.optional(s.array(s.string())),
      selectedBudgetIds: s.optional(s.array(s.string())),
      requiredBudgetIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
