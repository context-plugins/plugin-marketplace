import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Agents } from "./resources/agents.js";
import { AiModelsProviders } from "./resources/ai-models-providers.js";
import { ConnectorConfiguration } from "./resources/connector-configuration.js";
import { ConnectorControl } from "./resources/connector-control.js";
import { ConnectorFilters } from "./resources/connector-filters.js";
import { ConnectorInstances } from "./resources/connector-instances.js";
import { ConnectorOAuth } from "./resources/connector-oauth.js";
import { ConnectorRegistry } from "./resources/connector-registry.js";
import { Connector } from "./resources/connector.js";
import { Conversations } from "./resources/conversations.js";
import { KnowledgeBaseApi } from "./resources/knowledge-base-api.js";
import { KnowledgeHub } from "./resources/knowledge-hub.js";
import { OAuthApps } from "./resources/oauth-apps.js";
import { OAuthConfiguration } from "./resources/oauth-configuration.js";
import { OAuthProvider } from "./resources/oauth-provider.js";
import { OpenIdConnect } from "./resources/open-id-connect.js";
import { OrganizationAuthConfig } from "./resources/organization-auth-config.js";
import { Organizations } from "./resources/organizations.js";
import { PersonalAccessTokens } from "./resources/personal-access-tokens.js";
import { SemanticSearch } from "./resources/semantic-search.js";
import { UserAccount } from "./resources/user-account.js";
import { WebSearchApi } from "./resources/web-search-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Unified API documentation for PipesHub services.
 *
 * PipesHub is an enterprise-grade platform providing:
 * - User authentication and management
 * - Document storage and version control
 * - Knowledge base management
 * - Enterprise search and conversational AI
 * - Third-party integrations via connectors
 * - System configuration management
 * - Crawling job scheduling
 * - Email services
 *
 * ## Authentication
 * Most endpoints require JWT Bearer token authentication. Some internal endpoints use scoped tokens
 * for service-to-service communication.
 *
 * **OAuth 2.0 Bearer tokens** from `POST /oauth2/token` use the same `Authorization: Bearer`
 * header. For **`client_credentials`**, machine tokens may encode `userId === client_id` in the
 * JWT; the **Node API gateway** resolves the OAuth **app creator** and sets the authenticated user
 * accordingly. See the **OAuth Provider** tag for full behavior.
 *
 * ## Base URLs
 * All endpoints use the `/api/v1` prefix unless otherwise noted.
 *
 * ## Query parameter names
 * On every `/api/v1` and `/mcp` endpoint, a query parameter whose name starts with `$` or contains
 * `.` (including a nested name such as `filter[$ne]` or `a.b`) is refused with `400` and error code
 * `VALIDATION_ERROR`. Only names are checked: values may contain dots, such as file names.
 */
