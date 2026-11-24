import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactPointApiDtoSchema, type ContactPointApiDto } from "./contact-point-api-dto.js";

/** Paginated list of contact points. */
export type ContactPointListResult = {
  /** Total number of matching contact points across all pages. */
  total: number;
  /** Contact points returned for the requested page. */
  data: ContactPointApiDto[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactPointListResultSchema: Schema<ContactPointListResult> = s.object<ContactPointListResult>(
  {
    total: s.int(),
    data: s.array(s.lazy(() => contactPointApiDtoSchema)),
  },
  { additionalProperties: s.json() },
);
