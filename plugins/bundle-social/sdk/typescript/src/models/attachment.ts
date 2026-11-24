import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  type1BundleSocialAutomationApiSchema,
  type Type1BundleSocialAutomationApi,
} from "./type1-bundle-social-automation-api.js";

export type Attachment = {
  uploadId: string;
  type: Type1BundleSocialAutomationApi;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const attachmentProperties: s.Shape<Attachment> = {
  uploadId: s.string(),
  type: type1BundleSocialAutomationApiSchema,
};

export const attachmentInternalSchema: Schema<Attachment> = s.object<Attachment>(attachmentProperties, {
  additionalProperties: s.json(),
});

export const attachmentSchema: Schema<Attachment> = s.lazySchema(() =>
  s.object<Attachment>(
    {
      ...attachmentProperties,
      uploadId: s.string().check(s.minLength(1)),
    },
    { additionalProperties: s.json() },
  ),
);
