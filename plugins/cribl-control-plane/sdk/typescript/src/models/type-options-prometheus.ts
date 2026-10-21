import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsPrometheus = {
  Prometheus: "prometheus",
} as const;
export type TypeOptionsPrometheus =
  | (typeof TypeOptionsPrometheus)[keyof typeof TypeOptionsPrometheus]
  | (string & {});

export const typeOptionsPrometheusSchema: EnumSchema<TypeOptionsPrometheus> =
  s.enumOf<TypeOptionsPrometheus>(TypeOptionsPrometheus);
