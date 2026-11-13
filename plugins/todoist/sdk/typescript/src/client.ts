import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Activity } from "./resources/activity.js";
import { Authorization } from "./resources/authorization.js";
import { Backups } from "./resources/backups.js";
import { Billing } from "./resources/billing.js";
import { Comments } from "./resources/comments.js";
import { Emails } from "./resources/emails.js";
import { Filters } from "./resources/filters.js";
import { Folders } from "./resources/folders.js";
import { Ids } from "./resources/ids.js";
import { Labels } from "./resources/labels.js";
import { LocationReminders } from "./resources/location-reminders.js";
import { Projects } from "./resources/projects.js";
import { Reminders } from "./resources/reminders.js";
import { Sections } from "./resources/sections.js";
import { Tasks } from "./resources/tasks.js";
import { Templates } from "./resources/templates.js";
import { Uploads } from "./resources/uploads.js";
import { User } from "./resources/user.js";
import { Workspace } from "./resources/workspace.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * # Developing with Todoist
 *
 * Thanks for your interest in developing apps with Todoist. In this section we will provide an
 * overview of the API we offer and cover some common topics for application development using them.
 *
 * You can use our API for free, but depending on your Todoist account plan (or that of the
 * authenticated user), some features may be restricted.
 *
 * Please consider subscribing to the [Todoist API mailing
 * list](https://groups.google.com/a/doist.com/g/todoist-api) to get important updates.
 *
 * ## Our API
 *
 * Our API uses an approach that should be familiar to anyone with experience calling
 * [RESTful](https://en.wikipedia.org/wiki/Representational_state_transfer) APIs.
 *
 * We also have a special endpoint called `/sync`, which is used by our first-party clients to keep
 * the data updated locally without having to make many separate requests to the API. Anyone can use
 * it, and some actions will only be available via `/sync`. The format is unconventional compared to
 * current API standards, but it is our main driver for first-party apps.
 *
 * ## Our SDKs
 *
 * Our Python and JavaScript SDKs streamline working with the Todoist API, and can be installed from
 * the main package registries for each ecosystem.
 *
 * For instructions, examples, and reference documentation, visit their pages:
 *
 * - [Todoist Python SDK](https://todoist.github.io/todoist-api-python/)
 * - [Todoist TypeScript SDK](https://todoist.github.io/todoist-sdk-typescript/)
 *
 * ## Resource IDs and optimistic updates
 *
 * Our first-party clients use optimistic updates so newly-created resources (tasks, projects, etc.)
 * are usable in the UI before the server has confirmed them. During that window, the resource is
 * referenced by a **client-side placeholder ID** with a `tmp-` prefix — for example
 * `tmp-UUID-XXXX-UnixMillis`. Once the sync with Todoist completes, the client replaces the
 * placeholder with the real server-assigned ID.
 *
 * **Placeholder IDs are not valid server-side resource identifiers.** If you pass a `tmp-`-prefixed
 * ID to a REST endpoint, the request will fail with a validation error (for example `Non-base32
 * digit found`) because the API only accepts base32-encoded or numeric IDs (depending on the
 * resource).
 *
 * If your integration receives a resource ID from a client context (e.g. a UI extension payload or
 * a browser event fired right after task creation), you should:
 *
 * 1. **Detect placeholder IDs early** — any ID starting with `tmp-` has not yet synced.
 * 2. **Wait for sync to complete before calling the REST API.** First-party clients expose the real
 *    ID once the next `/sync` round-trip returns (see the
 *    [`temp_id_mapping`](#tag/Sync/Overview/Temporary-resource-ID) field in the Sync API response).
 * 3. **Retry your API call with the confirmed ID** once available. If you cannot wait, surface the
 *    delay to the end user rather than calling the REST API with the placeholder.
 *
 * Note that this client-side `tmp-`-prefixed placeholder is distinct from the `temp_id` used in
 * Sync API commands — the latter is a developer-supplied UUID that the server resolves inside a
 * single `/sync` request. See the [Sync API's Temporary resource ID
 * documentation](#tag/Sync/Overview/Temporary-resource-ID) for details on `temp_id` and
 * `temp_id_mapping`.
 *
 * ## Integrations
 *
 * Integrations can be created and updated
 * [here](https://app.todoist.com/app/settings/integrations/app-management).
 *
 * Once done, they can also be submitted for evaluation and inclusion in [our official integrations
 * list](https://www.todoist.com/integrations). This not only serves as an opportunity to market
 * your integration to our audience, but will also serve as a way to help users get set up and
 * familiar with your app quickly.
 *
 * For more information on how to submit your integration for evaluation, refer to our [Marketing
 * your integration
 * page](https://www.todoist.com/help/articles/marketing-your-todoist-integration-B6C5sCKkn).
 *
 * ## Brand usage
 *
 * When creating with the Todoist platform, you may reference Todoist to describe what your app
 * does, but you must keep it clearly distinct from Todoist's official products.
 *
 * - **Naming:** "Todoist" cannot be the primary name of your app. Use a format that signals
 *   independence, such as "x for Todoist" or "x with Todoist".
 * - **Disclaimer:** Your application description must state that it is "not created by, affiliated
 *   with, or supported by Todoist."
 * - **Logo and branding:** Any use of Todoist's marks must comply with our [brand
 *   guidelines](https://www.todoist.com/brand-assets/todoist-logo.zip), which are available for
 *   download.
 * - **Legal compliance:** By using Todoist branding you agree to follow our brand guidelines and
 *   [Terms of Service](https://www.todoist.com/terms-of-service).
 *
 * For detailed questions about using the Todoist marks, contact
 * [press@doist.com](mailto:press@doist.com).
 *
 * Lost? [Reach out to us](https://www.todoist.com/contact/login?returnTo=%2Fcontact) anytime.
 */
export class TodoistApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #authorization?: Authorization;
  #ids?: Ids;
  #workspace?: Workspace;
  #projects?: Projects;
  #comments?: Comments;
  #templates?: Templates;
  #sections?: Sections;
  #tasks?: Tasks;
  #labels?: Labels;
  #folders?: Folders;
  #uploads?: Uploads;
  #filters?: Filters;
  #reminders?: Reminders;
  #locationReminders?: LocationReminders;
  #user?: User;
  #activity?: Activity;
  #backups?: Backups;
  #emails?: Emails;
  #billing?: Billing;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "TODOIST_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "TodoistApiClient/1.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.0", schema: s.string() },
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
   * <blockquote class="lang-specific shell"> <p>An authenticated request with authorization
   * header:</p> </blockquote>
   *
   * ```shell
   * $ curl https://api.todoist.com/api/v1/sync \
   *     -H "Authorization: Bearer 0123456789abcdef0123456789abcdef01234567" \
   *     -d sync_token='*' \
   *     -d resource_types='["all"]'
   * ```
   *
   * In order to make authorized calls to the Sync API, your application must provide an
   * [authorization header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization)
   * with the appropriate `Bearer $token`. For working through the examples, you can obtain your
   * personal API token from the [integrations
   * settings](https://app.todoist.com/app/settings/integrations) for your account.
   *
   * To authenticate other users, your application will need to obtain a token from them using the
   * OAuth protocol. For information on how to obtain a token from our service using OAuth, please
   * see the [authorization guide](#tag/Authorization/OAuth).
   *
   * For the sake of simplicity the token is not listed on every parameter table but please note
   * that the **token parameter is required for every resource**.
   *
   * ## OAuth
   *
   * OAuth is also available for token generation. It's especially useful for external applications
   * to obtain a user authorized API token via the OAuth2 protocol. Before getting started,
   * developers need to create their applications in the [App Management
   * Console](https://app.todoist.com/app/settings/integrations/app-management) and configure one or
   * more valid OAuth2 redirect URLs. A registered Todoist application is assigned a unique `Client
   * ID` and `Client Secret` which are needed for the OAuth2 flow.
   *
   * This procedure is comprised of 3 steps.
   *
   * ### Step 1: Authorization request
   *
   * > An example of the URL to the authorization endpoint:
   *
   * ```shell
   * https://app.todoist.com/oauth/authorize?client_id=0123456789abcdef&scope=data:read,data:delete&state=secretstring&response_type=code
   * ```
   *
   * Redirect users to the authorization URL at the endpoint
   * `https://app.todoist.com/oauth/authorize`, with the specified request parameters.
   *
   * #### Required parameters
   *
   * | Name      | Description                                                                                                                                               |
   * | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | client_id | The unique Client ID of the Todoist application that you registered.                                                                                      |
   * | scope     | A comma separated list of permissions that you would like the users to grant to your application. See the below table for detail on the available scopes. |
   * | state     | A unique and unguessable string. It is used to protect you against cross-site request forgery attacks.                                                    |
   *
   * #### Optional parameters
   *
   * | Name         | Description                                                                                                                                                                                                  |
   * | ------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
   * | redirect_uri | The redirect URL for your application. If your application has multiple redirect URIs configured, this parameter is **required** — the request will be rejected with `invalid_request` if it is omitted. |
   * | response_type | Todoist supports the authorization code flow. This parameter may be omitted or set to `code`. Other values are rejected with `unsupported_response_type`. |
   *
   * #### Permission scopes
   *
   * | Name            | Description                                                                                                                                              |
   * | --------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | task:add        | Grants permission to add new tasks (the application cannot read or modify any existing data).                                                            |
   * | data:read       | Grants read-only access to application data, including tasks, projects, labels, and filters.                                                             |
   * | data:read_write | Grants read and write access to application data, including tasks, projects, labels, and filters. This scope includes `task:add` and `data:read` scopes. |
   * | data:delete     | Grants permission to delete application data, including tasks, labels, and filters.                                                                      |
   * | project:delete  | Grants permission to delete projects.                                                                                                                    |
   * | backups:read   | Grants permission to list backups with `GET /api/v1/backups` without MFA. Downloading a backup with `GET /api/v1/backups/download` still requires `data:read_write`. |
   *
   *
   * #### Potential errors
   *
   * | Error                               | Description                                                                                                                                                                                                                                                      |
   * | ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | User Rejected Authorization Request | When the user denies your authorization request, Todoist will redirect the user to the configured redirect URI with the `error` parameter: `http://example.com?error=access_denied`.                                                                             |
   * | Redirect URI Not Configured         | This JSON error will be returned to the requester (your user's browser) if redirect URI is not configured in the App Management Console.                                                                                                                         |
   * | Invalid Application Status          | When your application exceeds the maximum token limit or when your application is being suspended due to abuse, Todoist will redirect the user to the configured redirect URI with the `error` parameter: `http://example.com?error=invalid_application_status`. |
   * | Invalid Scope                       | When the `scope` parameter is invalid, Todoist will redirect the user to the configured redirect URI with `error` parameter: `http://example.com?error=invalid_scope`.                                                                                           |
   * | Unsupported Response Type           | When the `response_type` parameter is set to a value other than `code`, Todoist will redirect the user to the configured redirect URI with `error` parameter: `http://example.com?error=unsupported_response_type`. |
   *
   * ### Step 2: Redirection to your application site
   *
   * When the user grants your authorization request, the user will be redirected to the redirect
   * URL configured for your application. The redirect request will come with two query parameters
   * attached: `code` and `state`.
   *
   * The `code` parameter contains the authorization code that you will use to exchange for an
   * access token. The `state` parameter should match the `state` parameter that you supplied in the
   * previous step. If the `state` is unmatched, your request has been compromised by other parties,
   * and the process should be aborted.
   *
   * ### Step 3: Token exchange
   *
   * > An example of exchanging the token:
   *
   * ```shell
   * $ curl "https://api.todoist.com/oauth/access_token" \
   *     -d "client_id=0123456789abcdef" \
   *     -d "client_secret=secret" \
   *     -d "code=abcdef" \
   *     -d "redirect_uri=https://example.com"
   * ```
   *
   * > On success, Todoist returns HTTP 200 with the token in JSON object format. For > applications
   * with refresh tokens enabled (the default for newly-created apps), > the response also includes
   * `expires_in` and `refresh_token`:
   *
   * ```json
   * {
   *     "access_token": "0123456789abcdef0123456789abcdef01234567",
   *     "token_type": "Bearer",
   *     "expires_in": 3600,
   *     "refresh_token": "abcdef0123456789abcdef0123456789abcdef01",
   *     "scope": "data:read_write"
   * }
   * ```
   *
   * > Legacy applications without refresh tokens enabled receive a response whose > `expires_in` is
   * a 10-year compatibility value (`315360000`) rather than a > meaningful expiry, and no
   * `refresh_token`. These access tokens are long-lived > and will continue to work:
   *
   * ```json
   * {
   *     "access_token": "0123456789abcdef0123456789abcdef01234567",
   *     "token_type": "Bearer",
   *     "expires_in": 315360000
   * }
   * ```
   *
   * Once you have the authorization `code`, you can exchange it for the access token by sending a
   * `POST` request to the following endpoint:
   *
   * `https://api.todoist.com/oauth/access_token`.
   *
   * #### Required parameters
   *
   * | Name          | Description                                                                          |
   * | ------------- | ------------------------------------------------------------------------------------ |
   * | client_id     | The Client ID of the Todoist application that you registered.                        |
   * | client_secret | The Client Secret of the Todoist application that you registered.                    |
   * | code          | The code that was sent in the query string to the redirect URL in the previous step. |
   *
   * #### Potential errors
   *
   * | Error                              | Description                                                                                                                           |
   * | ---------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
   * | Bad Authorization Code Error       | Occurs when the `code` parameter does not match the code that is given in the redirect request: `{"error": "bad_authorization_code"}` |
   * | Incorrect Client Credentials Error | Occurs when the `client_id` or `client_secret` parameters are incorrect: `{"error": "incorrect_application_credentials"}`             |
   *
   * ## Dynamic Client Registration
   *
   * > Registering a new dynamic client:
   *
   * ```shell
   * $ curl "https://api.todoist.com/oauth/register" \
   *     -H "Content-Type: application/json" \
   *     -d '{
   *         "client_name": "My App",
   *         "redirect_uris": ["https://example.com/callback"],
   *         "scope": "data:read_write",
   *         "grant_types": ["authorization_code", "refresh_token"],
   *         "response_types": ["code"],
   *         "token_endpoint_auth_method": "client_secret_post"
   *     }'
   * ```
   *
   * > On success, Todoist returns HTTP 201 Created with a newly-issued > client in [RFC
   * 7591](https://datatracker.ietf.org/doc/html/rfc7591) > format. The response includes
   * `Cache-Control: no-store` and > `Pragma: no-cache` headers, also per RFC 7591 §3.2.1:
   *
   * ```json
   * {
   *     "client_id": "tdd_0123456789abcdef0123456789abcdef",
   *     "client_secret": "abcdef0123456789abcdef0123456789abcdef01",
   *     "client_name": "My App",
   *     "redirect_uris": ["https://example.com/callback"],
   *     "scope": "data:read_write",
   *     "grant_types": ["authorization_code", "refresh_token"],
   *     "response_types": ["code"],
   *     "token_endpoint_auth_method": "client_secret_post",
   *     "client_id_issued_at": 1776865756,
   *     "client_secret_expires_at": 0
   * }
   * ```
   *
   * Clients that cannot pre-register through the App Management Console — notably multi-tenant
   * integrations, MCP servers, and AI agents acting on behalf of an end user — can register
   * themselves at runtime via [RFC 7591](https://datatracker.ietf.org/doc/html/rfc7591).
   *
   * Send a `POST` to `https://api.todoist.com/oauth/register` with a JSON body describing the
   * client. No authentication is required, but the endpoint is rate limited per caller.
   *
   * ### Request parameters
   *
   * | Name                       | Required | Description                                                                                                                   |
   * | -------------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
   * | redirect_uris              | Yes      | Array of redirect URIs. Up to 10 entries, each ≤512 characters. Must be HTTPS (localhost is allowed for testing).            |
   * | client_name                | No       | Human-readable name shown on the consent screen.                                                                              |
   * | client_uri                 | No       | Public URL for the application.                                                                                               |
   * | logo_uri                   | No       | Public URL for the application logo.                                                                                          |
   * | scope                      | No       | Space-separated scopes the client will request. Restricted scopes are rejected. Defaults to `data:read_write` when omitted. |
   * | grant_types                | No       | Array of supported grant types. Must include `authorization_code`. Include `refresh_token` to use token refresh. Defaults to `["authorization_code"]`. |
   * | response_types             | No       | Array of supported response types. Must include `code`. Defaults to `["code"]`.                                              |
   * | token_endpoint_auth_method | No       | One of `client_secret_post` (default), `client_secret_basic`, or `none` (public client using PKCE).                          |
   *
   * ### Response
   *
   * Dynamic clients are identified by a `tdd_` prefix on `client_id`. The
   * `client_secret_expires_at` field is `0` — client secrets do not expire. Use the returned
   * credentials with the standard [authorization code flow](#step-1-authorization-request) above.
   *
   * ### Potential errors
   *
   * | Error                   | Description                                                                                                                                                             |
   * | ----------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | Invalid Client Metadata | A field failed validation — e.g. a redirect URI is malformed or not HTTPS, or `grant_types` omits `authorization_code`: `{"error": "invalid_client_metadata"}`.         |
   * | Invalid Scope           | A requested scope is unknown or restricted to first-party use: `{"error": "invalid_scope"}`.                                                                           |
   * | Rate Limit Exceeded     | Too many registration requests in a short period; retry later.                                                                                                         |
   *
   * ## OAuth Client ID Metadata Document
   *
   * > Example metadata document hosted by the client at its `client_id` URL:
   *
   * ```json
   * {
   *     "client_id": "https://example.com/oauth-client-metadata.json",
   *     "client_name": "My App",
   *     "redirect_uris": ["https://example.com/callback"],
   *     "grant_types": ["authorization_code", "refresh_token"],
   *     "response_types": ["code"],
   *     "token_endpoint_auth_method": "none"
   * }
   * ```
   *
   * As an alternative to RFC 7591 registration, Todoist supports [OAuth Client ID Metadata
   * Documents](https://datatracker.ietf.org/doc/draft-ietf-oauth-client-id-metadata-document/) — a
   * zero-registration flow in which the `client_id` itself is an HTTPS URL pointing to a JSON
   * metadata document describing the client. The authorization server fetches and validates the
   * document on demand, so clients don't pre-register at all.
   *
   * This is intended for public clients that cannot safely store a `client_secret` (browser-based
   * SPAs, desktop apps, MCP servers). Clients protect themselves with PKCE during the authorization
   * code exchange instead of a client secret.
   *
   * ### Hosting the document
   *
   * Host a JSON document at an HTTPS URL you control. The URL must:
   *
   * - use the `https://` scheme (no plaintext HTTP)
   * - include a path component beyond `/` (e.g. `/oauth/client.json`)
   * - resolve to a publicly routable IP address (private and loopback ranges are rejected for SSRF
   *   protection)
   *
   * Todoist enforces a **5KB maximum size** and a **5-second fetch timeout** on the document.
   * Redirects are not followed.
   *
   * ### Document fields
   *
   * | Field                      | Required | Description                                                                                                          |
   * | -------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------- |
   * | client_id                  | Yes      | Must exactly match the URL the document was fetched from.                                                            |
   * | redirect_uris              | Yes      | Non-empty array of redirect URIs. Must be HTTPS (localhost allowed for testing).                                     |
   * | token_endpoint_auth_method | Yes      | Must be `"none"`. Metadata clients are public clients by design and cannot hold a symmetric secret.                  |
   * | grant_types                | No       | Defaults to `["authorization_code"]`. Include `"refresh_token"` to use refresh.                                     |
   * | response_types             | No       | Defaults to `["code"]`.                                                                                              |
   * | client_name                | No       | Human-readable name shown on the consent screen.                                                                     |
   * | client_uri                 | No       | Public URL for the application.                                                                                      |
   * | logo_uri                   | No       | Public URL for the application logo.                                                                                 |
   * | scope                      | No       | Space-separated scopes the client will request.                                                                      |
   *
   * ### Using the metadata document
   *
   * Pass the document URL as the `client_id` on the [authorization
   * request](#step-1-authorization-request). Todoist fetches and caches the document, validates it,
   * and proceeds with the authorization code flow as usual. Because metadata clients use
   * `token_endpoint_auth_method: none`, the `client_secret` parameter is **not sent** on the
   * `/oauth/access_token` exchange. Clients must additionally send PKCE parameters
   * (`code_challenge` on the authorization request, `code_verifier` on the token exchange).
   *
   * ### Refreshing the document
   *
   * Metadata documents are cached server-side. Changes to the document are picked up on the next
   * cache miss, which happens automatically — there is no explicit refresh endpoint. To force a
   * refresh you can revoke the client via the [App Management
   * Console](https://app.todoist.com/app/settings/integrations/app-management); the next
   * authorization attempt will fetch fresh metadata.
   *
   * ### Potential errors
   *
   * | Error          | Description                                                                                                                                                                   |
   * | -------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | Invalid Client | The document URL failed SSRF validation (HTTP, private IP, missing path), the document is malformed, exceeds the size limit, or `client_id` inside the document does not match the URL: `{"error": "invalid_client"}`. |
   * | Rate Limit Exceeded | Too many metadata document fetches in a short period; retry later.                                                                                                       |
   *
   * ## Refreshing access tokens
   *
   * > Exchanging a refresh token for a new access token:
   *
   * ```shell
   * $ curl "https://api.todoist.com/oauth/access_token" \
   *     -d "client_id=0123456789abcdef" \
   *     -d "client_secret=secret" \
   *     -d "grant_type=refresh_token" \
   *     -d "refresh_token=abcdef0123456789abcdef0123456789abcdef01"
   * ```
   *
   * > On success, Todoist returns HTTP 200 with a new access token and a rotated > refresh token:
   *
   * ```json
   * {
   *     "access_token": "fedcba9876543210fedcba9876543210fedcba98",
   *     "token_type": "Bearer",
   *     "expires_in": 3600,
   *     "refresh_token": "9876543210abcdef9876543210abcdef98765432",
   *     "scope": "data:read_write"
   * }
   * ```
   *
   * ### Which applications issue refresh tokens?
   *
   * Refresh tokens are **enabled by default for newly-created applications**. Access tokens issued
   * to these applications expire one hour after they are issued, and clients must exchange the
   * refresh token for a new access token to continue making requests.
   *
   * Legacy applications created before refresh tokens were introduced continue to receive
   * long-lived access tokens that do not expire. These applications can opt in to refresh tokens
   * via the [App Management
   * Console](https://app.todoist.com/app/settings/integrations/app-management). Once enabled, the
   * setting cannot be disabled — all new tokens issued by the application will follow the refresh
   * flow. Tokens issued before opting in remain long-lived and are not retroactively converted.
   *
   * ### How to refresh
   *
   * To exchange a refresh token for a new access token, send a `POST` request to
   * `https://api.todoist.com/oauth/access_token` with the following parameters:
   *
   * | Name          | Description                                                                                             |
   * | ------------- | ------------------------------------------------------------------------------------------------------- |
   * | client_id     | The Client ID of the Todoist application.                                                               |
   * | grant_type    | Must be the literal string `refresh_token`.                                                             |
   * | refresh_token | The refresh token received in the previous token exchange or refresh.                                   |
   * | client_secret | The Client Secret of the Todoist application. Required for confidential clients — see _Client authentication_ below. |
   *
   * #### Client authentication
   *
   * Todoist's token endpoint supports three authentication methods, matching the
   * `token_endpoint_auth_method` chosen when the application was registered:
   *
   * - `client_secret_post` (default for confidential clients) — `client_id` and `client_secret`
   *   sent in the request body.
   * - `client_secret_basic` — credentials sent via HTTP Basic auth: `Authorization: Basic
   *   base64(client_id:client_secret)`.
   * - `none` — public clients (including clients registered via the OAuth 2.0 Client ID Metadata
   *   Document flow). `client_secret` is not sent or validated; these clients are expected to
   *   protect themselves with PKCE during the authorization code exchange.
   *
   * #### Optional parameters
   *
   * | Name  | Description                                                                                                                                                             |
   * | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | scope | A comma separated subset of the originally granted scopes. Clients may request a narrower set of scopes; requesting scopes beyond the original grant returns an error. |
   *
   * ### Token rotation and security
   *
   * Refresh tokens are **rotated on every successful refresh**. The refresh token returned in the
   * response replaces the one you just used, which is marked as consumed. Always store the latest
   * refresh token from each response.
   *
   * #### Network retries inside the grace window
   *
   * If the same (already-consumed) refresh token is presented again within 60 seconds of being
   * consumed, Todoist treats the second call as a legitimate network retry rather than token reuse.
   * The response returns HTTP `200` with the **same replacement access token** that was issued by
   * the original successful refresh, but **omits the `refresh_token` field** (Todoist cannot
   * reissue it from the consumed hash). Clients must therefore retain the refresh token from the
   * original `200` response; they cannot recover it from a grace-window retry.
   *
   * #### Replay detection outside the grace window
   *
   * If a consumed refresh token is presented outside the 60-second grace window, Todoist treats it
   * as a potential replay attack. All access and refresh tokens issued to the user for the
   * application are revoked, and the user must re-authorize the application.
   *
   * ### Detecting an expired access token
   *
   * When an access token is invalid or has expired, API requests using that token return HTTP `401
   * Unauthorized` with Todoist's standard `UNAUTHORIZED` (`error_code` `477`) JSON body and an [RFC
   * 6750](https://datatracker.ietf.org/doc/html/rfc6750) `WWW-Authenticate` challenge. The response
   * may also include retry backoff metadata:
   *
   * ```http
   * HTTP/1.1 401 Unauthorized
   * Content-Type: application/json
   * Retry-After: 3
   * WWW-Authenticate: Bearer error="invalid_token", error_description="Unauthorized", resource_metadata="https://api.todoist.com/.well-known/oauth-protected-resource"
   *
   * {
   *     "error_tag": "UNAUTHORIZED",
   *     "error_code": 477,
   *     "error": "Unauthorized",
   *     "http_code": 401,
   *     "error_extra": {
   *         "retry_after": 3,
   *         "event_id": "<hash>"
   *     }
   * }
   * ```
   *
   * Clients should treat this response as a signal to refresh the access token and retry the
   * original request with the new token. When present, `retry_after` and the `Retry-After` header
   * are backoff metadata; do not wait and retry the same invalid or expired token. For legacy
   * applications without refresh tokens enabled, the user must re-authorize the application
   * instead. The `resource_metadata` URL points at an [RFC
   * 9728](https://datatracker.ietf.org/doc/html/rfc9728) Protected Resource Metadata document that
   * identifies the authorization server, which is useful for clients discovering the refresh
   * endpoint automatically.
   *
   * ### Potential errors
   *
   * | Error                  | Description                                                                                                                                                                                                            |
   * | ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
   * | Invalid Grant          | The refresh token is unknown, expired, revoked, or has already been consumed outside the grace window: `{"error": "invalid_grant"}`. The user must re-authorize the application. Also returned for legacy applications that have not opted in to refresh tokens, because they have no refresh token to present. |
   * | Invalid Client         | The `client_id` or `client_secret` is missing or incorrect: `{"error": "invalid_client"}`.                                                                                                                            |
   * | Invalid Scope          | A scope requested in the refresh was not part of the original grant: `{"error": "invalid_scope"}`.                                                                                                                    |
   * | Unsupported Grant Type | The `grant_type` parameter is not one of `authorization_code` or `refresh_token`: `{"error": "unsupported_grant_type"}`.                                                                                              |
   *
   * ## Cross Origin Resource Sharing
   *
   * > CORS headers example:
   *
   * ```shell
   * $ curl https://api.todoist.com/api/v1/sync \
   *     -H "Authorization: Bearer 0123456789abcdef0123456789abcdef01234567" \
   *     -H "Origin: http://example.com"
   *
   * HTTP/1.1 200 OK
   * Access-Control-Allow-Origin: http://example.com
   * Access-Control-Allow-Methods: GET,POST,PUT,DELETE,OPTIONS
   * Access-Control-Allow-Headers: Authorization,Content-Type
   * ```
   *
   * All API endpoints not related to the initial OAuth2 flow support Cross Origin Resource Sharing
   * (CORS) for requests from any origin. The `Access-Control-Allow-Origin` header echoes the
   * request's `Origin`, and is set on every response, including error responses.
   * `Access-Control-Allow-Credentials: true` is sent only for Todoist's own browser origins.
   */
  get authorization(): Authorization {
    return (this.#authorization ??= new Authorization(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Endpoints related to ID mappings between v1 and v2
   */
  get ids(): Ids {
    return (this.#ids ??= new Ids(this.#rawClient, this.#servers, this.#auth));
  }

  get workspace(): Workspace {
    return (this.#workspace ??= new Workspace(this.#rawClient, this.#servers, this.#auth));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get comments(): Comments {
    return (this.#comments ??= new Comments(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Templates allow exporting of a project's tasks to a file or URL, and then importing of the task
   * list to a new or existing project.
   *
   * Availability of project templates functionality is dependent on the current user plan. This
   * values is indicated by the `templates` property of the [user plan
   * limits](#tag/Sync/User/User-plan-limits) object.
   *
   * Workspace-owned templates retain task assignments only to current admins, members and guests of
   * that workspace. Saving replacement content or moving a personal template into a workspace
   * clears ineligible task assignees and their assignment actors. Comment authors and reminder
   * recipients are preserved. When a person leaves a workspace, their task assignments in its saved
   * templates are cleared asynchronously. If they rejoin before the cleanup runs, their assignments
   * are kept.
   *
   * ## Preview a template
   *
   * Use `GET /api/v1/templates/{template_id}/preview` for a curated slug or a saved template ID
   * beginning with `UT_`. Curated previews allow anonymous access. Saved templates require
   * `data:read` and retain their personal or workspace visibility rules. `locale` selects curated
   * content. For setup templates, `for_workspace=true` previews workspace projects and folders.
   *
   * Use `GET /api/v1/templates/preview?project_id=...` to preview an existing project. This
   * requires `data:read` and permission to export that project.
   *
   * Previews resolve dates by default. For project templates, `resolve_dates=false` returns raw
   * due, deadline and absolute-reminder strings, such as `{"string":"in 3 days","lang":"en"}`, for
   * use in a template editor. Project previews also include the calendar snapshot, reminders and
   * comment attachments in `notes[].file_attachment` and `project_notes[].file_attachment`. Project
   * IDs in a preview are temporary graph references. Setup templates reject `resolve_dates=false`.
   *
   * ## Use a template
   *
   * `POST /api/v1/templates/{template_id}/use` creates a project or a complete setup and requires
   * `data:read_write`. It accepts `locale` and an optional destination `workspace_id`. A saved
   * workspace template can only be used in its associated workspace. Project templates also accept
   * `folder_id`, which requires `workspace_id`. Setup templates reject `folder_id`.
   *
   * The response contains the created graph using the existing Sync API names: tasks are `items`,
   * task comments are `notes`, and project comments are `project_notes`. `project_ids` contains
   * objects shaped as `{"project_id":"..."}`. The graph includes reminders and user view options.
   * Project use returns empty label and filter lists. This response does not include
   * `discarded_fields` or `project_view_options_defaults`.
   *
   * ## Export a project
   *
   * `GET /api/v1/templates/file?project_id=...` requires `data:read` and returns UTF-8 CSV bytes
   * with a download filename. `GET /api/v1/templates/url?project_id=...` requires `data:read_write`
   * because it publishes a stored, publicly accessible CSV artifact. No expiry is set on the
   * returned URL. Both routes retain project export permissions and plan checks, and accept
   * `use_relative_dates` (default `true`).
   */
  get templates(): Templates {
    return (this.#templates ??= new Templates(this.#rawClient, this.#servers, this.#auth));
  }

  get sections(): Sections {
    return (this.#sections ??= new Sections(this.#rawClient, this.#servers, this.#auth));
  }

  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }

  get labels(): Labels {
    return (this.#labels ??= new Labels(this.#rawClient, this.#servers, this.#auth));
  }

  get folders(): Folders {
    return (this.#folders ??= new Folders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Availability of uploads functionality and the maximum size for a file attachment are dependent
   * on the current user plan. These values are indicated by the `uploads` and `upload_limit_mb`
   * properties of the user plan limits object.
   *
   * Files can be uploaded to our servers and used as [File
   * Attachments](#tag/Sync/Comments/File-Attachments) in [comments](#tag/Comments).
   */
  get uploads(): Uploads {
    return (this.#uploads ??= new Uploads(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Filters are created and updated via the `/sync` endpoint. They can also be deleted with the
   * endpoint below.
   */
  get filters(): Filters {
    return (this.#filters ??= new Filters(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * _Availability of reminders is dependent on the current user plan._
   */
  get reminders(): Reminders {
    return (this.#reminders ??= new Reminders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * _Availability of location reminders is dependent on the current user plan._
   */
  get locationReminders(): LocationReminders {
    return (this.#locationReminders ??= new LocationReminders(this.#rawClient, this.#servers, this.#auth));
  }

  get user(): User {
    return (this.#user ??= new User(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * _Availability of the activity log and the duration of event storage are dependent on the
   * current user plan. These values are indicated by the `activity_log` and `activity_log_limit`
   * properties of the [user plan limits](#tag/Sync/User/User-plan-limits) object._
   *
   * The activity log makes it easy to see everything that is happening across projects, items and
   * notes.
   *
   * The activity log uses the same **cursor-based pagination** as other endpoints in the API. See
   * the [Pagination guide](#tag/Pagination) for general information about how cursor-based
   * pagination works.
   *
   * ### Logged events
   *
   * Currently the official Todoist clients present only the most important events that most users
   * may be interested in. There are further types of events related to projects, items and notes
   * that are stored in our database, and can be accessed through the API.
   *
   * The following events are logged for items:
   *
   * - Items added
   * - Items updated (only changes to `content`, `description`, `due_date` and `responsible_uid`)
   * - Items deleted
   * - Items completed
   * - Items uncompleted
   *
   * The following events are logged for notes:
   *
   * - Notes added
   * - Notes updated (only changes to `content` or `file_name` if the former is empty)
   * - Notes deleted
   *
   * The following events are logged for projects:
   *
   * - Projects added
   * - Projects updated (only changes to `name`)
   * - Projects deleted
   * - Projects archived
   * - Projects unarchived
   * - Projects shared
   * - Projects left
   *
   * ### Pagination details
   *
   * The activity log endpoint uses cursor-based pagination with the `cursor` and `limit` query
   * parameters.
   *
   * #### The `limit` parameter
   *
   * Controls how many activity events to return per page.
   *
   * - **Default**: 50
   * - **Maximum**: 200
   *
   * #### The `cursor` parameter
   *
   * An opaque token used to fetch the next page of results. Use the value from the `next_cursor`
   * field of a previous response. When `next_cursor` is `null`, there are no more results to fetch.
   *
   * #### Example
   *
   * To fetch all activity events, start with a request without a cursor:
   *
   * ```bash
   * curl "https://api.todoist.com/api/v1/activities" \
   *   -H "Authorization: Bearer YOUR_TOKEN"
   * ```
   *
   * The response will include a `results` array and a `next_cursor` value:
   *
   * ```json
   * {
   *   "results": [...],
   *   "next_cursor": "eyJwYWdlIjoyLCJsaW1pdCI6NTB9.aGFzaA"
   * }
   * ```
   *
   * To fetch the next page, pass the `next_cursor` value as the `cursor` parameter:
   *
   * ```bash
   * curl "https://api.todoist.com/api/v1/activities?cursor=eyJwYWdlIjoyLCJsaW1pdCI6NTB9.aGFzaA" \
   *   -H "Authorization: Bearer YOUR_TOKEN"
   * ```
   *
   * Continue fetching pages until `next_cursor` is `null`.
   *
   * **Note:** The `page` and `offset` parameters are not supported on this API version. Please
   * refer to the [migration guide](#tag/Migrating-from-v9) for more information.
   */
  get activity(): Activity {
    return (this.#activity ??= new Activity(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * _Availability of backups functionality is dependent on the current user plan. This value is
   * indicated by the automatic_backups property of the user plan limits object._
   */
  get backups(): Backups {
    return (this.#backups ??= new Backups(this.#rawClient, this.#servers, this.#auth));
  }

  get emails(): Emails {
    return (this.#emails ??= new Emails(this.#rawClient, this.#servers, this.#auth));
  }

  get billing(): Billing {
    return (this.#billing ??= new Billing(this.#rawClient, this.#servers, this.#auth));
  }
}
