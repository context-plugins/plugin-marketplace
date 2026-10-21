import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type UserId = {
  type: string;
  identifier: string;
};

export const userIdSchema: Schema<UserId> = s.object<UserId>({
  type: s.string(),
  identifier: s.string(),
});
