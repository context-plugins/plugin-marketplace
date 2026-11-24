import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { flagInternalSchema, flagSchema, type Flag } from "./unions/flag.js";

/** Success response for the bulk evaluation request */
export type OfrepBulkEvaluationSuccess = {
  flags?: Flag[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const ofrepBulkEvaluationSuccessProperties: s.Shape<OfrepBulkEvaluationSuccess> = {
  flags: s.optional(s.array(s.lazy(() => flagInternalSchema))),
};

export const ofrepBulkEvaluationSuccessInternalSchema: Schema<OfrepBulkEvaluationSuccess> =
  s.object<OfrepBulkEvaluationSuccess>(ofrepBulkEvaluationSuccessProperties, {
    additionalProperties: s.json(),
  });

export const ofrepBulkEvaluationSuccessSchema: Schema<OfrepBulkEvaluationSuccess> = s.lazySchema(() =>
  s.object<OfrepBulkEvaluationSuccess>(
    {
      ...ofrepBulkEvaluationSuccessProperties,
      flags: s.optional(s.array(s.lazy(() => flagSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
