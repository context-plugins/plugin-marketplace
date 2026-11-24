import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { runtimeLexButtonSchema, type RuntimeLexButton } from "./runtime-lex-button.js";

export type GenericAttachment = {
  /** The title of the option. */
  title?: string;
  /** The subtitle shown below the title. */
  subTitle?: string;
  /** The URL of an attachment to the response card. */
  attachmentLinkUrl?: string;
  /** The URL of an image that is displayed to the user. */
  imageUrl?: string;
  /** The list of options to show to the user. */
  buttons?: RuntimeLexButton[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const genericAttachmentSchema: Schema<GenericAttachment> = s.object<GenericAttachment>(
  {
    title: s.optional(s.string()),
    subTitle: s.optional(s.string()),
    attachmentLinkUrl: s.optional(s.string()),
    imageUrl: s.optional(s.string()),
    buttons: s.optional(s.array(s.lazy(() => runtimeLexButtonSchema))),
  },
  { additionalProperties: s.json() },
);
