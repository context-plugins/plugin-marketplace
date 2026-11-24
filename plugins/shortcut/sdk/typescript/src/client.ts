import { buildAuthSchemes, type AuthSchemes } from "./auth-schemes.js";
import type { ClientOptions } from "./client-options.js";
import { buildCoreClientOptions } from "./core/client-options.js";
import { RawClient } from "./core/raw-client.js";
import * as host from "./core/runtime-environment.js";
import * as s from "./core/validation/index.js";
import { Categories } from "./resources/categories.js";
import { CustomFields } from "./resources/custom-fields.js";
import { Documents } from "./resources/documents.js";
import { EntityTemplates } from "./resources/entity-templates.js";
import { EpicWorkflowApi } from "./resources/epic-workflow-api.js";
import { Epics } from "./resources/epics.js";
import { ExternalLink } from "./resources/external-link.js";
import { Files } from "./resources/files.js";
import { Groups } from "./resources/groups.js";
import { HealthApi } from "./resources/health-api.js";
import { Integrations } from "./resources/integrations.js";
import { Iterations } from "./resources/iterations.js";
import { KeyResults } from "./resources/key-results.js";
import { Labels } from "./resources/labels.js";
import { LinkedFiles } from "./resources/linked-files.js";
import { MemberApi } from "./resources/member-api.js";
import { Members } from "./resources/members.js";
import { Milestones } from "./resources/milestones.js";
import { Objectives } from "./resources/objectives.js";
import { Projects } from "./resources/projects.js";
import { Repositories } from "./resources/repositories.js";
import { Search } from "./resources/search.js";
import { Stories } from "./resources/stories.js";
import { StoryLinks } from "./resources/story-links.js";
import { Workflows } from "./resources/workflows.js";
import { buildServers, type Servers } from "./servers.js";

/**
 * Shortcut API
 */
export class ShortcutClient {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;
  #categories?: Categories;
  #customFields?: CustomFields;
  #documents?: Documents;
  #entityTemplates?: EntityTemplates;
  #epicWorkflowApi?: EpicWorkflowApi;
  #epics?: Epics;
  #externalLink?: ExternalLink;
  #files?: Files;
  #groups?: Groups;
  #healthApi?: HealthApi;
  #integrations?: Integrations;
  #iterations?: Iterations;
  #keyResults?: KeyResults;
  #labels?: Labels;
  #linkedFiles?: LinkedFiles;
  #memberApi?: MemberApi;
  #members?: Members;
  #milestones?: Milestones;
  #objectives?: Objectives;
  #projects?: Projects;
  #repositories?: Repositories;
  #search?: Search;
  #stories?: Stories;
  #storyLinks?: StoryLinks;
  #workflows?: Workflows;

  constructor(options: ClientOptions = {}) {
    this.#rawClient = new RawClient({
      ...buildCoreClientOptions(options, "SHORTCUT_LOG"),
      defaultHeaders: [
        { name: "User-Agent", value: "ShortcutClient/3.0.0 TypeScript", schema: s.string() },
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

  get categories(): Categories {
    return (this.#categories ??= new Categories(this.#rawClient, this.#servers, this.#auth));
  }

  get customFields(): CustomFields {
    return (this.#customFields ??= new CustomFields(this.#rawClient, this.#servers, this.#auth));
  }

  get documents(): Documents {
    return (this.#documents ??= new Documents(this.#rawClient, this.#servers, this.#auth));
  }

  get entityTemplates(): EntityTemplates {
    return (this.#entityTemplates ??= new EntityTemplates(this.#rawClient, this.#servers, this.#auth));
  }

  get epicWorkflowApi(): EpicWorkflowApi {
    return (this.#epicWorkflowApi ??= new EpicWorkflowApi(this.#rawClient, this.#servers, this.#auth));
  }

  get epics(): Epics {
    return (this.#epics ??= new Epics(this.#rawClient, this.#servers, this.#auth));
  }

  get externalLink(): ExternalLink {
    return (this.#externalLink ??= new ExternalLink(this.#rawClient, this.#servers, this.#auth));
  }

  get files(): Files {
    return (this.#files ??= new Files(this.#rawClient, this.#servers, this.#auth));
  }

  get groups(): Groups {
    return (this.#groups ??= new Groups(this.#rawClient, this.#servers, this.#auth));
  }

  get healthApi(): HealthApi {
    return (this.#healthApi ??= new HealthApi(this.#rawClient, this.#servers, this.#auth));
  }

  get integrations(): Integrations {
    return (this.#integrations ??= new Integrations(this.#rawClient, this.#servers, this.#auth));
  }

  get iterations(): Iterations {
    return (this.#iterations ??= new Iterations(this.#rawClient, this.#servers, this.#auth));
  }

  get keyResults(): KeyResults {
    return (this.#keyResults ??= new KeyResults(this.#rawClient, this.#servers, this.#auth));
  }

  get labels(): Labels {
    return (this.#labels ??= new Labels(this.#rawClient, this.#servers, this.#auth));
  }

  get linkedFiles(): LinkedFiles {
    return (this.#linkedFiles ??= new LinkedFiles(this.#rawClient, this.#servers, this.#auth));
  }

  get memberApi(): MemberApi {
    return (this.#memberApi ??= new MemberApi(this.#rawClient, this.#servers, this.#auth));
  }

  get members(): Members {
    return (this.#members ??= new Members(this.#rawClient, this.#servers, this.#auth));
  }

  get milestones(): Milestones {
    return (this.#milestones ??= new Milestones(this.#rawClient, this.#servers, this.#auth));
  }

  get objectives(): Objectives {
    return (this.#objectives ??= new Objectives(this.#rawClient, this.#servers, this.#auth));
  }

  get projects(): Projects {
    return (this.#projects ??= new Projects(this.#rawClient, this.#servers, this.#auth));
  }

  get repositories(): Repositories {
    return (this.#repositories ??= new Repositories(this.#rawClient, this.#servers, this.#auth));
  }

  get search(): Search {
    return (this.#search ??= new Search(this.#rawClient, this.#servers, this.#auth));
  }

  get stories(): Stories {
    return (this.#stories ??= new Stories(this.#rawClient, this.#servers, this.#auth));
  }

  get storyLinks(): StoryLinks {
    return (this.#storyLinks ??= new StoryLinks(this.#rawClient, this.#servers, this.#auth));
  }

  get workflows(): Workflows {
    return (this.#workflows ??= new Workflows(this.#rawClient, this.#servers, this.#auth));
  }
}
