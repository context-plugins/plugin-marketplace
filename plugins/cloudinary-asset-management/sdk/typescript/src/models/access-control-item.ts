import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { accessTypeSchema, type AccessType } from "./access-type.js";
import { endSchema, type End } from "./unions/end.js";
import { startSchema, type Start } from "./unions/start.js";

/** Access control rule that defines when and how the asset can be accessed. */
export type AccessControlItem = {
  /** The type of access control to apply to the asset. */
  accessType: AccessType;
  /**
   * The authentication key identifier for token-based access. Default key is used if not specified
   * or if set to 'default'.
   */
  key?: string;
  /**
   * The start date and time when anonymous access becomes available. Accepts ISO 8601 string or
   * Unix timestamp.
   */
  start?: Start;
  /**
   * The end date and time when anonymous access expires. Accepts ISO 8601 string or Unix timestamp.
   */
  end?: End;
};

export const accessControlItemSchema: Schema<AccessControlItem> = s.object<AccessControlItem>({
  accessType: accessTypeSchema,
  key: s.optional(s.string()),
  start: s.optional(s.lazy(() => startSchema)),
  end: s.optional(s.lazy(() => endSchema)),
  _keysMap: {
    accessType: "access_type",
  },
});
