import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Type1BundleSocialAutomationApi = {
  Image: "IMAGE",
  Video: "VIDEO",
  Audio: "AUDIO",
  File: "FILE",
} as const;
export type Type1BundleSocialAutomationApi =
  | (typeof Type1BundleSocialAutomationApi)[keyof typeof Type1BundleSocialAutomationApi]
  | (string & {});

export const type1BundleSocialAutomationApiSchema: EnumSchema<Type1BundleSocialAutomationApi> =
  s.enumOf<Type1BundleSocialAutomationApi>(Type1BundleSocialAutomationApi);
