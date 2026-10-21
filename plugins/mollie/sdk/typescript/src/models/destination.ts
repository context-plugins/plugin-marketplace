import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The destination of this portion of the payment. */
export type Destination = {
  /**
   * The type of destination. Currently only the destination type `organization` is supported.
   *
   * @default "organization"
   */
  type?: "organization";
  /**
   * Required for destination type `organization`. The ID of the connected organization the funds
   * should be routed to.
   */
  organizationId: string;
};

export const destinationSchema: Schema<Destination> = s.object<Destination>({
  type: s.defaulted(s.literal("organization"), "organization"),
  organizationId: s.string(),
});
