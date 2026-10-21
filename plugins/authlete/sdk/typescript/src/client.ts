import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AuditLogs } from "./resources/audit-logs.js";
import { AuthorizationEndpoint } from "./resources/authorization-endpoint.js";
import { BackChannelLogout } from "./resources/back-channel-logout.js";
import { Ciba } from "./resources/ciba.js";
import { ClientManagement } from "./resources/client-management.js";
import { DeviceFlow } from "./resources/device-flow.js";
import { DynamicClientRegistration } from "./resources/dynamic-client-registration.js";
import { FederationEndpoint } from "./resources/federation-endpoint.js";
import { GrantManagementEndpoint } from "./resources/grant-management-endpoint.js";
import { HardwareSecurityKey } from "./resources/hardware-security-key.js";
import { IntrospectionEndpoint } from "./resources/introspection-endpoint.js";
import { JoseObject } from "./resources/jose-object.js";
import { JwkSetEndpoint } from "./resources/jwk-set-endpoint.js";
import { Lifecycle } from "./resources/lifecycle.js";
import { NativeSso } from "./resources/native-sso.js";
import { PushedAuthorizationEndpoint } from "./resources/pushed-authorization-endpoint.js";
import { RevocationEndpoint } from "./resources/revocation-endpoint.js";
import { ServiceManagement } from "./resources/service-management.js";
import { TokenEndpoint } from "./resources/token-endpoint.js";
import { TokenOperations } from "./resources/token-operations.js";
import { UserInfoEndpoint } from "./resources/user-info-endpoint.js";
import { UtilityEndpoints } from "./resources/utility-endpoints.js";
import { VerifiableCredentialIssuer } from "./resources/verifiable-credential-issuer.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Welcome to the **Authlete API documentation**. Authlete is an **API-first service** where every
 * aspect of the platform is configurable via API. This documentation will help you authenticate and
 * integrate with Authlete to build powerful OAuth 2.0 and OpenID Connect servers.
 *
 * At a high level, the Authlete API is grouped into two categories:
 *
 * - **Management APIs**: Enable you to manage services and clients.
 * - **Runtime APIs**: Allow you to build your own Authorization Servers or Verifiable Credential
 *   (VC) issuers.
 *
 * ## 🌐 API Servers
 *
 * Authlete is a global service with clusters available in multiple regions across the world:
 *
 * - 🇺🇸 **US**: `https://us.authlete.com`
 * - 🇯🇵 **Japan**: `https://jp.authlete.com`
 * - 🇪🇺 **Europe**: `https://eu.authlete.com`
 * - 🇧🇷 **Brazil**: `https://br.authlete.com`
 *
 * Our customers can host their data in the region that best meets their requirements.
 *
 * ## 🔑 Authentication
 *
 * All API endpoints are secured using **Bearer token authentication**. You must include an access
 * token in every request:
 *
 * ```
 * Authorization: Bearer YOUR_ACCESS_TOKEN
 * ```
 *
 * ### Getting Your Access Token
 *
 * Authlete supports two types of access tokens:
 *
 * **Service Access Token** - Scoped to a single service (authorization server instance)
 *
 * 1. Log in to [Authlete Console](https://console.authlete.com)
 * 2. Navigate to your service → **Settings** → **Access Tokens**
 * 3. Click **Create Token** and select permissions (e.g., `service.read`, `client.write`)
 * 4. Copy the generated token
 *
 * **Organization Token** - Scoped to your entire organization
 *
 * 1. Log in to [Authlete Console](https://console.authlete.com)
 * 2. Navigate to **Organization Settings** → **Access Tokens**
 * 3. Click **Create Token** and select org-level permissions
 * 4. Copy the generated token
 *
 * > ⚠️ **Important Note**: Tokens inherit the permissions of the account that creates them. Service
 * tokens can only access their specific service, while organization tokens can access all services
 * within your org.
 *
 * ### Token Security Best Practices
 *
 * - **Never commit tokens to version control** - Store in environment variables or secure secret
 *   managers
 * - **Rotate regularly** - Generate new tokens periodically and revoke old ones
 * - **Scope appropriately** - Request only the permissions your application needs
 * - **Revoke unused tokens** - Delete tokens you're no longer using from the console
 *
 * ### Quick Test
 *
 * Verify your token works with a simple API call:
 *
 * ```bash
 * curl -X GET https://us.authlete.com/api/service/get/list \
 *   -H "Authorization: Bearer YOUR_ACCESS_TOKEN"
 * ```
 *
 * ## 🎓 Tutorials
 *
 * If you're new to Authlete or want to see sample implementations, these resources will help you
 * get started:
 *
 * - [Getting Started with Authlete](https://www.authlete.com/developers/getting_started/)
 * - [From Sign-Up to the First API Request](https://www.authlete.com/developers/tutorial/signup/)
 *
 * ## 🛠 Contact Us
 *
 * If you have any questions or need assistance, our team is here to help:
 *
 * - [Contact Page](https://www.authlete.com/contact/)
 */
export class AuthleteApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #serviceManagement?: ServiceManagement;
  #clientManagement?: ClientManagement;
  #authorizationEndpoint?: AuthorizationEndpoint;
  #pushedAuthorizationEndpoint?: PushedAuthorizationEndpoint;
  #tokenEndpoint?: TokenEndpoint;
  #tokenOperations?: TokenOperations;
  #introspectionEndpoint?: IntrospectionEndpoint;
  #revocationEndpoint?: RevocationEndpoint;
  #userInfoEndpoint?: UserInfoEndpoint;
  #jwkSetEndpoint?: JwkSetEndpoint;
  #dynamicClientRegistration?: DynamicClientRegistration;
  #ciba?: Ciba;
  #grantManagementEndpoint?: GrantManagementEndpoint;
  #joseObject?: JoseObject;
  #deviceFlow?: DeviceFlow;
  #federationEndpoint?: FederationEndpoint;
  #verifiableCredentialIssuer?: VerifiableCredentialIssuer;
  #hardwareSecurityKey?: HardwareSecurityKey;
  #utilityEndpoints?: UtilityEndpoints;
  #nativeSso?: NativeSso;
  #auditLogs?: AuditLogs;
  #backChannelLogout?: BackChannelLogout;
  #lifecycle?: Lifecycle;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AUTHLETE_API_CLIENT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AuthleteApiClient/3.0.16 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.16", schema: s.string() },
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
   * API endpoints for managing services, including creation, update, and deletion of services.
   */
  get serviceManagement(): ServiceManagement {
    return (this.#serviceManagement ??= new ServiceManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for managing OAuth clients, including creation, update, and deletion of clients.
   */
  get clientManagement(): ClientManagement {
    return (this.#clientManagement ??= new ClientManagement(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing OAuth 2.0 Authorization Endpoint.
   */
  get authorizationEndpoint(): AuthorizationEndpoint {
    return (this.#authorizationEndpoint ??= new AuthorizationEndpoint(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for implementing OAuth 2.0 Pushed Authorization Requests (PAR).
   */
  get pushedAuthorizationEndpoint(): PushedAuthorizationEndpoint {
    return (this.#pushedAuthorizationEndpoint ??= new PushedAuthorizationEndpoint(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for implementing OAuth 2.0 Token Endpoint.
   */
  get tokenEndpoint(): TokenEndpoint {
    return (this.#tokenEndpoint ??= new TokenEndpoint(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for various token related operations, including creating, revoking and deleting
   * access_tokens with specified scopes.
   */
  get tokenOperations(): TokenOperations {
    return (this.#tokenOperations ??= new TokenOperations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing OAuth 2.0 Introspection Endpoint.
   */
  get introspectionEndpoint(): IntrospectionEndpoint {
    return (this.#introspectionEndpoint ??= new IntrospectionEndpoint(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoint for implementing OAuth 2.0 Revocation Endpoint.
   */
  get revocationEndpoint(): RevocationEndpoint {
    return (this.#revocationEndpoint ??= new RevocationEndpoint(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing OpenID Connect UserInfo Endpoint.
   */
  get userInfoEndpoint(): UserInfoEndpoint {
    return (this.#userInfoEndpoint ??= new UserInfoEndpoint(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for to generate JSON Web Key Set (JWKS) for a service.
   */
  get jwkSetEndpoint(): JwkSetEndpoint {
    return (this.#jwkSetEndpoint ??= new JwkSetEndpoint(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing OAuth 2.0 Dynamic Client Registration.
   */
  get dynamicClientRegistration(): DynamicClientRegistration {
    return (this.#dynamicClientRegistration ??= new DynamicClientRegistration(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for implementing Client-Initiated Backchannel Authentication (CIBA).
   */
  get ciba(): Ciba {
    return (this.#ciba ??= new Ciba(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoint for implementing OAuth 2.0 grants, including grant management actions like
   * updating and revoking grants.
   */
  get grantManagementEndpoint(): GrantManagementEndpoint {
    return (this.#grantManagementEndpoint ??= new GrantManagementEndpoint(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for JOSE objects.
   */
  get joseObject(): JoseObject {
    return (this.#joseObject ??= new JoseObject(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing OAuth 2.0 Device Flow
   */
  get deviceFlow(): DeviceFlow {
    return (this.#deviceFlow ??= new DeviceFlow(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing OpenID Federation using Authlete.
   */
  get federationEndpoint(): FederationEndpoint {
    return (this.#federationEndpoint ??= new FederationEndpoint(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for implementing and running a Verifiable Credential Issuer (VCI).
   */
  get verifiableCredentialIssuer(): VerifiableCredentialIssuer {
    return (this.#verifiableCredentialIssuer ??= new VerifiableCredentialIssuer(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for managing hardware security keys (HSK).
   */
  get hardwareSecurityKey(): HardwareSecurityKey {
    return (this.#hardwareSecurityKey ??= new HardwareSecurityKey(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  /**
   * API endpoints for various utility operations.
   */
  get utilityEndpoints(): UtilityEndpoints {
    return (this.#utilityEndpoints ??= new UtilityEndpoints(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for Native SSO
   */
  get nativeSso(): NativeSso {
    return (this.#nativeSso ??= new NativeSso(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * API endpoints for retrieving audit logs, hosted on the Authlete IdP server.
   */
  get auditLogs(): AuditLogs {
    return (this.#auditLogs ??= new AuditLogs(this.#rawClient, this.#servers, this.#auth));
  }

  get backChannelLogout(): BackChannelLogout {
    return (this.#backChannelLogout ??= new BackChannelLogout(this.#rawClient, this.#servers, this.#auth));
  }

  get lifecycle(): Lifecycle {
    return (this.#lifecycle ??= new Lifecycle(this.#rawClient, this.#servers));
  }
}
