import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  additionalPropertiesTypeEnrichedFieldsSavedStateSchema,
  type AdditionalPropertiesTypeEnrichedFieldsSavedState,
} from "./additional-properties-type-enriched-fields-saved-state.js";
import { notificationSchema, type Notification } from "./notification.js";

export type SavedJobResponseEnrichedFields = {
  /** Runtime collection state. */
  savedState?: Record<string, AdditionalPropertiesTypeEnrichedFieldsSavedState>;
  /** Notification targets. */
  notifications?: Notification[];
};

export const savedJobResponseEnrichedFieldsSchema: Schema<SavedJobResponseEnrichedFields> =
  s.object<SavedJobResponseEnrichedFields>({
    savedState: s.optional(
      s.record(
        s.string(),
        s.lazy(() => additionalPropertiesTypeEnrichedFieldsSavedStateSchema),
      ),
    ),
    notifications: s.optional(s.array(s.lazy(() => notificationSchema))),
  });
