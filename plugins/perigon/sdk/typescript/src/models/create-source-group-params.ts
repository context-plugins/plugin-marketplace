import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CreateSourceGroupParams = {
  name: string;
  displayName?: string | null;
  description?: string | null;
  domains: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const createSourceGroupParamsProperties: s.Shape<CreateSourceGroupParams> = {
  name: s.string(),
  displayName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  domains: s.array(s.string()),
};

export const createSourceGroupParamsInternalSchema: Schema<CreateSourceGroupParams> =
  s.object<CreateSourceGroupParams>(createSourceGroupParamsProperties, { additionalProperties: s.json() });

export const createSourceGroupParamsSchema: Schema<CreateSourceGroupParams> = s.lazySchema(() =>
  s.object<CreateSourceGroupParams>(
    {
      ...createSourceGroupParamsProperties,
      domains: s.array(s.string()).check(s.minLength(1), s.maxLength(5000)),
    },
    { additionalProperties: s.json() },
  ),
);
