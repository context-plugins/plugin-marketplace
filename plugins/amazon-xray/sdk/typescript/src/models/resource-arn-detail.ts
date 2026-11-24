import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type ResourceArnDetail = {
  /** The ARN of a corresponding resource. */
  arn?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const resourceArnDetailSchema: Schema<ResourceArnDetail> = s.object<ResourceArnDetail>(
  {
    arn: s.optional(s.string()),
    _keysMap: {
      arn: "ARN",
    },
  },
  { additionalProperties: s.json() },
);
