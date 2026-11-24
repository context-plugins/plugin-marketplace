import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { relationshipSchema, type Relationship } from "./relationship.js";

export type Company = {
  entityId: string;
  /** KRS number (10 digits), if available. */
  registryNumber?: string | null;
  companyName?: string | null;
  relationships: Relationship[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const companySchema: Schema<Company> = s.object<Company>(
  {
    entityId: s.string(),
    registryNumber: s.optionalNullable(s.string()),
    companyName: s.optionalNullable(s.string()),
    relationships: s.array(s.lazy(() => relationshipSchema)),
    _keysMap: {
      entityId: "entity_id",
      registryNumber: "registry_number",
      companyName: "company_name",
    },
  },
  { additionalProperties: s.json() },
);
