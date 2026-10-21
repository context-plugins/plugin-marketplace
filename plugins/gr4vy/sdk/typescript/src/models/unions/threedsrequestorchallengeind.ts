import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/** Passes `threeDS2RequestData.threeDSRequestorChallengeInd` to Adyen. */
export type Threedsrequestorchallengeind = string;

export const threedsrequestorchallengeindSchema: Schema<Threedsrequestorchallengeind> =
  s.of<Threedsrequestorchallengeind>(s.union([s.string()]));
