import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type CompanyLookalikesMeta = {
  returned: number;
  hasMore: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companyLookalikesMetaSchema: Schema<CompanyLookalikesMeta> = s.object<CompanyLookalikesMeta>(
  {
    returned: s.int(),
    hasMore: s.boolean(),
  },
  { additionalProperties: s.json() },
);
