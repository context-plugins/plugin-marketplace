import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { attributeNameSchema, type AttributeName } from "./attribute-name.js";

export type GetQueueAttributesRequest = {
  /**
   * The URL of the Amazon SQS queue whose attribute information is retrieved. Queue URLs and names
   * are case-sensitive.
   */
  queueUrl: string;
  /**
   * A list of attributes for which to retrieve information. The AttributeNames parameter is
   * optional, but if you don't specify values for this parameter, the request returns empty
   * results. In the future, new attributes might be added. If you write code that calls this
   * action, we recommend that you structure your code so that it can handle new attributes
   * gracefully. The following attributes are supported: The ApproximateNumberOfMessagesDelayed,
   * ApproximateNumberOfMessagesNotVisible, and ApproximateNumberOfMessages metrics may not achieve
   * consistency until at least 1 minute after the producers stop
   */
  attributeNames?: AttributeName[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const getQueueAttributesRequestSchema: Schema<GetQueueAttributesRequest> =
  s.object<GetQueueAttributesRequest>(
    {
      queueUrl: s.string(),
      attributeNames: s.optional(s.array(s.lazy(() => attributeNameSchema))),
      _keysMap: {
        queueUrl: "QueueUrl",
        attributeNames: "AttributeNames",
      },
    },
    { additionalProperties: s.json() },
  );
