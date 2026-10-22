import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Agent1 = {
  sourcedId: string;
};

export const agent1Schema: Schema<Agent1> = s.object<Agent1>({
  sourcedId: s.string(),
});
