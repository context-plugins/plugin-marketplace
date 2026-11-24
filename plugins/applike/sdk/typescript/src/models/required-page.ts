import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type RequiredPage = {
  /** The number of resources to skip for this filter */
  offset: number;
  /** The maximum number of resources in a page. If set to 0, we default to a limit of 100. */
  limit: number;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const requiredPageProperties: s.Shape<RequiredPage> = {
  offset: s.int(),
  limit: s.int(),
};

export const requiredPageInternalSchema: Schema<RequiredPage> = s.object<RequiredPage>(
  requiredPageProperties,
  { additionalProperties: s.json() },
);

export const requiredPageSchema: Schema<RequiredPage> = s.lazySchema(() =>
  s.object<RequiredPage>(
    {
      ...requiredPageProperties,
      offset: s.int().check(s.gte(0)),
      limit: s.int().check(s.gte(0), s.lte(1000)),
    },
    { additionalProperties: s.json() },
  ),
);
