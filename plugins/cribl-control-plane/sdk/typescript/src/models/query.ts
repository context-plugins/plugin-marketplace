import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Query = {
  /** The Path attribute from the relevant XML Select element */
  path: string;
  /** The XPath query inside the relevant XML Select element */
  queryExpression: string;
};

export const querySchema: Schema<Query> = s.object<Query>({
  path: s.string(),
  queryExpression: s.string(),
});
