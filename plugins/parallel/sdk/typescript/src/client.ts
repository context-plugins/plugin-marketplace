import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { ChatApiBeta } from "./resources/chat-api-beta.js";
import { Extract } from "./resources/extract.js";
import { FindAll } from "./resources/find-all.js";
import { Memory } from "./resources/memory.js";
import { Monitor } from "./resources/monitor.js";
import { ResponsesApi } from "./resources/responses-api.js";
import { Search } from "./resources/search.js";
import { Tasks } from "./resources/tasks.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Chat API (Beta) across 2 of this provider's published API definitions:
 * parallel-openapi-original.json, parallel-chat-api-beta-api-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Extract across 2 of this
 * provider's published API definitions: parallel-openapi-original.json,
 * parallel-extract-api-openapi.yml. Each path carries the servers of the definition it was
 * published in., Operations tagged FindAll across 2 of this provider's published API definitions:
 * parallel-openapi-original.json, parallel-findall-api-openapi.yml. Each path carries the servers
 * of the definition it was published in., Operations tagged Memory across 2 of this provider's
 * published API definitions: parallel-openapi-original.json, parallel-memory-api-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Monitor across
 * 2 of this provider's published API definitions: parallel-openapi-original.json,
 * parallel-monitor-api-openapi.yml. Each path carries the servers of the definition it was
 * published in., Operations tagged Responses API across 2 of this provider's published API
 * definitions: parallel-openapi-original.json, parallel-responses-api-api-openapi.yml. Each path
 * carries the servers of the definition it was published in., Operations tagged Search across 2 of
 * this provider's published API definitions: parallel-openapi-original.json,
 * parallel-search-api-openapi.yml. Each path carries the servers of the definition it was published
 * in., Operations tagged Tasks across 2 of this provider's published API definitions:
 * parallel-openapi-original.json, parallel-tasks-api-openapi.yml. Each path carries the servers of
 * the definition it was published in.
 */
export class ParallelClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #chatApiBeta?: ChatApiBeta;
  #extract?: Extract;
  #findAll?: FindAll;
  #memory?: Memory;
  #monitor?: Monitor;
  #responsesApi?: ResponsesApi;
  #search?: Search;
  #tasks?: Tasks;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "PARALLEL_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ParallelClient/0.1.2 TypeScript", schema: s.string() },
        { name: "X-APIMatic-Lang", value: "TypeScript", schema: s.string() },
        { name: "X-APIMatic-Package-Version", value: "0.1.2", schema: s.string() },
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
   * The Chat API provides a programmatic chat-style text generation interface. It accepts a
   * sequence of messages and returns model responses. Intended for assistant-like interactions and
   * evaluation. Streaming responses are supported.
   */
  get chatApiBeta(): ChatApiBeta {
    return (this.#chatApiBeta ??= new ChatApiBeta(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Extract returns excerpts or full content from one or more URLs. Inputs are a list of URLs and
   * an optional search objective and keyword queries. The returned excerpts or full content is
   * formatted as markdown and suitable for LLM consumption.
   * - Result: excerpts or full content from the URL formatted as markdown
   */
  get extract(): Extract {
    return (this.#extract ??= new Extract(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The FindAll API discovers and evaluates entities that match complex criteria from natural
   * language objectives. Submit a high-level goal and the service automatically generates
   * structured match conditions, discovers relevant candidates, and evaluates each against the
   * criteria. Returns comprehensive results with detailed reasoning, citations, and confidence
   * scores for each match decision. Streaming events and webhooks are supported.
   */
  get findAll(): FindAll {
    return (this.#findAll ??= new FindAll(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The Memory API retrieves and manages memories created by Tasks, Monitors, and FindAll runs.
   * Memories can be personal or isolated with a `memory_scope_key`.
   */
  get memory(): Memory {
    return (this.#memory ??= new Memory(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The Monitor API watches the web for material changes on a fixed frequency. Each monitor runs
   * once on creation and then on its configured schedule, emitting events when meaningful changes
   * are detected.
   * - `event_stream` monitors track a search query and emit an event for each new material change.
   * - `snapshot` monitors track a specific task run's output and emit an event when the output
   *   changes.
   *
   * Results can be polled via the events endpoint or delivered via webhooks.
   */
  get monitor(): Monitor {
    return (this.#monitor ??= new Monitor(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * An OpenAI-Responses-compatible interface for answers grounded in live web research, with URL
   * citations.
   */
  get responsesApi(): ResponsesApi {
    return (this.#responsesApi ??= new ResponsesApi(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * Search returns ranked URLs with extended excerpts suitable for LLM consumption. Inputs are a
   * natural-language objective and optional keyword queries. Source policies allow including or
   * excluding specific domains and have configurable output sizes. The returned extended snippets
   * contain dense, relevant information from relevant pages.
   * - Result: ranked list with URL, title, and long text excerpts
   */
  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  /**
   * The Task API executes web research and extraction tasks.
   */
  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }
}
