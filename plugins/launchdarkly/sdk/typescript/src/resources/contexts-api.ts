import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  contextAttributeNamesCollectionSchema,
  type ContextAttributeNamesCollection,
} from "../models/context-attribute-names-collection.js";
import {
  contextAttributeValuesCollectionSchema,
  type ContextAttributeValuesCollection,
} from "../models/context-attribute-values-collection.js";
import {
  contextInstanceEvaluationsSchema,
  type ContextInstanceEvaluations,
} from "../models/context-instance-evaluations.js";
import {
  contextInstanceSearchSchema,
  type ContextInstanceSearch,
} from "../models/context-instance-search.js";
import { contextInstancesSchema, type ContextInstances } from "../models/context-instances.js";
import {
  contextKindsCollectionRepSchema,
  type ContextKindsCollectionRep,
} from "../models/context-kinds-collection-rep.js";
import { contextSearchSchema, type ContextSearch } from "../models/context-search.js";
import { contextsSchema, type Contexts } from "../models/contexts.js";
import { forbiddenErrorRepSchema, type ForbiddenErrorRep } from "../models/forbidden-error-rep.js";
import {
  invalidRequestErrorRepSchema,
  type InvalidRequestErrorRep,
} from "../models/invalid-request-error-rep.js";
import { notFoundErrorRepSchema, type NotFoundErrorRep } from "../models/not-found-error-rep.js";
import { rateLimitedErrorRepSchema, type RateLimitedErrorRep } from "../models/rate-limited-error-rep.js";
import { unauthorizedErrorRepSchema, type UnauthorizedErrorRep } from "../models/unauthorized-error-rep.js";
import {
  upsertContextKindPayloadSchema,
  type UpsertContextKindPayload,
} from "../models/upsert-context-kind-payload.js";
import { upsertResponseRepSchema, type UpsertResponseRep } from "../models/upsert-response-rep.js";
import type { Servers } from "../servers.js";

