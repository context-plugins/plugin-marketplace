import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { maxcostusdInternalSchema, maxcostusdSchema, type Maxcostusd } from "./unions/maxcostusd.js";

/** Set the maximum spend for the active run in a session. */
export type SessionCostCapRequest = {
  maxCostUsd: Maxcostusd;
};

const sessionCostCapRequestProperties: s.Shape<SessionCostCapRequest> = {
  maxCostUsd: maxcostusdInternalSchema,
};

export const sessionCostCapRequestInternalSchema: Schema<SessionCostCapRequest> =
  s.object<SessionCostCapRequest>(sessionCostCapRequestProperties);

export const sessionCostCapRequestSchema: Schema<SessionCostCapRequest> = s.lazySchema(() =>
  s.object<SessionCostCapRequest>({
    ...sessionCostCapRequestProperties,
    maxCostUsd: maxcostusdSchema,
  }),
);
