import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

export type ApiV1ManageFormsResponse1 = {
  id: string;
  name: string;
  slug: string;
  status: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsResponse1Schema: Schema<ApiV1ManageFormsResponse1> =
  s.object<ApiV1ManageFormsResponse1>(
    {
      id: s.string(),
      name: s.string(),
      slug: s.string(),
      status: statusSchema,
    },
    { additionalProperties: s.json() },
  );
