import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { kind17Schema, type Kind17 } from "./kind17.js";

export type InstructionUserRequest = {
  /**
   * The type of change to make to the removal date for this user from individual targeting for this
   * flag.
   */
  kind: Kind17;
  /** The flag key */
  flagKey: string;
  /** ID of a variation on the flag */
  variationId: string;
  /**
   * The time, in Unix milliseconds, when LaunchDarkly should remove the user from individual
   * targeting for this flag. Required if <code>kind</code> is <code>addExpireUserTargetDate</code>
   * or <code>updateExpireUserTargetDate</code>.
   */
  value?: number;
  /**
   * The version of the expiring user target to update. Optional and only used if <code>kind</code>
   * is <code>updateExpireUserTargetDate</code>. If included, update will fail if version doesn't
   * match current version of the expiring user target.
   */
  version?: number;
};

export const instructionUserRequestSchema: Schema<InstructionUserRequest> = s.object<InstructionUserRequest>({
  kind: kind17Schema,
  flagKey: s.string(),
  variationId: s.string(),
  value: s.optional(s.int()),
  version: s.optional(s.int()),
});
