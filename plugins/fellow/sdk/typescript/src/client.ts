import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ActionItems } from "./resources/action-items.js";
import { Notes } from "./resources/notes.js";
import { Recordings } from "./resources/recordings.js";
import { Users } from "./resources/users.js";
import { Webhooks } from "./resources/webhooks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Create custom integrations and workflows with Fellow's meeting data
 */
export class FellowClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #actionItems?: ActionItems;
  #notes?: Notes;
  #recordings?: Recordings;
  #users?: Users;
  #webhooks?: Webhooks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FELLOW_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FellowClient/1.0.3 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "1.0.3", schema: s.string() },
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
   * Access and manage action items from meetings. Retrieve, list, complete, or archive action items
   * with optional filters and pagination.
   */
  get actionItems(): ActionItems {
    return (this.#actionItems ??= new ActionItems(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Access and manage meeting notes and their agendas. Retrieve individual notes, list notes with
   * filters and pagination, delete notes (privileged access required), or edit agenda content as
   * Fellow Markdown by replacing the whole agenda, appending or prepending to it, or finding and
   * replacing a single occurrence of text.
   */
  get notes(): Notes {
    return (this.#notes ??= new Notes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Access and manage meeting recordings. Retrieve individual recordings, list recordings with
   * filters and pagination, or delete recordings (privileged access required).
   */
  get recordings(): Recordings {
    return (this.#recordings ??= new Recordings(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Retrieve information about the currently authenticated user and their workspace.
   */
  get users(): Users {
    return (this.#users ??= new Users(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Create and manage webhook endpoints to receive real-time notifications when events occur in
   * your Fellow workspace.
   */
  get webhooks(): Webhooks {
    return (this.#webhooks ??= new Webhooks(this.#rawClient, this.#servers, this.#auth));
  }
}
