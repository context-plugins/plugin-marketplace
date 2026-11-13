import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const ResponseDeleteUploadApiV1UploadsDelete = {
  Ok: "ok",
} as const;
export type ResponseDeleteUploadApiV1UploadsDelete =
  | (typeof ResponseDeleteUploadApiV1UploadsDelete)[keyof typeof ResponseDeleteUploadApiV1UploadsDelete]
  | (string & {});

export const responseDeleteUploadApiV1UploadsDeleteSchema: EnumSchema<ResponseDeleteUploadApiV1UploadsDelete> =
  s.enumOf<ResponseDeleteUploadApiV1UploadsDelete>(ResponseDeleteUploadApiV1UploadsDelete);
