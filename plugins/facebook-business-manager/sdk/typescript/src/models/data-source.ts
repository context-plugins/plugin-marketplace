import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

/** The source of the audience data */
export type DataSource = {
  type?: string;
  subType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const dataSourceSchema: Schema<DataSource> = s.object<DataSource>(
  {
    type: s.optional(s.string()),
    subType: s.optional(s.string()),
    _keysMap: {
      subType: "sub_type",
    },
  },
  { additionalProperties: s.json() },
);
