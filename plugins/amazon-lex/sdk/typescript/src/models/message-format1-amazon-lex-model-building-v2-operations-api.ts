import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * The format of the response message. One of the following values: PlainText - The message contains
 * plain UTF-8 text. CustomPayload - The message is a custom format defined by the Lambda function.
 * SSML - The message contains text formatted for voice output. Composite - The message contains an
 * escaped JSON object containing one or more messages from the groups that messages were assigned
 * to when the intent was created.
 */
export const MessageFormat1AmazonLexModelBuildingV2OperationsApi = {
  PlainText: "PlainText",
  CustomPayload: "CustomPayload",
  Ssml: "SSML",
  Composite: "Composite",
} as const;
export type MessageFormat1AmazonLexModelBuildingV2OperationsApi =
  | (typeof MessageFormat1AmazonLexModelBuildingV2OperationsApi)[keyof typeof MessageFormat1AmazonLexModelBuildingV2OperationsApi]
  | (string & {});

export const messageFormat1AmazonLexModelBuildingV2OperationsApiSchema: EnumSchema<MessageFormat1AmazonLexModelBuildingV2OperationsApi> =
  s.enumOf<MessageFormat1AmazonLexModelBuildingV2OperationsApi>(
    MessageFormat1AmazonLexModelBuildingV2OperationsApi,
  );
