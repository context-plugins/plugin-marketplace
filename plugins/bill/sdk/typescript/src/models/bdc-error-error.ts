import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { categorySchema, type Category } from "./category.js";
import { paramModelInternalSchema, paramModelSchema, type ParamModel } from "./param-model.js";
import { severitySchema, type Severity } from "./severity.js";

export type BdcErrorError = {
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

const bdcErrorErrorProperties: s.Shape<BdcErrorError> = {
  timestamp: s.dateTime(),
  code: s.string(),
  severity: severitySchema,
  category: categorySchema,
  message: s.optional(s.string()),
  params: s.optional(s.array(s.lazy(() => paramModelInternalSchema))),
  detail: s.optional(s.string()),
  help: s.optional(s.string()),
};

export const bdcErrorErrorInternalSchema: Schema<BdcErrorError> = s.object<BdcErrorError>(
  bdcErrorErrorProperties,
  { additionalProperties: s.json() },
);

export const bdcErrorErrorSchema: Schema<BdcErrorError> = s.lazySchema(() =>
  s.object<BdcErrorError>(
    {
      ...bdcErrorErrorProperties,
      params: s.optional(s.array(s.lazy(() => paramModelSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
