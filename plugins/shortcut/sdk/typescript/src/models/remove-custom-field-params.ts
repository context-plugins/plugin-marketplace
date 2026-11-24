import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RemoveCustomFieldParams = {
  /** The unique public ID for the CustomField. */
  fieldId: string;
};

export const removeCustomFieldParamsSchema: Schema<RemoveCustomFieldParams> =
  s.object<RemoveCustomFieldParams>({
    fieldId: s.string(),
    _keysMap: {
      fieldId: "field_id",
    },
  });
