import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { BalanceSheetStatement } from "./resources/balance-sheet-statement.js";
import { CashFlowStatement } from "./resources/cash-flow-statement.js";
import { HistoricalPriceFull } from "./resources/historical-price-full.js";
import { IncomeStatementApi } from "./resources/income-statement-api.js";
import { InsiderTrading } from "./resources/insider-trading.js";
import { Profile } from "./resources/profile.js";
import { QuoteApi } from "./resources/quote-api.js";
import { Ratios } from "./resources/ratios.js";
import { Search } from "./resources/search.js";
import { Stock } from "./resources/stock.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Financial Modeling Prep (FMP) provides financial market data including real-time and historical
 * stock quotes, company fundamentals, financial statements (income, balance sheet, cash flow),
 * insider transactions, earnings, ratios, and economic data. This OpenAPI spec covers a
 * representative subset of the public REST API.
 */
export class FinancialModelingPrepClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #balanceSheetStatement?: BalanceSheetStatement;
  #cashFlowStatement?: CashFlowStatement;
  #historicalPriceFull?: HistoricalPriceFull;
  #incomeStatementApi?: IncomeStatementApi;
  #insiderTrading?: InsiderTrading;
  #profile?: Profile;
  #quoteApi?: QuoteApi;
  #ratios?: Ratios;
  #search?: Search;
  #stock?: Stock;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "FINANCIAL_MODELING_PREP_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "FinancialModelingPrepClient/3.0.0 TypeScript", schema: s.string() },
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

  get balanceSheetStatement(): BalanceSheetStatement {
    return (this.#balanceSheetStatement ??= new BalanceSheetStatement(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get cashFlowStatement(): CashFlowStatement {
    return (this.#cashFlowStatement ??= new CashFlowStatement(this.#rawClient, this.#servers, this.#auth));
  }

  get historicalPriceFull(): HistoricalPriceFull {
    return (this.#historicalPriceFull ??= new HistoricalPriceFull(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get incomeStatementApi(): IncomeStatementApi {
    return (this.#incomeStatementApi ??= new IncomeStatementApi(this.#rawClient, this.#servers, this.#auth));
  }

  get insiderTrading(): InsiderTrading {
    return (this.#insiderTrading ??= new InsiderTrading(this.#rawClient, this.#servers, this.#auth));
  }

  get profile(): Profile {
    return (this.#profile ??= new Profile(this.#rawClient, this.#servers, this.#auth));
  }

  get quoteApi(): QuoteApi {
    return (this.#quoteApi ??= new QuoteApi(this.#rawClient, this.#servers, this.#auth));
  }

  get ratios(): Ratios {
    return (this.#ratios ??= new Ratios(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get stock(): Stock {
    return (this.#stock ??= new Stock(this.#rawClient, this.#servers, this.#auth));
  }
}
