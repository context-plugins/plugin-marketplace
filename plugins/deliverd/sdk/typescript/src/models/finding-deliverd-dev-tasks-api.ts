import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type FindingDeliverdDevTasksApi = {
  title: string;
  description: string;
  evidence?: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const findingDeliverdDevTasksApiProperties: s.Shape<FindingDeliverdDevTasksApi> = {
  title: s.string(),
  description: s.string(),
  evidence: s.optional(s.array(s.string())),
};

export const findingDeliverdDevTasksApiInternalSchema: Schema<FindingDeliverdDevTasksApi> =
  s.object<FindingDeliverdDevTasksApi>(findingDeliverdDevTasksApiProperties, {
    additionalProperties: s.json(),
  });

export const findingDeliverdDevTasksApiSchema: Schema<FindingDeliverdDevTasksApi> = s.lazySchema(() =>
  s.object<FindingDeliverdDevTasksApi>(
    {
      ...findingDeliverdDevTasksApiProperties,
      title: s.string().check(s.minLength(1), s.maxLength(200)),
      description: s.string().check(s.maxLength(4000)),
      evidence: s.optional(
        s.array(s.string().check(s.minLength(1), s.maxLength(1000))).check(s.maxLength(10)),
      ),
    },
    { additionalProperties: s.json() },
  ),
);
