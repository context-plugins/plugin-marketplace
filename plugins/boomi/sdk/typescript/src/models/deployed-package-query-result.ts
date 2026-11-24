import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import { deployedPackageSchema, type DeployedPackage } from "./deployed-package.js";

/** Paginated query results for deployed packages. */
export type DeployedPackageQueryResult = {
  /** Total number of matching records. */
  numberOfResults?: number;
  /** Token for retrieving the next page of results. */
  queryToken?: string;
  result?: DeployedPackage[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

export const deployedPackageQueryResultSchema: Schema<DeployedPackageQueryResult> =
  s.object<DeployedPackageQueryResult>(
    {
      numberOfResults: s.optional(s.int()),
      queryToken: s.optional(s.string()),
      result: s.optional(s.array(s.lazy(() => deployedPackageSchema))),
    },
    { additionalProperties: s.json() },
  );
