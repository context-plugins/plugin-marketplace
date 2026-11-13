import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type DocumentStoreSetting = {
  type?: Type2;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const documentStoreSettingSchema: Schema<DocumentStoreSetting> = s.object<DocumentStoreSetting>(
  {
    type: s.optional(s.lazy(() => type2Schema)),
  },
  { additionalProperties: s.json() },
);
