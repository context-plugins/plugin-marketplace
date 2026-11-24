import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { contactSingleResponseSchema, type ContactSingleResponse } from "./contact-single-response.js";

export type SingleContactResponse = {
  contact: ContactSingleResponse;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const singleContactResponseSchema: Schema<SingleContactResponse> = s.object<SingleContactResponse>(
  {
    contact: contactSingleResponseSchema,
  },
  { additionalProperties: s.json() },
);
