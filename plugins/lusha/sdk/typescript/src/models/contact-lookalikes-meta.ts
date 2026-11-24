import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContactLookalikesMeta = {
  returned: number;
  hasMore: boolean;
};

export const contactLookalikesMetaSchema: Schema<ContactLookalikesMeta> = s.object<ContactLookalikesMeta>({
  returned: s.int(),
  hasMore: s.boolean(),
});
