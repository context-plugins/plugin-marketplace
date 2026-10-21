import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

export type ContainerFilter = {
  /** Expression */
  expr: string;
};

export const containerFilterSchema: Schema<ContainerFilter> = s.object<ContainerFilter>({
  expr: s.string(),
});
