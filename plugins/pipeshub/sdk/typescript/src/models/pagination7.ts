import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { limitSchema, type Limit } from "./limit.js";
import { pageSchema, type Page } from "./page.js";

export type Pagination7 = {
  page?: Page;
  limit?: Limit;
};

export const pagination7Schema: Schema<Pagination7> = s.object<Pagination7>({
  page: s.optional(s.lazy(() => pageSchema)),
  limit: s.optional(s.lazy(() => limitSchema)),
});
