import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type CollectRequestParamConfRestCollectMethodGet = {
  /** Name */
  name: string;
  /**
   * JavaScript expression to compute parameter value, usually enclosed in backticks
   * (`${earliest}`). If a constant, use single quotes ('earliest'). Values that aren't successfully
   * evaluated as JavaScript expressions will be treated as string constants.
   */
  value: string;
};

export const collectRequestParamConfRestCollectMethodGetSchema: Schema<CollectRequestParamConfRestCollectMethodGet> =
  s.object<CollectRequestParamConfRestCollectMethodGet>({
    name: s.string(),
    value: s.string(),
  });
