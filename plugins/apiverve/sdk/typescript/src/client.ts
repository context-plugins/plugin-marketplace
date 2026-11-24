import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { AiComputerVision } from "./resources/ai-computer-vision.js";
import { Astrology } from "./resources/astrology.js";
import { Calendar } from "./resources/calendar.js";
import { DataConversion } from "./resources/data-conversion.js";
import { DataGeneration } from "./resources/data-generation.js";
import { DataLookup } from "./resources/data-lookup.js";
import { DataProcessing } from "./resources/data-processing.js";
import { DataScraping } from "./resources/data-scraping.js";
import { DataValidation } from "./resources/data-validation.js";
import { Documents } from "./resources/documents.js";
import { DomainData } from "./resources/domain-data.js";
import { Entertainment } from "./resources/entertainment.js";
import { Finance } from "./resources/finance.js";
import { Food } from "./resources/food.js";
import { Games } from "./resources/games.js";
import { Geography } from "./resources/geography.js";
import { HealthWellness } from "./resources/health-wellness.js";
import { Images } from "./resources/images.js";
import { Lifestyle } from "./resources/lifestyle.js";
import { MathCalculations } from "./resources/math-calculations.js";
import { Networking } from "./resources/networking.js";
import { News } from "./resources/news.js";
import { Parsers } from "./resources/parsers.js";
import { ReferenceData } from "./resources/reference-data.js";
import { Science } from "./resources/science.js";
import { Security } from "./resources/security.js";
import { TextProcessing } from "./resources/text-processing.js";
import { Transportation } from "./resources/transportation.js";
import { Weather } from "./resources/weather.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * One API key, 370+ real-world REST endpoints — weather, geocoding, finance, DNS, validation, text
 * processing and more. Every endpoint returns JSON. Full documentation at
 * https://docs.apiverve.com.
 */
export class ApiVerveClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #aiComputerVision?: AiComputerVision;
  #astrology?: Astrology;
  #calendar?: Calendar;
  #dataConversion?: DataConversion;
  #dataGeneration?: DataGeneration;
  #dataLookup?: DataLookup;
  #dataProcessing?: DataProcessing;
  #dataScraping?: DataScraping;
  #dataValidation?: DataValidation;
  #documents?: Documents;
  #domainData?: DomainData;
  #entertainment?: Entertainment;
  #finance?: Finance;
  #food?: Food;
  #games?: Games;
  #geography?: Geography;
  #healthWellness?: HealthWellness;
  #images?: Images;
  #lifestyle?: Lifestyle;
  #mathCalculations?: MathCalculations;
  #networking?: Networking;
  #news?: News;
  #parsers?: Parsers;
  #referenceData?: ReferenceData;
  #science?: Science;
  #security?: Security;
  #textProcessing?: TextProcessing;
  #transportation?: Transportation;
  #weather?: Weather;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "API_VERVE_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ApiVerveClient/1.0.0 TypeScript", schema: s.string() },
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

    this.#auth = buildAuthSchemes(options);
  }

  get aiComputerVision(): AiComputerVision {
    return (this.#aiComputerVision ??= new AiComputerVision(this.#rawClient, this.#servers, this.#auth));
  }

  get astrology(): Astrology {
    return (this.#astrology ??= new Astrology(this.#rawClient, this.#servers, this.#auth));
  }

  get calendar(): Calendar {
    return (this.#calendar ??= new Calendar(this.#rawClient, this.#servers, this.#auth));
  }

  get dataConversion(): DataConversion {
    return (this.#dataConversion ??= new DataConversion(this.#rawClient, this.#servers, this.#auth));
  }

  get dataGeneration(): DataGeneration {
    return (this.#dataGeneration ??= new DataGeneration(this.#rawClient, this.#servers, this.#auth));
  }

  get dataLookup(): DataLookup {
    return (this.#dataLookup ??= new DataLookup(this.#rawClient, this.#servers, this.#auth));
  }

  get dataProcessing(): DataProcessing {
    return (this.#dataProcessing ??= new DataProcessing(this.#rawClient, this.#servers, this.#auth));
  }

  get dataScraping(): DataScraping {
    return (this.#dataScraping ??= new DataScraping(this.#rawClient, this.#servers, this.#auth));
  }

  get dataValidation(): DataValidation {
    return (this.#dataValidation ??= new DataValidation(this.#rawClient, this.#servers, this.#auth));
  }

  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  get domainData(): DomainData {
    return (this.#domainData ??= new DomainData(this.#rawClient, this.#servers, this.#auth));
  }

  get entertainment(): Entertainment {
    return (this.#entertainment ??= new Entertainment(this.#rawClient, this.#servers, this.#auth));
  }

  get finance(): Finance {
    return (this.#finance ??= new Finance(this.#rawClient, this.#servers, this.#auth));
  }

  get food(): Food {
    return (this.#food ??= new Food(this.#rawClient, this.#servers, this.#auth));
  }

  get games(): Games {
    return (this.#games ??= new Games(this.#rawClient, this.#servers, this.#auth));
  }

  get geography(): Geography {
    return (this.#geography ??= new Geography(this.#rawClient, this.#servers, this.#auth));
  }

  get healthWellness(): HealthWellness {
    return (this.#healthWellness ??= new HealthWellness(this.#rawClient, this.#servers, this.#auth));
  }

  get images(): Images {
    return (this.#images ??= new Images(this.#rawClient, this.#servers, this.#auth));
  }

  get lifestyle(): Lifestyle {
    return (this.#lifestyle ??= new Lifestyle(this.#rawClient, this.#servers, this.#auth));
  }

  get mathCalculations(): MathCalculations {
    return (this.#mathCalculations ??= new MathCalculations(this.#rawClient, this.#servers, this.#auth));
  }

  get networking(): Networking {
    return (this.#networking ??= new Networking(this.#rawClient, this.#servers, this.#auth));
  }

  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers, this.#auth));
  }

  get parsers(): Parsers {
    return (this.#parsers ??= new Parsers(this.#rawClient, this.#servers, this.#auth));
  }

  get referenceData(): ReferenceData {
    return (this.#referenceData ??= new ReferenceData(this.#rawClient, this.#servers, this.#auth));
  }

  get science(): Science {
    return (this.#science ??= new Science(this.#rawClient, this.#servers, this.#auth));
  }

  get security(): Security {
    return (this.#security ??= new Security(this.#rawClient, this.#servers, this.#auth));
  }

  get textProcessing(): TextProcessing {
    return (this.#textProcessing ??= new TextProcessing(this.#rawClient, this.#servers, this.#auth));
  }

  get transportation(): Transportation {
    return (this.#transportation ??= new Transportation(this.#rawClient, this.#servers, this.#auth));
  }

  get weather(): Weather {
    return (this.#weather ??= new Weather(this.#rawClient, this.#servers, this.#auth));
  }
}
