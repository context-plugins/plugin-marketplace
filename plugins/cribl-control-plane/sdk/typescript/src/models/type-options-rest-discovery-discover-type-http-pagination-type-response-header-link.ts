import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink = {
  ResponseHeaderLink: "response_header_link",
} as const;
export type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink =
  | (typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink)[keyof typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink]
  | (string & {});

export const typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLinkSchema: EnumSchema<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink> =
  s.enumOf<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink>(
    TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderLink,
  );
