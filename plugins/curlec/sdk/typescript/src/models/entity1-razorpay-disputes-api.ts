import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

export const Entity1RazorpayDisputesApi = {
  Collection: "collection",
} as const;
export type Entity1RazorpayDisputesApi =
  | (typeof Entity1RazorpayDisputesApi)[keyof typeof Entity1RazorpayDisputesApi]
  | (string & {});

export const entity1RazorpayDisputesApiSchema: EnumSchema<Entity1RazorpayDisputesApi> =
  s.enumOf<Entity1RazorpayDisputesApi>(Entity1RazorpayDisputesApi);
