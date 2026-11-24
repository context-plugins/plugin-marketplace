import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error */
export type DataConflictErrorError = {
  /** @default "data-conflict-error" */
  error?: "data-conflict-error";
  /**
   * An explanatory message: "The update failed due to a data conflict. Please refresh and try
   * again."
   */
  message: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataConflictErrorErrorSchema: Schema<DataConflictErrorError> = s.object<DataConflictErrorError>(
  {
    error: s.defaulted(s.literal("data-conflict-error"), "data-conflict-error"),
    message: s.string(),
  },
  { additionalProperties: s.json() },
);
