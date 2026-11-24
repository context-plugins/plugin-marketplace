import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Charge } from "./resources/charge.js";
import { EventsControllerV2 } from "./resources/events-controller-v2.js";
import { ExpiredInstrument } from "./resources/expired-instrument.js";
import { Fundamentals } from "./resources/fundamentals.js";
import { HistoryV3 } from "./resources/history-v3.js";
import { History } from "./resources/history.js";
import { Instruments } from "./resources/instruments.js";
import { Ipo } from "./resources/ipo.js";
import { Login } from "./resources/login.js";
import { MarketHolidaysAndTimings } from "./resources/market-holidays-and-timings.js";
import { MarketQuoteV3 } from "./resources/market-quote-v3.js";
import { MarketQuote } from "./resources/market-quote.js";
import { MutualFund } from "./resources/mutual-fund.js";
import { News } from "./resources/news.js";
import { Options } from "./resources/options.js";
import { Order } from "./resources/order.js";
import { Payments } from "./resources/payments.js";
import { Portfolio } from "./resources/portfolio.js";
import { PostTrade } from "./resources/post-trade.js";
import { TradeProfitAndLoss } from "./resources/trade-profit-and-loss.js";
import { User } from "./resources/user.js";
import { Websocket } from "./resources/websocket.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Historical Candle Data V3
 */
export class UpstoxClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #charge?: Charge;
  #eventsControllerV2?: EventsControllerV2;
  #expiredInstrument?: ExpiredInstrument;
  #fundamentals?: Fundamentals;
  #history?: History;
  #historyV3?: HistoryV3;
  #instruments?: Instruments;
  #ipo?: Ipo;
  #login?: Login;
  #marketHolidaysAndTimings?: MarketHolidaysAndTimings;
  #marketQuote?: MarketQuote;
  #marketQuoteV3?: MarketQuoteV3;
  #mutualFund?: MutualFund;
  #news?: News;
  #options?: Options;
  #order?: Order;
  #payments?: Payments;
  #portfolio?: Portfolio;
  #postTrade?: PostTrade;
  #tradeProfitAndLoss?: TradeProfitAndLoss;
  #user?: User;
  #websocket?: Websocket;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "UPSTOX_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "UpstoxClient/0.0.0 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.0.0", schema: s.string() },
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

  get charge(): Charge {
    return (this.#charge ??= new Charge(this.#rawClient, this.#servers, this.#auth));
  }

  get eventsControllerV2(): EventsControllerV2 {
    return (this.#eventsControllerV2 ??= new EventsControllerV2(this.#rawClient, this.#servers));
  }

  get expiredInstrument(): ExpiredInstrument {
    return (this.#expiredInstrument ??= new ExpiredInstrument(this.#rawClient, this.#servers, this.#auth));
  }

  get fundamentals(): Fundamentals {
    return (this.#fundamentals ??= new Fundamentals(this.#rawClient, this.#servers, this.#auth));
  }

  get history(): History {
    return (this.#history ??= new History(this.#rawClient, this.#servers));
  }

  /**
   * Historical Candle Data V3
   */
  get historyV3(): HistoryV3 {
    return (this.#historyV3 ??= new HistoryV3(this.#rawClient, this.#servers));
  }

  get instruments(): Instruments {
    return (this.#instruments ??= new Instruments(this.#rawClient, this.#servers, this.#auth));
  }

  get ipo(): Ipo {
    return (this.#ipo ??= new Ipo(this.#rawClient, this.#servers, this.#auth));
  }

  get login(): Login {
    return (this.#login ??= new Login(this.#rawClient, this.#servers, this.#auth));
  }

  get marketHolidaysAndTimings(): MarketHolidaysAndTimings {
    return (this.#marketHolidaysAndTimings ??= new MarketHolidaysAndTimings(
      this.#rawClient,
      this.#servers,
      this.#auth,
    ));
  }

  get marketQuote(): MarketQuote {
    return (this.#marketQuote ??= new MarketQuote(this.#rawClient, this.#servers, this.#auth));
  }

  get marketQuoteV3(): MarketQuoteV3 {
    return (this.#marketQuoteV3 ??= new MarketQuoteV3(this.#rawClient, this.#servers, this.#auth));
  }

  get mutualFund(): MutualFund {
    return (this.#mutualFund ??= new MutualFund(this.#rawClient, this.#servers, this.#auth));
  }

  get news(): News {
    return (this.#news ??= new News(this.#rawClient, this.#servers, this.#auth));
  }

  get options(): Options {
    return (this.#options ??= new Options(this.#rawClient, this.#servers, this.#auth));
  }

  get order(): Order {
    return (this.#order ??= new Order(this.#rawClient, this.#servers, this.#auth));
  }

  get payments(): Payments {
    return (this.#payments ??= new Payments(this.#rawClient, this.#servers, this.#auth));
  }

  get portfolio(): Portfolio {
    return (this.#portfolio ??= new Portfolio(this.#rawClient, this.#servers, this.#auth));
  }

  get postTrade(): PostTrade {
    return (this.#postTrade ??= new PostTrade(this.#rawClient, this.#servers, this.#auth));
  }

  get tradeProfitAndLoss(): TradeProfitAndLoss {
    return (this.#tradeProfitAndLoss ??= new TradeProfitAndLoss(this.#rawClient, this.#servers, this.#auth));
  }

  get user(): User {
    return (this.#user ??= new User(this.#rawClient, this.#servers, this.#auth));
  }

  get websocket(): Websocket {
    return (this.#websocket ??= new Websocket(this.#rawClient, this.#servers, this.#auth));
  }
}
