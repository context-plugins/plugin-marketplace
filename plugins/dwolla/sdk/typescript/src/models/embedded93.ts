import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { exchangeSchema, type Exchange } from "./exchange.js";

export type Embedded93 = {
  exchanges: Exchange[];
};

export const embedded93Schema: Schema<Embedded93> = s.object<Embedded93>({
  exchanges: s.array(s.lazy(() => exchangeSchema)),
});
