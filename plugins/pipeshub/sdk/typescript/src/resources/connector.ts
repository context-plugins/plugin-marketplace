import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { connectorNameEnumSchema, type ConnectorNameEnum } from "../models/connector-name-enum.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import {
  getRecordContentResponseSchemaSchema,
  type GetRecordContentResponseSchema,
} from "../models/get-record-content-response-schema.js";
import {
  lookupRecordResponseSchemaSchema,
  type LookupRecordResponseSchema,
} from "../models/lookup-record-response-schema.js";
import { mode1Schema, type Mode1 } from "../models/mode1.js";
import {
  navigateKnowledgeGraphResponseSchemaSchema,
  type NavigateKnowledgeGraphResponseSchema,
} from "../models/navigate-knowledge-graph-response-schema.js";
import type { Servers } from "../servers.js";

/**
 * Connector-related operations
 */
export class Connector {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get a record's full parsed content and metadata
   *
   * @remarks
   * Retrieve the full parsed content and metadata of a single record — the same content PipesHub's
   * own RAG/chat pipeline uses to answer questions, returned directly instead of via chat.
   *
   * **When to use this vs. the other record endpoints:**
   * - `GET /knowledgeBase/record/{recordId}` returns metadata only (name, type, indexing status,
   *   size) — no content.
   * - `GET /knowledgeBase/stream/record/{recordId}` returns the original, unparsed file bytes — use
   *   it to download/open the source file.
   * - **This endpoint** returns the record's full parsed content as a single plain-text `content`
   *   string (a metadata header, then the block/table text in reading order, then any foreign-key
   *   related tables) — use it when you need the record's actual textual/tabular content without
   *   downloading and re-parsing the original file yourself.
   *
   * **Typical flow:** obtain a `recordId` from a `pipeshub_search` hit or a chat citation's
   * `recordId`, then call this endpoint to read the full content when the search snippet or
   * citation excerpt isn't enough to answer the question.
   *
   * **Reading part of a long record, or a whole Slack thread:**
   *
   * With no query parameters the whole record is returned, which for a pull request with its diffs
   * or a long document can run to hundreds of thousands of characters. Pass any of `maxChars`,
   * `startBlock`, `query` or `mode` for a budgeted read instead: the response stays within
   * `maxChars` and says how to continue (`nextStartBlock`, or `nextStartRecord` for a thread).
   * `query` makes a record too large for the budget show its most relevant blocks first, with the
   * skipped ranges marked. `mode=thread` returns every message of the Slack thread the record
   * belongs to, oldest first, as far as the caller may see them. A Slack record in no single thread
   * (several channel messages in one record, or a message without replies) returns itself, then the
   * replies of each thread its messages started; the first page opens with a bracketed note saying
   * which.
   *
   * **Permission scoping:**
   *
   * The requesting user/token must have access to the record; access is verified via the knowledge
   * graph before content is returned — a caller with a valid scope but no access to this specific
   * record gets a `403`.
   *
   * @returns Successful operation. When the record exists but its content is not indexed yet,
   * `content` describes the record (name, link, dates) and ends with a `Not indexed:` paragraph
   * naming its indexing status. When the record is indexed but its stored content could not be
   * loaded, `content` is the literal `No record found`. Neither is an error status. An id that does
   * not exist, or a record the caller may not read, answers `403`.
   *
   * @throws {@link Connector.GetRecordContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getRecordContent(
    request: Connector.GetRecordContentRequest,
    options?: RequestOptions,
  ): ApiPromise<GetRecordContentResponseSchema, Connector.GetRecordContentError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/record/{recordId}/content"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [{ name: "recordId", value: request.recordId, schema: s.string() }],
        query: [
          { name: "maxChars", value: request.maxChars, schema: s.optional(s.int()) },
          { name: "startBlock", value: request.startBlock, schema: s.optional(s.int()) },
          { name: "query", value: request.query, schema: s.optional(s.string()) },
          { name: "mode", value: request.mode, schema: s.optional(s.lazy(() => mode1Schema)) },
          { name: "startRecord", value: request.startRecord, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: getRecordContentResponseSchemaSchema },
        errorFactory: Connector.GetRecordContentError,
      },
      options,
    );
  }

  /**
   * Resolve a URL, issue key or external ID to a Record ID
   *
   * @remarks
   * Turn an external reference into the matching PipesHub record. Accepts a pasted link, a
   * Jira-style issue key, or a bare external system ID from any connected source. Repeat
   * `identifiers` to batch-resolve up to ten in one call.
   *
   * The response carries a rendered `text` view — each match's metadata block followed by a `Next:`
   * line naming a follow-up call. The structured fields carry the same information for programmatic
   * use.
   *
   * **Accepted identifiers**
   * - Jira issue URL — `https://acme.atlassian.net/browse/PA-1787`
   * - Jira issue key — `PA-1787`
   * - Confluence page URL — `https://acme.atlassian.net/wiki/spaces/SD/pages/450625553/Agent+Loop`
   * - Google Drive / Docs URL — `https://docs.google.com/document/d/1AbC.../edit`
   * - Slack message link — `https://acme.slack.com/archives/C0123/p1720000000000100`
   * - Bare external system ID — `450625553`
   *
   * **When to use this vs. the other record endpoints:**
   * - **This endpoint** converts an *external* reference into an internal Record ID. Reach for it
   *   whenever you meet a link or ticket key and need the record behind it.
   * - `GET /connectors/record/{recordId}/content` reads a record you have already identified. It
   *   needs an internal Record ID, which is exactly what this endpoint returns.
   * - `GET /connectors/navigate` browses the hierarchy when you have a position in the tree rather
   *   than a specific identifier.
   *
   * **Typical flow:** call this with the reference, take a match's `id` from the response, then
   * call `GET /connectors/record/{recordId}/content` to read the record.
   *
   * **Multiple matches:** one identifier can legitimately match more than one record — the same
   * external ID may exist in several connected instances. In that case the response sets
   * `ambiguous: true` and `matches` holds every candidate. Present the choice rather than taking
   * the first; `connectorName` narrows a retry.
   *
   * **Misses are not errors.**
   *
   * Only records the caller can see are returned, and a miss is a `200` with an empty `matches`
   * array and the input echoed in `not_found_identifiers` — not a `404`. The identifier resolved to
   * nothing *or* to something the caller may not access; the two are deliberately
   * indistinguishable, because an identifier is caller-supplied and guessable, and confirming
   * existence would leak records across organizations. `searched_connectors` names what was
   * covered, so a retry with `connectorName` is often the right next move.
   *
   * **Scope:** resolution searches every connector the caller can access, regardless of any source
   * filter used elsewhere.
   *
   * @returns Successful operation. Identifiers that resolved to nothing the caller can access are
   * echoed in `not_found_identifiers` rather than producing an error status.
   *
   * @throws {@link Connector.LookupRecordByIdentifierError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  lookupRecordByIdentifier(
    request: Connector.LookupRecordByIdentifierRequest,
    options?: RequestOptions,
  ): ApiPromise<LookupRecordResponseSchema, Connector.LookupRecordByIdentifierError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/record/lookup"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "identifiers", value: request.identifiers, schema: s.array(s.string()) },
          {
            name: "connectorName",
            value: request.connectorName,
            schema: s.optional(s.lazy(() => connectorNameEnumSchema)),
          },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: lookupRecordResponseSchemaSchema },
        errorFactory: Connector.LookupRecordByIdentifierError,
      },
      options,
    );
  }

  /**
   * Browse the knowledge graph from a node
   *
   * @remarks
   * Open a node in the knowledge graph and see what is inside it — a file explorer across every
   * connected source.
   *
   * Call it with no `nodeId` for a flat listing of every record group and record the caller can
   * reach, newest first. This is a starting point to pick a node from, not a roster of connected
   * apps — app nodes are never returned in a listing, though an app's `id` is accepted as a
   * `nodeId` and lists that app's record groups. Pass a node's `id` to descend: record groups
   * contain records and folders, and a record contains its own children — comments, attachments,
   * sub-tasks — plus a `related` section of cross-referenced records, such as the Confluence page
   * linked from a Jira ticket. `nodeId` is tolerant: a URL or an issue key such as `PA-1787` is
   * resolved to its record before navigating, so a link can be pasted straight in without a
   * separate lookup call.
   *
   * The response carries a rendered `text` view — breadcrumbs, the current node, the children
   * listing, `Related:`, and a closing `Next:` line naming a follow-up call. The structured fields
   * carry the same information for programmatic use.
   *
   * **When to use this vs. the other record endpoints:**
   * - **This endpoint** is for structural exploration — "what is in this project", "what is
   *   attached to this ticket", "what else links to this page". It returns names, types and IDs; it
   *   never returns document text.
   * - `GET /connectors/record/{recordId}/content` returns one record's actual parsed text. Use it
   *   once navigation has identified the record you want to read.
   * - `GET /connectors/record/lookup` is the way in when you hold a URL or an issue key rather than
   *   a position in the tree.
   *
   * **Typical flow:** call with no `nodeId` to see what is reachable → pass a record group's `id`
   * to list its records → take a row whose `is_record` is true and call `GET
   * /connectors/record/{recordId}/content` to read it.
   *
   * **Paging and depth:** results are paginated; `pagination.has_next` tells you whether to request
   * the next `page`. `depth` above 1 returns all descendants down to that level as one flat list,
   * each row carrying its own `level`, instead of only direct children.
   *
   * **Scope:** everything the caller can read, across both connectors and Knowledge Base
   * collections. No connector-level filter is applied — the listing is bounded by per-node
   * permissions alone.
   *
   * **Permission scoping:**
   *
   * `rows` and `related` carry only nodes the caller can see, and the opened node itself is
   * access-checked before any of its details are returned. A node that does not exist and a node
   * the caller cannot access are deliberately indistinguishable — both return an empty view rather
   * than an error.
   *
   * `breadcrumbs` is the exception: the ancestor trail is resolved by id alone, without a
   * permission check. For a record shared directly with the caller, it can therefore name ancestors
   * the caller cannot open. Treat breadcrumb entries as labels, not as nodes guaranteed to be
   * navigable.
   *
   * @returns Successful operation. A node that does not exist or is not accessible returns an empty
   * view (null `current`, empty `rows`) rather than an error.
   *
   * @throws {@link Connector.NavigateKnowledgeGraphError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link PipesHubApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  navigateKnowledgeGraph(
    request: Connector.NavigateKnowledgeGraphRequest,
    options?: RequestOptions,
  ): ApiPromise<NavigateKnowledgeGraphResponseSchema, Connector.NavigateKnowledgeGraphError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/connectors/navigate"),
        auth: anyAuth(
          this.#auth.bearerAuth,
          this.#auth.oauth2AuthorizationCode,
          this.#auth.oauth2ClientCredentials,
        ),
        pathParams: [],
        query: [
          { name: "nodeId", value: request.nodeId, schema: s.optional(s.string()) },
          { name: "page", value: request.page, schema: s.defaulted(s.int(), 1) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "depth", value: request.depth, schema: s.defaulted(s.int(), 1) },
          { name: "nodeTypes", value: request.nodeTypes, schema: s.optional(s.array(s.string())) },
          { name: "createdAfter", value: request.createdAfter, schema: s.optional(s.string()) },
          { name: "createdBefore", value: request.createdBefore, schema: s.optional(s.string()) },
          { name: "modifiedAfter", value: request.modifiedAfter, schema: s.optional(s.string()) },
          { name: "modifiedBefore", value: request.modifiedBefore, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: navigateKnowledgeGraphResponseSchemaSchema },
        errorFactory: Connector.NavigateKnowledgeGraphError,
      },
      options,
    );
  }
}

export namespace Connector {
  export type GetRecordContentRequest = {
    /**
     * Record ID to fetch. Obtain it from a `pipeshub_search` result (`hits[*].recordId`) or a chat
     * citation (`citations[*].recordId`).
     */
    recordId: string;
    /**
     * Most characters of `content` to return. Asks for a budgeted read; 40000 when another
     * budgeted-read parameter is given without it.
     */
    maxChars?: number;
    /**
     * Read in order from this block: the `nextStartBlock` of a previous read, or 0 for the top.
     * Takes precedence over `query`. In thread mode it applies to the record at `startRecord`;
     * later records are read from their start.
     */
    startBlock?: number;
    /**
     * What you are looking for in the record. When the record does not fit in `maxChars`, the
     * blocks most relevant to it are shown first and the skipped ranges are marked.
     */
    query?: string;
    /**
     * `record` (default) reads this record. `thread` reads every record of the Slack thread this
     * message belongs to, oldest first. A Slack record in no single thread reads as itself, then
     * the threads its messages started (at most 10). A record that is not from Slack answers `422`.
     */
    mode?: Mode1;
    /**
     * Thread mode: start at this record of the thread, the `nextStartRecord` of a previous read.
     * Pass the read's `nextStartBlock` with it.
     */
    startRecord?: number;
  };

  export class GetRecordContentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetRecordContentError> = [
      { on: 401, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type LookupRecordByIdentifierRequest = {
    /**
     * The reference(s) to resolve: a URL, an issue key such as `PA-1787`, or a bare external system
     * ID. Repeat the parameter to batch: `?identifiers=PA-1787&identifiers=PA-1788`. Maximum 10.
     */
    identifiers: string[];
    /**
     * Optional hint that prioritises resolution order, e.g. `JIRA`, `CONFLUENCE`, `DRIVE`, `SLACK`.
     * Allowed values are the `ConnectorNameEnum` values. It cannot widen the search beyond the
     * connectors the caller can already access. Useful on a retry when a lookup came back empty.
     */
    connectorName?: ConnectorNameEnum;
  };

  export class LookupRecordByIdentifierError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<LookupRecordByIdentifierError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type NavigateKnowledgeGraphRequest = {
    /**
     * The node to open. Take it from an `id` in a previous navigate or lookup response. Omit it
     * entirely for the flat listing of everything reachable — the usual starting point. A URL or an
     * issue key such as `PA-1787` also works: it is resolved to its record automatically.
     */
    nodeId?: string;
    /** Page number, 1-indexed. @default 1 */
    page?: number;
    /**
     * Children per page. The minimum is 50 — smaller values are rejected rather than silently
     * raised.
     *
     * @default 50
     */
    limit?: number;
    /**
     * Levels of descendants to return in one call. Above 1, `rows` is a flat list of all
     * descendants down to that level rather than only direct children, and each row carries its own
     * `level`.
     *
     * @default 1
     */
    depth?: number;
    /**
     * Restrict children to these node types. Repeat the parameter for multiple types:
     * `?nodeTypes=record&nodeTypes=folder`.
     */
    nodeTypes?: string[];
    /**
     * Filter children by source creation time. ISO 8601 `YYYY-MM-DD`, or a full datetime that MUST
     * carry a timezone offset — a naive datetime is rejected rather than assumed to be UTC.
     */
    createdAfter?: string;
    /** Filter children by source creation time. `YYYY-MM-DD` is inclusive of the whole day. */
    createdBefore?: string;
    /** Filter children by source modification time. */
    modifiedAfter?: string;
    /** Filter children by source modification time. */
    modifiedBefore?: string;
  };

  export class NavigateKnowledgeGraphError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Declared<"errorResponse6", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<NavigateKnowledgeGraphError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 403, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 404, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 503, kind: "errorResponse6", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
