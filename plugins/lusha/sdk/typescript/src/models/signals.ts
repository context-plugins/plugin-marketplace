import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  typeLushaApiDocumentationProspectingApiSchema,
  type TypeLushaApiDocumentationProspectingApi,
} from "./type-lusha-api-documentation-prospecting-api.js";

export type Signals = {
  types?: TypeLushaApiDocumentationProspectingApi[];
  startDate?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const signalsSchema: Schema<Signals> = s.object<Signals>(
  {
    types: s.optional(s.array(s.lazy(() => typeLushaApiDocumentationProspectingApiSchema))),
    startDate: s.optional(s.dateOnly()),
  },
  { additionalProperties: s.json() },
);
