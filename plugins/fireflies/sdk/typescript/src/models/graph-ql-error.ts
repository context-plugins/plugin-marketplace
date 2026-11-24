import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extensionsSchema, type Extensions } from "./extensions.js";

export type GraphQlError = {
  message?: string;
  code?: string;
  friendly?: boolean;
  extensions?: Extensions;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const graphQlErrorSchema: Schema<GraphQlError> = s.object<GraphQlError>(
  {
    message: s.optional(s.string()),
    code: s.optional(s.string()),
    friendly: s.optional(s.boolean()),
    extensions: s.optional(s.lazy(() => extensionsSchema)),
  },
  { additionalProperties: s.json() },
);
