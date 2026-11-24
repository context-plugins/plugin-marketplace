import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CorporateActionEventDetail = {
  /** Name of the event detail field */
  name?: string;
  /** Value of the event detail field */
  value?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const corporateActionEventDetailSchema: Schema<CorporateActionEventDetail> =
  s.object<CorporateActionEventDetail>(
    {
      name: s.optional(s.string()),
      value: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
