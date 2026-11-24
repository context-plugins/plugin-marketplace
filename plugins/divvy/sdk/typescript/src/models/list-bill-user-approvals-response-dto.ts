import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  billUserApprovalsResponseDtoSchema,
  type BillUserApprovalsResponseDto,
} from "./bill-user-approvals-response-dto.js";

/** List Bill User Approvals Response Dto. */
export type ListBillUserApprovalsResponseDto = {
  /** List of bills pending approval */
  bills?: BillUserApprovalsResponseDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listBillUserApprovalsResponseDtoSchema: Schema<ListBillUserApprovalsResponseDto> =
  s.object<ListBillUserApprovalsResponseDto>(
    {
      bills: s.optional(s.array(s.lazy(() => billUserApprovalsResponseDtoSchema))),
    },
    { additionalProperties: s.json() },
  );
