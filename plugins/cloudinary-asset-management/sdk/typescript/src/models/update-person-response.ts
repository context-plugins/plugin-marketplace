import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personStatusSchema, type PersonStatus } from "./person-status.js";

export type UpdatePersonResponse = {
  /** The unique identifier of the person. */
  personId?: string;
  /** The display name of the person. */
  name?: string;
  /** The status of a person. */
  status?: PersonStatus;
};

export const updatePersonResponseSchema: Schema<UpdatePersonResponse> = s.object<UpdatePersonResponse>({
  personId: s.optional(s.string()),
  name: s.optional(s.string()),
  status: s.optional(s.lazy(() => personStatusSchema)),
  _keysMap: {
    personId: "person_id",
  },
});
