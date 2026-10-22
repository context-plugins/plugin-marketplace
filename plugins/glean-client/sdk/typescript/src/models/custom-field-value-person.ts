import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { personSchema, type Person } from "./person.js";

export type CustomFieldValuePerson = {
  person?: Person;
};

export const customFieldValuePersonSchema: Schema<CustomFieldValuePerson> = s.object<CustomFieldValuePerson>({
  person: s.optional(s.lazy(() => personSchema)),
});
