import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  budgetMemberBulkUpsertDtoSchema,
  type BudgetMemberBulkUpsertDto,
} from "./budget-member-bulk-upsert-dto.js";

/** Update multiple budget members */
export type BudgetMemberBulkUpsertRequestDto = {
  /** List of budget member updates */
  members: BudgetMemberBulkUpsertDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const budgetMemberBulkUpsertRequestDtoProperties: s.Shape<BudgetMemberBulkUpsertRequestDto> = {
  members: s.array(s.lazy(() => budgetMemberBulkUpsertDtoSchema)),
};

export const budgetMemberBulkUpsertRequestDtoInternalSchema: Schema<BudgetMemberBulkUpsertRequestDto> =
  s.object<BudgetMemberBulkUpsertRequestDto>(budgetMemberBulkUpsertRequestDtoProperties, {
    additionalProperties: s.json(),
  });

export const budgetMemberBulkUpsertRequestDtoSchema: Schema<BudgetMemberBulkUpsertRequestDto> = s.lazySchema(
  () =>
    s.object<BudgetMemberBulkUpsertRequestDto>(
      {
        ...budgetMemberBulkUpsertRequestDtoProperties,
        members: s.array(s.lazy(() => budgetMemberBulkUpsertDtoSchema)).check(s.minLength(1)),
      },
      { additionalProperties: s.json() },
    ),
);
