import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type KeyRequest = {
  keys: string[];
};

export const keyRequestSchema: Schema<KeyRequest> = s.object<KeyRequest>({
  keys: s.array(s.string()),
});
