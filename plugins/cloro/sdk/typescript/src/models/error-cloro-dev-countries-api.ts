import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./detail.js";

export type ErrorCloroDevCountriesApi = {
  code?: string;
  message?: string;
  /** One entry per invalid field. Sent on request-body validation errors. */
  details?: Detail[];
  timestamp?: Date;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorCloroDevCountriesApiSchema: Schema<ErrorCloroDevCountriesApi> =
  s.object<ErrorCloroDevCountriesApi>(
    {
      code: s.optional(s.string()),
      message: s.optional(s.string()),
      details: s.optional(s.array(s.lazy(() => detailSchema))),
      timestamp: s.optional(s.dateTime()),
    },
    { additionalProperties: s.json() },
  );
