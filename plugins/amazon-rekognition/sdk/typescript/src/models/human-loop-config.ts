import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { humanLoopDataAttributesSchema, type HumanLoopDataAttributes } from "./human-loop-data-attributes.js";

export type HumanLoopConfig = {
  /**
   * The name of the human review used for this image. This should be kept unique within a region.
   */
  humanLoopName: string;
  /**
   * The Amazon Resource Name (ARN) of the flow definition. You can create a flow definition by
   * using the Amazon Sagemaker CreateFlowDefinition Operation.
   */
  flowDefinitionArn: string;
  dataAttributes?: HumanLoopDataAttributes;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const humanLoopConfigSchema: Schema<HumanLoopConfig> = s.object<HumanLoopConfig>(
  {
    humanLoopName: s.string(),
    flowDefinitionArn: s.string(),
    dataAttributes: s.optional(s.lazy(() => humanLoopDataAttributesSchema)),
    _keysMap: {
      humanLoopName: "HumanLoopName",
      flowDefinitionArn: "FlowDefinitionArn",
      dataAttributes: "DataAttributes",
    },
  },
  { additionalProperties: s.json() },
);
