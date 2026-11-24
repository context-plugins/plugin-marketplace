import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Blocks } from "./resources/blocks.js";
import { MediaApi } from "./resources/media-api.js";
import { ObjectRevisions } from "./resources/object-revisions.js";
import { ObjectTypes } from "./resources/object-types.js";
import { Objects } from "./resources/objects.js";
import { StatusApi } from "./resources/status-api.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * The Cosmic v3 REST API for content operations against a single Bucket.
 *
 * ## When to use this API
 *
 * Reach for this API to model content (Object types and Metafields), create and query content
 * (Objects), read version history (Revisions), and manage media metadata. A Bucket is the unit of
 * isolation: every path below is scoped to one Bucket slug, and the access keys are per-Bucket.
 *
 * ## Authentication
 *
 * Reads use the Bucket read key as a `read_key` query parameter. Writes use the Bucket write key as
 * an `Authorization: Bearer` header. Both keys are found under Bucket > Settings > API Access in
 * the dashboard. There is no account-level credential: a key grants access to exactly one Bucket.
 *
 * ## Scope of this document
 *
 * This document describes only the endpoints served by `https://api.cosmicjs.com/v3`. Other
 * documented parts of the Cosmic surface live on different hosts and are not yet specified here:
 *
 * - Agent signup, agent status, and user endpoints (`/v3/agents/*`, `/v3/users/*`) are served by
 *   `https://dapi.cosmicjs.com`. An agent with no prior Cosmic account should start at `POST
 *   https://dapi.cosmicjs.com/v3/agents/sign-up`.
 * - Media upload (`POST /v3/buckets/{slug}/media`) is served by `https://workers.cosmicjs.com`.
 *   Media read, update, and delete are on this host and are specified below.
 * - AI generation endpoints (`/v3/ai/*`) are served by `https://dapi.cosmicjs.com`.
 *
 * Be aware of one quirk when probing this host: an unrecognized path under `/v3` currently answers
 * `200` with a body of `{"message":"Route not found", ...}` rather than a `404`. Treat that body,
 * not the status line, as the signal that a path does not exist. The response names the host that
 * serves the path you probably wanted.
 */
export class CosmicClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #blocks?: Blocks;
  #mediaApi?: MediaApi;
  #objectRevisions?: ObjectRevisions;
  #objectTypes?: ObjectTypes;
  #objects?: Objects;
  #statusApi?: StatusApi;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "COSMIC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "CosmicClient/3.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "3.0.0", schema: s.string() },
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
   * Content Blocks configured on the Bucket.
   */
  get blocks(): Blocks {
    return (this.#blocks ??= new Blocks(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Media are the images, files, and documents in a Bucket. Upload is served by
   * workers.cosmicjs.com and is not part of this document.
   */
  get mediaApi(): MediaApi {
    return (this.#mediaApi ??= new MediaApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Revisions are the version history of an Object. They can be created and read, but never edited
   * or deleted.
   */
  get objectRevisions(): ObjectRevisions {
    return (this.#objectRevisions ??= new ObjectRevisions(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Object types define the content model: the Metafields, localization settings, and display
   * options shared by every Object in the type.
   */
  get objectTypes(): ObjectTypes {
    return (this.#objectTypes ??= new ObjectTypes(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Objects are the basic building blocks of content. Every Object belongs to an Object type and
   * carries its field values under `metadata`.
   */
  get objects(): Objects {
    return (this.#objects ??= new Objects(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Service health.
   */
  get statusApi(): StatusApi {
    return (this.#statusApi ??= new StatusApi(this.#rawClient, this.#servers));
  }
}
