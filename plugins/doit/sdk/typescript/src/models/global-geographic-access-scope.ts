import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type GlobalGeographicAccessScope = {
  /** All countries and custom regions are allowed. @default "global" */
  type?: "global";
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const globalGeographicAccessScopeSchema: Schema<GlobalGeographicAccessScope> =
  s.object<GlobalGeographicAccessScope>(
    {
      type: s.defaulted(s.literal("global"), "global"),
    },
    { additionalProperties: s.json() },
  );
