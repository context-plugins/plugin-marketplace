import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Connector type identifier. */
export const TypeOptionsGooglepubsub = {
  GooglePubsub: "google_pubsub",
} as const;
export type TypeOptionsGooglepubsub =
  | (typeof TypeOptionsGooglepubsub)[keyof typeof TypeOptionsGooglepubsub]
  | (string & {});

export const typeOptionsGooglepubsubSchema: EnumSchema<TypeOptionsGooglepubsub> =
  s.enumOf<TypeOptionsGooglepubsub>(TypeOptionsGooglepubsub);
