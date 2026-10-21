import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { clientSchema, type Client } from "./client.js";

export type Embedded12 = {
  /**
   * An array of client objects. For a complete reference of the client object, refer to the [Get
   * client endpoint](get-client) documentation.
   */
  clients?: Client[];
};

export const embedded12Schema: Schema<Embedded12> = s.object<Embedded12>({
  clients: s.optional(s.array(s.lazy(() => clientSchema))),
});
