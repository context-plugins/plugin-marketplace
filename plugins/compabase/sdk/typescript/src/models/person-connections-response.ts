import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { companySchema, type Company } from "./company.js";

export type PersonConnectionsResponse = {
  personId: string;
  companies: Company[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const personConnectionsResponseSchema: Schema<PersonConnectionsResponse> =
  s.object<PersonConnectionsResponse>(
    {
      personId: s.string(),
      companies: s.array(s.lazy(() => companySchema)),
      _keysMap: {
        personId: "person_id",
      },
    },
    { additionalProperties: s.json() },
  );