/**
 *
 * Contexts are people, services, machines, or other resources that encounter feature flags in your
 * product. Contexts are identified by their `kind`, which describes the type of resources
 * encountering flags, and by their `key`. Each unique combination of one or more contexts that have
 * encountered a feature flag in your product is called a context instance.
 *
 * When you use the LaunchDarkly SDK to evaluate a flag, you provide a context to that call.
 * LaunchDarkly records the key and attributes of each context instance. You can view these in the
 * LaunchDarkly user interface from the **Contexts** list, or use the Context APIs. To learn more,
 * read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
 *
 * LaunchDarkly provides APIs for you to:
 *
 * * retrieve contexts, context instances, and context attribute names and values
 * * search for contexts or context instances
 * * delete context instances
 * * fetch context kinds
 * * create and update context kinds
 *
 * To learn more about context kinds, read [Context
 * kinds](https://launchdarkly.com/docs/home/observability/context-kinds).
 *
 * Contexts are always scoped within a project and an environment. Each environment has its own set
 * of context instance records.
 *
 * Several of the endpoints in the contexts API require a context instance ID or application ID.
 * Both of these IDs are returned as part of the [Search for context
 * instances](https://launchdarkly.com/docs/api/contexts/search-context-instances) response. The
 * context instance ID is the `id` field of each element in the `items` array. The application ID is
 * the `applicationId` field of each element in the `items` array. By default, the application ID is
 * set to the SDK you are using. In the LaunchDarkly UI, the application ID and application version
 * appear on the context details page in the "From source" field. You can change the application ID
 * as part of your SDK configuration. To learn more, read [Application metadata
 * configuration](https://launchdarkly.com/docs/sdk/features/app-config).
 *
 * ### Filtering contexts and context instances
 *
 * When you [search for contexts](https://launchdarkly.com/docs/api/contexts/search-contexts) or
 * [context instances](https://launchdarkly.com/docs/api/contexts/search-context-instances), you can
 * filter the results using fields and operators with the `filter` parameter. Specify `filter`
 * either as a query parameter or as a request body parameter.
 *
 * The `filter` parameter supports the following operators: `after`, `anyOf`, `before`, `contains`,
 * `equals`, `exists`, `notEquals`, `startsWith`.
 *
 * <details> <summary>Expand for details on operators and syntax</summary>
 *
 * #### after
 *
 * Returns contexts or context instances if the date field value occurs after the specified time.
 * For example:
 *
 * * `myField after "2022-09-21T19:03:15+00:00"`
 *
 * #### anyOf
 *
 * Returns contexts or context instances if any field value matches any of the provided values. For
 * example:
 *
 * * `myField anyOf [44]`
 * * `myField anyOf ["phone","tablet"]`
 * * `myField anyOf [true]"`
 *
 * #### before
 *
 * Returns contexts or context instances if the date field value occurs before the provided time.
 * For example:
 *
 * * `myField before "2022-09-21T19:03:15+00:00"`
 *
 * #### contains
 *
 * Returns contexts or context instances if the field's list of values contains all of the provided
 * values. For example:
 *
 * * `myListField contains 44`
 * * `myListField contains ["phone","tablet"]`
 * * `myListField contains true`
 *
 * #### equals
 *
 * Returns contexts or context instances only if the field value exactly matches the provided value.
 * For example:
 *
 * * `myField equals 44`
 * * `myField equals "device"`
 * * `myField equals true`
 * * `myField equals [1,2,3,4]`
 * * `myField equals ["hello","goodbye"]`
 *
 * #### exists
 *
 * Returns contexts or context instances based on whether the specified field exists. For example:
 *
 * * `myField exists true`
 * * `myField exists false`
 * * `*.name exists true`
 *
 * #### notEquals
 *
 * Returns contexts or context instances if the field value does not exactly match the provided
 * value. For example:
 *
 * * `myField notEquals 44`
 * * `myField notEquals "device"`
 * * `myField notEquals true`
 * * `myField notEquals [1,2,3,4]`
 * * `myField notEquals ["hello","goodbye"]`
 *
 * #### startsWith
 *
 * Returns contexts or context instances if a singular string field value begins with the provided
 * substring. For example:
 *
 * * `myField startsWith "do"`
 *
 * </details>
 *
 * You can also combine filters in the following ways:
 *
 * * Use a comma (`,`) as an AND operator
 * * Use a vertical bar (`|`) as an OR operator
 * * Use parentheses `()` to group filters
 *
 * For example:
 *
 * * `myField notEquals 0, myField notEquals 1` returns contexts or context instances where
 *   `myField` is not 0 and is not 1
 * * `myFirstField equals "device",(mySecondField equals "iPhone"|mySecondField equals "iPad")`
 *   returns contexts or context instances where `myFirstField` is equal to "device" and
 *   `mySecondField` is equal to either "iPhone" or "iPad"
 *
 * #### Supported fields and operators
 *
 * The `filter` parameter accepts different field types depending on whether you search for contexts
 * or context instances. Also, you can only filter some fields using certain operators.
 *
 * When you search for [contexts](https://launchdarkly.com/docs/api/contexts/search-contexts), the
 * `filter` parameter supports the following fields and operators:
 *
 * |<div style="width:120px">Field</div> |Description |Supported operators |
 * |---|---|---|
 * |`applicationId` |An identifier that represents the application where the LaunchDarkly SDK is running. |`equals`, `notEquals`, `anyOf` |
 * |`id` |The unique identifier for the context. |`equals`, `notEquals`, `anyOf` |
 * |`key` |The context key. |`equals`, `notEquals`, `anyOf`, `startsWith` |
 * |`kind` |The context kind. |`equals`, `notEquals`, `anyOf` |
 * |`kinds` |A list of all kinds found in the context. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
 * |`kindKey` |The kind and key for the context, joined with a `:`. For example, `user:user-key-abc123`. |`equals`, `notEquals`, `anyOf` |
 * |`kindKeys` |A list of all kinds and keys found in the context. Join the kind and key with a `:`. For example, `user:user-key-abc123`. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
 * |`q` |A "fuzzy" search across context attribute values and the context key. Supply a string or list of strings to the operator.  |`equals` |
 * |`name` |The name for the context. |`equals`, `notEquals`, `exists`, `anyOf`, `startsWith` |
 * |`<a kind>.<an attribute name>` |A kind and the name of any attribute that appears in a context of that kind, for example, `user.email`. To filter all kinds use `*` in place of the kind. For example, `*.email`. You can use either a literal attribute name or a JSON path to specify the attribute. If you use a JSON path, then you must escape the `/` character using `~1`, and escape the `~` character using `~0`. For example, use `user.job/title` or `user./job~1title` to filter the `/job/title` field in a user context kind. If the field or value includes whitespace, enclose it in double quotes. |`equals`, `notEquals`, `exists`, `startsWith`, `before`, `after`.|
 *
 * When searching for [context
 * instances](https://launchdarkly.com/docs/api/contexts/search-context-instances), the `filter`
 * parameter supports the following fields and operators:
 *
 * |<div style="width:120px">Field</div> |Description |Supported operators |
 * |---|---|---|
 * |`applicationId` |An identifier representing the application where the LaunchDarkly SDK is running. |`equals`, `notEquals`, `anyOf` |
 * |`id` |The unique identifier for the context instance. |`equals`, `notEquals`, `anyOf` |
 * |`kinds` |A list of all kinds found in the context instance. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
 * |`kindKeys` |A list of all kinds and keys found in the context instance. The kind and key are joined with `:`. For example, `user:user-key-abc123`. Supply a list of strings to the operator. |`equals`, `anyOf`, `contains` |
 */
