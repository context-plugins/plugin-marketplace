import * as s from "../core/validation/index.js";
import type { EnumSchema } from "../core/validation/schema.js";

/** Resource type identifier. */
export const TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody = {
  ResponseBody: "response_body",
} as const;
export type TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody =
  | (typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody)[keyof typeof TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody]
  | (string & {});

export const typeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBodySchema: EnumSchema<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody> =
  s.enumOf<TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody>(
    TypeOptionsRestDiscoveryDiscoverTypeHttpPaginationTypeResponseBody,
  );
