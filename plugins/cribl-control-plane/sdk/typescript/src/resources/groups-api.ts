import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { configGroupSchema, type ConfigGroup } from "../models/config-group.js";
import { countedConfigGroupSchema, type CountedConfigGroup } from "../models/counted-config-group.js";
import { countedStringSchema, type CountedString } from "../models/counted-string.js";
import {
  countedUserAccessControlListSchema,
  type CountedUserAccessControlList,
} from "../models/counted-user-access-control-list.js";
import { deployRequestSchema, type DeployRequest } from "../models/deploy-request.js";
import { errorSchema, type Error } from "../models/error.js";
import { groupCreateRequestSchema, type GroupCreateRequest } from "../models/group-create-request.js";
import { paginatedConfigGroupSchema, type PaginatedConfigGroup } from "../models/paginated-config-group.js";
import { productsCoreSchema, type ProductsCore } from "../models/products-core.js";
import { rbacResourceSchema, type RbacResource } from "../models/rbac-resource.js";
import { restApiJsonErrorSchema, type RestApiJsonError } from "../models/rest-api-json-error.js";
import type { Servers } from "../servers.js";

/**
 * Actions related to Groups
 */
export class GroupsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Create a new Worker Group, Outpost Group, or Edge Fleet for the specified Cribl product.
   *
   * @returns The created ConfigGroup object in a single-item list.
   *
   * @throws {@link GroupsApi.CreateProductsGroupsByProductError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  createProductsGroupsByProduct(
    request: GroupsApi.CreateProductsGroupsByProductRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedConfigGroup, GroupsApi.CreateProductsGroupsByProductError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/products/{product}/groups"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "product", value: request.product, schema: productsCoreSchema }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: groupCreateRequestSchema },
      },
      {
        success: { kind: "json", schema: countedConfigGroupSchema },
        errorFactory: GroupsApi.CreateProductsGroupsByProductError,
      },
      options,
    );
  }

  /**
   * Delete a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Delete the specified Worker Group, Outpost Group, or Edge Fleet.
   *
   * @returns The deleted ConfigGroup object in a single-item list.
   *
   * @throws {@link GroupsApi.DeleteProductsGroupsByProductAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteProductsGroupsByProductAndId(
    request: GroupsApi.DeleteProductsGroupsByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedConfigGroup, GroupsApi.DeleteProductsGroupsByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedConfigGroupSchema },
        errorFactory: GroupsApi.DeleteProductsGroupsByProductAndIdError,
      },
      options,
    );
  }

  /**
   * Get the user access control list for a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Get the user access control list (ACL) for the specified Worker Group, Outpost Group, or Edge
   * Fleet.<br/><br/>This endpoint lists users with explicit access assignments on the Group or
   * Fleet. The response does not include access granted through Team membership or inherited based
   * on a user's Permissions and Roles at the Organization/Global, Workspace, or product
   * level.<br/><br/>To list the Team ACL for a product and Group or Fleet, use <code>GET
   * /products/{product}/groups/{id}/acl/teams</code>.
   *
   * @returns The requested UserAccessControlList object in a single-item list.
   *
   * @throws {@link GroupsApi.GetProductsGroupsAclByProductAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsGroupsAclByProductAndId(
    request: GroupsApi.GetProductsGroupsAclByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedUserAccessControlList, GroupsApi.GetProductsGroupsAclByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}/acl"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "type", value: request.type, schema: s.optional(s.lazy(() => rbacResourceSchema)) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedUserAccessControlListSchema },
        errorFactory: GroupsApi.GetProductsGroupsAclByProductAndIdError,
      },
      options,
    );
  }

  /**
   * List all Worker Groups, Outpost Groups, or Edge Fleets
   *
   * @remarks
   * Get a list of all Worker Groups, Outpost Groups, or Edge Fleets for the specified Cribl
   * product.
   *
   * @returns List of ConfigGroup objects.
   *
   * @throws {@link GroupsApi.GetProductsGroupsByProductError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsGroupsByProduct(
    request: GroupsApi.GetProductsGroupsByProductRequest,
    options?: RequestOptions,
  ): ApiPromise<PaginatedConfigGroup, GroupsApi.GetProductsGroupsByProductError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/groups"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [{ name: "product", value: request.product, schema: productsCoreSchema }],
        query: [
          { name: "fields", value: request.fields, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedConfigGroupSchema },
        errorFactory: GroupsApi.GetProductsGroupsByProductError,
      },
      options,
    );
  }

  /**
   * Get a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Get the specified Worker Group, Outpost Group, or Edge Fleet.
   *
   * @returns The requested ConfigGroup object in a single-item list.
   *
   * @throws {@link GroupsApi.GetProductsGroupsByProductAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsGroupsByProductAndId(
    request: GroupsApi.GetProductsGroupsByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedConfigGroup, GroupsApi.GetProductsGroupsByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [{ name: "fields", value: request.fields, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedConfigGroupSchema },
        errorFactory: GroupsApi.GetProductsGroupsByProductAndIdError,
      },
      options,
    );
  }

  /**
   * Get the configuration version for a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Get the configuration version for the specified Worker Group, Outpost Group, or Edge Fleet.
   *
   * @returns The requested string object in a single-item list.
   *
   * @throws {@link GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError} when the API
   * answers with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getProductsGroupsConfigVersionByProductAndId(
    request: GroupsApi.GetProductsGroupsConfigVersionByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedString, GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}/configVersion"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: countedStringSchema },
        errorFactory: GroupsApi.GetProductsGroupsConfigVersionByProductAndIdError,
      },
      options,
    );
  }

  /**
   * Update a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Update the specified Worker Group, Outpost Group, or Edge Fleet.<br/><br/>Provide a complete
   * representation of the Group or Fleet that you want to update in the request body. This endpoint
   * does not support partial updates. Cribl removes any omitted fields when updating the Group or
   * Fleet.<br/><br/>Confirm that the configuration in your request body is correct before sending
   * the request. If the configuration is incorrect, the updated Group or Fleet might not function
   * as expected.<br/><br/>**Warning**: Do not change the values for the following parameters in the
   * body of PATCH requests. The request body must include the values as they appear in the
   * <code>GET /products/{product}/groups/{id}</code> response.<br/> -
   * <code>configVersion</code><br/> - <code>deployingWorkerCount</code><br/> -
   * <code>incompatibleWorkerCount</code><br/> - <code>workerCount</code><br/> -
   * <code>lookupDeployments</code>.
   *
   * @returns The updated ConfigGroup object in a single-item list.
   *
   * @throws {@link GroupsApi.UpdateProductsGroupsByProductAndIdError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateProductsGroupsByProductAndId(
    request: GroupsApi.UpdateProductsGroupsByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedConfigGroup, GroupsApi.UpdateProductsGroupsByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: configGroupSchema },
      },
      {
        success: { kind: "json", schema: countedConfigGroupSchema },
        errorFactory: GroupsApi.UpdateProductsGroupsByProductAndIdError,
      },
      options,
    );
  }

  /**
   * Deploy commits to a Worker Group, Outpost Group, or Edge Fleet
   *
   * @remarks
   * Deploy commits to the specified Worker Group, Outpost Group, or Edge Fleet.
   *
   * @returns The updated ConfigGroup object in a single-item list.
   *
   * @throws {@link GroupsApi.UpdateProductsGroupsDeployByProductAndIdError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CriblApiReferenceError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  updateProductsGroupsDeployByProductAndId(
    request: GroupsApi.UpdateProductsGroupsDeployByProductAndIdRequest,
    options?: RequestOptions,
  ): ApiPromise<CountedConfigGroup, GroupsApi.UpdateProductsGroupsDeployByProductAndIdError> {
    return this.#rawClient.execute(
      {
        method: "PATCH",
        urlTemplate: this.#servers.default("/products/{product}/groups/{id}/deploy"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.clientOauth),
        pathParams: [
          { name: "product", value: request.product, schema: productsCoreSchema },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: deployRequestSchema },
      },
      {
        success: { kind: "json", schema: countedConfigGroupSchema },
        errorFactory: GroupsApi.UpdateProductsGroupsDeployByProductAndIdError,
      },
      options,
    );
  }
}

export namespace GroupsApi {
  export type CreateProductsGroupsByProductRequest = {
    /** Name of the Cribl product to add the Worker Group, Outpost Group, or Edge Fleet to. */
    product: ProductsCore;
    /** GroupCreateRequest object. */
    body: GroupCreateRequest;
  };

  export class CreateProductsGroupsByProductError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error409", undefined>
      | Declared<"restApiJsonError", RestApiJsonError>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateProductsGroupsByProductError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
      { on: 429, kind: "restApiJsonError", decode: { kind: "json", schema: restApiJsonErrorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type DeleteProductsGroupsByProductAndIdRequest = {
    /** Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. */
    product: ProductsCore;
    /** The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to delete. */
    id: string;
  };

  export class DeleteProductsGroupsByProductAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<DeleteProductsGroupsByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProductsGroupsAclByProductAndIdRequest = {
    /** Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. */
    product: ProductsCore;
    /** The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the ACL for. */
    id: string;
    /** Filter for limiting the response to ACL entries for the specified RBAC resource type. */
    type?: RbacResource;
  };

  export class GetProductsGroupsAclByProductAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsGroupsAclByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProductsGroupsByProductRequest = {
    /** Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. */
    product: ProductsCore;
    /**
     * Comma-separated list of additional properties to include in the response. Available values
     * are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>.
     */
    fields?: string;
    /**
     * Maximum number of Worker Groups, Outpost Groups, or Edge Fleets to return in the response for
     * this request. Use with <code>offset</code> to paginate the response into manageable batches.
     */
    limit?: number;
    /**
     * Starting point from which to retrieve results for this request. Use with <code>limit</code>
     * to paginate the response into manageable batches.
     */
    offset?: number;
  };

  export class GetProductsGroupsByProductError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsGroupsByProductError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProductsGroupsByProductAndIdRequest = {
    /** Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. */
    product: ProductsCore;
    /** The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get. */
    id: string;
    /**
     * Comma-separated list of additional properties to include in the response. Available values
     * are <code>git.commit</code>, <code>git.localChanges</code>, and <code>git.log</code>.
     */
    fields?: string;
  };

  export class GetProductsGroupsByProductAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error404", undefined>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsGroupsByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type GetProductsGroupsConfigVersionByProductAndIdRequest = {
    /** Name of the Cribl product to get the Worker Groups, Outpost Groups, or Edge Fleets for. */
    product: ProductsCore;
    /**
     * The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to get the
     * configuration version for.
     */
    id: string;
  };

  export class GetProductsGroupsConfigVersionByProductAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<GetProductsGroupsConfigVersionByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateProductsGroupsByProductAndIdRequest = {
    /** Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. */
    product: ProductsCore;
    /** The <code>id</code> of the Worker Group, Outpost Group, or Edge Fleet to update. */
    id: string;
    /** ConfigGroup object. */
    body: ConfigGroup;
  };

  export class UpdateProductsGroupsByProductAndIdError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProductsGroupsByProductAndIdError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type UpdateProductsGroupsDeployByProductAndIdRequest = {
    /** Name of the Cribl product that contains the Worker Group, Outpost Group, or Edge Fleet. */
    product: ProductsCore;
    /**
     * The <code>id</code> of the target Worker Group, Outpost Group, or Edge Fleet for commit
     * deployment.
     */
    id: string;
    /** DeployRequest object. */
    body: DeployRequest;
  };

  export class UpdateProductsGroupsDeployByProductAndIdError extends ApiError {
    declare readonly payload: Declared<"error", Error> | Declared<"error2", Error> | Undeclared;

    static readonly errors: ErrorDecoders<UpdateProductsGroupsDeployByProductAndIdError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error2", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
