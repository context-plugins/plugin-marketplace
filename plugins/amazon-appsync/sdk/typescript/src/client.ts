import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ApiKeys } from "./resources/api-keys.js";
import { Apicaches } from "./resources/apicaches.js";
import { Apis } from "./resources/apis.js";
import { Channelnamespaces } from "./resources/channelnamespaces.js";
import { DataSources } from "./resources/data-sources.js";
import { DomainNames } from "./resources/domain-names.js";
import { Functions } from "./resources/functions.js";
import { GraphqlApis } from "./resources/graphql-apis.js";
import { Operations } from "./resources/operations.js";
import { Resolvers } from "./resources/resolvers.js";
import { SchemaApi } from "./resources/schema-api.js";
import { Sourceapiassociations } from "./resources/sourceapiassociations.js";
import { Tags } from "./resources/tags.js";
import { Types } from "./resources/types.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for AWS AppSync. 4 operation(s)., Generated from
 * AWS's published Smithy model for AWS AppSync. 10 operation(s)., Generated from AWS's published
 * Smithy model for AWS AppSync. 5 operation(s)., Generated from AWS's published Smithy model for
 * AWS AppSync. 7 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 8
 * operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 5 operation(s).,
 * Generated from AWS's published Smithy model for AWS AppSync. 6 operation(s)., Generated from
 * AWS's published Smithy model for AWS AppSync. 9 operation(s)., Generated from AWS's published
 * Smithy model for AWS AppSync. 6 operation(s)., Generated from AWS's published Smithy model for
 * AWS AppSync. 3 operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 5
 * operation(s)., Generated from AWS's published Smithy model for AWS AppSync. 3 operation(s).,
 * Generated from AWS's published Smithy model for AWS AppSync. 6 operation(s).
 */
export class AmazonAppSyncClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #apiKeys?: ApiKeys;
  #apicaches?: Apicaches;
  #apis?: Apis;
  #channelnamespaces?: Channelnamespaces;
  #dataSources?: DataSources;
  #domainNames?: DomainNames;
  #functions?: Functions;
  #graphqlApis?: GraphqlApis;
  #operations?: Operations;
  #resolvers?: Resolvers;
  #schemaApi?: SchemaApi;
  #sourceapiassociations?: Sourceapiassociations;
  #tags?: Tags;
  #types?: Types;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_APP_SYNC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonAppSyncClient/0.1.0 TypeScript", schema: s.string() },
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

  get apiKeys(): ApiKeys {
    return (this.#apiKeys ??= new ApiKeys(this.#rawClient, this.#servers, this.#auth));
  }

  get apicaches(): Apicaches {
    return (this.#apicaches ??= new Apicaches(this.#rawClient, this.#servers, this.#auth));
  }

  get apis(): Apis {
    return (this.#apis ??= new Apis(this.#rawClient, this.#servers, this.#auth));
  }

  get channelnamespaces(): Channelnamespaces {
    return (this.#channelnamespaces ??= new Channelnamespaces(this.#rawClient, this.#servers, this.#auth));
  }

  get dataSources(): DataSources {
    return (this.#dataSources ??= new DataSources(this.#rawClient, this.#servers, this.#auth));
  }

  get domainNames(): DomainNames {
    return (this.#domainNames ??= new DomainNames(this.#rawClient, this.#servers, this.#auth));
  }

  get functions(): Functions {
    return (this.#functions ??= new Functions(this.#rawClient, this.#servers, this.#auth));
  }

  get graphqlApis(): GraphqlApis {
    return (this.#graphqlApis ??= new GraphqlApis(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get resolvers(): Resolvers {
    return (this.#resolvers ??= new Resolvers(this.#rawClient, this.#servers, this.#auth));
  }

  get schemaApi(): SchemaApi {
    return (this.#schemaApi ??= new SchemaApi(this.#rawClient, this.#servers, this.#auth));
  }

  get sourceapiassociations(): Sourceapiassociations {
    return (this.#sourceapiassociations ??= new Sourceapiassociations(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  get types(): Types {
    return (this.#types ??= new Types(this.#rawClient, this.#servers, this.#auth));
  }
}
