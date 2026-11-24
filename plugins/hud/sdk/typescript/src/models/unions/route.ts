import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

export type Route = string;

export const routeSchema: Schema<Route> = s.of<Route>(s.union([s.string()]));
