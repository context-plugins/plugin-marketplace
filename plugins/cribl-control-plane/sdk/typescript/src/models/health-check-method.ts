import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Health check HTTP method. */
export const HealthCheckMethod = {
  Get: "get",
  Post: "post",
  PostWithBody: "post_with_body",
} as const;
export type HealthCheckMethod = (typeof HealthCheckMethod)[keyof typeof HealthCheckMethod] | (string & {});

export const healthCheckMethodSchema: EnumSchema<HealthCheckMethod> =
  s.enumOf<HealthCheckMethod>(HealthCheckMethod);
