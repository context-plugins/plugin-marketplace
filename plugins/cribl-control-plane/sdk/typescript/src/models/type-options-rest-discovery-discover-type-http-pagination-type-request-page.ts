import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage = {
  RequestPage: "request_page",
} as const;
export type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage =
  | (typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage)[keyof typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage]
  | (string & {});

export const typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPageSchema: EnumSchema<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage> =
  s.enumOf<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage>(
    TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeRequestPage,
  );
