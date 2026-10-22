import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { pageSchema, type Page } from "./page.js";

export type Data = {
  pages: Page[];
};

export const dataSchema: Schema<Data> = s.object<Data>({
  pages: s.array(s.lazy(() => pageSchema)),
});
