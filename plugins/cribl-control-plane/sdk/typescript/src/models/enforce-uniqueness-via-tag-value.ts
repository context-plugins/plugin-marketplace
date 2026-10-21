import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type EnforceUniquenessViaTagValue = {
  /** Value */
  value: string;
};

export const enforceUniquenessViaTagValueSchema: Schema<EnforceUniquenessViaTagValue> =
  s.object<EnforceUniquenessViaTagValue>({
    value: s.string(),
  });
