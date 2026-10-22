import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type2Schema, type Type2 } from "./type2.js";

export type Agent = {
  href: string;
  sourcedId: string;
  type: Type2;
};

export const agentSchema: Schema<Agent> = s.object<Agent>({
  href: s.string(),
  sourcedId: s.string(),
  type: type2Schema,
});
