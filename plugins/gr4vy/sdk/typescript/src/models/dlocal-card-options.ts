import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { threeDsecureForceSchema, type ThreeDsecureForce } from "./unions/three-dsecure-force.js";

export type DlocalCardOptions = {
  /** Indicates whether to force dlocal hosted 3D Secure authentication for the card transaction. */
  threeDsecureForce?: ThreeDsecureForce;
};

export const dlocalCardOptionsSchema: Schema<DlocalCardOptions> = s.object<DlocalCardOptions>({
  threeDsecureForce: s.optional(s.lazy(() => threeDsecureForceSchema)),
  _keysMap: {
    threeDsecureForce: "three_dsecure_force",
  },
});
