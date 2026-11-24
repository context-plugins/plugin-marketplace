import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Actions } from "./resources/actions.js";
import { Agents } from "./resources/agents.js";
import { AiSystems } from "./resources/ai-systems.js";
import { Analytics } from "./resources/analytics.js";
import { Approvals } from "./resources/approvals.js";
import { Audiences } from "./resources/audiences.js";
import { AuditEvents } from "./resources/audit-events.js";
import { Collections } from "./resources/collections.js";
import { Comments } from "./resources/comments.js";
import { DecisionSessions } from "./resources/decision-sessions.js";
import { Drafts } from "./resources/drafts.js";
import { Evidence } from "./resources/evidence.js";
import { Flows } from "./resources/flows.js";
import { Gates } from "./resources/gates.js";
import { GovernanceApi } from "./resources/governance-api.js";
import { Knowledge } from "./resources/knowledge.js";
import { Playbooks } from "./resources/playbooks.js";
import { Policies } from "./resources/policies.js";
import { Reports } from "./resources/reports.js";
import { Reviews } from "./resources/reviews.js";
import { RiskIndicators } from "./resources/risk-indicators.js";
import { Schedules } from "./resources/schedules.js";
import { Screen } from "./resources/screen.js";
import { Tasks } from "./resources/tasks.js";
import { Templates } from "./resources/templates.js";
import { Uploads } from "./resources/uploads.js";
import { WebhookEndpoints } from "./resources/webhook-endpoints.js";
import { Workspaces } from "./resources/workspaces.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Operations tagged Actions across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Agents across 2 of this provider's published
 * API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Ai Systems across 2 of this
 * provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Analytics
 * across 2 of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Approvals across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Audiences across 2 of this provider's
 * published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries
 * the servers of the definition it was published in., Operations tagged Audit Events across 2 of
 * this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml.
 * Each path carries the servers of the definition it was published in., Operations tagged
 * Collections across 2 of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Comments across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Decision Sessions across 2 of this provider's
 * published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries
 * the servers of the definition it was published in., Operations tagged Drafts across 2 of this
 * provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Evidence
 * across 2 of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Flows across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Gates across 2 of this provider's published
 * API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Governance across 2 of this
 * provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Knowledge
 * across 2 of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Playbooks across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Policies across 2 of this provider's published
 * API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Reports across 2 of this
 * provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Reviews across
 * 2 of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Risk Indicators across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Schedules across 2 of this provider's
 * published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries
 * the servers of the definition it was published in., Operations tagged Screen across 2 of this
 * provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each
 * path carries the servers of the definition it was published in., Operations tagged Tasks across 2
 * of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.,
 * Operations tagged Templates across 2 of this provider's published API definitions:
 * deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the servers of the
 * definition it was published in., Operations tagged Uploads across 2 of this provider's published
 * API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml. Each path carries the
 * servers of the definition it was published in., Operations tagged Webhook Endpoints across 2 of
 * this provider's published API definitions: deliverd-dev-openapi.json, deliverd-dev-openapi.yml.
 * Each path carries the servers of the definition it was published in., Operations tagged
 * Workspaces across 2 of this provider's published API definitions: deliverd-dev-openapi.json,
 * deliverd-dev-openapi.yml. Each path carries the servers of the definition it was published in.
 */
