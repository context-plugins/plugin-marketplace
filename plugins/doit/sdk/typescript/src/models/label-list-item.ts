import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { colorSchema, type Color } from "./color.js";
import { typeDoiTLabelsApiSchema, type TypeDoiTLabelsApi } from "./type-doi-tlabels-api.js";

/** Label metadata. */
export type LabelListItem = {
  /** The unique identifier of the label. */
  id: string;
  /** The name of the label. */
  name: string;
  /** The color of the label. */
  color: Color;
  /** The type of the label (custom or preset). */
  type?: TypeDoiTLabelsApi;
  /** The time when the label was created. */
  createTime?: Date;
  /** The time when the label was last updated. */
  updateTime?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const labelListItemSchema: Schema<LabelListItem> = s.object<LabelListItem>(
  {
    id: s.string(),
    name: s.string(),
    color: colorSchema,
    type: s.optional(s.lazy(() => typeDoiTLabelsApiSchema)),
    createTime: s.optional(s.dateTime()),
    updateTime: s.optional(s.dateTime()),
  },
  { additionalProperties: s.json() },
);
