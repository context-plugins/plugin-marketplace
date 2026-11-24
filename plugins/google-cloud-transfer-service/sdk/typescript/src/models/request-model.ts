import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Specifies the API request model used to call the storage service. When not specified, the default
 * value of RequestModel REQUEST_MODEL_VIRTUAL_HOSTED_STYLE is used.
 */
export const RequestModel = {
  RequestModelUnspecified: "REQUEST_MODEL_UNSPECIFIED",
  RequestModelVirtualHostedStyle: "REQUEST_MODEL_VIRTUAL_HOSTED_STYLE",
  RequestModelPathStyle: "REQUEST_MODEL_PATH_STYLE",
} as const;
export type RequestModel = (typeof RequestModel)[keyof typeof RequestModel] | (string & {});

export const requestModelSchema: EnumSchema<RequestModel> = s.enumOf<RequestModel>(RequestModel);
