import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personDetailsSchema, type PersonDetails } from "./person-details.js";

export type PersonResponse = {
  /** Detailed information about a recognized person. */
  person?: PersonDetails;
};

export const personResponseSchema: Schema<PersonResponse> = s.object<PersonResponse>({
  person: s.optional(s.lazy(() => personDetailsSchema)),
});
