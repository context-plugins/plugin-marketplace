import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader = {
  ResponseHeader: "response_header",
} as const;
export type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader =
  | (typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader)[keyof typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader]
  | (string & {});

export const typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeaderSchema: EnumSchema<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader> =
  s.enumOf<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader>(
    TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseHeader,
  );
