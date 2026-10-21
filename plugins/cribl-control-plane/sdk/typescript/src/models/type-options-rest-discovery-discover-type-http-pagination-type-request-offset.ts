import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset = {
  RequestOffset: "request_offset",
} as const;
export type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset =
  | (typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset)[keyof typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset]
  | (string & {});

export const typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffsetSchema: EnumSchema<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset> =
  s.enumOf<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset>(
    TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestOffset,
  );
