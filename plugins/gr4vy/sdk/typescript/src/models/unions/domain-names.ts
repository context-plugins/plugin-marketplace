import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type DomainNames = string[];

export const domainNamesSchema: Schema<DomainNames> = s.of<DomainNames>(s.union([s.array(s.string())]));
