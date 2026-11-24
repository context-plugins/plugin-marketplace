import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Aliases } from "./resources/aliases.js";
import { Bots } from "./resources/bots.js";
import { Builtins } from "./resources/builtins.js";
import { Channels } from "./resources/channels.js";
import { Createuploadurl } from "./resources/createuploadurl.js";
import { Exports } from "./resources/exports.js";
import { Imports } from "./resources/imports.js";
import { Migrations } from "./resources/migrations.js";
import { Operations } from "./resources/operations.js";
import { Policy } from "./resources/policy.js";
import { Tags } from "./resources/tags.js";
import { Testexecutions } from "./resources/testexecutions.js";
import { Testsetdiscrepancy } from "./resources/testsetdiscrepancy.js";
import { Testsetgenerations } from "./resources/testsetgenerations.js";
import { Testsets } from "./resources/testsets.js";
import { Versions } from "./resources/versions.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 89 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 3 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 1 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 4 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 3 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 6 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 5 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 2 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 2 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 7 operation(s).,
 * Generated from AWS's published Smithy model for Amazon Lex Model Building V2. 15 operation(s).
 */
export class AmazonLexClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #aliases?: Aliases;
  #bots?: Bots;
  #builtins?: Builtins;
  #channels?: Channels;
  #createuploadurl?: Createuploadurl;
  #exports?: Exports;
  #imports?: Imports;
  #migrations?: Migrations;
  #operations?: Operations;
  #policy?: Policy;
  #tags?: Tags;
  #testexecutions?: Testexecutions;
  #testsetdiscrepancy?: Testsetdiscrepancy;
  #testsetgenerations?: Testsetgenerations;
  #testsets?: Testsets;
  #versions?: Versions;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_LEX_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonLexClient/0.1.0 TypeScript", schema: s.string() },
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

  get aliases(): Aliases {
    return (this.#aliases ??= new Aliases(this.#rawClient, this.#servers, this.#auth));
  }

  get bots(): Bots {
    return (this.#bots ??= new Bots(this.#rawClient, this.#servers, this.#auth));
  }

  get builtins(): Builtins {
    return (this.#builtins ??= new Builtins(this.#rawClient, this.#servers, this.#auth));
  }

  get channels(): Channels {
    return (this.#channels ??= new Channels(this.#rawClient, this.#servers, this.#auth));
  }

  get createuploadurl(): Createuploadurl {
    return (this.#createuploadurl ??= new Createuploadurl(this.#rawClient, this.#servers, this.#auth));
  }

  get exports(): Exports {
    return (this.#exports ??= new Exports(this.#rawClient, this.#servers, this.#auth));
  }

  get imports(): Imports {
    return (this.#imports ??= new Imports(this.#rawClient, this.#servers, this.#auth));
  }

  get migrations(): Migrations {
    return (this.#migrations ??= new Migrations(this.#rawClient, this.#servers, this.#auth));
  }

  get operations(): Operations {
    return (this.#operations ??= new Operations(this.#rawClient, this.#servers, this.#auth));
  }

  get policy(): Policy {
    return (this.#policy ??= new Policy(this.#rawClient, this.#servers, this.#auth));
  }

  get tags(): Tags {
    return (this.#tags ??= new Tags(this.#rawClient, this.#servers, this.#auth));
  }

  get testexecutions(): Testexecutions {
    return (this.#testexecutions ??= new Testexecutions(this.#rawClient, this.#servers, this.#auth));
  }

  get testsetdiscrepancy(): Testsetdiscrepancy {
    return (this.#testsetdiscrepancy ??= new Testsetdiscrepancy(this.#rawClient, this.#servers, this.#auth));
  }

  get testsetgenerations(): Testsetgenerations {
    return (this.#testsetgenerations ??= new Testsetgenerations(this.#rawClient, this.#servers, this.#auth));
  }

  get testsets(): Testsets {
    return (this.#testsets ??= new Testsets(this.#rawClient, this.#servers, this.#auth));
  }

  get versions(): Versions {
    return (this.#versions ??= new Versions(this.#rawClient, this.#servers, this.#auth));
  }
}
