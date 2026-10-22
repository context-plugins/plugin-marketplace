import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Erc8004Id = string;

export const erc8004IdSchema: Schema<Erc8004Id> = s.of<Erc8004Id>(s.union([s.string()]));
