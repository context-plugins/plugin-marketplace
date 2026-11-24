import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { paramModelInternalSchema, paramModelSchema, type ParamModel } from "./param-model.js";
import { severitySchema, type Severity } from "./severity.js";

export type BdcError = {
  timestamp: Date;
  code: string;
  severity: Severity;
  category: Category;
  message?: string;
  params?: ParamModel[];
  detail?: string;
  help?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const bdcErrorProperties: s.Shape<BdcError> = {
  timestamp: s.dateTime(),
  code: s.string(),
  severity: severitySchema,
  category: categorySchema,
  message: s.optional(s.string()),
  params: s.optional(s.array(s.lazy(() => paramModelInternalSchema))),
  detail: s.optional(s.string()),
  help: s.optional(s.string()),
};

export const bdcErrorInternalSchema: Schema<BdcError> = s.object<BdcError>(bdcErrorProperties, {
  additionalProperties: s.json(),
});

export const bdcErrorSchema: Schema<BdcError> = s.lazySchema(() =>
  s.object<BdcError>(
    {
      ...bdcErrorProperties,
      params: s.optional(s.array(s.lazy(() => paramModelSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
