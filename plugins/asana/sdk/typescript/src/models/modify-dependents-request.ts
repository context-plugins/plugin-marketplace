import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** A set of dependent tasks. */
export type ModifyDependentsRequest = {
  /** An array of task gids that are dependents of the given task. */
  dependents?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const modifyDependentsRequestSchema: Schema<ModifyDependentsRequest> =
  s.object<ModifyDependentsRequest>(
    {
      dependents: s.optional(s.array(s.string())),
    },
    { additionalProperties: s.json() },
  );
