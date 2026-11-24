import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { outcome8Schema, type Outcome8 } from "./outcome8.js";

export type ApiV1TasksApplyRequest = {
  /**
   * applied (the default) carries the result into the parent; kept records it as reference only;
   * discarded records that it was not used
   */
  outcome?: Outcome8;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1TasksApplyRequestSchema: Schema<ApiV1TasksApplyRequest> = s.object<ApiV1TasksApplyRequest>(
  {
    outcome: s.optional(s.lazy(() => outcome8Schema)),
  },
  { additionalProperties: s.json() },
);
