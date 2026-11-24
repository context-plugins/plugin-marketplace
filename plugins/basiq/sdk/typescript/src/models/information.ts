import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Information = {
  name: string;
  description: string;
  attributeList: string[];
};

export const informationSchema: Schema<Information> = s.object<Information>({
  name: s.string(),
  description: s.string(),
  attributeList: s.array(s.string()),
});
