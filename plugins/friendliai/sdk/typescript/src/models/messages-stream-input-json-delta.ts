import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type MessagesStreamInputJsonDelta = {
  /** Delta type. @default "input_json_delta" */
  type?: "input_json_delta";
  /** Partial JSON fragment for tool arguments when `type=input_json_delta`. */
  partialJson: string;
};

export const messagesStreamInputJsonDeltaSchema: Schema<MessagesStreamInputJsonDelta> =
  s.object<MessagesStreamInputJsonDelta>({
    type: s.defaulted(s.literal("input_json_delta"), "input_json_delta"),
    partialJson: s.string(),
    _keysMap: {
      partialJson: "partial_json",
    },
  });
