import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type BaseClassificationData = {
  /** The index of the input in the list of inputs. */
  index: number;
  /** The predicted label for the input text. */
  label: string;
  /** The number of possible labels the model can predict. */
  numClasses: number;
  /** A list of logits for each possible label. */
  probs: number[];
};

export const baseClassificationDataSchema: Schema<BaseClassificationData> = s.object<BaseClassificationData>({
  index: s.int(),
  label: s.string(),
  numClasses: s.int(),
  probs: s.array(s.float64()),
  _keysMap: {
    numClasses: "num_classes",
  },
});
