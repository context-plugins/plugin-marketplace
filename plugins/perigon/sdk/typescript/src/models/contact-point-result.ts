import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactPointApiDtoSchema, type ContactPointApiDto } from "./contact-point-api-dto.js";

/** Single contact point response. */
export type ContactPointResult = {
  /** Contact point used to deliver monitor notifications. */
  data: ContactPointApiDto;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const contactPointResultSchema: Schema<ContactPointResult> = s.object<ContactPointResult>(
  {
    data: contactPointApiDtoSchema,
  },
  { additionalProperties: s.json() },
);
