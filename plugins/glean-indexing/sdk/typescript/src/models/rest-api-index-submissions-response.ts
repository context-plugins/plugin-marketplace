import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RestApiIndexSubmissionsResponse = {
  requestId: string;
};

export const restApiIndexSubmissionsResponseSchema: Schema<RestApiIndexSubmissionsResponse> =
  s.object<RestApiIndexSubmissionsResponse>({
    requestId: s.string(),
  });
