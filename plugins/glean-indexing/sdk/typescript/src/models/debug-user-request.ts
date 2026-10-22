import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the request body of the /debug/{datasource}/user API call */
export type DebugUserRequest = {
  /** Email ID of the user to get the status for */
  email: string;
};

export const debugUserRequestSchema: Schema<DebugUserRequest> = s.object<DebugUserRequest>({
  email: s.string(),
});
