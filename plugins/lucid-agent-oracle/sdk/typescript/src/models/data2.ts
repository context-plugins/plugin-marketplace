import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { type3Schema, type Type3 } from "./unions/type3.js";

export type Data2 = {
  type: Type3;
  timestamp: string;
  detail: Record<string, Record<string, unknown>>;
};

export const data2Schema: Schema<Data2> = s.object<Data2>({
  type: type3Schema,
  timestamp: s.string(),
  detail: s.record(s.string(), s.record(s.string(), s.unknown())),
});
