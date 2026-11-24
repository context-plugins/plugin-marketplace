import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The format of the response message. One of the following values: PlainText - The message contains
 * plain UTF-8 text. CustomPayload - The message is a custom format for the client. SSML - The
 * message contains text formatted for voice output. Composite - The message contains an escaped
 * JSON object containing one or more messages from the groups that messages were assigned to when
 * the intent was created.
 */
export const MessageFormatAmazonLexModelBuildingV2OperationsApi = {
  PlainText: "PlainText",
  CustomPayload: "CustomPayload",
  Ssml: "SSML",
  Composite: "Composite",
} as const;
export type MessageFormatAmazonLexModelBuildingV2OperationsApi =
  | (typeof MessageFormatAmazonLexModelBuildingV2OperationsApi)[keyof typeof MessageFormatAmazonLexModelBuildingV2OperationsApi]
  | (string & {});

export const messageFormatAmazonLexModelBuildingV2OperationsApiSchema: EnumSchema<MessageFormatAmazonLexModelBuildingV2OperationsApi> =
  s.enumOf<MessageFormatAmazonLexModelBuildingV2OperationsApi>(
    MessageFormatAmazonLexModelBuildingV2OperationsApi,
  );
