import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type GivenUpBlock = {
  recordId?: string;
  block?: number;
};

export const givenUpBlockSchema: Schema<GivenUpBlock> = s.object<GivenUpBlock>({
  recordId: s.optional(s.string()),
  block: s.optional(s.int()),
});
