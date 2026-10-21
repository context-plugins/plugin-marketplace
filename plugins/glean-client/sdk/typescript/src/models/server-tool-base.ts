import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { requestTypeSchema, type RequestType } from "./request-type.js";

export type ServerToolBase = {
  /** The type of request made to the user. */
  requestType: RequestType;
  /** Unique identifier for this request. */
  requestId: string;
};

export const serverToolBaseSchema: Schema<ServerToolBase> = s.object<ServerToolBase>({
  requestType: requestTypeSchema,
  requestId: s.string(),
});
