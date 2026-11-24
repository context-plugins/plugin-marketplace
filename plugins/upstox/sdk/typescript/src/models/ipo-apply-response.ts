import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { ipoApplyDataSchema, type IpoApplyData } from "./ipo-apply-data.js";
import { statusSchema, type Status } from "./status.js";

export type IpoApplyResponse = {
  status?: Status;
  data?: IpoApplyData;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const ipoApplyResponseSchema: Schema<IpoApplyResponse> = s.object<IpoApplyResponse>(
  {
    status: s.optional(s.lazy(() => statusSchema)),
    data: s.optional(s.lazy(() => ipoApplyDataSchema)),
  },
  { additionalProperties: s.json() },
);
