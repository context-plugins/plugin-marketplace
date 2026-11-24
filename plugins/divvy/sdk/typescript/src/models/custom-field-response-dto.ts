import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { customFieldTypeSchema, type CustomFieldType } from "./custom-field-type.js";

/** DTO representing a custom field response. */
export type CustomFieldResponseDto = {
  /**
   * BILL-generated ID of the custom field
   *
   * @deprecated
   */
  id?: string;
  /** BILL-generated UUID of the custom field */
  uuid?: string;
  /** Custom field name */
  name?: string;
  /** Custom field description */
  description?: string;
  type?: CustomFieldType;
  /** Set as `true` if the custom field can have multiple selected values */
  multiSelect?: boolean;
  /** Set as `true` if the custom field can have custom values */
  allowCustomValues?: boolean;
  /** Minimum transaction amount where the custom field is required */
  minimumAmountForRequirement?: number;
  /**
   * Set as `true` if the custom field is required for all budgets. The default value is `false`.
   */
  required?: boolean;
  /** Set as `true` if the custom field applies to all budgets. The default value is `false`. */
  global?: boolean;
  /** Set as `true` if the custom field is retired */
  retired?: boolean;
  /** Created date and time */
  createdTime?: Date;
  /**
   * List of BILL-generated ID values of budgets where the custom field is available
   *
   * @deprecated
   */
  selectedBudgetIds?: string[];
  /** List of BILL-generated UUID values of budgets where the custom field is available */
  selectedBudgetUuids?: string[];
  /**
   * List of BILL-generated ID values of budgets where the custom field is required
   *
   * @deprecated
   */
  requiredBudgetIds?: string[];
  /** List of BILL-generated UUID values of budgets where the custom field is required */
  requiredBudgetUuids?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const customFieldResponseDtoSchema: Schema<CustomFieldResponseDto> = s.object<CustomFieldResponseDto>(
  {
    id: s.optional(s.string()),
    uuid: s.optional(s.string()),
    name: s.optional(s.string()),
    description: s.optional(s.string()),
    type: s.optional(s.lazy(() => customFieldTypeSchema)),
    multiSelect: s.optional(s.boolean()),
    allowCustomValues: s.optional(s.boolean()),
    minimumAmountForRequirement: s.optional(s.float64()),
    required: s.optional(s.boolean()),
    global: s.optional(s.boolean()),
    retired: s.optional(s.boolean()),
    createdTime: s.optional(s.dateTime()),
    selectedBudgetIds: s.optional(s.array(s.string())),
    selectedBudgetUuids: s.optional(s.array(s.string())),
    requiredBudgetIds: s.optional(s.array(s.string())),
    requiredBudgetUuids: s.optional(s.array(s.string())),
  },
  { additionalProperties: s.json() },
);
