import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/**
 * Sentinel for "no config on the taskset".
 *
 * Discriminated by ``has_requirements`` so the UI can hide the REQUIREMENTS section entirely vs.
 * render an empty card.
 */
export type ReadyRequirementsNotConfigured = {
  /** @default true */
  passed?: boolean;
  /** @default false */
  hasRequirements?: boolean;
  evaluatedAt: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const readyRequirementsNotConfiguredSchema: Schema<ReadyRequirementsNotConfigured> =
  s.object<ReadyRequirementsNotConfigured>(
    {
      passed: s.defaulted(s.boolean(), true),
      hasRequirements: s.defaulted(s.boolean(), false),
      evaluatedAt: s.dateTime(),
      _keysMap: {
        hasRequirements: "has_requirements",
        evaluatedAt: "evaluated_at",
      },
    },
    { additionalProperties: s.json() },
  );