export class DeliverdClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #actions?: Actions;
  #agents?: Agents;
  #aiSystems?: AiSystems;
  #analytics?: Analytics;
  #approvals?: Approvals;
  #audiences?: Audiences;
  #auditEvents?: AuditEvents;
  #collections?: Collections;
  #comments?: Comments;
  #decisionSessions?: DecisionSessions;
  #drafts?: Drafts;
  #evidence?: Evidence;
  #flows?: Flows;
  #gates?: Gates;
  #governanceApi?: GovernanceApi;
  #knowledge?: Knowledge;
  #playbooks?: Playbooks;
  #policies?: Policies;
  #reports?: Reports;
  #reviews?: Reviews;
  #riskIndicators?: RiskIndicators;
  #schedules?: Schedules;
  #screen?: Screen;
  #tasks?: Tasks;
  #templates?: Templates;
  #uploads?: Uploads;
  #webhookEndpoints?: WebhookEndpoints;
  #workspaces?: Workspaces;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "DELIVERD_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "DeliverdClient/1.0.0 TypeScript", schema: s.string() },
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

  get actions(): Actions {
    return (this.#actions ??= new Actions(this.#rawClient, this.#servers, this.#auth));
  }

  get agents(): Agents {
    return (this.#agents ??= new Agents(this.#rawClient, this.#servers, this.#auth));
  }

  get aiSystems(): AiSystems {
    return (this.#aiSystems ??= new AiSystems(this.#rawClient, this.#servers, this.#auth));
  }

  get analytics(): Analytics {
    return (this.#analytics ??= new Analytics(this.#rawClient, this.#servers, this.#auth));
  }

  get approvals(): Approvals {
    return (this.#approvals ??= new Approvals(this.#rawClient, this.#servers, this.#auth));
  }

  get audiences(): Audiences {
    return (this.#audiences ??= new Audiences(this.#rawClient, this.#servers, this.#auth));
  }

  get auditEvents(): AuditEvents {
    return (this.#auditEvents ??= new AuditEvents(this.#rawClient, this.#servers, this.#auth));
  }

  get collections(): Collections {
    return (this.#collections ??= new Collections(this.#rawClient, this.#servers, this.#auth));
  }

  get comments(): Comments {
    return (this.#comments ??= new Comments(this.#rawClient, this.#servers, this.#auth));
  }

  get decisionSessions(): DecisionSessions {
    return (this.#decisionSessions ??= new DecisionSessions(this.#rawClient, this.#servers, this.#auth));
  }

  get drafts(): Drafts {
    return (this.#drafts ??= new Drafts(this.#rawClient, this.#servers));
  }

  get evidence(): Evidence {
    return (this.#evidence ??= new Evidence(this.#rawClient, this.#servers));
  }

  get flows(): Flows {
    return (this.#flows ??= new Flows(this.#rawClient, this.#servers, this.#auth));
  }

  get gates(): Gates {
    return (this.#gates ??= new Gates(this.#rawClient, this.#servers, this.#auth));
  }

  get governanceApi(): GovernanceApi {
    return (this.#governanceApi ??= new GovernanceApi(this.#rawClient, this.#servers, this.#auth));
  }

  get knowledge(): Knowledge {
    return (this.#knowledge ??= new Knowledge(this.#rawClient, this.#servers, this.#auth));
  }

  get playbooks(): Playbooks {
    return (this.#playbooks ??= new Playbooks(this.#rawClient, this.#servers, this.#auth));
  }

  get policies(): Policies {
    return (this.#policies ??= new Policies(this.#rawClient, this.#servers, this.#auth));
  }

  get reports(): Reports {
    return (this.#reports ??= new Reports(this.#rawClient, this.#servers, this.#auth));
  }

  get reviews(): Reviews {
    return (this.#reviews ??= new Reviews(this.#rawClient, this.#servers, this.#auth));
  }

  get riskIndicators(): RiskIndicators {
    return (this.#riskIndicators ??= new RiskIndicators(this.#rawClient, this.#servers, this.#auth));
  }

  get schedules(): Schedules {
    return (this.#schedules ??= new Schedules(this.#rawClient, this.#servers, this.#auth));
  }

  get screen(): Screen {
    return (this.#screen ??= new Screen(this.#rawClient, this.#servers, this.#auth));
  }

  get tasks(): Tasks {
    return (this.#tasks ??= new Tasks(this.#rawClient, this.#servers, this.#auth));
  }

  get templates(): Templates {
    return (this.#templates ??= new Templates(this.#rawClient, this.#servers, this.#auth));
  }

  get uploads(): Uploads {
    return (this.#uploads ??= new Uploads(this.#rawClient, this.#servers, this.#auth));
  }

  get webhookEndpoints(): WebhookEndpoints {
    return (this.#webhookEndpoints ??= new WebhookEndpoints(this.#rawClient, this.#servers, this.#auth));
  }

  get workspaces(): Workspaces {
    return (this.#workspaces ??= new Workspaces(this.#rawClient, this.#servers, this.#auth));
  }
}
