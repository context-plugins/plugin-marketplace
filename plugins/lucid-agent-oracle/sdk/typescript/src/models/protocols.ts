import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type Protocols = {
  total: number;
  list: string[];
};

export const protocolsSchema: Schema<Protocols> = s.object<Protocols>({
  total: s.int(),
  list: s.array(s.string()),
});
