import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Classifications1BillV3CreditMemosApi = {
  /** BILL-generated ID of the accounting class. The value begins with `cls`. */
  accountingClassId?: string;
  /** BILL-generated ID of the department. The value begins with `0de`. */
  departmentId?: string;
  /** BILL-generated ID of the job. The value begins with `job`. */
  jobId?: string;
  /** BILL-generated ID of the location. The value begins with `loc`. */
  locationId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const classifications1BillV3CreditMemosApiSchema: Schema<Classifications1BillV3CreditMemosApi> =
  s.object<Classifications1BillV3CreditMemosApi>(
    {
      accountingClassId: s.optional(s.string()),
      departmentId: s.optional(s.string()),
      jobId: s.optional(s.string()),
      locationId: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
