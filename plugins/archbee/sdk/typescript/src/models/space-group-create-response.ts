import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { statusSchema, type Status } from "./status.js";

/** Process status */
export type SpaceGroupCreateResponse = {
  /** Response Status */
  status?: Status;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const spaceGroupCreateResponseSchema: Schema<SpaceGroupCreateResponse> =
  s.object<SpaceGroupCreateResponse>(
    {
      status: s.optional(s.lazy(() => statusSchema)),
    },
    { additionalProperties: s.json() },
  );
