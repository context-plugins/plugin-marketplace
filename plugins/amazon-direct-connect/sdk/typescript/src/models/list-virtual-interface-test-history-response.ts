import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  virtualInterfaceTestHistorySchema,
  type VirtualInterfaceTestHistory,
} from "./virtual-interface-test-history.js";

export type ListVirtualInterfaceTestHistoryResponse = {
  /** The ID of the tested virtual interface. */
  virtualInterfaceTestHistory?: VirtualInterfaceTestHistory[];
  /**
   * The token to use to retrieve the next page of results. This value is null when there are no
   * more results to return.
   */
  nextToken?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const listVirtualInterfaceTestHistoryResponseSchema: Schema<ListVirtualInterfaceTestHistoryResponse> =
  s.object<ListVirtualInterfaceTestHistoryResponse>(
    {
      virtualInterfaceTestHistory: s.optional(s.array(s.lazy(() => virtualInterfaceTestHistorySchema))),
      nextToken: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
