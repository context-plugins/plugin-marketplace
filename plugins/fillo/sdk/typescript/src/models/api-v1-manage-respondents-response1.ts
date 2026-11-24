import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageRespondentsResponse1 = {
  externalId: string;
  /** @default "True" */
  forgotten?: "True";
  responsesDeleted: number;
  profileDeleted: boolean;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageRespondentsResponse1Schema: Schema<ApiV1ManageRespondentsResponse1> =
  s.object<ApiV1ManageRespondentsResponse1>(
    {
      externalId: s.string(),
      forgotten: s.defaulted(s.literal("True"), "True"),
      responsesDeleted: s.int(),
      profileDeleted: s.boolean(),
    },
    { additionalProperties: s.json() },
  );
