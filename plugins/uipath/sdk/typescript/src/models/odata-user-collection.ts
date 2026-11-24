import * as s from "../core/validation/index.js";
import type { JsonValue, Schema } from "../core/validation/schema.js";
import {
  valueUipathUsersApiInternalSchema,
  valueUipathUsersApiSchema,
  type ValueUipathUsersApi,
} from "./value-uipath-users-api.js";

/** OData collection response containing users */
export type ODataUserCollection = {
  value?: ValueUipathUsersApi[];
  /** Properties the service sent or accepts beyond those declared. */
  additionalProperties?: Record<string, JsonValue>;
};

const oDataUserCollectionProperties: s.Shape<ODataUserCollection> = {
  value: s.optional(s.array(s.lazy(() => valueUipathUsersApiInternalSchema))),
};

export const oDataUserCollectionInternalSchema: Schema<ODataUserCollection> = s.object<ODataUserCollection>(
  oDataUserCollectionProperties,
  { additionalProperties: s.json() },
);

export const oDataUserCollectionSchema: Schema<ODataUserCollection> = s.lazySchema(() =>
  s.object<ODataUserCollection>(
    {
      ...oDataUserCollectionProperties,
      value: s.optional(s.array(s.lazy(() => valueUipathUsersApiSchema))),
    },
    { additionalProperties: s.json() },
  ),
);
