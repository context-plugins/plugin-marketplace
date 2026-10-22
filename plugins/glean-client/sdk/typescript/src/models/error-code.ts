import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ErrorCode = {
  NameExists: "NAME_EXISTS",
  NotFound: "NOT_FOUND",
  CollectionPinned: "COLLECTION_PINNED",
  ConcurrentHierarchyEdit: "CONCURRENT_HIERARCHY_EDIT",
  HeightViolation: "HEIGHT_VIOLATION",
  WidthViolation: "WIDTH_VIOLATION",
  NoPermissions: "NO_PERMISSIONS",
  CorruptItem: "CORRUPT_ITEM",
} as const;
export type ErrorCode = (typeof ErrorCode)[keyof typeof ErrorCode] | (string & {});

export const errorCodeSchema: EnumSchema<ErrorCode> = s.enumOf<ErrorCode>(ErrorCode);
