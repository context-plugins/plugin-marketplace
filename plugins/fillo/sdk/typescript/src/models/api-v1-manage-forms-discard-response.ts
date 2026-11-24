import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ApiV1ManageFormsDiscardResponse = {
  id: string;
  changed: boolean;
  /** The live FormSchema that remains. */
  schema: Record<string, unknown>;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const apiV1ManageFormsDiscardResponseSchema: Schema<ApiV1ManageFormsDiscardResponse> =
  s.object<ApiV1ManageFormsDiscardResponse>(
    {
      id: s.string(),
      changed: s.boolean(),
      schema: s.record(s.string(), s.unknown()),
    },
    { additionalProperties: s.json() },
  );
