import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ExtraHttpHeaderConfInputElastic = {
  /** Field Name */
  name?: string;
  /** Field Value */
  value: string;
};

export const extraHttpHeaderConfInputElasticSchema: Schema<ExtraHttpHeaderConfInputElastic> =
  s.object<ExtraHttpHeaderConfInputElastic>({
    name: s.optional(s.string()),
    value: s.string(),
  });
