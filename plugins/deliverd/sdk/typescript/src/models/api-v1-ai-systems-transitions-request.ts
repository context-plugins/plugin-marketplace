import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1AiSystemsTransitionsRequest = {
  /**
   * The step's id, from the record's steps: submit or withdraw for an agent; every other step is a
   * person's, in the app
   */
  transition: string;
  reason?: string | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const apiV1AiSystemsTransitionsRequestProperties: s.Shape<ApiV1AiSystemsTransitionsRequest> = {
  transition: s.string(),
  reason: s.optionalNullable(s.string()),
};

export const apiV1AiSystemsTransitionsRequestInternalSchema: Schema<ApiV1AiSystemsTransitionsRequest> =
  s.object<ApiV1AiSystemsTransitionsRequest>(apiV1AiSystemsTransitionsRequestProperties, {
    additionalProperties: s.json(),
  });

export const apiV1AiSystemsTransitionsRequestSchema: Schema<ApiV1AiSystemsTransitionsRequest> = s.lazySchema(
  () =>
    s.object<ApiV1AiSystemsTransitionsRequest>(
      {
        ...apiV1AiSystemsTransitionsRequestProperties,
        transition: s.string().check(s.pattern("^[a-z][a-z0-9_]{0,39}$")),
        reason: s.optionalNullable(s.string().check(s.maxLength(4000))),
      },
      { additionalProperties: s.json() },
    ),
);
