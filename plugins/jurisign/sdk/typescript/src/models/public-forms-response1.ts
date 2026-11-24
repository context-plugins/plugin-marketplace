import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { publicFormInternalSchema, publicFormSchema, type PublicForm } from "./public-form.js";

export type PublicFormsResponse1 = {
  data?: PublicForm;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const publicFormsResponse1Properties: s.Shape<PublicFormsResponse1> = {
  data: s.optional(s.lazy(() => publicFormInternalSchema)),
};

export const publicFormsResponse1InternalSchema: Schema<PublicFormsResponse1> =
  s.object<PublicFormsResponse1>(publicFormsResponse1Properties, { additionalProperties: s.json() });

export const publicFormsResponse1Schema: Schema<PublicFormsResponse1> = s.lazySchema(() =>
  s.object<PublicFormsResponse1>(
    {
      ...publicFormsResponse1Properties,
      data: s.optional(s.lazy(() => publicFormSchema)),
    },
    { additionalProperties: s.json() },
  ),
);
