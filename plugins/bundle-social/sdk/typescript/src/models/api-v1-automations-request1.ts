import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { definitionInternalSchema, definitionSchema, type Definition } from "./definition.js";
import { platformScopeSchema, type PlatformScope } from "./platform-scope.js";

export type ApiV1AutomationsRequest1 = {
  name?: string;
  platformScope?: PlatformScope;
  definition?: Definition;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationsRequest1Properties: s.Shape<ApiV1AutomationsRequest1> = {
  name: s.optional(s.string()),
  platformScope: s.optional(s.lazy(() => platformScopeSchema)),
  definition: s.optional(s.lazy(() => definitionInternalSchema)),
};

export const apiV1AutomationsRequest1InternalSchema: Schema<ApiV1AutomationsRequest1> =
  s.object<ApiV1AutomationsRequest1>(apiV1AutomationsRequest1Properties, { additionalProperties: s.json() });

export const apiV1AutomationsRequest1Schema: Schema<ApiV1AutomationsRequest1> = s.lazySchema(() =>
  s.object<ApiV1AutomationsRequest1>(
    {
      ...apiV1AutomationsRequest1Properties,
      name: s.optional(s.string().check(s.minLength(1), s.maxLength(120))),
      definition: s.optional(s.lazy(() => definitionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