export class ContextsApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Delete context instances
   *
   * @remarks
   * Delete context instances by ID.
   *
   * @returns Action succeeded
   *
   * @throws {@link ContextsApi.DeleteContextInstancesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  deleteContextInstances(
    request: ContextsApi.DeleteContextInstancesRequest,
    options?: RequestOptions,
  ): ApiPromise<undefined, ContextsApi.DeleteContextInstancesError> {
    return this.#rawClient.execute(
      {
        method: "DELETE",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: ContextsApi.DeleteContextInstancesError,
      },
      options,
    );
  }

  /**
   * Evaluate flags for context instance
   *
   * @remarks
   * Evaluate flags for a context instance, for example, to determine the expected flag variation.
   * **Do not use this API instead of an SDK.** The LaunchDarkly SDKs are specialized for the tasks
   * of evaluating feature flags in your application at scale and generating analytics events based
   * on those evaluations. This API is not designed for that use case. Any evaluations you perform
   * with this API will not be reflected in features such as flag statuses and flag insights.
   * Context instances evaluated by this API will not appear in the Contexts list. To learn more,
   * read [Comparing LaunchDarkly's SDKs and REST
   * API](https://launchdarkly.com/docs/guides/api/comparing-sdk-rest-api).
   *
   * ### Filtering
   *
   * LaunchDarkly supports the `filter` query param for filtering, with the following fields:
   *
   * - `query` filters for a string that matches against the flags' keys and names. It is not case
   *   sensitive. For example: `filter=query equals dark-mode`.
   * - `tags` filters the list to flags that have all of the tags in the list. For example:
   *   `filter=tags contains ["beta","q1"]`.
   *
   * You can also apply multiple filters at once. For example, setting `filter=query equals
   * dark-mode, tags contains ["beta","q1"]` matches flags which match the key or name `dark-mode`
   * and are tagged `beta` and `q1`.
   *
   * @returns Flag evaluation collection response
   *
   * @throws {@link ContextsApi.EvaluateContextInstanceError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  evaluateContextInstance(
    request: ContextsApi.EvaluateContextInstanceRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextInstanceEvaluations, ContextsApi.EvaluateContextInstanceError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/flags/evaluate",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "offset", value: request.offset, schema: s.optional(s.int()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: {
          kind: "json",
          value: request.body,
          schema: s.record(s.string(), s.record(s.string(), s.unknown())),
        },
      },
      {
        success: { kind: "json", schema: contextInstanceEvaluationsSchema },
        errorFactory: ContextsApi.EvaluateContextInstanceError,
      },
      options,
    );
  }

  /**
   * Get context attribute names
   *
   * @remarks
   * Get context attribute names.
   *
   * @returns Context attribute names collection response
   *
   * @throws {@link ContextsApi.GetContextAttributeNamesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextAttributeNames(
    request: ContextsApi.GetContextAttributeNamesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextAttributeNamesCollection, ContextsApi.GetContextAttributeNamesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextAttributeNamesCollectionSchema },
        errorFactory: ContextsApi.GetContextAttributeNamesError,
      },
      options,
    );
  }

  /**
   * Get context attribute values
   *
   * @remarks
   * Get context attribute values.
   *
   * @returns Context attribute values collection response
   *
   * @throws {@link ContextsApi.GetContextAttributeValuesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextAttributeValues(
    request: ContextsApi.GetContextAttributeValuesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextAttributeValuesCollection, ContextsApi.GetContextAttributeValuesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-attributes/{attributeName}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "attributeName", value: request.attributeName, schema: s.string() },
        ],
        query: [
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextAttributeValuesCollectionSchema },
        errorFactory: ContextsApi.GetContextAttributeValuesError,
      },
      options,
    );
  }

  /**
   * Get context instances
   *
   * @remarks
   * Get context instances by ID.
   *
   * @returns Context instances collection response
   *
   * @throws {@link ContextsApi.GetContextInstancesError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextInstances(
    request: ContextsApi.GetContextInstancesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextInstances, ContextsApi.GetContextInstancesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/{id}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "id", value: request.id, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "continuationToken", value: request.continuationToken, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "includeTotalCount", value: request.includeTotalCount, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextInstancesSchema },
        errorFactory: ContextsApi.GetContextInstancesError,
      },
      options,
    );
  }

  /**
   * Get context kinds
   *
   * @remarks
   * Get all context kinds for a given project.
   *
   * @returns Context kinds collection response
   *
   * @throws {@link ContextsApi.GetContextKindsByProjectKeyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContextKindsByProjectKey(
    request: ContextsApi.GetContextKindsByProjectKeyRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextKindsCollectionRep, ContextsApi.GetContextKindsByProjectKeyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/context-kinds"),
        auth: this.#auth.apiKey,
        pathParams: [{ name: "projectKey", value: request.projectKey, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextKindsCollectionRepSchema },
        errorFactory: ContextsApi.GetContextKindsByProjectKeyError,
      },
      options,
    );
  }

  /**
   * Get contexts
   *
   * @remarks
   * Get contexts based on kind and key.
   *
   * @returns Contexts collection response
   *
   * @throws {@link ContextsApi.GetContextsError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  getContexts(
    request: ContextsApi.GetContextsRequest,
    options?: RequestOptions,
  ): ApiPromise<Contexts, ContextsApi.GetContextsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/{kind}/{key}",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
          { name: "kind", value: request.kind, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "continuationToken", value: request.continuationToken, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "includeTotalCount", value: request.includeTotalCount, schema: s.optional(s.boolean()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: contextsSchema },
        errorFactory: ContextsApi.GetContextsError,
      },
      options,
    );
  }

  /**
   * Create or update context kind
   *
   * @remarks
   * Create or update a context kind by key. Only the included fields will be updated.
   *
   * @returns Context kind upsert response
   *
   * @throws {@link ContextsApi.PutContextKindError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  putContextKind(
    request: ContextsApi.PutContextKindRequest,
    options?: RequestOptions,
  ): ApiPromise<UpsertResponseRep, ContextsApi.PutContextKindError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/api/v2/projects/{projectKey}/context-kinds/{key}"),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "key", value: request.key, schema: s.string() },
        ],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: upsertContextKindPayloadSchema },
      },
      {
        success: { kind: "json", schema: upsertResponseRepSchema },
        errorFactory: ContextsApi.PutContextKindError,
      },
      options,
    );
  }

  /**
   * Search for context instances
   *
   * @remarks
   *
   * Search for context instances.
   *
   * You can use either the query parameters or the request body parameters. If both are provided,
   * there is an error.
   *
   * To learn more about the filter syntax, read [Filtering contexts and context
   * instances](https://launchdarkly.com/docs/api/contexts#filtering-contexts-and-context-instances).
   * To learn more about context instances, read [Context
   * instances](https://launchdarkly.com/docs/home/observability/multi-contexts#context-instances).
   *
   * @returns Context instances collection response
   *
   * @throws {@link ContextsApi.SearchContextInstancesError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchContextInstances(
    request: ContextsApi.SearchContextInstancesRequest,
    options?: RequestOptions,
  ): ApiPromise<ContextInstances, ContextsApi.SearchContextInstancesError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/context-instances/search",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "continuationToken", value: request.continuationToken, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "includeTotalCount", value: request.includeTotalCount, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contextInstanceSearchSchema },
      },
      {
        success: { kind: "json", schema: contextInstancesSchema },
        errorFactory: ContextsApi.SearchContextInstancesError,
      },
      options,
    );
  }

  /**
   * Search for contexts
   *
   * @remarks
   *
   * Search for contexts.
   *
   * You can use either the query parameters or the request body parameters. If both are provided,
   * there is an error.
   *
   * To learn more about the filter syntax, read [Filtering contexts and context
   * instances](https://launchdarkly.com/docs/api/contexts#filtering-contexts-and-context-instances).
   * To learn more about contexts, read [Contexts and context
   * kinds](https://launchdarkly.com/docs/home/observability/contexts#contexts-and-context-kinds).
   *
   * @returns Contexts collection response
   *
   * @throws {@link ContextsApi.SearchContextsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link LaunchDarklyRestApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  searchContexts(
    request: ContextsApi.SearchContextsRequest,
    options?: RequestOptions,
  ): ApiPromise<Contexts, ContextsApi.SearchContextsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default(
          "/api/v2/projects/{projectKey}/environments/{environmentKey}/contexts/search",
        ),
        auth: this.#auth.apiKey,
        pathParams: [
          { name: "projectKey", value: request.projectKey, schema: s.string() },
          { name: "environmentKey", value: request.environmentKey, schema: s.string() },
        ],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.int()) },
          { name: "continuationToken", value: request.continuationToken, schema: s.optional(s.string()) },
          { name: "sort", value: request.sort, schema: s.optional(s.string()) },
          { name: "filter", value: request.filter, schema: s.optional(s.string()) },
          { name: "includeTotalCount", value: request.includeTotalCount, schema: s.optional(s.boolean()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: contextSearchSchema },
      },
      {
        success: { kind: "json", schema: contextsSchema },
        errorFactory: ContextsApi.SearchContextsError,
      },
      options,
    );
  }
}

export namespace ContextsApi {
  export type DeleteContextInstancesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The context instance ID */
    id: string;
  };

  export class DeleteContextInstancesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<DeleteContextInstancesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type EvaluateContextInstanceRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The number of feature flags to return. Defaults to -1, which returns all flags */
    limit?: number;
    /**
     * Where to start in the list. Use this with pagination. For example, an offset of 10 skips the
     * first ten items and then returns the next items in the list, up to the query `limit`.
     */
    offset?: number;
    /**
     * A comma-separated list of fields to sort by. Fields prefixed by a dash ( - ) sort in
     * descending order
     */
    sort?: string;
    /**
     * A comma-separated list of filters. Each filter is of the form `field operator value`.
     * Supported fields are explained above.
     */
    filter?: string;
    body: Record<string, Record<string, unknown>>;
  };

  export class EvaluateContextInstanceError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<EvaluateContextInstanceError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetContextAttributeNamesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /**
     * A comma-separated list of context filters. This endpoint only accepts `kind` filters, with
     * the `equals` operator, and `name` filters, with the `startsWith` operator. To learn more
     * about the filter syntax, read [Filtering contexts and context
     * instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
     */
    filter?: string;
    /**
     * Specifies the maximum number of items in the collection to return (max: 100, default: 100)
     */
    limit?: number;
  };

  export class GetContextAttributeNamesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextAttributeNamesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetContextAttributeValuesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The attribute name */
    attributeName: string;
    /**
     * A comma-separated list of context filters. This endpoint only accepts `kind` filters, with
     * the `equals` operator, and `value` filters, with the `startsWith` operator. To learn more
     * about the filter syntax, read [Filtering contexts and context
     * instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
     */
    filter?: string;
    /** Specifies the maximum number of items in the collection to return (max: 100, default: 50) */
    limit?: number;
  };

  export class GetContextAttributeValuesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextAttributeValuesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetContextInstancesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The context instance ID */
    id: string;
    /** Specifies the maximum number of context instances to return (max: 50, default: 20) */
    limit?: number;
    /**
     * Limits results to context instances with sort values after the value specified. You can use
     * this for pagination, however, we recommend using the `next` link we provide instead.
     */
    continuationToken?: string;
    /**
     * Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending
     * order by specifying `ts` for this value, or descending order by specifying `-ts`.
     */
    sort?: string;
    /**
     * A comma-separated list of context filters. This endpoint only accepts an `applicationId`
     * filter. To learn more about the filter syntax, read [Filtering contexts and context
     * instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
     */
    filter?: string;
    /**
     * Specifies whether to include or omit the total count of matching context instances. Defaults
     * to true.
     */
    includeTotalCount?: boolean;
  };

  export class GetContextInstancesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextInstancesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type GetContextKindsByProjectKeyRequest = {
    /** The project key */
    projectKey: string;
  };

  export class GetContextKindsByProjectKeyError extends ApiError {
    declare readonly payload:
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextKindsByProjectKeyError> = [
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type GetContextsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** The context kind */
    kind: string;
    /** The context key */
    key: string;
    /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
    limit?: number;
    /**
     * Limits results to contexts with sort values after the value specified. You can use this for
     * pagination, however, we recommend using the `next` link we provide instead.
     */
    continuationToken?: string;
    /**
     * Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending
     * order by specifying `ts` for this value, or descending order by specifying `-ts`.
     */
    sort?: string;
    /**
     * A comma-separated list of context filters. This endpoint only accepts an `applicationId`
     * filter. To learn more about the filter syntax, read [Filtering contexts and context
     * instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
     */
    filter?: string;
    /**
     * Specifies whether to include or omit the total count of matching contexts. Defaults to true.
     */
    includeTotalCount?: boolean;
  };

  export class GetContextsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetContextsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type PutContextKindRequest = {
    /** The project key */
    projectKey: string;
    /** The context kind key */
    key: string;
    body: UpsertContextKindPayload;
  };

  export class PutContextKindError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"notFoundErrorRep", NotFoundErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<PutContextKindError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 404, kind: "notFoundErrorRep", decode: { kind: "json", schema: notFoundErrorRepSchema } },
    ];
  }

  export type SearchContextInstancesRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
    limit?: number;
    /**
     * Limits results to context instances with sort values after the value specified. You can use
     * this for pagination, however, we recommend using the `next` link we provide instead.
     */
    continuationToken?: string;
    /**
     * Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending
     * order by specifying `ts` for this value, or descending order by specifying `-ts`.
     */
    sort?: string;
    /**
     * A comma-separated list of context filters. This endpoint only accepts an `applicationId`
     * filter. To learn more about the filter syntax, read [Filtering contexts and context
     * instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
     */
    filter?: string;
    /**
     * Specifies whether to include or omit the total count of matching context instances. Defaults
     * to true.
     */
    includeTotalCount?: boolean;
    body: ContextInstanceSearch;
  };

  export class SearchContextInstancesError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchContextInstancesError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }

  export type SearchContextsRequest = {
    /** The project key */
    projectKey: string;
    /** The environment key */
    environmentKey: string;
    /** Specifies the maximum number of items in the collection to return (max: 50, default: 20) */
    limit?: number;
    /**
     * Limits results to contexts with sort values after the value specified. You can use this for
     * pagination, however, we recommend using the `next` link we provide instead.
     */
    continuationToken?: string;
    /**
     * Specifies a field by which to sort. LaunchDarkly supports sorting by timestamp in ascending
     * order by specifying `ts` for this value, or descending order by specifying `-ts`.
     */
    sort?: string;
    /**
     * A comma-separated list of context filters. To learn more about the filter syntax, read
     * [Filtering contexts and context
     * instances](https://launchdarkly.com/docs/ld-docs/api/contexts#filtering-contexts-and-context-instances).
     */
    filter?: string;
    /**
     * Specifies whether to include or omit the total count of matching contexts. Defaults to true.
     */
    includeTotalCount?: boolean;
    body: ContextSearch;
  };

  export class SearchContextsError extends ApiError {
    declare readonly payload:
      | Declared<"invalidRequestErrorRep", InvalidRequestErrorRep>
      | Declared<"unauthorizedErrorRep", UnauthorizedErrorRep>
      | Declared<"forbiddenErrorRep", ForbiddenErrorRep>
      | Declared<"rateLimitedErrorRep", RateLimitedErrorRep>
      | Undeclared;

    static readonly errors: ErrorDecoders<SearchContextsError> = [
      {
        on: 400,
        kind: "invalidRequestErrorRep",
        decode: { kind: "json", schema: invalidRequestErrorRepSchema },
      },
      { on: 401, kind: "unauthorizedErrorRep", decode: { kind: "json", schema: unauthorizedErrorRepSchema } },
      { on: 403, kind: "forbiddenErrorRep", decode: { kind: "json", schema: forbiddenErrorRepSchema } },
      { on: 429, kind: "rateLimitedErrorRep", decode: { kind: "json", schema: rateLimitedErrorRepSchema } },
    ];
  }
}
