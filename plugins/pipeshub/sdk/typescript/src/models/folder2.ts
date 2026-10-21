import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Folder2 = {
  id: string;
  name: string;
};

export const folder2Schema: Schema<Folder2> = s.object<Folder2>({
  id: s.string(),
  name: s.string(),
});
