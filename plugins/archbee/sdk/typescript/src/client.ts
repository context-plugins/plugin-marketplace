import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AccessControl } from "./resources/access-control.js";
import { ApiReference } from "./resources/api-reference.js";
import { Documents } from "./resources/documents.js";
import { FileManager } from "./resources/file-manager.js";
import { Organization } from "./resources/organization.js";
import { SpaceGroups } from "./resources/space-groups.js";
import { Suggestions } from "./resources/suggestions.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Archbee Public API manages documentation spaces, documents, space groups, File Manager files,
 * reader suggestions, organization exports and imported OpenAPI references in an Archbee workspace.
 * Authentication uses an HTTP Bearer token whose value is base64(docSpaceId~apiKey), or a team key
 * beginning abteam_.
 */
export class ArchbeeClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #accessControl?: AccessControl;
  #apiReference?: ApiReference;
  #documents?: Documents;
  #fileManager?: FileManager;
  #organization?: Organization;
  #spaceGroups?: SpaceGroups;
  #suggestions?: Suggestions;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "ARCHBEE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ArchbeeClient/0.1.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.0", schema: s.string() },
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
   * Magic-link access requests for gated portals
   */
  get accessControl(): AccessControl {
    return (this.#accessControl ??= new AccessControl(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Sync and inspect an imported OpenAPI reference
   */
  get apiReference(): ApiReference {
    return (this.#apiReference ??= new ApiReference(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create, read, update, delete and search documents
   */
  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Upload, list, move, replace and delete File Manager files
   */
  get fileManager(): FileManager {
    return (this.#fileManager ??= new FileManager(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Organization-level export and display rules
   */
  get organization(): Organization {
    return (this.#organization ??= new Organization(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Grouping of documentation spaces
   */
  get spaceGroups(): SpaceGroups {
    return (this.#spaceGroups ??= new SpaceGroups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Reader-submitted suggested changes — merge or discard
   */
  get suggestions(): Suggestions {
    return (this.#suggestions ??= new Suggestions(this.#rawClient, this.#servers, this.#auth));
  }
}
