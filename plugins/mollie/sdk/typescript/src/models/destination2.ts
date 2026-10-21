import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";

/** The destination of the route. */
export type Destination2 = {
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

export const destination2Schema: Schema<Destination2> = s.object<Destination2>({
  type: s.defaulted(s.literal("organization"), "organization"),
  organizationId: s.string(),
});
