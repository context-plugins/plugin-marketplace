import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { sanctionsSchema, type Sanctions } from "./sanctions.js";

export type CompaniesKrsSanctionsResponse = {
  krs: string;
  entityId: string;
  sanctions?: Sanctions | null;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companiesKrsSanctionsResponseSchema: Schema<CompaniesKrsSanctionsResponse> =
  s.object<CompaniesKrsSanctionsResponse>(
    {
      krs: s.string(),
      entityId: s.string(),
      sanctions: s.optionalNullable(s.lazy(() => sanctionsSchema)),
      _keysMap: {
        entityId: "entity_id",
      },
    },
    { additionalProperties: s.json() },
  );
