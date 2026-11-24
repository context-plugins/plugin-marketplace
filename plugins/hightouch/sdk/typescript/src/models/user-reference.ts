import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/**
 * The Hightouch user who created or last updated a resource. Changes made with an API key are
 * attributed to the user who created the key.
 */
export type UserReference = {
  /** The user's id */
  id: number;
  /** The user's name */
  name: string;
  /** The user's email address */
  email: string;
};

export const userReferenceSchema: Schema<UserReference> = s.object<UserReference>({
  id: s.float64(),
  name: s.string(),
  email: s.string(),
});
