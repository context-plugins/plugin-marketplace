import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Update a custom field (Description added) */
export type UpdateCustomFieldRequestDto = {
  /** Minimum transaction amount where the custom field is required */
  minimumAmountForRequirement?: number | null;
  /** Custom field name */
  name?: string | null;
  /** Custom field description */
  description?: string | null;
  /** Set as `true` if the custom field can have custom values */
  allowCustomValues?: boolean | null;
  /**
   * Set as `true` if the custom field is required for all budgets. The default value is `false`.
   */
  required?: boolean | null;
  /** Set as `true` if the custom field applies to all budgets. The default value is `false`. */
  global?: boolean | null;
  /** List of budgets where the custom field is available. Set the budget ID or UUID values. */
  selectedBudgetIds?: string[];
  /** List of budgets where the custom field is required. Set the budget ID or UUID values. */
  requiredBudgetIds?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateCustomFieldRequestDtoSchema: Schema<UpdateCustomFieldRequestDto> =
  s.object<UpdateCustomFieldRequestDto>(
    {
      minimumAmountForRequirement: s.optionalNullable(s.float64()),
      name: s.optionalNullable(s.string()),
      description: s.optionalNullable(s.string()),
      allowCustomValues: s.optionalNullable(s.boolean()),
      required: s.optionalNullable(s.boolean()),
      global: s.optionalNullable(s.boolean()),
      selectedBudgetIds: s.optional(s.array(s.string())),
      requiredBudgetIds: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
