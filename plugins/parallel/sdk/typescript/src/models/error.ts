import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { detailSchema, type Detail } from "./unions/detail.js";

/** An error message. */
export type Error = {
  /** Reference ID for the error. */
  refId: string;
  /** Human-readable message. */
  message: string;
  /** Optional detail supporting the error. */
  detail?: Detail;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const errorSchema: Schema<Error> = s.object<Error>(
  {
    refId: s.string(),
    message: s.string(),
    detail: s.optional(s.lazy(() => detailSchema)),
    _keysMap: {
      refId: "ref_id",
    },
  },
  { additionalProperties: s.json() },
);
