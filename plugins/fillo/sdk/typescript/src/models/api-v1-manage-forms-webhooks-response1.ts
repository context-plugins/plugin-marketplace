import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsWebhooksResponse1 = {
  id: string;
  events: string[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsWebhooksResponse1Schema: Schema<ApiV1ManageFormsWebhooksResponse1> =
  s.object<ApiV1ManageFormsWebhooksResponse1>(
    {
      id: s.string(),
      events: s.array(s.string()),
    },
    { additionalProperties: s.json() },
  );
