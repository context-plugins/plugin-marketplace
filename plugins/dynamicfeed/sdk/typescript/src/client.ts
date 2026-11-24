import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Advisories } from "./resources/advisories.js";
import { AgentStats } from "./resources/agent-stats.js";
import { Agent } from "./resources/agent.js";
import { AiModels } from "./resources/ai-models.js";
import { AirQuality } from "./resources/air-quality.js";
import { AirportDelays } from "./resources/airport-delays.js";
import { Benchmarks } from "./resources/benchmarks.js";
import { Billing } from "./resources/billing.js";
import { CarbonIntensity } from "./resources/carbon-intensity.js";
import { China } from "./resources/china.js";
import { Cite } from "./resources/cite.js";
import { Consensus } from "./resources/consensus.js";
import { Convert } from "./resources/convert.js";
import { Countdown } from "./resources/countdown.js";
import { Dataset } from "./resources/dataset.js";
import { Dev } from "./resources/dev.js";
import { Drought } from "./resources/drought.js";
import { DrugShortages } from "./resources/drug-shortages.js";
import { DynamicFeedLiveDataForAi } from "./resources/dynamic-feed-live-data-for-ai.js";
import { Earthquakes } from "./resources/earthquakes.js";
import { Energy } from "./resources/energy.js";
import { ExploitedVulnerabilities } from "./resources/exploited-vulnerabilities.js";
import { FederalRegister } from "./resources/federal-register.js";
import { Flights } from "./resources/flights.js";
import { Forecast } from "./resources/forecast.js";
import { GlobalDisasters } from "./resources/global-disasters.js";
import { GpsInterference } from "./resources/gps-interference.js";
import { Health } from "./resources/health.js";
import { History } from "./resources/history.js";
import { Info } from "./resources/info.js";
import { InternetOutages } from "./resources/internet-outages.js";
import { Iss } from "./resources/iss.js";
import { Launches } from "./resources/launches.js";
import { Macro } from "./resources/macro.js";
import { MarketHours } from "./resources/market-hours.js";
import { Models } from "./resources/models.js";
import { Movers } from "./resources/movers.js";
import { NaturalEvents } from "./resources/natural-events.js";
import { News } from "./resources/news.js";
import { OrbitalDatacenters } from "./resources/orbital-datacenters.js";
import { Rates } from "./resources/rates.js";
import { RealityCheck } from "./resources/reality-check.js";
import { Recalls } from "./resources/recalls.js";
import { Robot } from "./resources/robot.js";
import { Sanctions } from "./resources/sanctions.js";
import { Satellite } from "./resources/satellite.js";
import { Satellites } from "./resources/satellites.js";
import { SecFilings } from "./resources/sec-filings.js";
import { Security } from "./resources/security.js";
import { ServersApi } from "./resources/servers-api.js";
import { Shipping } from "./resources/shipping.js";
import { Signals } from "./resources/signals.js";
import { Signup } from "./resources/signup.js";
import { SpaceWeather } from "./resources/space-weather.js";
import { Sports } from "./resources/sports.js";
import { Status } from "./resources/status.js";
import { Tides } from "./resources/tides.js";
import { Time } from "./resources/time.js";
import { TreasuryYields } from "./resources/treasury-yields.js";
import { VerifiedFacts } from "./resources/verified-facts.js";
import { Versions } from "./resources/versions.js";
import { Volcanoes } from "./resources/volcanoes.js";
import { WaterLevels } from "./resources/water-levels.js";
import { WeatherAlerts } from "./resources/weather-alerts.js";
import { Weather } from "./resources/weather.js";
import { WhatsNew } from "./resources/whats-new.js";
import { Wildfires } from "./resources/wildfires.js";
import { WorldPulse } from "./resources/world-pulse.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Fresh, current data that AI models lack — 20 live domains, 94 read-only tools, over one REST API
 * or a keyless MCP endpoint.
 */
