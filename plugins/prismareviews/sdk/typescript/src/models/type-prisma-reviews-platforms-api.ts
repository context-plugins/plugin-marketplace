import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const TypePrismaReviewsPlatformsApi = {
  Text: "text",
  Secret: "secret",
  Textarea: "textarea",
  List: "list",
  Url: "url",
} as const;
export type TypePrismaReviewsPlatformsApi =
  | (typeof TypePrismaReviewsPlatformsApi)[keyof typeof TypePrismaReviewsPlatformsApi]
  | (string & {});

export const typePrismaReviewsPlatformsApiSchema: EnumSchema<TypePrismaReviewsPlatformsApi> =
  s.enumOf<TypePrismaReviewsPlatformsApi>(TypePrismaReviewsPlatformsApi);
