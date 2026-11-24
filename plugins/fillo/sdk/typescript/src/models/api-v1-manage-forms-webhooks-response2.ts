import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsWebhooksResponse2 = {
  id: string;
  deleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsWebhooksResponse2Schema: Schema<ApiV1ManageFormsWebhooksResponse2> =
  s.object<ApiV1ManageFormsWebhooksResponse2>(
    {
      id: s.string(),
      deleted: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
