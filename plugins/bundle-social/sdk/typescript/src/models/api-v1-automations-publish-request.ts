import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { definitionInternalSchema, definitionSchema, type Definition } from "./definition.js";

export type ApiV1AutomationsPublishRequest = {
  definition?: Definition;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AutomationsPublishRequestProperties: s.Shape<ApiV1AutomationsPublishRequest> = {
  definition: s.optional(s.lazy(() => definitionInternalSchema)),
};

export const apiV1AutomationsPublishRequestInternalSchema: Schema<ApiV1AutomationsPublishRequest> =
  s.object<ApiV1AutomationsPublishRequest>(apiV1AutomationsPublishRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AutomationsPublishRequestSchema: Schema<ApiV1AutomationsPublishRequest> = s.lazySchema(() =>
  s.object<ApiV1AutomationsPublishRequest>(
    {
      ...apiV1AutomationsPublishRequestProperties,
      definition: s.optional(s.lazy(() => definitionSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
