import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Unpin = {
  /** The opaque id of the pin to be unpinned. */
  id?: string;
};

export const unpinSchema: Schema<Unpin> = s.object<Unpin>({
  id: s.optional(s.string()),
});
