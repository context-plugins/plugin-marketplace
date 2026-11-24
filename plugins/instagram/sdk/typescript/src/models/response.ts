import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type Response = {
  success?: boolean;
  deletedId?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const responseSchema: Schema<Response> = s.object<Response>(
  {
    success: s.optional(s.boolean()),
    deletedId: s.optional(s.string()),
    _keysMap: {
      deletedId: "deleted_id",
    },
  },
  { additionalProperties: s.json() },
);
