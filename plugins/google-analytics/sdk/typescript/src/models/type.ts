import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Required. Immutable. The type of this DataStream resource. */
export const Type = {
  DataStreamTypeUnspecified: "DATA_STREAM_TYPE_UNSPECIFIED",
  WebDataStream: "WEB_DATA_STREAM",
  AndroidAppDataStream: "ANDROID_APP_DATA_STREAM",
  IosAppDataStream: "IOS_APP_DATA_STREAM",
} as const;
export type Type = (typeof Type)[keyof typeof Type] | (string & {});

export const typeSchema: EnumSchema<Type> = s.enumOf<Type>(Type);
