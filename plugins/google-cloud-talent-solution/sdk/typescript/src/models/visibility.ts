import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Deprecated. The job is only visible to the owner. The visibility of the job. Defaults to
 * Visibility.ACCOUNT_ONLY if not specified.
 */
export const Visibility = {
  VisibilityUnspecified: "VISIBILITY_UNSPECIFIED",
  AccountOnly: "ACCOUNT_ONLY",
  SharedWithGoogle: "SHARED_WITH_GOOGLE",
  SharedWithPublic: "SHARED_WITH_PUBLIC",
} as const;
export type Visibility = (typeof Visibility)[keyof typeof Visibility] | (string & {});

export const visibilitySchema: EnumSchema<Visibility> = s.enumOf<Visibility>(Visibility);
