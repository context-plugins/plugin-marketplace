import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type RevokePatResponse = {
  message: string;
};

export const revokePatResponseSchema: Schema<RevokePatResponse> = s.object<RevokePatResponse>({
  message: s.string(),
});
