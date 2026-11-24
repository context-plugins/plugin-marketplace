import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { typeSchema, type Type } from "./type.js";

export type ActivitiesSignaturesUser = {
  email?: string;
  firstName?: string;
  lastName?: string;
  type?: Type;
  mobile?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const activitiesSignaturesUserProperties: s.Shape<ActivitiesSignaturesUser> = {
  email: s.optional(s.string()),
  firstName: s.optional(s.string()),
  lastName: s.optional(s.string()),
  type: s.optional(s.lazy(() => typeSchema)),
  mobile: s.optional(s.string()),
  _keysMap: {
    firstName: "first_name",
    lastName: "last_name",
  },
};

export const activitiesSignaturesUserInternalSchema: Schema<ActivitiesSignaturesUser> =
  s.object<ActivitiesSignaturesUser>(activitiesSignaturesUserProperties, { additionalProperties: s.json() });

export const activitiesSignaturesUserSchema: Schema<ActivitiesSignaturesUser> = s.lazySchema(() =>
  s.object<ActivitiesSignaturesUser>(
    {
      ...activitiesSignaturesUserProperties,
      email: s.optional(s.string().check(s.email())),
    },
    { additionalProperties: s.json() },
  ),
);
