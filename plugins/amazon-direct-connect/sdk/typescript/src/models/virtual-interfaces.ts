import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { virtualInterfaceSchema, type VirtualInterface } from "./virtual-interface.js";

export type VirtualInterfaces = {
  /** The virtual interfaces */
  virtualInterfaces?: VirtualInterface[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const virtualInterfacesSchema: Schema<VirtualInterfaces> = s.object<VirtualInterfaces>(
  {
    virtualInterfaces: s.optional(s.array(s.lazy(() => virtualInterfaceSchema))),
    nextToken: s.optional(s.string()),
  },
  { additionalProperties: s.json() },
);
