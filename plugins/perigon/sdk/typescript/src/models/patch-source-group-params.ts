import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type PatchSourceGroupParams = {
  /** Unique name for the source group within the organization */
  name?: string | null;
  /** Display name for the source group */
  displayName?: string | null;
  /** Description of the source group */
  description?: string | null;
  /** List of domains included in the source group */
  domains?: string[] | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const patchSourceGroupParamsProperties: s.Shape<PatchSourceGroupParams> = {
  name: s.optionalNullable(s.string()),
  displayName: s.optionalNullable(s.string()),
  description: s.optionalNullable(s.string()),
  domains: s.optionalNullable(s.array(s.string())),
};

export const patchSourceGroupParamsInternalSchema: Schema<PatchSourceGroupParams> =
  s.object<PatchSourceGroupParams>(patchSourceGroupParamsProperties, { additionalProperties: s.json() });

export const patchSourceGroupParamsSchema: Schema<PatchSourceGroupParams> = s.lazySchema(() =>
  s.object<PatchSourceGroupParams>(
    {
      ...patchSourceGroupParamsProperties,
      description: s.optionalNullable(s.string().check(s.minLength(0), s.maxLength(512))),
      domains: s.optionalNullable(s.array(s.string()).check(s.minLength(1), s.maxLength(5000))),
    },
    { additionalProperties: s.json() },
  ),
);
