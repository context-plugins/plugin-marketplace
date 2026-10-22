import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { instructionUserRequestSchema, type InstructionUserRequest } from "./instruction-user-request.js";

export type PatchUsersRequest = {
  /** Optional comment describing the change */
  comment?: string;
  /** The instructions to perform when updating */
  instructions: InstructionUserRequest[];
};

export const patchUsersRequestSchema: Schema<PatchUsersRequest> = s.object<PatchUsersRequest>({
  comment: s.optional(s.string()),
  instructions: s.array(s.lazy(() => instructionUserRequestSchema)),
});
