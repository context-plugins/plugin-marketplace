import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { patWithSecretSchema, type PatWithSecret } from "./pat-with-secret.js";

/** Response body for `POST /personal-access-tokens` (`pat.controller.ts` `createToken`). */
export type CreatePatResponse = {
  message: string;
  token: PatWithSecret;
};

export const createPatResponseSchema: Schema<CreatePatResponse> = s.object<CreatePatResponse>({
  message: s.string(),
  token: patWithSecretSchema,
});
