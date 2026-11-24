import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { bodySchema, type Body } from "./body.js";

/** Extra data (booking info, insurance, flight reservations, ...) as serialized JSON */
export type AttachmentV1 = {
  /** Should be an object containing any of the keys with corresponded sub objects */
  body: Body;
  /** Version of used schema @default "application/vnd.tabby.v1+json" */
  contentType?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const attachmentV1Schema: Schema<AttachmentV1> = s.object<AttachmentV1>(
  {
    body: bodySchema,
    contentType: s.defaulted(s.string(), "application/vnd.tabby.v1+json"),
    _keysMap: {
      contentType: "content_type",
    },
  },
  { additionalProperties: s.json() },
);
