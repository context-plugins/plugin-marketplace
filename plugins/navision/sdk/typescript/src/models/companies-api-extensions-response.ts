import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { extensionSchema, type Extension } from "./extension.js";

export type CompaniesApiExtensionsResponse = {
  value?: Extension[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesApiExtensionsResponseSchema: Schema<CompaniesApiExtensionsResponse> =
  s.object<CompaniesApiExtensionsResponse>(
    {
      value: s.optional(s.array(s.lazy(() => extensionSchema))),
    },
    { additionalProperties: s.json() },
  );
