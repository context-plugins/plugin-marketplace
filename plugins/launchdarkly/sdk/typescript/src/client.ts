import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccessTokens } from "./resources/access-tokens.js";
import { AccountMembers } from "./resources/account-members.js";
import { AccountUsageBeta } from "./resources/account-usage-beta.js";
import { AiConfigsApi } from "./resources/ai-configs-api.js";
import { Announcements } from "./resources/announcements.js";
import { ApplicationsBeta } from "./resources/applications-beta.js";
import { ApprovalsBeta } from "./resources/approvals-beta.js";
import { Approvals } from "./resources/approvals.js";
import { AuditLog } from "./resources/audit-log.js";
import { CodeReferences } from "./resources/code-references.js";
import { ContextSettings } from "./resources/context-settings.js";
import { ContextsApi } from "./resources/contexts-api.js";
import { CustomRolesApi } from "./resources/custom-roles-api.js";
import { DataExportDestinations } from "./resources/data-export-destinations.js";
import { EnvironmentsApi } from "./resources/environments-api.js";
import { Experiments } from "./resources/experiments.js";
import { FeatureFlagsApi } from "./resources/feature-flags-api.js";
import { FeatureFlagsBeta } from "./resources/feature-flags-beta.js";
import { FlagImportConfigurationsBeta } from "./resources/flag-import-configurations-beta.js";
import { FlagLinksBeta } from "./resources/flag-links-beta.js";
import { FlagTriggers } from "./resources/flag-triggers.js";
import { FollowFlags } from "./resources/follow-flags.js";
import { HoldoutsBeta } from "./resources/holdouts-beta.js";
import { InsightsChartsBeta } from "./resources/insights-charts-beta.js";
import { InsightsDeploymentsBeta } from "./resources/insights-deployments-beta.js";
import { InsightsFlagEventsBeta } from "./resources/insights-flag-events-beta.js";
import { InsightsPullRequestsBeta } from "./resources/insights-pull-requests-beta.js";
import { InsightsRepositoriesBeta } from "./resources/insights-repositories-beta.js";
import { InsightsScoresBeta } from "./resources/insights-scores-beta.js";
import { IntegrationAuditLogSubscriptions } from "./resources/integration-audit-log-subscriptions.js";
import { IntegrationDeliveryConfigurationsBeta } from "./resources/integration-delivery-configurations-beta.js";
import { IntegrationsBeta } from "./resources/integrations-beta.js";
import { Layers } from "./resources/layers.js";
import { MetricsApi } from "./resources/metrics-api.js";
import { MetricsBeta } from "./resources/metrics-beta.js";
import { OAuth2Clients } from "./resources/oauth2-clients.js";
import { Other } from "./resources/other.js";
import { PersistentStoreIntegrationsBeta } from "./resources/persistent-store-integrations-beta.js";
import { ProjectsApi } from "./resources/projects-api.js";
import { RelayProxyConfigurations } from "./resources/relay-proxy-configurations.js";
import { ReleasePipelinesBeta } from "./resources/release-pipelines-beta.js";
import { ReleasePoliciesBeta } from "./resources/release-policies-beta.js";
import { ReleasesBeta } from "./resources/releases-beta.js";
import { ScheduledChanges } from "./resources/scheduled-changes.js";
import { Segments } from "./resources/segments.js";
import { Tags } from "./resources/tags.js";
import { TeamsApi } from "./resources/teams-api.js";
import { TeamsBeta } from "./resources/teams-beta.js";
import { UserSettings } from "./resources/user-settings.js";
import { UsersApi } from "./resources/users-api.js";
import { UsersBeta } from "./resources/users-beta.js";
import { ViewsBeta } from "./resources/views-beta.js";
import { WebhooksApi } from "./resources/webhooks-api.js";
import { WorkflowTemplates } from "./resources/workflow-templates.js";
import { Workflows } from "./resources/workflows.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * This documentation describes LaunchDarkly's REST API. To access the complete OpenAPI spec
 * directly, use [Get OpenAPI spec](https://launchdarkly.com/docs/api/other/get-openapi-spec).
 *
 * To learn how to use LaunchDarkly using the user interface (UI) instead, read our [product
 * documentation](https://launchdarkly.com/docs/home).
 *
 * ## Authentication
 *
 * LaunchDarkly's REST API uses the HTTPS protocol with a minimum TLS version of 1.2.
 *
 * All REST API resources are authenticated with either [personal or service access
 * tokens](https://launchdarkly.com/docs/home/account/api), or session cookies. Other authentication
 * mechanisms are not supported. You can manage personal access tokens on your
 * [**Authorization**](https://app.launchdarkly.com/settings/authorization) page in the LaunchDarkly
 * UI.
 *
 * LaunchDarkly also has SDK keys, mobile keys, and client-side IDs that are used by our server-side
 * SDKs, mobile SDKs, and JavaScript-based SDKs, respectively. **These keys cannot be used to access
 * our REST API**. These keys are environment-specific, and can only perform read-only operations
 * such as fetching feature flag settings.
 *
 * | Auth mechanism                                                                                  | Allowed resources                                                                                     | Use cases                                          |
 * | ----------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | -------------------------------------------------- |
 * | [Personal or service access tokens](https://launchdarkly.com/docs/home/account/api) | Can be customized on a per-token basis                                                                | Building scripts, custom integrations, data export. |
 * | SDK keys                                                                                        | Can only access read-only resources specific to server-side SDKs. Restricted to a single environment. | Server-side SDKs                     |
 * | Mobile keys                                                                                     | Can only access read-only resources specific to mobile SDKs, and only for flags marked available to mobile keys. Restricted to a single environment.           | Mobile SDKs                                        |
 * | Client-side ID                                                                                  | Can only access read-only resources specific to JavaScript-based client-side SDKs, and only for flags marked available to client-side. Restricted to a single environment.           | Client-side JavaScript                             |
 *
 * > #### Keep your access tokens and SDK keys private > > Access tokens should _never_ be exposed
 * in untrusted contexts. Never put an access token in client-side JavaScript, or embed it in a
 * mobile application. LaunchDarkly has special mobile keys that you can embed in mobile apps. If
 * you accidentally expose an access token or SDK key, you can reset it from your
 * [**Authorization**](https://app.launchdarkly.com/settings/authorization) page. > > The
 * client-side ID is safe to embed in untrusted contexts. It's designed for use in client-side
 * JavaScript.
 *
 * ### Authentication using request header
 *
 * The preferred way to authenticate with the API is by adding an `Authorization` header containing
 * your access token to your requests. The value of the `Authorization` header must be your access
 * token.
 *
 * Manage personal access tokens from the
 * [**Authorization**](https://app.launchdarkly.com/settings/authorization) page.
 *
 * ### Authentication using session cookie
 *
 * For testing purposes, you can make API calls directly from your web browser. If you are logged in
 * to the LaunchDarkly application, the API will use your existing session to authenticate calls.
 *
 * Depending on the permissions granted as part of your
 * [role](https://launchdarkly.com/docs/home/account/roles), you may not have permission to perform
 * some API calls. You will receive a `401` response code in that case.
 *
 * > ### Modifying the Origin header causes an error > > LaunchDarkly validates that the Origin
 * header for any API request authenticated by a session cookie matches the expected Origin header.
 * The expected Origin header is `https://app.launchdarkly.com`. > > If the Origin header does not
 * match what's expected, LaunchDarkly returns an error. This error can prevent the LaunchDarkly app
 * from working correctly. > > Any browser extension that intentionally changes the Origin header
 * can cause this problem. For example, the `Allow-Control-Allow-Origin: *` Chrome extension changes
 * the Origin header to `http://evil.com` and causes the app to fail. > > To prevent this error, do
 * not modify your Origin header. > > LaunchDarkly does not require origin matching when
 * authenticating with an access token, so this issue does not affect normal API usage.
 *
 * ## Representations
 *
 * All resources expect and return JSON response bodies. Error responses also send a JSON body. To
 * learn more about the error format of the API, read
 * [Errors](https://launchdarkly.com/docs/api#errors).
 *
 * In practice this means that you always get a response with a `Content-Type` header set to
 * `application/json`.
 *
 * In addition, request bodies for `PATCH`, `POST`, and `PUT` requests must be encoded as JSON with
 * a `Content-Type` header set to `application/json`.
 *
 * ### Summary and detailed representations
 *
 * When you fetch a list of resources, the response includes only the most important attributes of
 * each resource. This is a _summary representation_ of the resource. When you fetch an individual
 * resource, such as a single feature flag, you receive a _detailed representation_ of the resource.
 *
 * The best way to find a detailed representation is to follow links. Every summary representation
 * includes a link to its detailed representation.
 *
 * ### Expanding responses
 *
 * Sometimes the detailed representation of a resource does not include all of the attributes of the
 * resource by default. If this is the case, the request method will clearly document this and
 * describe which attributes you can include in an expanded response.
 *
 * To include the additional attributes, append the `expand` request parameter to your request and
 * add a comma-separated list of the attributes to include. For example, when you append
 * `?expand=members,maintainers` to the [Get team](https://launchdarkly.com/docs/api/teams/get-team)
 * endpoint, the expanded response includes both of these attributes.
 *
 * ### Links and addressability
 *
 * The best way to navigate the API is by following links. These are attributes in representations
 * that link to other resources. The API always uses the same format for links:
 *
 * - Links to other resources within the API are encapsulated in a `_links` object
 * - If the resource has a corresponding link to HTML content on the site, it is stored in a special
 *   `_site` link
 *
 * Each link has two attributes:
 *
 * - An `href`, which contains the URL
 * - A `type`, which describes the content type
 *
 * For example, a feature resource might return the following:
 *
 * ```json
 * {
 *   "_links": {
 *     "parent": {
 *       "href": "/api/features",
 *       "type": "application/json"
 *     },
 *     "self": {
 *       "href": "/api/features/sort.order",
 *       "type": "application/json"
 *     }
 *   },
 *   "_site": {
 *     "href": "/features/sort.order",
 *     "type": "text/html"
 *   }
 * }
 * ```
 *
 * From this, you can navigate to the parent collection of features by following the `parent` link,
 * or navigate to the site page for the feature by following the `_site` link.
 *
 * Collections are always represented as a JSON object with an `items` attribute containing an array
 * of representations. Like all other representations, collections have `_links` defined at the top
 * level.
 *
 * Paginated collections include `first`, `last`, `next`, and `prev` links containing a URL with the
 * respective set of elements in the collection.
 *
 * ## Updates
 *
 * Resources that accept partial updates use the `PATCH` verb. Most resources support the [JSON
 * patch](https://launchdarkly.com/docs/api#updates-using-json-patch) format. Some resources also
 * support the [JSON merge patch](https://launchdarkly.com/docs/api#updates-using-json-merge-patch)
 * format, and some resources support the [semantic
 * patch](https://launchdarkly.com/docs/api#updates-using-semantic-patch) format, which is a way to
 * specify the modifications to perform as a set of executable instructions. Each resource supports
 * optional [comments](https://launchdarkly.com/docs/api#updates-with-comments) that you can submit
 * with updates. Comments appear in outgoing webhooks, the audit log, and other integrations.
 *
 * When a resource supports both JSON patch and semantic patch, we document both in the request
 * method. However, the specific request body fields and descriptions included in our documentation
 * only match one type of patch or the other.
 *
 * ### Updates using JSON patch
 *
 * [JSON patch](https://datatracker.ietf.org/doc/html/rfc6902) is a way to specify the modifications
 * to perform on a resource. JSON patch uses paths and a limited set of operations to describe how
 * to transform the current state of the resource into a new state. JSON patch documents are always
 * arrays, where each element contains an operation, a path to the field to update, and the new
 * value.
 *
 * For example, in this feature flag representation:
 *
 * ```json
 * {
 *     "name": "New recommendations engine",
 *     "key": "engine.enable",
 *     "description": "This is the description",
 *     ...
 * }
 * ```
 * You can change the feature flag's description with the following patch document:
 *
 * ```json
 * [{ "op": "replace", "path": "/description", "value": "This is the new description" }]
 * ```
 *
 * You can specify multiple modifications to perform in a single request. You can also test that
 * certain preconditions are met before applying the patch:
 *
 * ```json
 * [
 *   { "op": "test", "path": "/version", "value": 10 },
 *   { "op": "replace", "path": "/description", "value": "The new description" }
 * ]
 * ```
 *
 * The above patch request tests whether the feature flag's `version` is `10`, and if so, changes
 * the feature flag's description.
 *
 * Attributes that are not editable, such as a resource's `_links`, have names that start with an
 * underscore.
 *
 * ### Updates using JSON merge patch
 *
 * [JSON merge patch](https://datatracker.ietf.org/doc/html/rfc7386) is another format for
 * specifying the modifications to perform on a resource. JSON merge patch is less expressive than
 * JSON patch. However, in many cases it is simpler to construct a merge patch document. For
 * example, you can change a feature flag's description with the following merge patch document:
 *
 * ```json
 * {
 *   "description": "New flag description"
 * }
 * ```
 *
 * ### Updates using semantic patch
 *
 * Some resources support the semantic patch format. A semantic patch is a way to specify the
 * modifications to perform on a resource as a set of executable instructions.
 *
 * Semantic patch allows you to be explicit about intent using precise, custom instructions. In many
 * cases, you can define semantic patch instructions independently of the current state of the
 * resource. This can be useful when defining a change that may be applied at a future date.
 *
 * To make a semantic patch request, you must append `domain-model=launchdarkly.semanticpatch` to
 * your `Content-Type` header.
 *
 * Here's how:
 *
 * ```
 * Content-Type: application/json; domain-model=launchdarkly.semanticpatch
 * ```
 *
 * If you call a semantic patch resource without this header, you will receive a `400` response
 * because your semantic patch will be interpreted as a JSON patch.
 *
 * The body of a semantic patch request takes the following properties:
 *
 * * `comment` (string): (Optional) A description of the update.
 * * `environmentKey` (string): (Required for some resources only) The environment key.
 * * `instructions` (array): (Required) A list of actions the update should perform. Each action in
 *   the list must be an object with a `kind` property that indicates the instruction. If the
 *   instruction requires parameters, you must include those parameters as additional fields in the
 *   object. The documentation for each resource that supports semantic patch includes the available
 *   instructions and any additional parameters.
 *
 * For example:
 *
 * ```json
 * {
 *   "comment": "optional comment",
 *   "instructions": [ {"kind": "turnFlagOn"} ]
 * }
 * ```
 *
 * Semantic patches are not applied partially; either all of the instructions are applied or none of
 * them are. If **any** instruction is invalid, the endpoint returns an error and will not change
 * the resource. If all instructions are valid, the request succeeds and the resources are updated
 * if necessary, or left unchanged if they are already in the state you request.
 *
 * ### Updates with comments
 *
 * You can submit optional comments with `PATCH` changes.
 *
 * To submit a comment along with a JSON patch document, use the following format:
 *
 * ```json
 * {
 *   "comment": "This is a comment string",
 *   "patch": [{ "op": "replace", "path": "/description", "value": "The new description" }]
 * }
 * ```
 *
 * To submit a comment along with a JSON merge patch document, use the following format:
 *
 * ```json
 * {
 *   "comment": "This is a comment string",
 *   "merge": { "description": "New flag description" }
 * }
 * ```
 *
 * To submit a comment along with a semantic patch, use the following format:
 *
 * ```json
 * {
 *   "comment": "This is a comment string",
 *   "instructions": [ {"kind": "turnFlagOn"} ]
 * }
 * ```
 *
 * ## Errors
 *
 * The API always returns errors in a common format. Here's an example:
 *
 * ```json
 * {
 *   "code": "invalid_request",
 *   "message": "A feature with that key already exists",
 *   "id": "30ce6058-87da-11e4-b116-123b93f75cba"
 * }
 * ```
 *
 * The `code` indicates the general class of error. The `message` is a human-readable explanation of
 * what went wrong. The `id` is a unique identifier. Use it when you're working with LaunchDarkly
 * Support to debug a problem with a specific API call.
 *
 * ### HTTP status error response codes
 *
 * | Code | Definition        | Description                                                                                       | Possible Solution                                                |
 * | ---- | ----------------- | ------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
 * | 400  | Invalid request       | The request cannot be understood.                                    | Ensure JSON syntax in request body is correct.                   |
 * | 401  | Invalid access token      | Requestor is unauthorized or does not have permission for this API call.                                                | Ensure your API access token is valid and has the appropriate permissions.                                     |
 * | 403  | Forbidden         | Requestor does not have access to this resource.                                                | Ensure that the account member or access token has proper permissions set. |
 * | 404  | Invalid resource identifier | The requested resource is not valid. | Ensure that the resource is correctly identified by ID or key. |
 * | 405  | Method not allowed | The request method is not allowed on this resource. | Ensure that the HTTP verb is correct. |
 * | 409  | Conflict          | The API request can not be completed because it conflicts with a concurrent API request. | Retry your request.                                              |
 * | 422  | Unprocessable entity | The API request can not be completed because the update description can not be understood. | Ensure that the request body is correct for the type of patch you are using, either JSON patch or semantic patch.
 * | 429  | Too many requests | Read [Rate limiting](https://launchdarkly.com/docs/api#rate-limiting).                                               | Wait and try again later.                                        |
 *
 * ## CORS
 *
 * The LaunchDarkly API supports Cross Origin Resource Sharing (CORS) for AJAX requests from any
 * origin. If an `Origin` header is given in a request, it will be echoed as an explicitly allowed
 * origin. Otherwise the request returns a wildcard, `Access-Control-Allow-Origin: *`. For more
 * information on CORS, read the [CORS W3C Recommendation](http://www.w3.org/TR/cors). Example CORS
 * headers might look like:
 *
 * ```http
 * Access-Control-Allow-Headers: Accept, Content-Type, Content-Length, Accept-Encoding, Authorization
 * Access-Control-Allow-Methods: OPTIONS, GET, DELETE, PATCH
 * Access-Control-Allow-Origin: *
 * Access-Control-Max-Age: 300
 * ```
 *
 * You can make authenticated CORS calls just as you would make same-origin calls, using either
 * [token or session-based authentication](https://launchdarkly.com/docs/api#authentication). If you
 * are using session authentication, you should set the `withCredentials` property for your `xhr`
 * request to `true`. You should never expose your access tokens to untrusted entities.
 *
 * ## Rate limiting
 *
 * We use several rate limiting strategies to ensure the availability of our APIs. Rate-limited
 * calls to our APIs return a `429` status code. Calls to our APIs include headers indicating the
 * current rate limit status. The specific headers returned depend on the API route being called.
 * The limits differ based on the route, authentication mechanism, and other factors. Routes that
 * are not rate limited may not contain any of the headers described below.
 *
 * > ### Rate limiting and SDKs > > LaunchDarkly SDKs are never rate limited and do not use the API
 * endpoints defined here. LaunchDarkly uses a different set of approaches, including
 * streaming/server-sent events and a global CDN, to ensure availability to the routes used by
 * LaunchDarkly SDKs.
 *
 * ### Global rate limits
 *
 * Authenticated requests are subject to a global limit. This is the maximum number of calls that
 * your account can make to the API per ten seconds. All service and personal access tokens on the
 * account share this limit, so exceeding the limit with one access token will impact other tokens.
 * Calls that are subject to global rate limits may return the headers below:
 *
 * | Header name                    | Description                                                                      |
 * | ------------------------------ | -------------------------------------------------------------------------------- |
 * | `X-Ratelimit-Global-Remaining` | The maximum number of requests the account is permitted to make per ten seconds. |
 * | `X-Ratelimit-Reset`            | The time at which the current rate limit window resets in epoch milliseconds.    |
 *
 * We do not publicly document the specific number of calls that can be made globally. This limit
 * may change, and we encourage clients to program against the specification, relying on the two
 * headers defined above, rather than hardcoding to the current limit.
 *
 * ### Route-level rate limits
 *
 * Some authenticated routes have custom rate limits. These also reset every ten seconds. Any
 * service or personal access tokens hitting the same route share this limit, so exceeding the limit
 * with one access token may impact other tokens. Calls that are subject to route-level rate limits
 * return the headers below:
 *
 * | Header name                   | Description                                                                                           |
 * | ----------------------------- | ----------------------------------------------------------------------------------------------------- |
 * | `X-Ratelimit-Route-Remaining` | The maximum number of requests to the current route the account is permitted to make per ten seconds. |
 * | `X-Ratelimit-Reset`           | The time at which the current rate limit window resets in epoch milliseconds.                         |
 *
 * A _route_ represents a specific URL pattern and verb. For example, the [Delete
 * environment](https://launchdarkly.com/docs/api/environments/delete-environment) endpoint is
 * considered a single route, and each call to delete an environment counts against your route-level
 * rate limit for that route.
 *
 * We do not publicly document the specific number of calls that an account can make to each
 * endpoint per ten seconds. These limits may change, and we encourage clients to program against
 * the specification, relying on the two headers defined above, rather than hardcoding to the
 * current limits.
 *
 * ### IP-based rate limiting
 *
 * We also employ IP-based rate limiting on some API routes. If you hit an IP-based rate limit, your
 * API response will include a `Retry-After` header indicating how long to wait before re-trying the
 * call. Clients must wait at least `Retry-After` seconds before making additional calls to our API,
 * and should employ jitter and backoff strategies to avoid triggering rate limits again.
 *
 * ## OpenAPI (Swagger) and client libraries
 *
 * We have a [complete OpenAPI (Swagger)
 * specification](https://app.launchdarkly.com/api/v2/openapi.json) for our API.
 *
 * We auto-generate multiple client libraries based on our OpenAPI specification. To learn more,
 * visit the [collection of client libraries on
 * GitHub](https://github.com/search?q=topic%3Alaunchdarkly-api+org%3Alaunchdarkly&type=Repositories).
 * Alternatively, you can use the specification to generate client libraries to interact with our
 * REST API in your language of choice. Or, you can refer to our API endpoints' documentation for
 * guidance on how to make requests with a common HTTP library in your language of choice.
 *
 * Our OpenAPI specification is supported by several API-based tools such as Postman and Insomnia.
 * In many cases, you can directly import our specification to explore our APIs.
 *
 * ## Method overriding
 *
 * Some firewalls and HTTP clients restrict the use of verbs other than `GET` and `POST`. In those
 * environments, our API endpoints that use `DELETE`, `PATCH`, and `PUT` verbs are inaccessible.
 *
 * To avoid this issue, our API supports the `X-HTTP-Method-Override` header, allowing clients to
 * "tunnel" `DELETE`, `PATCH`, and `PUT` requests using a `POST` request.
 *
 * For example, to call a `PATCH` endpoint using a `POST` request, you can include
 * `X-HTTP-Method-Override:PATCH` as a header.
 *
 * ## Beta resources
 *
 * We sometimes release new API resources in **beta** status before we release them with general
 * availability.
 *
 * Resources that are in beta are still undergoing testing and development. They may change without
 * notice, including becoming backwards incompatible.
 *
 * We try to promote resources into general availability as quickly as possible. This happens after
 * sufficient testing and when we're satisfied that we no longer need to make backwards-incompatible
 * changes.
 *
 * We mark beta resources with a "Beta" callout in our documentation, pictured below:
 *
 * > ### This feature is in beta > > To use this feature, pass in a header including the
 * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
 * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
 * in beta are still undergoing testing and development. They may change without notice, including
 * becoming backwards incompatible.
 *
 * ### Using beta resources
 *
 * To use a beta resource, you must include a header in the request. If you call a beta resource
 * without this header, you receive a `403` response.
 *
 * Use this header:
 *
 * ```
 * LD-API-Version: beta
 * ```
 *
 * ## Federal and EU environments
 *
 * In addition to the commercial versions, LaunchDarkly offers instances for federal agencies and
 * those based in the European Union (EU).
 *
 * ### Federal environments
 *
 * The version of LaunchDarkly that is available on domains controlled by the United States
 * government is different from the version of LaunchDarkly available to the general public. If you
 * are an employee or contractor for a United States federal agency and use LaunchDarkly in your
 * work, you likely use the federal instance of LaunchDarkly.
 *
 * If you are working in the federal instance of LaunchDarkly, the base URI for each request is
 * `https://app.launchdarkly.us`.
 *
 * To learn more, read [LaunchDarkly in federal
 * environments](https://launchdarkly.com/docs/home/infrastructure/federal).
 *
 * ### EU environments
 *
 * The version of LaunchDarkly that is available in the EU is different from the version of
 * LaunchDarkly available to other regions. If you are based in the EU, you likely use the EU
 * instance of LaunchDarkly. The LaunchDarkly EU instance complies with EU data residency
 * principles, including the protection and confidentiality of EU customer information.
 *
 * If you are working in the EU instance of LaunchDarkly, the base URI for each request is
 * `https://app.eu.launchdarkly.com`.
 *
 * To learn more, read [LaunchDarkly in the European Union
 * (EU)](https://launchdarkly.com/docs/home/infrastructure/eu).
 *
 * ## Versioning
 *
 * We try hard to keep our REST API backwards compatible, but we occasionally have to make
 * backwards-incompatible changes in the process of shipping new features. These breaking changes
 * can cause unexpected behavior if you don't prepare for them accordingly.
 *
 * Updates to our REST API include support for the latest features in LaunchDarkly. We also release
 * a new version of our REST API every time we make a breaking change. We provide simultaneous
 * support for multiple API versions so you can migrate from your current API version to a new
 * version at your own pace.
 *
 * ### Setting the API version per request
 *
 * You can set the API version on a specific request by sending an `LD-API-Version` header, as shown
 * in the example below:
 *
 * ```
 * LD-API-Version: 20240415
 * ```
 *
 * The header value is the version number of the API version you would like to request. The number
 * for each version corresponds to the date the version was released in `yyyymmdd` format. In the
 * example above the version `20240415` corresponds to April 15, 2024.
 *
 * ### Setting the API version per access token
 *
 * When you create an access token, you must specify a specific version of the API to use. This
 * ensures that integrations using this token cannot be broken by version changes.
 *
 * Tokens created before versioning was released have their version set to `20160426`, which is the
 * version of the API that existed before the current versioning scheme, so that they continue
 * working the same way they did before versioning.
 *
 * If you would like to upgrade your integration to use a new API version, you can explicitly set
 * the header described above.
 *
 * > ### Best practice: Set the header for every client or integration > > We recommend that you set
 * the API version header explicitly in any client or integration you build. > > Only rely on the
 * access token API version during manual testing.
 *
 * ### API version changelog
 *
 * <table> <tr> <th>Version</th> <th>Changes</th> <th>End of life (EOL)</th> </tr> <tr>
 * <td>`20240415`</td> <td> <ul><li>Changed several endpoints from unpaginated to paginated. Use the
 * `limit` and `offset` query parameters to page through the results.</li> <li>Changed the [list
 * access tokens](https://launchdarkly.com/docs/api/access-tokens/get-tokens) endpoint:
 * <ul><li>Response is now paginated with a default limit of `25`</li></ul></li> <li>Changed the
 * [list account members](https://launchdarkly.com/docs/api/account-members/get-members) endpoint:
 * <ul><li>The `accessCheck` filter is no longer available</li></ul></li> <li>Changed the [list
 * custom roles](https://launchdarkly.com/docs/api/custom-roles/get-custom-roles) endpoint:
 * <ul><li>Response is now paginated with a default limit of `20`</li></ul></li> <li>Changed the
 * [list feature flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) endpoint:
 * <ul><li>Response is now paginated with a default limit of `20`</li><li>The `environments` field
 * is now only returned if the request is filtered by environment, using the `filterEnv` query
 * parameter</li><li>The `followerId`, `hasDataExport`, `status`, `contextKindTargeted`, and
 * `segmentTargeted` filters are no longer available</li><li>The `compare` query parameter is no
 * longer available</li></ul></li> <li>Changed the [list
 * segments](https://launchdarkly.com/docs/api/segments/get-segments) endpoint: <ul><li>Response is
 * now paginated with a default limit of `20`</li></ul></li> <li>Changed the [list
 * teams](https://launchdarkly.com/docs/api/teams/get-teams) endpoint: <ul><li>The `expand`
 * parameter no longer supports including `projects` or `roles`</li><li>In paginated results, the
 * maximum page size is now 100</li></ul></li> <li>Changed the [get
 * workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) endpoint: <ul><li>Response
 * is now paginated with a default limit of `20`</li><li>The `_conflicts` field in the response is
 * no longer available</li></ul></li> </ul> </td> <td>Current</td> </tr> <tr> <td>`20220603`</td>
 * <td> <ul><li>Changed the [list projects](https://launchdarkly.com/docs/api/projects/get-projects)
 * return value:<ul><li>Response is now paginated with a default limit of `20`.</li><li>Added
 * support for filter and sort.</li><li>The project `environments` field is now expandable. This
 * field is omitted by default.</li></ul></li><li>Changed the [get
 * project](https://launchdarkly.com/docs/api/projects/get-project) return value:<ul><li>The
 * `environments` field is now expandable. This field is omitted by default.</li></ul></li></ul>
 * </td> <td>2025-04-15</td> </tr> <tr> <td>`20210729`</td> <td> <ul><li>Changed the [create
 * approval request](https://launchdarkly.com/docs/api/approvals/post-approval-request) return
 * value. It now returns HTTP Status Code `201` instead of `200`.</li><li> Changed the [get
 * user](https://launchdarkly.com/docs/api/users/get-user) return value. It now returns a user
 * record, not a user. </li><li>Added additional optional fields to environment, segments, flags,
 * members, and segments, including the ability to create big segments. </li><li> Added default
 * values for flag variations when new environments are created. </li><li>Added filtering and
 * pagination for getting flags and members, including `limit`, `number`, `filter`, and `sort` query
 * parameters. </li><li>Added endpoints for expiring user targets for flags and segments, scheduled
 * changes, access tokens, Relay Proxy configuration, integrations and subscriptions, and approvals.
 * </li></ul> </td> <td>2023-06-03</td> </tr> <tr> <td>`20191212`</td> <td> <ul><li>[List feature
 * flags](https://launchdarkly.com/docs/api/feature-flags/get-feature-flags) now defaults to sending
 * summaries of feature flag configurations, equivalent to setting the query parameter
 * `summary=true`. Summaries omit flag targeting rules and individual user targets from the payload.
 * </li><li> Added endpoints for flags, flag status, projects, environments, audit logs, members,
 * users, custom roles, segments, usage, streams, events, and data export. </li></ul> </td>
 * <td>2022-07-29</td> </tr> <tr> <td>`20160426`</td> <td> <ul><li>Initial versioning of API. Tokens
 * created before versioning have their version set to this.</li></ul> </td> <td>2020-12-12</td>
 * </tr> </table>
 *
 * To learn more about how EOL is determined, read LaunchDarkly's [End of Life (EOL)
 * Policy](https://launchdarkly.com/policies/end-of-life-policy/).
 */
export class LaunchDarklyRestApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accessTokens?: AccessTokens;
  #accountMembers?: AccountMembers;
  #accountUsageBeta?: AccountUsageBeta;
  #aiConfigsApi?: AiConfigsApi;
  #announcements?: Announcements;
  #applicationsBeta?: ApplicationsBeta;
  #approvals?: Approvals;
  #approvalsBeta?: ApprovalsBeta;
  #auditLog?: AuditLog;
  #codeReferences?: CodeReferences;
  #contextSettings?: ContextSettings;
  #contextsApi?: ContextsApi;
  #customRolesApi?: CustomRolesApi;
  #dataExportDestinations?: DataExportDestinations;
  #environmentsApi?: EnvironmentsApi;
  #experiments?: Experiments;
  #featureFlagsApi?: FeatureFlagsApi;
  #featureFlagsBeta?: FeatureFlagsBeta;
  #flagImportConfigurationsBeta?: FlagImportConfigurationsBeta;
  #flagLinksBeta?: FlagLinksBeta;
  #flagTriggers?: FlagTriggers;
  #followFlags?: FollowFlags;
  #holdoutsBeta?: HoldoutsBeta;
  #insightsChartsBeta?: InsightsChartsBeta;
  #insightsDeploymentsBeta?: InsightsDeploymentsBeta;
  #insightsFlagEventsBeta?: InsightsFlagEventsBeta;
  #insightsPullRequestsBeta?: InsightsPullRequestsBeta;
  #insightsRepositoriesBeta?: InsightsRepositoriesBeta;
  #insightsScoresBeta?: InsightsScoresBeta;
  #integrationAuditLogSubscriptions?: IntegrationAuditLogSubscriptions;
  #integrationDeliveryConfigurationsBeta?: IntegrationDeliveryConfigurationsBeta;
  #integrationsBeta?: IntegrationsBeta;
  #layers?: Layers;
  #metricsApi?: MetricsApi;
  #metricsBeta?: MetricsBeta;
  #oAuth2Clients?: OAuth2Clients;
  #persistentStoreIntegrationsBeta?: PersistentStoreIntegrationsBeta;
  #projectsApi?: ProjectsApi;
  #relayProxyConfigurations?: RelayProxyConfigurations;
  #releasePipelinesBeta?: ReleasePipelinesBeta;
  #releasePoliciesBeta?: ReleasePoliciesBeta;
  #releasesBeta?: ReleasesBeta;
  #scheduledChanges?: ScheduledChanges;
  #segments?: Segments;
  #tags?: Tags;
  #teamsApi?: TeamsApi;
  #teamsBeta?: TeamsBeta;
  #userSettings?: UserSettings;
  #usersApi?: UsersApi;
  #usersBeta?: UsersBeta;
  #viewsBeta?: ViewsBeta;
  #webhooksApi?: WebhooksApi;
  #workflowTemplates?: WorkflowTemplates;
  #workflows?: Workflows;
  #other?: Other;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "LAUNCH_DARKLY_REST_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "LaunchDarklyRestApiClient/2.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "2.0.0", schema: s.string() },
        { name: "X-APIMatic-Gen-Version", value: "4.0.0", schema: s.string() },
        { name: "X-APIMatic-OS", value: host.operatingSystem(), schema: s.optional(s.string()) },
        { name: "X-APIMatic-Runtime", value: host.runtimeDescription(), schema: s.optional(s.string()) },
      ],
      defaultQuery: [],
      defaultPathParams: [],
    });

    this.#servers = buildServers(options);

    this.#auth = buildAuthSchemes(options);
  }

  /**
   * The access tokens API allows you to list, create, modify, and delete access tokens
   * programmatically.
   *
   * When using access tokens to manage access tokens, the following restrictions apply:
   * - Personal tokens can see all service tokens and other personal tokens created by the same team
   *   member. If the personal token has the "Admin" role, it may also see other member's personal
   *   tokens. To learn more, read [Personal
   *   tokens](https://launchdarkly.com/docs/home/account/api#personal-tokens).
   * - Service tokens can see all service tokens. If the token has the "Admin" role, it may also see
   *   all personal tokens. To learn more, read [Service
   *   tokens](https://launchdarkly.com/docs/home/account/api#service-tokens).
   * - Tokens can only manage other tokens, including themselves, if they have "Admin" role or
   *   explicit permission via a custom role. To learn more, read [Personal access token
   *   actions](https://launchdarkly.com/docs/home/team/role-actions#personal-access-token-actions).
   *
   * Several of the endpoints in the access tokens API require an access token ID. The access token
   * ID is returned as part of the [Create access
   * token](https://launchdarkly.com/docs/api/access-tokens/post-token) and [List access
   * tokens](https://launchdarkly.com/docs/api/access-tokens/get-tokens) responses. It is the `_id`
   * field, or the `_id` field of each element in the `items` array.
   *
   * To learn more about access tokens, read [API access
   * tokens](https://launchdarkly.com/docs/home/account/api).
   */
  get accessTokens(): AccessTokens {
    return (this.#accessTokens ??= new AccessTokens(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The account members API allows you to invite new members to an account by making a `POST`
   * request to `/api/v2/members`. When you invite a new member to an account, an invitation is sent
   * to the email you provided. Members with Admin or Owner roles may create new members, as well as
   * anyone with a `createMember` permission for "member/\*". To learn more, read [LaunchDarkly
   * account members](https://launchdarkly.com/docs/home/account/members).
   *
   * Any member may request the complete list of account members with a `GET` to `/api/v2/members`.
   *
   * Several of the endpoints in the account members API require a member ID. The member ID is
   * returned as part of the [Invite new
   * members](https://launchdarkly.com/docs/api/account-members/post-members) and [List account
   * members](https://launchdarkly.com/docs/api/account-members/get-members) responses. It is the
   * `_id` field of each element in the `items` array.
   */
  get accountMembers(): AccountMembers {
    return (this.#accountMembers ??= new AccountMembers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The account usage API lets you query for metrics about how your account is using LaunchDarkly.
   * To learn more, read [Account usage
   * metrics](https://launchdarkly.com/docs/home/account/metrics).
   *
   * Each endpoint returns time-series data in the form of an array of data points with timestamps.
   * Each one contains data for that time from one or more series. It also includes a metadata array
   * describing what each of the series is.
   */
  get accountUsageBeta(): AccountUsageBeta {
    return (this.#accountUsageBeta ??= new AccountUsageBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The AI Configs API allows you to create, retrieve, and edit AI Configs, AI Config variations,
   * and AI model configurations.
   *
   * An AI Config is a resource in LaunchDarkly that you can use to customize, test, and roll out
   * new large language models (LLMs) within your generative AI applications. Within each AI Config,
   * you define one or more AI Config variations, each of which includes a model configuration and
   * one or more messages. The model configuration can be a standard one from the list provided by
   * LaunchDarkly, or you can define your own custom AI model configuration.
   *
   * To learn more, read [AI Configs](https://launchdarkly.com/docs/home/ai-configs).
   */
  get aiConfigsApi(): AiConfigsApi {
    return (this.#aiConfigsApi ??= new AiConfigsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The announcements API lets you create and update a custom announcement banner that appears in
   * the LaunchDarkly user interface for everyone in your organization. You can use the banner to
   * display organization-wide information, such as upcoming holidays, code freeze periods, or
   * reminders on best practices. You can have one banner visible at a time.
   *
   * To learn more, read [Organization
   * announcements](https://launchdarkly.com/docs/home/account/org-announcements).
   */
  get announcements(): Announcements {
    return (this.#announcements ??= new Announcements(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The applications API lets you create, update, delete, and search for applications and
   * application versions.
   *
   * Each application includes information about the app you're creating, and a set of versions of
   * the app that you've released. You can use applications to target particular application
   * versions in your feature flags more easily, and to handle unsupported application versions more
   * gracefully.
   *
   * In addition to creating applications through the applications API, you can also create
   * applications in the LaunchDarkly user interface. To learn more, read [Applications and
   * application versions](https://launchdarkly.com/docs/home/releases/applications). LaunchDarkly
   * also creates applications and application versions automatically when a LaunchDarkly SDK
   * evaluates a feature flag for a context that includes application information. To learn more,
   * read [Automatic environment
   * attributes](https://launchdarkly.com/docs/sdk/features/environment-attributes).
   *
   * You can use an application in any project in your LaunchDarkly account.
   *
   * ### Filtering applications and application versions
   *
   * The `filter` parameter supports the following operators: `equals`, `notEquals`, `anyOf`,
   * `startsWith`.
   *
   * You can also combine filters in the following ways:
   *
   * - Use a comma (`,`) as an AND operator
   * - Use a vertical bar (`|`) as an OR operator
   * - Use parentheses (`()`) to group filters
   *
   * #### Supported fields and operators
   *
   * You can only filter certain fields in applications when using the `filter` parameter.
   * Additionally, you can only filter some fields with certain operators.
   *
   * When you search for applications, the `filter` parameter supports the following fields and
   * operators:
   *
   * |<div style="width:120px">Field</div> |Description |Supported operators |
   * |---|---|---|
   * |`key` | The application or application version key, a unique identifier |`equals`, `notEquals`, `anyOf` |
   * |`name` | The application name or application version name |`equals`, `notEquals`, `anyOf`, `startsWith` |
   * |`autoAdded` | Whether the application or application version was automatically created because it was included in a context when a LaunchDarkly SDK evaluated a feature flag, or was created through the LaunchDarkly UI or REST API |`equals`, `notEquals` |
   * |`kind` | The application kind, one of `mobile`, `server`, `browser`. Only available for [Get applications](https://launchdarkly.com/docs/api/applications-beta/get-applications). |`equals`, `notEquals`, `anyOf` |
   * |`supported` | Whether a mobile application version is supported or unsupported. Only available for [Get application versions by application key](https://launchdarkly.com/docs/api/applications-beta/get-application-versions).|`equals`, `notEquals` |
   *
   * For example, the filter `?filter=kind anyOf ["mobile", "server"]` matches applications whose
   * `kind` is either `mobile` or `server`. The filter is not case-sensitive.
   *
   * The documented values for `filter` query parameters are prior to URL encoding. For example, the
   * `[` in `?filter=kind anyOf ["mobile", "server"]` must be encoded to `%5B`.
   *
   * ### Sorting applications and application versions
   *
   * LaunchDarkly supports the following fields for sorting:
   * - `name` sorts by application name.
   * - `creationDate` sorts by the creation date of the application.
   *
   * By default, the sort is in ascending order. Use `-` to sort in descending order. For example,
   * `?sort=name` sorts the response by application name in ascending order, and `?sort=-name` sorts
   * in descending order.
   */
  get applicationsBeta(): ApplicationsBeta {
    return (this.#applicationsBeta ??= new ApplicationsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An account member can request approval on changes to a flag or AI Config's targeting or
   * variations, or to a segment's targeting. Members may be required to request approval depending
   * on the settings in their LaunchDarkly project. Members can optionally request an approval even
   * if it is not required.
   *
   * An approval request prevents a change from being applied without approval from another member.
   * Select up to ten members as reviewers. Reviewers receive an email notification, but anyone with
   * sufficient permissions can review a pending approval request. A change needs at least one
   * approval before you can apply it. To learn more, read
   * [Approvals](https://launchdarkly.com/docs/home/releases/approvals).
   *
   * Changes that conflict will fail if approved and applied, and the flag or segment will not be
   * updated.
   *
   * Several of the endpoints in the approvals API require an approval request ID. The approval
   * request ID is returned as part of the [Create approval
   * request](https://launchdarkly.com/docs/api/approvals/post-approval-request) and [List approval
   * requests for a flag](https://launchdarkly.com/docs/api/approvals/get-approvals-for-flag)
   * responses. It is the `_id` field, or the `_id` field of each element in the `items` array. If
   * you created the approval request as part of a
   * [workflow](https://launchdarkly.com/docs/api/workflows), you can also use a workflow ID as the
   * approval request ID. The workflow ID is returned as part of the [Create
   * workflow](https://launchdarkly.com/docs/api/workflows/post-workflow) and [Get
   * workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) responses. It is the
   * `_id` field, or the `_id` field of each element in the `items` array.
   */
  get approvals(): Approvals {
    return (this.#approvals ??= new Approvals(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   */
  get approvalsBeta(): ApprovalsBeta {
    return (this.#approvalsBeta ??= new ApprovalsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * LaunchDarkly maintains a record of all the changes made to any resource in the system. You can
   * access this history using the audit log API, including filtering by timestamps, or using a
   * custom policy to select which entries to receive.
   *
   * Several of the endpoints in the audit log API require an audit log entry ID. The audit log
   * entry ID is returned as part of the [List audit log
   * entries](https://launchdarkly.com/docs/api/audit-log/get-audit-log-entries) response. It is the
   * `_id` field of each element in the `items` array.
   *
   * In the LaunchDarkly UI, this information appears on the **Change history** page. To learn more,
   * read [Change history](https://launchdarkly.com/docs/home/observability/change-history).
   */
  get auditLog(): AuditLog {
    return (this.#auditLog ??= new AuditLog(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Code references is an Enterprise feature > > Code references is available to customers on
   * an Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/).
   * To upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * > ### Use ld-find-code-refs > > LaunchDarkly provides the [ld-find-code-refs
   * utility](https://github.com/launchdarkly/ld-find-code-refs) that creates repository
   * connections, generates code reference data, and creates calls to the code references API. Most
   * customers do not need to call this API directly.
   *
   * The code references API provides access to all resources related to each connected repository,
   * and associated feature flag code reference data for all branches. To learn more, read [Code
   * references](https://launchdarkly.com/docs/home/observability/code-references).
   */
  get codeReferences(): CodeReferences {
    return (this.#codeReferences ??= new CodeReferences(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * You can use the context settings API to assign a context to a specific variation for any
   * feature flag. To learn more, read [View and manage
   * contexts](https://launchdarkly.com/docs/home/observability/context-attributes#view-and-manage-contexts).
   */
  get contextSettings(): ContextSettings {
    return (this.#contextSettings ??= new ContextSettings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   *
   * Contexts are people, services, machines, or other resources that encounter feature flags in
   * your product. Contexts are identified by their `kind`, which describes the type of resources
   * encountering flags, and by their `key`. Each unique combination of one or more contexts that
   * have encountered a feature flag in your product is called a context instance.
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
   * Contexts are always scoped within a project and an environment. Each environment has its own
   * set of context instance records.
   *
   * Several of the endpoints in the contexts API require a context instance ID or application ID.
   * Both of these IDs are returned as part of the [Search for context
   * instances](https://launchdarkly.com/docs/api/contexts/search-context-instances) response. The
   * context instance ID is the `id` field of each element in the `items` array. The application ID
   * is the `applicationId` field of each element in the `items` array. By default, the application
   * ID is set to the SDK you are using. In the LaunchDarkly UI, the application ID and application
   * version appear on the context details page in the "From source" field. You can change the
   * application ID as part of your SDK configuration. To learn more, read [Application metadata
   * configuration](https://launchdarkly.com/docs/sdk/features/app-config).
   *
   * ### Filtering contexts and context instances
   *
   * When you [search for contexts](https://launchdarkly.com/docs/api/contexts/search-contexts) or
   * [context instances](https://launchdarkly.com/docs/api/contexts/search-context-instances), you
   * can filter the results using fields and operators with the `filter` parameter. Specify `filter`
   * either as a query parameter or as a request body parameter.
   *
   * The `filter` parameter supports the following operators: `after`, `anyOf`, `before`,
   * `contains`, `equals`, `exists`, `notEquals`, `startsWith`.
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
   * Returns contexts or context instances if any field value matches any of the provided values.
   * For example:
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
   * Returns contexts or context instances if the field's list of values contains all of the
   * provided values. For example:
   *
   * * `myListField contains 44`
   * * `myListField contains ["phone","tablet"]`
   * * `myListField contains true`
   *
   * #### equals
   *
   * Returns contexts or context instances only if the field value exactly matches the provided
   * value. For example:
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
   * The `filter` parameter accepts different field types depending on whether you search for
   * contexts or context instances. Also, you can only filter some fields using certain operators.
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
  get contextsApi(): ContextsApi {
    return (this.#contextsApi ??= new ContextsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Custom roles is an Enterprise feature > > Custom roles is available to customers on an
   * Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To
   * upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * Custom roles allow you to create flexible policies providing fine-grained access control to
   * everything in LaunchDarkly, including feature flags, environments, and teams. With roles, it's
   * possible to enforce access policies that meet your exact workflow needs.
   *
   * The custom roles API allows you to create, update, and delete roles. You can also use the API
   * to list roles or get a role by key or ID. This API works with roles that you create, and with
   * [preset roles](https://launchdarkly.com/docs/home/getting-started/vocabulary#preset-roles)
   * provided by LaunchDarkly. You cannot use this API to work with [base
   * roles](https://launchdarkly.com/docs/home/getting-started/vocabulary#base-role).
   *
   * For more information about roles and the syntax for role policies, read the product
   * documentation for [Roles](https://launchdarkly.com/docs/home/account/roles).
   */
  get customRolesApi(): CustomRolesApi {
    return (this.#customRolesApi ??= new CustomRolesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Data Export is an add-on feature > > Data Export is available as an add-on for customers
   * on a Foundation or Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * Data Export provides a real-time export of raw analytics data, including feature flag requests,
   * analytics events, custom events, and more.
   *
   * Data Export destinations are locations that receive exported data. The Data Export destinations
   * API allows you to configure destinations so that your data can be exported.
   *
   * Several of the endpoints in the Data Export destinations API require a Data Export destination
   * ID. The Data Export destination ID is returned as part of the [Create a Data Export
   * destination](https://launchdarkly.com/docs/api/data-export-destinations/post-destination) and
   * [List
   * destinations](https://launchdarkly.com/docs/api/data-export-destinations/get-destinations)
   * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
   *
   * To learn more, read [Data Export](https://launchdarkly.com/docs/integrations/data-export).
   */
  get dataExportDestinations(): DataExportDestinations {
    return (this.#dataExportDestinations ??= new DataExportDestinations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Environments allow you to maintain separate rollout rules in different contexts, from local
   * development to QA, staging, and production. With the LaunchDarkly Environments API, you can
   * programmatically list, create, and manage environments. To learn more, read
   * [Environments](https://launchdarkly.com/docs/home/account/environment).
   */
  get environmentsApi(): EnvironmentsApi {
    return (this.#environmentsApi ??= new EnvironmentsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Available for subscription customers > > Experimentation is available to all customers on
   * a Developer, Foundation, or Enterprise subscription. If you're on an older Pro or Enterprise
   * plan, Experimentation is available as an add-on. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To change your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   *
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Experimentation lets you validate the impact of features you roll out to your app or
   * infrastructure. You can measure things like page views, clicks, load time, infrastructure
   * costs, and more. By connecting metrics you create to flags in your LaunchDarkly environment,
   * you can measure the changes in your customers' behavior based on what flags they evaluate. You
   * can run experiments with any type of flag, including boolean, string, number, and JSON flags.
   * To learn more, read [Experimentation](https://launchdarkly.com/docs/home/experimentation).
   *
   * You can manage experiments by using the dedicated experiment endpoints described below.
   *
   * Several of the endpoints require a treatment ID or a flag rule ID. Treatment IDs are returned
   * as part of the expanded [Get
   * experiment](https://launchdarkly.com/docs/api/experiments/get-experiment#expanding-the-experiment-response)
   * response. Winning treatment IDs are also returned as part of the [Get
   * experiment](https://launchdarkly.com/docs/api/experiments/get-experiment) response. They are
   * the `winningTreatmentId` in the `currentIteration`, the `winningTreatmentId` in the
   * `draftIteration`, and the `winningTreatmentId` in each element of the `previousIterations`
   * array. In the flags object, the rule ID is the ID of the variation or rollout of the flag. Each
   * flag variation ID is returned as part of the [Get feature
   * flag](https://launchdarkly.com/docs/api/feature-flags/get-feature-flag) response. It is the
   * `_id` field in each element of the `variations` array.
   */
  get experiments(): Experiments {
    return (this.#experiments ??= new Experiments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The feature flags API allows you to list, create, and modify feature flags and their targeting.
   * For example, you can control percentage rollouts, target specific contexts, or even toggle off
   * a feature flag programmatically.
   *
   * ## Sample feature flag representation
   *
   * Every feature flag has a set of top-level attributes, as well as an `environments` map
   * containing the flag rollout and targeting rules specific to each environment. To learn more,
   * read [Using feature flags](https://launchdarkly.com/docs/home/flags/create).
   *
   * <details> <summary>Click to expand an example of a <strong>complete feature flag
   * representation</strong></summary>
   *
   * ```json
   * {
   *   "name": "Alternate product page",
   *   "kind": "boolean",
   *   "description": "This is a description",
   *   "key": "alternate.page",
   *   "_version": 2,
   *   "creationDate": 1418684722483,
   *   "includeInSnippet": true,
   *   "clientSideAvailability" {
   *     "usingMobileKey": false,
   *     "usingEnvironmentId": true,
   *   },
   *   "variations": [
   *     {
   *       "value": true,
   *       "name": "true",
   *       "_id": "86208e6e-468f-4425-b334-7f318397f95c"
   *     },
   *     {
   *       "value": false,
   *       "name": "false",
   *       "_id": "7b32de80-f346-4276-bb77-28dfa7ddc2d8"
   *     }
   *   ],
   *   "variationJsonSchema": null,
   *   "defaults": {
   *     "onVariation": 0,
   *     "offVariation": 1
   *   },
   *   "temporary": false,
   *   "tags": ["ops", "experiments"],
   *   "_links": {
   *     "parent": {
   *       "href": "/api/v2/flags/default",
   *       "type": "application/json"
   *     },
   *     "self": {
   *       "href": "/api/v2/flags/default/alternate.page",
   *       "type": "application/json"
   *     }
   *   },
   *   "maintainerId": "548f6741c1efad40031b18ae",
   *   "_maintainer": {
   *     "_links": {
   *       "self": {
   *         "href": "/api/v2/members/548f6741c1efad40031b18ae",
   *         "type": "application/json"
   *       }
   *     },
   *     "_id": "548f6741c1efad40031b18ae",
   *     "firstName": "Ariel",
   *     "lastName": "Flores",
   *     "role": "reader",
   *     "email": "ariel@acme.com"
   *   },
   *   "goalIds": [],
   *   "experiments": {
   *     "baselineIdx": 0,
   *     "items": []
   *   },
   *   "environments": {
   *     "production": {
   *       "on": true,
   *       "archived": false,
   *       "salt": "YWx0ZXJuYXRlLnBhZ2U=",
   *       "sel": "45501b9314dc4641841af774cb038b96",
   *       "lastModified": 1469326565348,
   *       "version": 61,
   *       "targets": [{
   *           "values": ["user-key-123abc"],
   *           "variation": 0,
   *           "contextKind": "user"
   *       }],
   *       "contextTargets": [{
   *         "values": [],
   *         "variation": 0,
   *         "contextKind": "user"
   *         }, {
   *         "values": ["org-key-123abc"],
   *         "variation": 0,
   *         "contextKind": "organization"
   *       }],
   *       "rules": [
   *         {
   *           "_id": "f3ea72d0-e473-4e8b-b942-565b790ffe18",
   *           "variation": 0,
   *           "clauses": [
   *             {
   *               "_id": "6b81968e-3744-4416-9d64-74547eb0a7d1",
   *               "attribute": "groups",
   *               "op": "in",
   *               "values": ["Top Customers"],
   *               "contextKind": "user",
   *               "negate": false
   *             },
   *             {
   *               "_id": "9d60165d-82b8-4b9a-9136-f23407ba1718",
   *               "attribute": "email",
   *               "op": "endsWith",
   *               "values": ["gmail.com"],
   *               "contextKind": "user",
   *               "negate": false
   *             }
   *           ],
   *           "trackEvents": false,
   *           "ref": "73257308-472b-4d9c-a556-10aa7adbf857"
   *         }
   *       ],
   *       "fallthrough": {
   *         "rollout": {
   *           "variations": [
   *             {
   *               "variation": 0,
   *               "weight": 60000
   *             },
   *             {
   *               "variation": 1,
   *               "weight": 40000
   *             }
   *           ],
   *           "contextKind": "user"
   *         }
   *       },
   *       "offVariation": 1,
   *       "prerequisites": [],
   *       "_site": {
   *         "href": "/default/production/features/alternate.page",
   *         "type": "text/html"
   *       },
   *       "_environmentName": "Production",
   *       "trackEvents": false,
   *       "trackEventsFallthrough": false,
   *       "_summary": {
   *         "variations": {
   *           "0": {
   *             "rules": 1,
   *             "nullRules": 0,
   *             "targets": 2,
   *             "rollout": 60000
   *           },
   *           "1": {
   *             "rules": 0,
   *             "nullRules": 0,
   *             "targets": 0,
   *             "isOff": true,
   *             "rollout": 40000
   *           }
   *         },
   *         "prerequisites": 0
   *       }
   *     }
   * }
   * ```
   *
   * </details>
   *
   * ## Anatomy of a feature flag
   *
   * This section describes the sample feature flag representation in more detail.
   *
   * ### Top-level attributes
   *
   * Most of the top-level attributes have a straightforward interpretation, for example `name` and
   * `description`.
   *
   * The `variations` array represents the different variation values that a feature flag has. For a
   * boolean flag, there are two variations: `true` and `false`. Multivariate flags have more
   * variation values, and those values could be any JSON type: numbers, strings, objects, or
   * arrays. In targeting rules, the variations are referred to by their index into this array.
   *
   * To update these attributes, read [Update feature flag](#operation/patchFeatureFlag), especially
   * the instructions for **updating flag settings**.
   *
   * ### Per-environment configurations
   *
   * Each entry in the `environments` map contains a JSON object that represents the
   * environment-specific flag configuration data available in the flag's targeting page. To learn
   * more, read [Targeting with flags](https://launchdarkly.com/docs/home/flags/target).
   *
   * To update per-environment information for a flag, read [Update feature
   * flag](#operation/patchFeatureFlag), especially the instructions for **turning flags on and
   * off** and **working with targeting and variations**.
   *
   * ### Individual context targets
   *
   * The `targets` and `contextTargets` arrays in the per-environment configuration data correspond
   * to the individual context targeting on the flag's targeting page. To learn more, read
   * [Individual targeting](https://launchdarkly.com/docs/home/flags/individual-targeting).
   *
   * Each object in the `targets` and `contextTargets` arrays represents a list of context keys
   * assigned to a particular variation. The `targets` array includes contexts with `contextKind` of
   * "user" and the `contextTargets` array includes contexts with context kinds other than "user."
   *
   * For example:
   *
   * ```json
   * {
   *   ...
   *   "environments" : {
   *     "production" : {
   *       ...
   *       "targets": [
   *         {
   *           "values": ["user-key-123abc"],
   *           "variation": 0,
   *           "contextKind": "user"
   *         }
   *       ],
   *       "contextTargets": [
   *         {
   *           "values": ["org-key-123abc"],
   *           "variation": 0,
   *           "contextKind": "organization"
   *         }
   *       ]
   *     }
   *   }
   * }
   * ```
   *
   * The `targets` array means that any user context instance with the key `user-key-123abc`
   * receives the first variation listed in the `variations` array. The `contextTargets` array means
   * that any organization context with the key `org-key-123abc` receives the first variation listed
   * in the `variations` array. Recall that the variations are stored at the top level of the flag
   * JSON in an array, and the per-environment configuration rules point to indexes into this array.
   * If this is a boolean flag, both contexts are receiving the `true` variation.
   *
   * ### Targeting rules
   *
   * The `rules` array corresponds to the rules section of the flag's targeting page. This is where
   * you can express complex rules on attributes with conditions and operators. For example, you
   * might create a rule that specifies "roll out the `true` variation to 80% of contexts whose
   * email address ends with `gmail.com`". To learn more, read [Targeting
   * rules](https://launchdarkly.com/docs/home/flags/targeting-rules).
   *
   * ### The fallthrough rule
   *
   * The `fallthrough` object is a special rule that contains no conditions. It is the rollout
   * strategy that is applied when none of the individual or custom targeting rules match. In the
   * LaunchDarkly UI, it is called the "Default rule."
   *
   * ### The off variation
   *
   * The off variation represents the variation to serve if the feature flag targeting is turned
   * off, meaning the `on` attribute is `false`. For boolean flags, this is usually `false`. For
   * multivariate flags, set the off variation to whatever variation represents the control or
   * baseline behavior for your application. If you don't set the off variation, LaunchDarkly will
   * serve the fallback value defined in your code.
   *
   * ### Percentage rollouts
   *
   * When you work with targeting rules and with the default rule, you can specify either a single
   * variation or a percentage rollout. The `weight` attribute defines the percentage rollout for
   * each variation. Weights range from 0 (a 0% rollout) to 100000 (a 100% rollout). The weights are
   * scaled by a factor of 1000 so that fractions of a percent can be represented without using
   * floating-point. For example, a weight of `60000` means that 60% of contexts will receive that
   * variation. The sum of weights across all variations should be 100%.
   */
  get featureFlagsApi(): FeatureFlagsApi {
    return (this.#featureFlagsApi ??= new FeatureFlagsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   */
  get featureFlagsBeta(): FeatureFlagsBeta {
    return (this.#featureFlagsBeta ??= new FeatureFlagsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Flag import configurations allow you to import feature flags from another feature management
   * system.
   *
   * Use the flag import configuration endpoints to create, delete, and manage flag import
   * configurations. You can import flags from other feature management tools into LaunchDarkly. For
   * example, you can import flags from Split.io.
   *
   * Several of the endpoints in the flag import configuration API require an integration ID. The
   * integration ID is returned as part of the [Create a flag import
   * configuration](https://launchdarkly.com/docs/api/flag-import-configurations-beta/create-flag-import-configuration)
   * response, in the `_id` field. It is also returned as part of the [List all flag import
   * configurations](https://launchdarkly.com/docs/api/flag-import-configurations-beta/get-flag-import-configurations)
   * response, in the `_id` field of each element in the `items` array.
   *
   * To learn more about flag import configurations, read [Import
   * flags](https://launchdarkly.com/docs/home/flags/import).
   */
  get flagImportConfigurationsBeta(): FlagImportConfigurationsBeta {
    return (this.#flagImportConfigurationsBeta ??= new FlagImportConfigurationsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Flag links let you view external mentions of flags from other tools and services. Links to
   * external conversations and references to your flags allow you to collaborate more easily and
   * quickly review relevant flag contexts. To learn more, read [Flag
   * links](https://launchdarkly.com/docs/home/flags/links).
   *
   * You can create custom flag links by associating an external URL with a feature flag. After you
   * create a flag link, it applies across all your environments. You should use caution when you
   * delete a flag link, because it will be deleted from all your environments.
   *
   * With the flag links API, you can view, create, update, and delete links to flags.
   *
   * Several of the endpoints in the flag links API require a flag link ID. The flag link ID is
   * returned as part of the [Create flag
   * link](https://launchdarkly.com/docs/api/flag-links-beta/create-flag-link) and [List flag
   * links](https://launchdarkly.com/docs/api/flag-links-beta/get-flag-links) responses. It is the
   * `_id` field, or the `_id` field of each element in the `items` array.
   */
  get flagLinksBeta(): FlagLinksBeta {
    return (this.#flagLinksBeta ??= new FlagLinksBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Flag triggers is an Enterprise feature > > Flag triggers is available to customers on an
   * Enterprise plan. To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To
   * upgrade your plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * Flag triggers let you initiate flag changes remotely using a unique webhook URL. For example,
   * you can integrate triggers with your existing tools to enable or disable flags when you hit
   * specific operational health thresholds or receive certain alerts. To learn more, read [Flag
   * triggers](https://launchdarkly.com/docs/home/releases/triggers).
   *
   * With the flag triggers API, you can create, delete, and manage triggers.
   *
   * Several of the endpoints in the flag triggers API require a flag trigger ID. The flag trigger
   * ID is returned as part of the [Create flag
   * trigger](https://launchdarkly.com/docs/api/flag-triggers/create-trigger-workflow) and [List
   * flag triggers](https://launchdarkly.com/docs/api/flag-triggers/get-trigger-workflows)
   * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
   */
  get flagTriggers(): FlagTriggers {
    return (this.#flagTriggers ??= new FlagTriggers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Follow flags to receive email updates about targeting changes to a flag in a project and
   * environment.
   *
   * Several of the endpoints in the follow flags API require a member ID. The member ID is returned
   * as part of the [Invite new
   * members](https://launchdarkly.com/docs/api/account-members/post-members) and [List account
   * members](https://launchdarkly.com/docs/api/account-members/get-members) responses. It is the
   * `_id` field of each element in the `items` array.
   */
  get followFlags(): FollowFlags {
    return (this.#followFlags ??= new FollowFlags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Available for customers using Experimentation > > Holdouts are available to customers
   * using [Experimentation](https://launchdarkly.com/docs/api/experiments).
   *
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Holdouts let you exclude a percentage of your audience from your Experimentation program. This
   * enables you to see the overall effect of your experiments on your customer base, and helps
   * determine how effective the experiments you're running are.
   *
   * Using the holdouts API, you can create, delete, and manage holdouts. To learn more, read
   * [Holdouts](https://launchdarkly.com/docs/home/holdouts).
   */
  get holdoutsBeta(): HoldoutsBeta {
    return (this.#holdoutsBeta ??= new HoldoutsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The charts API provides access to the data used in engineering insights project metrics. To
   * learn more, read [Project
   * metrics](https://launchdarkly.com/docs/home/observability/project-metrics).
   */
  get insightsChartsBeta(): InsightsChartsBeta {
    return (this.#insightsChartsBeta ??= new InsightsChartsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The deployments API provides access to deployment information in engineering insights. To learn
   * more, read [Deployments](https://launchdarkly.com/docs/home/observability/deployments).
   */
  get insightsDeploymentsBeta(): InsightsDeploymentsBeta {
    return (this.#insightsDeploymentsBeta ??= new InsightsDeploymentsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The flag events API provides access to flag-event data used in engineering insights project
   * metrics. To learn more, read [Flag
   * health](https://launchdarkly.com/docs/home/observability/flag-health).
   */
  get insightsFlagEventsBeta(): InsightsFlagEventsBeta {
    return (this.#insightsFlagEventsBeta ??= new InsightsFlagEventsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The pull requests API provides access to information used for lead time calculations. To learn
   * more, read [Lead time](https://launchdarkly.com/docs/home/observability/lead-time).
   */
  get insightsPullRequestsBeta(): InsightsPullRequestsBeta {
    return (this.#insightsPullRequestsBeta ??= new InsightsPullRequestsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Engineering insights automatically creates repository associations when it receives deployments
   * or code references. Optionally, you can manually configure additional associations. You can use
   * the repositories API to list repositories and create associations to projects. To learn more,
   * read [Send deployment
   * information](https://launchdarkly.com/docs/home/observability/config-deployment).
   */
  get insightsRepositoriesBeta(): InsightsRepositoriesBeta {
    return (this.#insightsRepositoriesBeta ??= new InsightsRepositoriesBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The insights scores API provides scores for data used in engineering insights project metrics.
   * To learn more, read [Project
   * overview](https://launchdarkly.com/docs/home/observability/project-overview) and [Project
   * metrics](https://launchdarkly.com/docs/home/observability/project-metrics).
   */
  get insightsScoresBeta(): InsightsScoresBeta {
    return (this.#insightsScoresBeta ??= new InsightsScoresBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Audit log integration subscriptions allow you to send audit log events hooks to one of dozens
   * of external tools. For example, you can send flag change event webhooks to external third party
   * software. To learn more, read [Building your own
   * integrations](https://launchdarkly.com/docs/integrations/building-integrations#building-your-own-integrations).
   *
   * You can use the integration subscriptions API to create, delete, and manage your integration
   * audit log subscriptions.
   *
   * Each of these operations requires an `integrationKey` that refers to the type of integration.
   * The required `config` fields to create a subscription vary depending on the `integrationKey`.
   * You can find a full list of the fields for each integration below.
   *
   * Several of these operations require a subscription ID. The subscription ID is returned as part
   * of the [Create audit log
   * subscription](https://launchdarkly.com/docs/api/integration-audit-log-subscriptions/create-subscription)
   * and [Get audit log subscriptions by
   * integration](https://launchdarkly.com/docs/api/integration-audit-log-subscriptions/get-subscriptions)
   * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
   *
   * ### Configuration bodies by integrationKey
   *
   * #### datadog
   *
   * `apiKey` is a sensitive value.
   *
   * `hostURL` must evaluate to either `"https://api.datadoghq.com"` or `"https://api.datadoghq.eu"`
   * and will default to the former if not explicitly defined.
   *
   * ```
   * "config": {
   *     "apiKey": <string, optional>, # sensitive value
   *     "hostURL": <string, optional>
   * }
   * ```
   *
   * #### dynatrace
   *
   * `apiToken` is a sensitive value.
   *
   * `entity` must evaluate to one of the following fields and will default to `"APPLICATION"` if
   * not explicitly defined:
   *
   * <details> <summary>Click to expand list of fields</summary> <br/> "APPLICATION"<br/>
   * "APPLICATION_METHOD"<br/> "APPLICATION_METHOD_GROUP"<br/> "AUTO_SCALING_GROUP"<br/>
   * "AUXILIARY_SYNTHETIC_TEST"<br/> "AWS_APPLICATION_LOAD_BALANCER"<br/>
   * "AWS_AVAILABILITY_ZONE"<br/> "AWS_CREDENTIALS"<br/> "AWS_LAMBDA_FUNCTION"<br/>
   * "AWS_NETWORK_LOAD_BALANCER"<br/> "AZURE_API_MANAGEMENT_SERVICE"<br/>
   * "AZURE_APPLICATION_GATEWAY"<br/> "AZURE_COSMOS_DB"<br/> "AZURE_CREDENTIALS"<br/>
   * "AZURE_EVENT_HUB"<br/> "AZURE_EVENT_HUB_NAMESPACE"<br/> "AZURE_FUNCTION_APP"<br/>
   * "AZURE_IOT_HUB"<br/> "AZURE_LOAD_BALANCER"<br/> "AZURE_MGMT_GROUP"<br/>
   * "AZURE_REDIS_CACHE"<br/> "AZURE_REGION"<br/> "AZURE_SERVICE_BUS_NAMESPACE"<br/>
   * "AZURE_SERVICE_BUS_QUEUE"<br/> "AZURE_SERVICE_BUS_TOPIC"<br/> "AZURE_SQL_DATABASE"<br/>
   * "AZURE_SQL_ELASTIC_POOL"<br/> "AZURE_SQL_SERVER"<br/> "AZURE_STORAGE_ACCOUNT"<br/>
   * "AZURE_SUBSCRIPTION"<br/> "AZURE_TENANT"<br/> "AZURE_VM"<br/> "AZURE_VM_SCALE_SET"<br/>
   * "AZURE_WEB_APP"<br/> "CF_APPLICATION"<br/> "CF_FOUNDATION"<br/> "CINDER_VOLUME"<br/>
   * "CLOUD_APPLICATION"<br/> "CLOUD_APPLICATION_INSTANCE"<br/> "CLOUD_APPLICATION_NAMESPACE"<br/>
   * "CONTAINER_GROUP"<br/> "CONTAINER_GROUP_INSTANCE"<br/> "CUSTOM_APPLICATION"<br/>
   * "CUSTOM_DEVICE"<br/> "CUSTOM_DEVICE_GROUP"<br/> "DCRUM_APPLICATION"<br/> "DCRUM_SERVICE"<br/>
   * "DCRUM_SERVICE_INSTANCE"<br/> "DEVICE_APPLICATION_METHOD"<br/> "DISK"<br/>
   * "DOCKER_CONTAINER_GROUP_INSTANCE"<br/> "DYNAMO_DB_TABLE"<br/> "EBS_VOLUME"<br/>
   * "EC2_INSTANCE"<br/> "ELASTIC_LOAD_BALANCER"<br/> "ENVIRONMENT"<br/>
   * "EXTERNAL_SYNTHETIC_TEST_STEP"<br/> "GCP_ZONE"<br/> "GEOLOCATION"<br/> "GEOLOC_SITE"<br/>
   * "GOOGLE_COMPUTE_ENGINE"<br/> "HOST"<br/> "HOST_GROUP"<br/> "HTTP_CHECK"<br/>
   * "HTTP_CHECK_STEP"<br/> "HYPERVISOR"<br/> "KUBERNETES_CLUSTER"<br/> "KUBERNETES_NODE"<br/>
   * "MOBILE_APPLICATION"<br/> "NETWORK_INTERFACE"<br/> "NEUTRON_SUBNET"<br/>
   * "OPENSTACK_PROJECT"<br/> "OPENSTACK_REGION"<br/> "OPENSTACK_VM"<br/> "OS"<br/>
   * "PROCESS_GROUP"<br/> "PROCESS_GROUP_INSTANCE"<br/> "RELATIONAL_DATABASE_SERVICE"<br/>
   * "SERVICE"<br/> "SERVICE_INSTANCE"<br/> "SERVICE_METHOD"<br/> "SERVICE_METHOD_GROUP"<br/>
   * "SWIFT_CONTAINER"<br/> "SYNTHETIC_LOCATION"<br/> "SYNTHETIC_TEST"<br/>
   * "SYNTHETIC_TEST_STEP"<br/> "VIRTUALMACHINE"<br/> "VMWARE_DATACENTER" </details>
   *
   * ```
   * "config": {
   *     "apiToken": <string, required>,
   *     "url": <string, required>,
   *     "entity": <string, optional>
   * }
   * ```
   *
   * #### elastic
   *
   * `token` is a sensitive field.
   *
   * ```
   * "config": {
   *     "url": <string, required>,
   *     "token": <string, required>,
   *     "index": <string, required>
   * }
   * ```
   *
   * #### honeycomb
   *
   * `apiKey` is a sensitive field.
   *
   * ```
   * "config": {
   *     "datasetName": <string, required>,
   *     "apiKey": <string, required>
   * }
   * ```
   *
   * #### logdna
   *
   * `ingestionKey` is a sensitive field.
   *
   * ```
   * "config": {
   *     "ingestionKey": <string, required>,
   *     "level": <string, optional>
   * }
   * ```
   *
   * #### msteams
   *
   * ```
   * "config": {
   *     "url": <string, required>
   * }
   * ```
   *
   * #### new-relic-apm
   *
   * `apiKey` is a sensitive field.
   *
   * `domain` must evaluate to either `"api.newrelic.com"` or `"api.eu.newrelic.com"` and will
   * default to the former if not explicitly defined.
   *
   * ```
   * "config": {
   *     "apiKey": <string, required>,
   *     "applicationId": <string, required>,
   *     "domain": <string, optional>
   * }
   * ```
   *
   * #### signalfx
   *
   * `accessToken` is a sensitive field.
   *
   * ```
   * "config": {
   *     "accessToken": <string, required>,
   *     "realm": <string, required>
   * }
   * ```
   *
   * #### splunk
   *
   * `token` is a sensitive field.
   *
   * ```
   * "config": {
   *     "base-url": <string, required>,
   *     "token": <string, required>,
   *     "skip-ca-verification": <boolean, required>
   * }
   * ```
   */
  get integrationAuditLogSubscriptions(): IntegrationAuditLogSubscriptions {
    return (this.#integrationAuditLogSubscriptions ??= new IntegrationAuditLogSubscriptions(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   *
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * The integration delivery configurations API allow you to create, modify, validate, and delete
   * delivery configurations.
   *
   * Several of the endpoints require a delivery configuration ID. The delivery configuration ID is
   * returned as part of the [Create delivery
   * configuration](https://launchdarkly.com/docs/api/integration-delivery-configurations-beta/create-integration-delivery-configuration)
   * and [List all delivery
   * configurations](https://launchdarkly.com/docs/api/integration-delivery-configurations-beta/get-integration-delivery-configurations)
   * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
   */
  get integrationDeliveryConfigurationsBeta(): IntegrationDeliveryConfigurationsBeta {
    return (this.#integrationDeliveryConfigurationsBeta ??= new IntegrationDeliveryConfigurationsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   *
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * > ### Integration configuration is an Enterprise feature > > Integration configuration is
   * available to customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * You can use the integrations API to create, delete, and manage integration configurations.
   *
   * An integration configuration stores and manages configuration details for an integration
   * between LaunchDarkly and a third-party application. To learn more about building an
   * integration, read [Using the LaunchDarkly integration
   * framework](https://launchdarkly.com/docs/integrations/building-integrations) and [Building
   * partner integrations](https://launchdarkly.com/docs/integrations/partner-integrations).
   */
  get integrationsBeta(): IntegrationsBeta {
    return (this.#integrationsBeta ??= new IntegrationsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Available for customers using Experimentation > > Layers are available to customers using
   * [Experimentation](https://launchdarkly.com/docs/api/experiments).
   *
   * There are some cases in which you may not want to include a context in more than one experiment
   * at a time. For example, you may be concerned about collisions between experiments that are
   * testing similar parts of your app, like two different changes to the same section of your app's
   * user interface (UI), or experiments running on both the back end and front end of the same
   * functionality. In this case you can eliminate the interaction effect between experiments using
   * layers.
   *
   * A layer contains a set of experiments that cannot share traffic with each other. All of the
   * experiments within a layer are mutually exclusive, which means that if a context is included in
   * one experiment, LaunchDarkly will exclude it from any other experiments in the same layer.
   *
   * To learn more, read [Mutually exclusive
   * experiments](https://launchdarkly.com/docs/home/experimentation/mutually-exclusive).
   */
  get layers(): Layers {
    return (this.#layers ??= new Layers(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Metrics track flag behavior over time when an experiment is running. The data generated from
   * experiments gives you more insight into the impact of a particular flag. To learn more, read
   * [Metrics](https://launchdarkly.com/docs/home/observability/metrics).
   *
   * Using the metrics API, you can create, delete, and manage metrics.
   *
   * > ### Metric keys and event keys are different > > LaunchDarkly automatically generates a
   * metric key when you create a metric. You can use the metric key to identify the metric in API
   * calls. > > Custom conversion/binary and custom numeric metrics also require an event key. You
   * can set the event key to anything you want. Adding this event key to your codebase lets your
   * SDK track actions customers take in your app as events. To learn more, read [Sending custom
   * events](https://launchdarkly.com/docs/sdk/features/events).
   *
   * ### Importing metric events
   *
   * The metric import API is separate from the metrics API.
   *
   * The metric import API lets you import metric events from your data pipeline for use with
   * Experimentation and guarded rollouts. This means you can send your already-instrumented metrics
   * into LaunchDarkly without writing and deploying new code for each metric.
   *
   * For details on the metric import API, read [Importing metric
   * events](https://launchdarkly.com/docs/home/observability/import-events).
   *
   * > #### The metric import API uses a different base URL > > The metric import API differs from
   * other LaunchDarkly REST APIs because it uses a different base URL: it requires
   * `https://events.launchdarkly.com` rather than `https://app.launchdarkly.com`. For this reason,
   * the metric import API is also not included as part of LaunchDarkly's [generated client
   * libraries](https://launchdarkly.com/docs/api#openapi-swagger-and-client-libraries), and details
   * are not included in the [OpenAPI
   * specification](https://launchdarkly.com/docs/api/other/get-openapi-spec). To learn more, read
   * [Importing metric events](https://launchdarkly.com/docs/home/observability/import-events).
   */
  get metricsApi(): MetricsApi {
    return (this.#metricsApi ??= new MetricsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Metrics measure audience behaviors affected by the flags in your experiments. Metric groups are
   * reusable, ordered lists of metrics you can use to standardize metrics across multiple
   * experiments. To learn more, read
   * [Metrics](https://launchdarkly.com/docs/home/observability/metrics) and [Metric
   * groups](https://launchdarkly.com/docs/home/observability/metric-groups).
   *
   * Using the metrics API, you can create, delete, and manage metrics and metric groups.
   */
  get metricsBeta(): MetricsBeta {
    return (this.#metricsBeta ??= new MetricsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The OAuth2 client API allows you to register a LaunchDarkly OAuth client for use in your own
   * custom integrations. Registering a LaunchDarkly OAuth client allows you to use LaunchDarkly as
   * an identity provider so that account members can log into your application with their
   * LaunchDarkly account.
   *
   * You can create and manage LaunchDarkly OAuth clients using the LaunchDarkly OAuth client API.
   * This API acknowledges creation of your client with a response containing a one-time, unique
   * `_clientSecret`. If you lose your client secret, you will have to register a new client.
   * LaunchDarkly does not store client secrets in plain text.
   *
   * Several of the endpoints in the OAuth2 client API require an OAuth client ID. The OAuth client
   * ID is returned as part of the [Create a LaunchDarkly OAuth 2.0
   * client](https://launchdarkly.com/docs/api/o-auth-2-clients/create-o-auth-2-client) and [Get
   * clients](https://launchdarkly.com/docs/api/o-auth-2-clients/get-o-auth-clients) responses. It
   * is the `_clientId` field, or the `_clientId` field of each element in the `items` array.
   *
   * You must have _Admin_ privileges or an access token created by a member with _Admin_ privileges
   * in order to be able to use this feature.
   *
   * Please note that `redirectUri`s must be absolute URIs that conform to the https URI scheme. If
   * you wish to register a client with a different URI scheme, please contact LaunchDarkly Support.
   */
  get oAuth2Clients(): OAuth2Clients {
    return (this.#oAuth2Clients ??= new OAuth2Clients(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * ### Persistent store integrations
   *
   * Persistent store integrations, also called "big segment" store integrations, are required when
   * you use a server-side SDK and big segments. You can use the persistent store integrations API
   * endpoints to manage these integrations.
   *
   * > ### Synced segments and larger list-based segments are an Enterprise feature > > Segments
   * synced from external tools and larger list-based segments with more than 15,000 entries are the
   * two kinds of "big segment." LaunchDarkly uses different implementations for different types of
   * segments so that all of your segments have good performance. > > These segments are available
   * to customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * [Segments synced from external tools](https://launchdarkly.com/docs/home/flags/synced-segments)
   * and [larger list-based segments](https://launchdarkly.com/docs/home/flags/list-based-segments)
   * are the two kinds of big segment. If you are using server-side SDKs, these segments require a
   * persistent store within your infrastructure. LaunchDarkly keeps the persistent store up to date
   * and consults it during flag evaluation.
   *
   * You need either a persistent store integration or a [Relay
   * Proxy](https://launchdarkly.com/docs/sdk/relay-proxy) to support these segments. The persistent
   * store integrations API lets you manage the persistent store integrations.
   *
   * To learn more about segments, read
   * [Segments](https://launchdarkly.com/docs/home/flags/segments) and [Segment
   * configuration](https://launchdarkly.com/docs/home/flags/segment-config).
   *
   * Several of the endpoints in the persistent store integrations API require an integration ID.
   * The integration ID is returned as part of the [Create big segment store
   * integration](https://launchdarkly.com/docs/api/persistent-store-integrations-beta/create-big-segment-store-integration)
   * response, in the `_id` field. It is also returned as part of the [List all big segment store
   * integrations](https://launchdarkly.com/docs/api/persistent-store-integrations-beta/get-big-segment-store-integrations)
   * response, in the `_id` field of each element in the `items` array.
   *
   * You can find other APIs for working with big segments under
   * [Segments](https://launchdarkly.com/docs/api/segments).
   */
  get persistentStoreIntegrationsBeta(): PersistentStoreIntegrationsBeta {
    return (this.#persistentStoreIntegrationsBeta ??= new PersistentStoreIntegrationsBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Projects allow you to manage multiple different software projects under one LaunchDarkly
   * account. Each project has its own unique set of environments and feature flags. To learn more,
   * read [Projects](https://launchdarkly.com/docs/home/account/project).
   *
   * Using the projects API, you can list, create, and manage projects.
   */
  get projectsApi(): ProjectsApi {
    return (this.#projectsApi ??= new ProjectsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   *
   * > ### Relay Proxy automatic configuration is an Enterprise feature > > Relay Proxy automatic
   * configuration is available to customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * The Relay Proxy automatic configuration API provides access to all resources related to relay
   * tokens. To learn more, read [Automatic
   * configuration](https://launchdarkly.com/docs/sdk/relay-proxy/automatic-configuration).
   *
   * Several of the endpoints in the Relay Proxy automatic configuration API require a configuration
   * ID. The Relay Proxy configuration ID is returned as part of the [Create a new Relay Proxy
   * config](https://launchdarkly.com/docs/api/relay-proxy-configurations/post-relay-auto-config)
   * and [List Relay Proxy
   * configs](https://launchdarkly.com/docs/api/relay-proxy-configurations/get-relay-proxy-configs)
   * responses. It is the `_id` field, or the `_id` field of each element in the `items` array.
   */
  get relayProxyConfigurations(): RelayProxyConfigurations {
    return (this.#relayProxyConfigurations ??= new RelayProxyConfigurations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Release pipelines standardize and automate the release process for feature flags across a
   * series of phases, where each phase consists of one or more environments and audiences. Each
   * phase can use an immediate or guarded rollout to a designated audience, and can require
   * approvals for selected environments. You can use release pipelines to ensure that you correctly
   * roll out a flag in one environment before moving on to the next. To learn more, read [Release
   * pipelines](https://launchdarkly.com/docs/home/releases/release-pipelines).
   *
   * Use the release pipelines API to view, create, update, and delete release pipelines. You can
   * also use this API to view the progress of all ongoing releases across all flags in a project
   * for a given release pipeline.
   *
   * ### Creating releases and updating release phases
   *
   * When you add a flag to a release pipeline, you create a new "release" to automate that flag's
   * progress through phases in the pipeline.
   *
   * Use the related [releases API](https://launchdarkly.com/docs/api/releases-beta) to create a new
   * release, or to view or update a release for a given flag. For example, you can use the releases
   * API to add a flag to an existing release pipeline, or to start the next phase of a flag's
   * ongoing release.
   */
  get releasePipelinesBeta(): ReleasePipelinesBeta {
    return (this.#releasePipelinesBeta ??= new ReleasePipelinesBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Release policies let you specify your preferred rollout method for a given set of environments.
   */
  get releasePoliciesBeta(): ReleasePoliciesBeta {
    return (this.#releasePoliciesBeta ??= new ReleasePoliciesBeta(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * Release pipelines standardize and automate the release process for feature flags across a
   * series of phases, where each phase consists of one or more environments and audiences. When you
   * add a flag to an existing release pipeline, you create a "release" to automate that flag's
   * progress through the pipeline.
   *
   * Use the releases API to add a flag to an existing release pipeline, or to monitor or update an
   * ongoing release for a flag. Updating an ongoing release generally involves the following steps:
   *
   * 1. Obtain the release phases associated with the release. The `phases` field provides an
   *    ordered list of all pipeline phases associated with the flag's release. `phases` is returned
   *    in the response when you [Create a new release for a
   *    flag](https://launchdarkly.com/docs/api/releases-beta/create-release-for-flag) or [Get the
   *    release for a
   *    flag](https://launchdarkly.com/docs/api/releases-beta/get-release-by-flag-key).
   *
   * 2. Determine the `_id` of the phase you want to start. Release pipeline phases take place in
   *    their configured order, so find the first incomplete, unstarted phase in the `phases` list.
   *    For example, in a newly-created release the first phase in the `phases` list has both the
   *    `complete` and `started` fields set to `false`.
   *
   * 3. Use the phase `_id` value with the [Update phase status for
   *    release](https://launchdarkly.com/docs/api/releases-beta/update-phase-status) endpoint to
   *    start the release phase. At a minimum, you must provide `{"status": active}` in the request
   *    object to start a pipeline phase. If the phase requires approvals or guarded rollouts,
   *    provide the additional required information in the `audiences` list.
   *
   * ### Configuring release pipelines
   *
   * Use the related [release pipelines
   * API](https://launchdarkly.com/docs/api/release-pipelines-beta) to view, create, update, and
   * delete release pipelines, or to view the progress of all ongoing releases across all flags in a
   * project for a given release pipeline.
   */
  get releasesBeta(): ReleasesBeta {
    return (this.#releasesBeta ??= new ReleasesBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Scheduled flag changes is an Enterprise feature > > Scheduled flag changes is available
   * to customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * You can schedule flag targeting rule changes to take place at a selected time. You may schedule
   * multiple changes for a single flag with each change having a different `ExecutionDate`. To
   * learn more, read [Scheduled flag
   * changes](https://launchdarkly.com/docs/home/releases/scheduled-changes).
   *
   * Several endpoints in the scheduled changes API require an existing scheduled change ID. This ID
   * is returned in the `_id` field from the [Create scheduled changes
   * workflow](https://launchdarkly.com/docs/api/scheduled-changes/post-flag-config-scheduled-changes)
   * response, or in the `_id` field of each element in the `items` array from the [List scheduled
   * changes](https://launchdarkly.com/docs/api/scheduled-changes/get-flag-config-scheduled-changes)
   * response.
   */
  get scheduledChanges(): ScheduledChanges {
    return (this.#scheduledChanges ??= new ScheduledChanges(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   *
   * > ### Synced segments and larger list-based segments are an Enterprise feature > > This section
   * documents endpoints for rule-based, list-based, and synced segments. > > A "big segment" is a
   * segment that is either a synced segment, or a list-based segment with more than 15,000 entries
   * that includes only one targeted context kind. LaunchDarkly uses different implementations for
   * different types of segments so that all of your segments have good performance. > > In the
   * segments API, a big segment is indicated by the `unbounded` field being set to `true`. > >
   * These segments are available to customers on an Enterprise plan. To learn more, [read about our
   * pricing](https://launchdarkly.com/pricing/). To upgrade your plan, [contact
   * Sales](https://launchdarkly.com/contact-sales/).
   *
   * Segments are groups of contexts that you can use to manage flag targeting behavior in bulk.
   * LaunchDarkly supports:
   *
   * * rule-based segments, which let you target groups of contexts individually or by attribute,
   * * list-based segments, which let you target individual contexts or uploaded lists of contexts,
   *   and
   * * synced segments, which let you target groups of contexts backed by an external data store.
   *
   * To learn more, read [Segments](https://launchdarkly.com/docs/home/flags/segments).
   *
   * The segments API allows you to list, create, modify, and delete segments programmatically.
   *
   * You can find other APIs for working with big segments under [Persistent store integrations
   * (beta)](https://launchdarkly.com/docs/api/persistent-store-integrations-beta).
   */
  get segments(): Segments {
    return (this.#segments ??= new Segments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Tags are simple strings that you can attach to most resources in LaunchDarkly. Tags are useful
   * for grouping resources into a set that you can name in a resource specifier. To learn more,
   * read [Custom role concepts](https://launchdarkly.com/docs/home/account/role-concepts#tags).
   *
   * Using the tags API, you can list existing tags for resources.
   */
  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Teams is an Enterprise feature > > Teams is available to customers on an Enterprise plan.
   * To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your
   * plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * A team is a group of members in your LaunchDarkly account. Members of the team have access to
   * various resources in LaunchDarkly, such as projects or flags, based on the role or roles you
   * assign to the team. To learn more, read
   * [Teams](https://launchdarkly.com/docs/home/account/teams).
   *
   * The Teams API allows you to create, read, update, and delete a team.
   *
   * Several of the endpoints in the Teams API require one or more member IDs. The member ID is
   * returned as part of the [List account
   * members](https://launchdarkly.com/docs/api/account-members/get-members) response. It is the
   * `_id` field of each element in the `items` array.
   */
  get teamsApi(): TeamsApi {
    return (this.#teamsApi ??= new TeamsApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * > ### Teams is an Enterprise feature > > Teams is available to customers on an Enterprise plan.
   * To learn more, [read about our pricing](https://launchdarkly.com/pricing/). To upgrade your
   * plan, [contact Sales](https://launchdarkly.com/contact-sales/).
   *
   * A team is a group of members in your LaunchDarkly account. A team can have maintainers who are
   * able to add and remove team members. It also can have custom roles assigned to it that allows
   * shared access to those roles for all team members. To learn more, read
   * [Teams](https://launchdarkly.com/docs/home/account/teams).
   */
  get teamsBeta(): TeamsBeta {
    return (this.#teamsBeta ??= new TeamsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use
   * [Contexts](https://launchdarkly.com/docs/api/contexts) instead of the user settings API. To
   * learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * LaunchDarkly's user settings API provides a picture of all feature flags and their current
   * values for a specific user. This gives you instant visibility into how a particular user
   * experiences your site or application. To learn more, read [View and manage
   * contexts](https://launchdarkly.com/docs/home/observability/context-attributes#view-and-manage-contexts).
   *
   * You can also use the user settings API to assign a user to a specific variation for any feature
   * flag.
   */
  get userSettings(): UserSettings {
    return (this.#userSettings ??= new UserSettings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use
   * [Contexts](https://launchdarkly.com/docs/api/contexts) instead of these endpoints. To learn
   * more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   *
   * LaunchDarkly creates a record for each user passed in to `variation` calls. This record powers
   * the autocomplete functionality on the feature flag dashboard, as well as the Users page. To
   * learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * LaunchDarkly also offers an API that lets you tap into this data. You can use the users API to
   * see what user data is available to LaunchDarkly, as well as determine which flag values a user
   * will receive. You can also explicitly set which flag value a user will receive via this API.
   *
   * Users are always scoped within a project and environment. In other words, each environment has
   * its own set of user records.
   */
  get usersApi(): UsersApi {
    return (this.#usersApi ??= new UsersApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Contexts are now available > > After you have upgraded your LaunchDarkly SDK to use
   * contexts instead of users, you should use
   * [Contexts](https://launchdarkly.com/docs/api/contexts) instead of these endpoints. To learn
   * more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts).
   *
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible.
   *
   * LaunchDarkly creates a record for each user passed in to `variation` calls. This record powers
   * the autocomplete functionality on the feature flag dashboard, as well as the Users page. To
   * learn more, read [Contexts](https://launchdarkly.com/docs/home/observability/contexts)
   *
   * LaunchDarkly also offers an API that lets you access this data. You can use the users API to
   * see what user data is available to LaunchDarkly, as well as determine which flag values a user
   * will receive. You can also explicitly set which flag value a user will receive with this API.
   *
   * Users are always scoped within both a project and an environment. Each environment has its own
   * set of user records.
   */
  get usersBeta(): UsersBeta {
    return (this.#usersBeta ??= new UsersBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### This feature is in beta > > To use this feature, pass in a header including the
   * `LD-API-Version` key with value set to `beta`. Use this header with each call. To learn more,
   * read [Beta resources](https://launchdarkly.com/docs/api#beta-resources). > > Resources that are
   * in beta are still undergoing testing and development. They may change without notice, including
   * becoming backwards incompatible. The views API allows you to create, retrieve, and edit views,
   * and link other resources to views.
   *
   * A view is a resource in LaunchDarkly that you can use to logically group other resources within
   * a project, such as flags or segments. For example, views let you restrict access to sets of
   * flags, so that members of your organization can focus on just the flags they work with.
   *
   * To learn more, read [Views](https://launchdarkly.com/docs/home/account/views).
   */
  get viewsBeta(): ViewsBeta {
    return (this.#viewsBeta ??= new ViewsBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The webhooks API lets you build your own integrations that subscribe to activities in
   * LaunchDarkly. When you generate an activity in LaunchDarkly, such as when you change a flag or
   * you create a project, LaunchDarkly sends an HTTP POST payload to the webhook's URL. Use
   * webhooks to update external issue trackers, update support tickets, notify customers of new
   * feature rollouts, and more.
   *
   * Several of the endpoints in the webhooks API require a webhook ID. The webhook ID is returned
   * as part of the [Creates a webhook](https://launchdarkly.com/docs/api/webhooks/post-webhook) and
   * [List webhooks](https://launchdarkly.com/docs/api/webhooks/get-all-webhooks) responses. It is
   * the `_id` field, or the `_id` field of each element in the `items` array.
   *
   * ## Designating the payload
   *
   * The webhook payload is identical to an audit log entry. To learn more, read [Get audit log
   * entry](https://launchdarkly.com/docs/api/audit-log/get-audit-log-entry).
   *
   * Here's a sample payload:
   *
   * > ### Webhook delivery order > > Webhooks may not be delivered in chronological order. We
   * recommend using the payload's "date" field as a timestamp to reorder webhooks as they are
   * received.
   *
   * ```json
   * {
   *   "_links": {
   *     "canonical": {
   *       "href": "/api/v2/projects/alexis/environments/test",
   *       "type": "application/json"
   *     },
   *     "parent": {
   *       "href": "/api/v2/auditlog",
   *       "type": "application/json"
   *     },
   *     "self": {
   *       "href": "/api/v2/auditlog/57c0a8e29969090743529965",
   *       "type": "application/json"
   *     },
   *     "site": {
   *       "href": "/settings#/projects",
   *       "type": "text/html"
   *     }
   *   },
   *   "_id": "57c0a8e29969090743529965",
   *   "date": 1472243938774,
   *   "accesses": [
   *     {
   *       "action": "updateName",
   *       "resource": "proj/alexis:env/test"
   *     }
   *   ],
   *   "kind": "environment",
   *   "name": "Testing",
   *   "description": "- Changed the name from ~~Test~~ to *Testing*",
   *   "member": {
   *     "_links": {
   *       "parent": {
   *         "href": "/internal/account/members",
   *         "type": "application/json"
   *       },
   *       "self": {
   *         "href": "/internal/account/members/548f6741c1efad40031b18ae",
   *         "type": "application/json"
   *       }
   *     },
   *     "_id": "548f6741c1efad40031b18ae",
   *     "email": "ariel@acme.com",
   *     "firstName": "Ariel",
   *     "lastName": "Flores"
   *   },
   *   "titleVerb": "changed the name of",
   *   "title": "[Ariel Flores](mailto:ariel@acme.com) changed the name of [Testing](https://app.launchdarkly.com/settings#/projects)",
   *   "target": {
   *     "_links": {
   *       "canonical": {
   *         "href": "/api/v2/projects/alexis/environments/test",
   *         "type": "application/json"
   *       },
   *       "site": {
   *         "href": "/settings#/projects",
   *         "type": "text/html"
   *       }
   *     },
   *     "name": "Testing",
   *     "resources": ["proj/alexis:env/test"]
   *   }
   * }
   * ```
   *
   * ## Signing the webhook
   *
   * Optionally, you can define a `secret` when you create a webhook. If you define the secret, the
   * webhook `POST` request will include an `X-LD-Signature header`, whose value will contain an
   * HMAC SHA256 hex digest of the webhook payload, using the `secret` as the key.
   *
   * Compute the signature of the payload using the same shared secret in your code to verify that
   * the webhook was triggered by LaunchDarkly.
   *
   * ## Understanding connection retries
   *
   * If LaunchDarkly receives a non-`2xx` response to a webhook `POST`, it will retry the delivery
   * one time. Webhook delivery is not guaranteed. If you build an integration on webhooks, make
   * sure it is tolerant of delivery failures.
   */
  get webhooksApi(): WebhooksApi {
    return (this.#webhooksApi ??= new WebhooksApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and
   * is planned for future deprecation at a date not yet specified. We will work with existing
   * customers using workflows to migrate to a replacement solution when deprecation occurs.
   *
   * Workflow templates allow you to define a set of workflow stages that you can use as a starting
   * point for new workflows. You can create these workflows for any flag in any environment and any
   * project, and you can create as many workflows as you like from a given template.
   *
   * You can create workflow templates in two ways:
   * * by specifying the desired stages, using the `stages` property of the request body
   * * by specifying an existing workflow to save as a template, using the `workflowId` property of
   *   the request body
   *
   * You can use templates to create a workflow in any project, environment, or flag. However, when
   * you create a template, you must specify a particular project, environment, and flag. This means
   * that when you create a template using the `stages` property, you must also include
   * `projectKey`, `environmentKey`, and `flagKey` properties in the request body. When you create a
   * template from an existing workflow, it will use the project, environment, and flag of the
   * existing workflow, so those properties can be omitted from the request body.
   *
   * To learn more, read [Workflows
   * documentation](https://launchdarkly.com/docs/home/releases/workflows) and [Workflows API
   * documentation](https://launchdarkly.com/docs/api/workflows).
   */
  get workflowTemplates(): WorkflowTemplates {
    return (this.#workflowTemplates ??= new WorkflowTemplates(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * > ### Workflows are in maintenance mode > > The workflows feature is in maintenance mode, and
   * is planned for future deprecation at a date not yet specified. We will work with existing
   * customers using workflows to migrate to a replacement solution when deprecation occurs.
   *
   * A workflow is a set of actions that you can schedule in advance to make changes to a feature
   * flag at a future date and time. You can also include approval requests at different stages of a
   * workflow. To learn more, read
   * [Workflows](https://launchdarkly.com/docs/home/releases/workflows).
   *
   * The actions supported are as follows:
   *
   * - Turning targeting `ON` or `OFF`
   * - Setting the default variation
   * - Adding targets to a given variation
   * - Creating a rule to target by segment
   * - Modifying the rollout percentage for rules
   *
   * You can create multiple stages of a flag release workflow. Unique stages are defined by their
   * conditions: either approvals and/or scheduled changes.
   *
   * Several of the endpoints in the workflows API require a workflow ID or one or more member IDs.
   * The workflow ID is returned as part of the [Create
   * workflow](https://launchdarkly.com/docs/api/workflows/post-workflow) and [Get
   * workflows](https://launchdarkly.com/docs/api/workflows/get-workflows) responses. It is the
   * `_id` field, or the `_id` field of each element in the `items` array. The member ID is returned
   * as part of the [List account
   * members](https://launchdarkly.com/docs/api/account-members/get-members) response. It is the
   * `_id` field of each element in the `items` array.
   */
  get workflows(): Workflows {
    return (this.#workflows ??= new Workflows(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Other requests available in the LaunchDarkly API.
   */
  get other(): Other {
    return (this.#other ??= new Other(this.#rawClient, this.#servers, this.#auth));
  }
}
