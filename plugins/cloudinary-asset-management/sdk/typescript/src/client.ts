import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AssetMetadata } from "./resources/asset-metadata.js";
import { AssetRelations } from "./resources/asset-relations.js";
import { Assets } from "./resources/assets.js";
import { Backups } from "./resources/backups.js";
import { Explode } from "./resources/explode.js";
import { Folders } from "./resources/folders.js";
import { Generation } from "./resources/generation.js";
import { InitialBackup } from "./resources/initial-backup.js";
import { Moderations } from "./resources/moderations.js";
import { People } from "./resources/people.js";
import { Search } from "./resources/search.js";
import { Tags } from "./resources/tags.js";
import { Tasks } from "./resources/tasks.js";
import { Upload } from "./resources/upload.js";
import { Usage } from "./resources/usage.js";
import { VideoAnalytics } from "./resources/video-analytics.js";
import { buildServers, type Servers } from "./servers.js";

export class CloudinaryAssetManagementApiClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #upload?: Upload;
  #assets?: Assets;
  #moderations?: Moderations;
  #tags?: Tags;
  #backups?: Backups;
  #assetRelations?: AssetRelations;
  #assetMetadata?: AssetMetadata;
  #videoAnalytics?: VideoAnalytics;
  #explode?: Explode;
  #initialBackup?: InitialBackup;
  #folders?: Folders;
  #usage?: Usage;
  #search?: Search;
  #people?: People;
  #generation?: Generation;
  #tasks?: Tasks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "CLOUDINARY_ASSET_MANAGEMENT_API_CLIENT_LOG"),
      defaultHeaders: [
        {
          name: "User-Agent",
          value: "CloudinaryAssetManagementApiClient/0.7.7 TypeScript",
          schema: s.string(),
        },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.7.7", schema: s.string() },
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
   * Uploads files to the active product environment.
   */
  get upload(): Upload {
    return (this.#upload ??= new Upload(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to manage all the resources (assets) stored in your product environment.
   */
  get assets(): Assets {
    return (this.#assets ??= new Assets(this.#rawClient, this.#servers, this.#auth));
  }

  get moderations(): Moderations {
    return (this.#moderations ??= new Moderations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to manage the tags used in your product environment.
   */
  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to manage backup versions.
   */
  get backups(): Backups {
    return (this.#backups ??= new Backups(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to manage relationships between assets.
   */
  get assetRelations(): AssetRelations {
    return (this.#assetRelations ??= new AssetRelations(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to manage the tags, contextual metadata, and structured metadata values stored on
   * specific assets.
   */
  get assetMetadata(): AssetMetadata {
    return (this.#assetMetadata ??= new AssetMetadata(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Gets video analytics
   */
  get videoAnalytics(): VideoAnalytics {
    return (this.#videoAnalytics ??= new VideoAnalytics(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Generates derived images from a multi-frame/page file.
   */
  get explode(): Explode {
    return (this.#explode ??= new Explode(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to initiate and track an initial backup of existing assets in your product
   * environment.
   */
  get initialBackup(): InitialBackup {
    return (this.#initialBackup ??= new InitialBackup(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Enables you to manage the asset folders in your product environment.
   */
  get folders(): Folders {
    return (this.#folders ??= new Folders(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Gets usage details
   */
  get usage(): Usage {
    return (this.#usage ??= new Usage(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * APIs for searching resources using text and visual search capabilities
   */
  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * APIs for accessing and managing face recognition results.
   */
  get people(): People {
    return (this.#people ??= new People(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Generate images from text prompts using AI models.
   */
  get generation(): Generation {
    return (this.#generation ??= new Generation(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Query the status of async generation tasks.
   */
  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }
}
