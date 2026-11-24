import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { definitionInternalSchema, definitionSchema, type Definition } from "./definition.js";
import { platformScopeSchema, type PlatformScope } from "./platform-scope.js";

export type ApiV1AutomationsRequest = {
  teamId: string;
  name: string;
  platformScope: PlatformScope;
  definition?: Definition;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationsRequestProperties: s.Shape<ApiV1AutomationsRequest> = {
  teamId: s.string(),
  name: s.string(),
  platformScope: platformScopeSchema,
  definition: s.optional(s.lazy(() => definitionInternalSchema)),
};

export const apiV1AutomationsRequestInternalSchema: Schema<ApiV1AutomationsRequest> =
  s.object<ApiV1AutomationsRequest>(apiV1AutomationsRequestProperties, { additionalProperties: s.json() });

export const apiV1AutomationsRequestSchema: Schema<ApiV1AutomationsRequest> = s.lazySchema(() =>
  s.object<ApiV1AutomationsRequest>(
    {
      ...apiV1AutomationsRequestProperties,
      name: s.string().check(s.minLength(1), s.maxLength(120)),
      definition: s.optional(s.lazy(() => definitionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
