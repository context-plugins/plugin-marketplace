import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** affected package name, e.g. lodash, requests */
export type Package = string;

export const packageSchema: Schema<Package> = s.of<Package>(s.union([s.string()]));
