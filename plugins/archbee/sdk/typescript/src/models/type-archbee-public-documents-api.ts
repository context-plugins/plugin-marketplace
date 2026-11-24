import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** OPTIONAL. which type of search to use; default is word-based */
export const TypeArchbeePublicDocumentsApi = {
  Words: "words",
  AiChat: "ai-chat",
  AiRetrieval: "ai-retrieval",
} as const;
export type TypeArchbeePublicDocumentsApi =
  | (typeof TypeArchbeePublicDocumentsApi)[keyof typeof TypeArchbeePublicDocumentsApi]
  | (string & {});

export const typeArchbeePublicDocumentsApiSchema: EnumSchema<TypeArchbeePublicDocumentsApi> =
  s.enumOf<TypeArchbeePublicDocumentsApi>(TypeArchbeePublicDocumentsApi);
