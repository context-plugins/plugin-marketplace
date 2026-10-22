import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Indicates whether to force dlocal hosted 3D Secure authentication for the card transaction. */
export type ThreeDsecureForce = boolean;

export const threeDsecureForceSchema: Schema<ThreeDsecureForce> = s.of<ThreeDsecureForce>(
  s.union([s.boolean()]),
);
