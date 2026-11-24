import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayTransfersApi = {
  Transfer: "transfer",
} as const;
export type Entity1RazorpayTransfersApi =
  | (typeof Entity1RazorpayTransfersApi)[keyof typeof Entity1RazorpayTransfersApi]
  | (string & {});

export const entity1RazorpayTransfersApiSchema: EnumSchema<Entity1RazorpayTransfersApi> =
  s.enumOf<Entity1RazorpayTransfersApi>(Entity1RazorpayTransfersApi);
