import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { merchantSubtypeSchema, type MerchantSubtype } from "./merchant-subtype.js";
import { programSchema, type Program } from "./program.js";
import { studentHistorySchema, type StudentHistory } from "./student-history.js";

/** Education-vertical risk signals for the current session. */
export type EducationDetails = {
  /** Duplicated from onboarding config for self-check. */
  merchantSubtype: MerchantSubtype;
  /** Details of the education program being paid for. */
  program: Program;
  /** Student's payment history with the merchant. */
  studentHistory: StudentHistory;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const educationDetailsSchema: Schema<EducationDetails> = s.object<EducationDetails>(
  {
    merchantSubtype: merchantSubtypeSchema,
    program: programSchema,
    studentHistory: studentHistorySchema,
    _keysMap: {
      merchantSubtype: "merchant_subtype",
      studentHistory: "student_history",
    },
  },
  { additionalProperties: s.json() },
);
