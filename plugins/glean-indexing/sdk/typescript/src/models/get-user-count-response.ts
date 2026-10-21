import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** Describes the response body of the /getusercount API call */
export type GetUserCountResponse = {
  /** Number of users corresponding to the specified custom datasource. */
  userCount?: number;
};

export const getUserCountResponseSchema: Schema<GetUserCountResponse> = s.object<GetUserCountResponse>({
  userCount: s.optional(s.int()),
});
