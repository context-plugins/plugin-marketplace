import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLushaSignalsApi = {
  name: string;
  domain: string;
  /** @default true */
  isCurrent?: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLushaSignalsApiSchema: Schema<CompanyLushaSignalsApi> = s.object<CompanyLushaSignalsApi>(
  {
    name: s.string(),
    domain: s.string(),
    isCurrent: s.defaulted(s.boolean(), true),
    _keysMap: {
      isCurrent: "is_current",
    },
  },
  { additionalProperties: s.json() },
);
