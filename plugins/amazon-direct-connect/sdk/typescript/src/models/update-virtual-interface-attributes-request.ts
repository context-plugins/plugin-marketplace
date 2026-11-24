import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";

export type UpdateVirtualInterfaceAttributesRequest = {
  /** The ID of the virtual private interface. */
  virtualInterfaceId: string;
  /**
   * The maximum transmission unit (MTU), in bytes. The supported values are 1500 and 8500. The
   * default value is 1500.
   */
  mtu?: number;
  /** Indicates whether to enable or disable SiteLink. */
  enableSiteLink?: boolean;
  /** The name of the virtual private interface. */
  virtualInterfaceName?: string;
  /**
   * The number of inbound IPv4 route prefixes to allocate to the virtual interface. Not applicable
   * to public virtual interfaces.
   */
  prefixPoolAllocatedCountIpv4?: number;
  /**
   * The number of inbound IPv6 route prefixes to allocate to the virtual interface. Not applicable
   * to public virtual interfaces.
   */
  prefixPoolAllocatedCountIpv6?: number;
  /**
   * The rate limit (bandwidth allocation) to apply to the virtual interface. Use this to update the
   * bandwidth allocation on an existing virtual interface.
   */
  rateLimit?: string;
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const updateVirtualInterfaceAttributesRequestSchema: Schema<UpdateVirtualInterfaceAttributesRequest> =
  s.object<UpdateVirtualInterfaceAttributesRequest>(
    {
      virtualInterfaceId: s.string(),
      mtu: s.optional(s.int()),
      enableSiteLink: s.optional(s.boolean()),
      virtualInterfaceName: s.optional(s.string()),
      prefixPoolAllocatedCountIpv4: s.optional(s.int()),
      prefixPoolAllocatedCountIpv6: s.optional(s.int()),
      rateLimit: s.optional(s.string()),
    },
    { additionalProperties: s.json() },
  );