export class PipesHubApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #userAccount?: UserAccount;
  #organizationAuthConfig?: OrganizationAuthConfig;
  #oAuthProvider?: OAuthProvider;
  #oAuthApps?: OAuthApps;
  #personalAccessTokens?: PersonalAccessTokens;
  #openIdConnect?: OpenIdConnect;
  #organizations?: Organizations;
  #knowledgeBaseApi?: KnowledgeBaseApi;
  #knowledgeHub?: KnowledgeHub;
  #connector?: Connector;
  #conversations?: Conversations;
  #semanticSearch?: SemanticSearch;
  #agents?: Agents;
  #connectorRegistry?: ConnectorRegistry;
  #connectorInstances?: ConnectorInstances;
  #connectorConfiguration?: ConnectorConfiguration;
  #connectorControl?: ConnectorControl;
  #connectorOAuth?: ConnectorOAuth;
  #connectorFilters?: ConnectorFilters;
  #oAuthConfiguration?: OAuthConfiguration;
  #aiModelsProviders?: AiModelsProviders;
  #webSearchApi?: WebSearchApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "PIPES_HUB_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "PipesHubApiClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options, this.#servers, this.#rawClient);
  }

  /**
   * User authentication including multi-step MFA, password reset, OTP login, and token management
   */
  get userAccount(): UserAccount {
    return (this.#userAccount ??= new UserAccount(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Admin configuration of authentication methods including MFA steps and allowed providers
   */
  get organizationAuthConfig(): OrganizationAuthConfig {
    return (this.#organizationAuthConfig ??= new OrganizationAuthConfig(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * PipesHub OAuth 2.0 Authorization Server implementing RFC 6749, RFC 7636 (PKCE), and OpenID
   * Connect.
   *
   * **Supported Grant Types:**
   * - `authorization_code` - Standard OAuth flow with PKCE support
   * - `client_credentials` - Machine-to-machine authentication
   * - `refresh_token` - Token refresh for long-lived access
   *
   * **Security Features:**
   * - PKCE (Proof Key for Code Exchange) for public clients
   * - State parameter for CSRF protection
   * - Configurable token lifetimes
   * - Token revocation and introspection
   *
   * **OpenID Connect:**
   * - ID tokens with standard claims
   * - UserInfo endpoint for profile data
   * - Discovery endpoint for automatic configuration
   *
   * **Machine tokens (`client_credentials`) — gateway and downstream identity:** Access tokens may
   * encode **`userId === client_id`**. The **Node.js API gateway** resolves the effective user to
   * the OAuth **app creator**: first using the JWT **`createdBy`** claim when present, otherwise by
   * loading the OAuth app by **`client_id`** from the registry. After verification it sets the
   * authenticated session to that creator.
   *
   * **Python services:** Validate `Authorization: Bearer` as today and use the JWT payload’s
   * **`userId`** as-is for scopes and user-scoped logic (which may still equal **`client_id`** for
   * machine tokens).
   *
   * **Operational note:** Prefer tokens whose JWT already carries the creator as **`userId`**; use
   * **`POST /oauth-clients/{appId}/revoke-all-tokens`** and obtain new tokens from **`POST
   * /oauth2/token`** when rotating integrations.
   */
  get oAuthProvider(): OAuthProvider {
    return (this.#oAuthProvider ??= new OAuthProvider(this.#rawClient, this.#servers));
  }

  /**
   * Manage OAuth 2.0 client applications registered with PipesHub.
   *
   * OAuth apps allow third-party applications to access PipesHub APIs on behalf of users or
   * organizations. Each app receives a client ID and secret for authentication.
   *
   * **Who can see which apps**
   * - **Everyone (including org admins)** sees and manages only OAuth apps **they created**
   *   (`createdBy`). Other members' apps are hidden (not listed; individual operations return not
   *   found).
   *
   * **Session only**
   * - Every `/oauth-clients/*` route requires the user's interactive session JWT. OAuth access
   *   tokens and personal access tokens (`phpat_...`) are rejected with `403`, so a token issued to
   *   a client can never register, reconfigure, or revoke clients on its own.
   *
   * **Who authorizes vs. client credentials**
   * - **Authorization code:** Any authenticated user in the workspace may complete consent for a
   *   valid `client_id`; issued tokens represent **that user**.
   * - **Client credentials:** Access tokens represent the **OAuth app creator** (who registered the
   *   client), not the caller.
   *
   * **Scopes**
   * - `GET /oauth-clients/scopes` returns scopes grouped by category for the **signed-in user's
   *   role**.
   * - **Org admins** may register apps that request additional **admin-only** scopes; non-admins
   *   cannot select those scopes when creating or updating an app.
   *
   * **App Types:**
   * - **Confidential clients**: Server-side apps that can securely store secrets
   * - **Public clients**: Browser/mobile apps that cannot securely store secrets (use PKCE)
   *
   * **App Lifecycle:**
   * - Create apps with name, redirect URIs, allowed scopes, and optional URLs (homepage, privacy,
   *   terms)
   * - Regenerate secrets if compromised
   * - Suspend/activate apps to control access
   * - Revoke all tokens for emergency access removal
   */
  get oAuthApps(): OAuthApps {
    return (this.#oAuthApps ??= new OAuthApps(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Self-service, long-lived, scoped, revocable credentials that act as their creator — unlike an
   * OAuth app's `client_credentials` flow, which acts as the app.
   *
   * **Who can create one**
   * - **Any authenticated org member** — unlike OAuth apps, this is deliberately not admin-gated.
   *
   * **Session only**
   * - Every `/personal-access-tokens/*` route requires the user's interactive session JWT. OAuth
   *   access tokens and personal access tokens (`phpat_...`) are rejected with `403`. `scopes` is
   *   capped at the instance's `MCP_SCOPES`, not at the caller's own token, so a narrowly scoped
   *   token could otherwise mint itself a full-scope, non-expiring PAT.
   *
   * **How it's issued**
   * - Minted through the same OAuth access-token machinery as `/oauth2/token`, against one
   *   lazily-created, per-org synthetic OAuth app (`clientId: pat-system:<orgId>`) that every PAT
   *   in that org shares. That app is hidden from `/oauth-clients/*` — it never appears in your own
   *   OAuth app list and can't be managed through those routes.
   * - The raw token is prefixed `phpat_` ahead of the underlying JWT (see the `bearerAuth` security
   *   scheme) so it's recognizable to secret scanners. It's shown exactly once, at creation.
   *
   * **Expiry and scopes**
   * - `expiryDays`: `30` (default), `90`, `365`, or `never`.
   * - Scopes default to the org's full configured `MCP_SCOPES` set if none are requested; `GET
   *   /personal-access-tokens/scopes` lists what's available.
   *
   * **Admin visibility**
   * - Regular members only ever see and revoke their own tokens.
   * - Org admins can list and revoke *any* member's token via `/personal-access-tokens/admin*` —
   *   for incident response (a departed employee, a compromised laptop) — without needing the OAuth
   *   app CRUD access described above.
   */
  get personalAccessTokens(): PersonalAccessTokens {
    return (this.#personalAccessTokens ??= new PersonalAccessTokens(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * OpenID Connect 1.0 endpoints for identity federation and discovery.
   *
   * **Discovery:**
   * - `/.well-known/openid-configuration` - Authorization server metadata
   * - `/.well-known/oauth-authorization-server` - Authorization server metadata (RFC 8414)
   * - `/.well-known/oauth-protected-resource/mcp` - Protected resource metadata (RFC 9728)
   * - `/.well-known/jwks.json` - Public keys for token verification
   *
   * **UserInfo:**
   * - `/oauth2/userinfo` - Get authenticated user's profile information
   *
   * **Supported Claims:**
   * - `user_id` - User identifier
   * - `email`, `email_verified` - Email information
   * - `name`, `given_name`, `family_name` - Name information
   */
  get openIdConnect(): OpenIdConnect {
    return (this.#openIdConnect ??= new OpenIdConnect(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Organization management operations
   */
  get organizations(): Organizations {
    return (this.#organizations ??= new Organizations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Knowledge base management operations
   */
  get knowledgeBaseApi(): KnowledgeBaseApi {
    return (this.#knowledgeBaseApi ??= new KnowledgeBaseApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Unified browse API for root and child nodes (apps, record groups, folders, records) with
   * filtering and search
   */
  get knowledgeHub(): KnowledgeHub {
    return (this.#knowledgeHub ??= new KnowledgeHub(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Connector-related operations
   */
  get connector(): Connector {
    return (this.#connector ??= new Connector(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * AI-powered conversational chat management with citations and follow-up questions
   */
  get conversations(): Conversations {
    return (this.#conversations ??= new Conversations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enterprise semantic search across all indexed knowledge with relevance scoring
   */
  get semanticSearch(): SemanticSearch {
    return (this.#semanticSearch ??= new SemanticSearch(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Custom AI agents with specialized capabilities and tool integrations
   */
  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Browse available connector types and their configuration schemas
   */
  get connectorRegistry(): ConnectorRegistry {
    return (this.#connectorRegistry ??= new ConnectorRegistry(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, manage, and delete connector instances for your organization
   */
  get connectorInstances(): ConnectorInstances {
    return (this.#connectorInstances ??= new ConnectorInstances(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Configure authentication, sync settings, and filters for connectors
   */
  get connectorConfiguration(): ConnectorConfiguration {
    return (this.#connectorConfiguration ??= new ConnectorConfiguration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * Enable/disable connectors for sync or agent functionality
   */
  get connectorControl(): ConnectorControl {
    return (this.#connectorControl ??= new ConnectorControl(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * OAuth 2.0 authorization flow for connectors requiring user consent
   */
  get connectorOAuth(): ConnectorOAuth {
    return (this.#connectorOAuth ??= new ConnectorOAuth(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Dynamic filter options for selecting which data to sync
   */
  get connectorFilters(): ConnectorFilters {
    return (this.#connectorFilters ??= new ConnectorFilters(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Admin management of OAuth credentials for connector types
   */
  get oAuthConfiguration(): OAuthConfiguration {
    return (this.#oAuthConfiguration ??= new OAuthConfiguration(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage individual AI model providers - add, update, delete, and set defaults.
   */
  get aiModelsProviders(): AiModelsProviders {
    return (this.#aiModelsProviders ??= new AiModelsProviders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Manage web search providers (DuckDuckGo, Serper, Tavily, Exa) and settings for internet search.
   */
  get webSearchApi(): WebSearchApi {
    return (this.#webSearchApi ??= new WebSearchApi(this.#rawClient, this.#servers, this.#auth));
  }
}
