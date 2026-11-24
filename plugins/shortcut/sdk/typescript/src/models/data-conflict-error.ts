import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Error returned when Datomic tx fails due to Datomc :db.error/cas-failed error */
export type DataConflictError = {
  /** @default "data-conflict-error" */
  error?: "data-conflict-error";
  /**
   * An explanatory message: "The update failed due to a data conflict. Please refresh and try
   * again."
   */
  message: string;
};

export const dataConflictErrorSchema: Schema<DataConflictError> = s.object<DataConflictError>({
  error: s.defaulted(s.literal("data-conflict-error"), "data-conflict-error"),
  message: s.string(),
});
