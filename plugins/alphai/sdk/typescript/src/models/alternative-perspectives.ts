import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type AlternativePerspectives = {
  contrarianView?: string;
  overlookedFactors?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const alternativePerspectivesSchema: Schema<AlternativePerspectives> =
  s.object<AlternativePerspectives>(
    {
      contrarianView: s.optional(s.string()),
      overlookedFactors: s.optional(s.string()),
      _keysMap: {
        contrarianView: "contrarian_view",
        overlookedFactors: "overlooked_factors",
      },
    },
    { additionalProperties: s.json() },
  );
