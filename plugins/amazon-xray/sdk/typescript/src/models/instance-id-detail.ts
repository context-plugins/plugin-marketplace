import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type InstanceIdDetail = {
  /** The ID of a corresponding EC2 instance. */
  id?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const instanceIdDetailSchema: Schema<InstanceIdDetail> = s.object<InstanceIdDetail>(
  {
    id: s.optional(s.string()),
    _keysMap: {
      id: "Id",
    },
  },
  { additionalProperties: s.json() },
);
