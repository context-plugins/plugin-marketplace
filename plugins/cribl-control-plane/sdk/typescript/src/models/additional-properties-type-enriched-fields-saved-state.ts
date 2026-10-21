import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type AdditionalPropertiesTypeEnrichedFieldsSavedState = {
  data: Record<string, unknown>;
};

export const additionalPropertiesTypeEnrichedFieldsSavedStateSchema: Schema<AdditionalPropertiesTypeEnrichedFieldsSavedState> =
  s.object<AdditionalPropertiesTypeEnrichedFieldsSavedState>({
    data: s.record(s.string(), s.unknown()),
  });
