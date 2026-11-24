import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { InternetGateways } from "./resources/internet-gateways.js";
import { NatGateways } from "./resources/nat-gateways.js";
import { NetworkAcLs } from "./resources/network-ac-ls.js";
import { RouteTables } from "./resources/route-tables.js";
import { Subnets } from "./resources/subnets.js";
import { VpCs } from "./resources/vp-cs.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS
 * Cloud where you can launch AWS resources in a virtual network that you define. VPC operations are
 * part of the Amazon EC2 API and use the EC2 query-based API pattern.
 */
export class AmazonVpcClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #internetGateways?: InternetGateways;
  #natGateways?: NatGateways;
  #networkAcLs?: NetworkAcLs;
  #routeTables?: RouteTables;
  #subnets?: Subnets;
  #vpCs?: VpCs;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "AMAZON_VPC_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "AmazonVpcClient/0.1.0 TypeScript", schema: s.string() },
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
   * Operations for managing internet gateways that connect VPCs to the internet
   */
  get internetGateways(): InternetGateways {
    return (this.#internetGateways ??= new InternetGateways(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations for managing NAT gateways for outbound internet access from private subnets
   */
  get natGateways(): NatGateways {
    return (this.#natGateways ??= new NatGateways(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations for managing network access control lists for subnet-level traffic filtering
   */
  get networkAcLs(): NetworkAcLs {
    return (this.#networkAcLs ??= new NetworkAcLs(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations for managing route tables and routes within a VPC
   */
  get routeTables(): RouteTables {
    return (this.#routeTables ??= new RouteTables(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations for creating and managing subnets within a VPC
   */
  get subnets(): Subnets {
    return (this.#subnets ??= new Subnets(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Operations for creating and managing Virtual Private Clouds
   */
  get vpCs(): VpCs {
    return (this.#vpCs ??= new VpCs(this.#rawClient, this.#servers, this.#auth));
  }
}