export class DynamicFeedClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  #advisories?: Advisories;
  #agent?: Agent;
  #agentStats?: AgentStats;
  #aiModels?: AiModels;
  #airQuality?: AirQuality;
  #airportDelays?: AirportDelays;
  #benchmarks?: Benchmarks;
  #billing?: Billing;
  #carbonIntensity?: CarbonIntensity;
  #china?: China;
  #cite?: Cite;
  #consensus?: Consensus;
  #convert?: Convert;
  #countdown?: Countdown;
  #dataset?: Dataset;
  #dev?: Dev;
  #drought?: Drought;
  #drugShortages?: DrugShortages;
  #dynamicFeedLiveDataForAi?: DynamicFeedLiveDataForAi;
  #earthquakes?: Earthquakes;
  #energy?: Energy;
  #exploitedVulnerabilities?: ExploitedVulnerabilities;
  #federalRegister?: FederalRegister;
  #flights?: Flights;
  #forecast?: Forecast;
  #globalDisasters?: GlobalDisasters;
  #gpsInterference?: GpsInterference;
  #health?: Health;
  #history?: History;
  #info?: Info;
  #internetOutages?: InternetOutages;
  #iss?: Iss;
  #launches?: Launches;
  #macro?: Macro;
  #marketHours?: MarketHours;
  #models?: Models;
  #movers?: Movers;
  #naturalEvents?: NaturalEvents;
  #news?: News;
  #orbitalDatacenters?: OrbitalDatacenters;
  #rates?: Rates;
  #realityCheck?: RealityCheck;
  #recalls?: Recalls;
  #robot?: Robot;
  #sanctions?: Sanctions;
  #satellite?: Satellite;
  #satellites?: Satellites;
  #secFilings?: SecFilings;
  #security?: Security;
  #serversApi?: ServersApi;
  #shipping?: Shipping;
  #signals?: Signals;
  #signup?: Signup;
  #spaceWeather?: SpaceWeather;
  #sports?: Sports;
  #status?: Status;
  #tides?: Tides;
  #time?: Time;
  #treasuryYields?: TreasuryYields;
  #verifiedFacts?: VerifiedFacts;
  #versions?: Versions;
  #volcanoes?: Volcanoes;
  #waterLevels?: WaterLevels;
  #weatherAlerts?: WeatherAlerts;
  #weather?: Weather;
  #whatsNew?: WhatsNew;
  #wildfires?: Wildfires;
  #worldPulse?: WorldPulse;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DYNAMIC_FEED_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DynamicFeedClient/1.0.0 TypeScript", schema: s.string() },
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
  }

  get advisories(): Advisories {
    return (this.#advisories ??= new Advisories(this.#rawClient, this.#servers));
  }

  get agent(): Agent {
    return (this.#agent ??= new Agent(this.#rawClient, this.#servers));
  }

  get agentStats(): AgentStats {
    return (this.#agentStats ??= new AgentStats(this.#rawClient, this.#servers));
  }

  get aiModels(): AiModels {
    return (this.#aiModels ??= new AiModels(this.#rawClient, this.#servers));
  }

  get airQuality(): AirQuality {
    return (this.#airQuality ??= new AirQuality(this.#rawClient, this.#servers));
  }

  get airportDelays(): AirportDelays {
    return (this.#airportDelays ??= new AirportDelays(this.#rawClient, this.#servers));
  }

  get benchmarks(): Benchmarks {
    return (this.#benchmarks ??= new Benchmarks(this.#rawClient, this.#servers));
  }

  get billing(): Billing {
    return (this.#billing ??= new Billing(this.#rawClient, this.#servers));
  }

  get carbonIntensity(): CarbonIntensity {
    return (this.#carbonIntensity ??= new CarbonIntensity(this.#rawClient, this.#servers));
  }

  get china(): China {
    return (this.#china ??= new China(this.#rawClient, this.#servers));
  }

  get cite(): Cite {
    return (this.#cite ??= new Cite(this.#rawClient, this.#servers));
  }

  get consensus(): Consensus {
    return (this.#consensus ??= new Consensus(this.#rawClient, this.#servers));
  }

  get convert(): Convert {
    return (this.#convert ??= new Convert(this.#rawClient, this.#servers));
  }

  get countdown(): Countdown {
    return (this.#countdown ??= new Countdown(this.#rawClient, this.#servers));
  }

  get dataset(): Dataset {
    return (this.#dataset ??= new Dataset(this.#rawClient, this.#servers));
  }

  get dev(): Dev {
    return (this.#dev ??= new Dev(this.#rawClient, this.#servers));
  }

  get drought(): Drought {
    return (this.#drought ??= new Drought(this.#rawClient, this.#servers));
  }

  get drugShortages(): DrugShortages {
    return (this.#drugShortages ??= new DrugShortages(this.#rawClient, this.#servers));
  }

  get dynamicFeedLiveDataForAi(): DynamicFeedLiveDataForAi {
    return (this.#dynamicFeedLiveDataForAi ??= new DynamicFeedLiveDataForAi(this.#rawClient, this.#servers));
  }

  get earthquakes(): Earthquakes {
    return (this.#earthquakes ??= new Earthquakes(this.#rawClient, this.#servers));
  }

  get energy(): Energy {
    return (this.#energy ??= new Energy(this.#rawClient, this.#servers));
  }

  get exploitedVulnerabilities(): ExploitedVulnerabilities {
    return (this.#exploitedVulnerabilities ??= new ExploitedVulnerabilities(this.#rawClient, this.#servers));
  }

  get federalRegister(): FederalRegister {
    return (this.#federalRegister ??= new FederalRegister(this.#rawClient, this.#servers));
  }

  get flights(): Flights {
    return (this.#flights ??= new Flights(this.#rawClient, this.#servers));
  }

  get forecast(): Forecast {
    return (this.#forecast ??= new Forecast(this.#rawClient, this.#servers));
  }

  get globalDisasters(): GlobalDisasters {
    return (this.#globalDisasters ??= new GlobalDisasters(this.#rawClient, this.#servers));
  }

  get gpsInterference(): GpsInterference {
    return (this.#gpsInterference ??= new GpsInterference(this.#rawClient, this.#servers));
  }

  get health(): Health {
    return (this.#health ??= new Health(this.#rawClient, this.#servers));
  }

  get history(): History {
    return (this.#history ??= new History(this.#rawClient, this.#servers));
  }

  get info(): Info {
    return (this.#info ??= new Info(this.#rawClient, this.#servers));
  }

  get internetOutages(): InternetOutages {
    return (this.#internetOutages ??= new InternetOutages(this.#rawClient, this.#servers));
  }

  get iss(): Iss {
    return (this.#iss ??= new Iss(this.#rawClient, this.#servers));
  }

  get launches(): Launches {
    return (this.#launches ??= new Launches(this.#rawClient, this.#servers));
  }

  get macro(): Macro {
    return (this.#macro ??= new Macro(this.#rawClient, this.#servers));
  }

  get marketHours(): MarketHours {
    return (this.#marketHours ??= new MarketHours(this.#rawClient, this.#servers));
  }

  get models(): Models {
    return (this.#models ??= new Models(this.#rawClient, this.#servers));
  }

  get movers(): Movers {
    return (this.#movers ??= new Movers(this.#rawClient, this.#servers));
  }

  get naturalEvents(): NaturalEvents {
    return (this.#naturalEvents ??= new NaturalEvents(this.#rawClient, this.#servers));
  }

  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers));
  }

  get orbitalDatacenters(): OrbitalDatacenters {
    return (this.#orbitalDatacenters ??= new OrbitalDatacenters(this.#rawClient, this.#servers));
  }

  get rates(): Rates {
    return (this.#rates ??= new Rates(this.#rawClient, this.#servers));
  }

  get realityCheck(): RealityCheck {
    return (this.#realityCheck ??= new RealityCheck(this.#rawClient, this.#servers));
  }

  get recalls(): Recalls {
    return (this.#recalls ??= new Recalls(this.#rawClient, this.#servers));
  }

  get robot(): Robot {
    return (this.#robot ??= new Robot(this.#rawClient, this.#servers));
  }

  get sanctions(): Sanctions {
    return (this.#sanctions ??= new Sanctions(this.#rawClient, this.#servers));
  }

  get satellite(): Satellite {
    return (this.#satellite ??= new Satellite(this.#rawClient, this.#servers));
  }

  get satellites(): Satellites {
    return (this.#satellites ??= new Satellites(this.#rawClient, this.#servers));
  }

  get secFilings(): SecFilings {
    return (this.#secFilings ??= new SecFilings(this.#rawClient, this.#servers));
  }

  get security(): Security {
    return (this.#security ??= new Security(this.#rawClient, this.#servers));
  }

  get serversApi(): ServersApi {
    return (this.#serversApi ??= new ServersApi(this.#rawClient, this.#servers));
  }

  get shipping(): Shipping {
    return (this.#shipping ??= new Shipping(this.#rawClient, this.#servers));
  }

  get signals(): Signals {
    return (this.#signals ??= new Signals(this.#rawClient, this.#servers));
  }

  get signup(): Signup {
    return (this.#signup ??= new Signup(this.#rawClient, this.#servers));
  }

  get spaceWeather(): SpaceWeather {
    return (this.#spaceWeather ??= new SpaceWeather(this.#rawClient, this.#servers));
  }

  get sports(): Sports {
    return (this.#sports ??= new Sports(this.#rawClient, this.#servers));
  }

  get status(): Status {
    return (this.#status ??= new Status(this.#rawClient, this.#servers));
  }

  get tides(): Tides {
    return (this.#tides ??= new Tides(this.#rawClient, this.#servers));
  }

  get time(): Time {
    return (this.#time ??= new Time(this.#rawClient, this.#servers));
  }

  get treasuryYields(): TreasuryYields {
    return (this.#treasuryYields ??= new TreasuryYields(this.#rawClient, this.#servers));
  }

  get verifiedFacts(): VerifiedFacts {
    return (this.#verifiedFacts ??= new VerifiedFacts(this.#rawClient, this.#servers));
  }

  get versions(): Versions {
    return (this.#versions ??= new Versions(this.#rawClient, this.#servers));
  }

  get volcanoes(): Volcanoes {
    return (this.#volcanoes ??= new Volcanoes(this.#rawClient, this.#servers));
  }

  get waterLevels(): WaterLevels {
    return (this.#waterLevels ??= new WaterLevels(this.#rawClient, this.#servers));
  }

  get weatherAlerts(): WeatherAlerts {
    return (this.#weatherAlerts ??= new WeatherAlerts(this.#rawClient, this.#servers));
  }

  get weather(): Weather {
    return (this.#weather ??= new Weather(this.#rawClient, this.#servers));
  }

  get whatsNew(): WhatsNew {
    return (this.#whatsNew ??= new WhatsNew(this.#rawClient, this.#servers));
  }

  get wildfires(): Wildfires {
    return (this.#wildfires ??= new Wildfires(this.#rawClient, this.#servers));
  }

  get worldPulse(): WorldPulse {
    return (this.#worldPulse ??= new WorldPulse(this.#rawClient, this.#servers));
  }
}
