import * as s from "../../core/validation/index.js";
import type { Schema } from "../../core/validation/schema.js";

/**
 * An external identifier for the cart item. This can be set to any value and is not sent to the
 * payment service.
 */
export type ExternalIdentifier7 = string;

export const externalIdentifier7Schema: Schema<ExternalIdentifier7> = s.of<ExternalIdentifier7>(
  s.union([s.string()]),
);
