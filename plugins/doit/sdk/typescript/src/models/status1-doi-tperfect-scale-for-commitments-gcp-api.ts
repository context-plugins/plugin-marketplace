import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/**
 * Projection lifecycle state. When the stored document has no `status`, the server returns `valid`.
 */
export const Status1DoiTPerfectScaleForCommitmentsGcpApi = {
  Valid: "valid",
  Expired: "expired",
} as const;
export type Status1DoiTPerfectScaleForCommitmentsGcpApi =
  | (typeof Status1DoiTPerfectScaleForCommitmentsGcpApi)[keyof typeof Status1DoiTPerfectScaleForCommitmentsGcpApi]
  | (string & {});

export const status1DoiTPerfectScaleForCommitmentsGcpApiSchema: EnumSchema<Status1DoiTPerfectScaleForCommitmentsGcpApi> =
  s.enumOf<Status1DoiTPerfectScaleForCommitmentsGcpApi>(Status1DoiTPerfectScaleForCommitmentsGcpApi);
