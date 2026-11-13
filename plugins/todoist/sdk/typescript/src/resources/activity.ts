import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { objectTypeSchema, type ObjectType } from "../models/object-type.js";
import { paginatedListSchema, type PaginatedList } from "../models/paginated-list.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import { initiatorIdSchema, type InitiatorId } from "../models/unions/initiator-id.js";
import { objectIdSchema, type ObjectId } from "../models/unions/object-id.js";
import { parentItemIdSchema, type ParentItemId } from "../models/unions/parent-item-id.js";
import { parentProjectIdSchema, type ParentProjectId } from "../models/unions/parent-project-id.js";
import { workspaceIdSchema, type WorkspaceId } from "../models/unions/workspace-id.js";
import type { Servers } from "../servers.js";

/**
 * _Availability of the activity log and the duration of event storage are dependent on the current
 * user plan. These values are indicated by the `activity_log` and `activity_log_limit` properties
 * of the [user plan limits](#tag/Sync/User/User-plan-limits) object._
 *
 * The activity log makes it easy to see everything that is happening across projects, items and
 * notes.
 *
 * The activity log uses the same **cursor-based pagination** as other endpoints in the API. See the
 * [Pagination guide](#tag/Pagination) for general information about how cursor-based pagination
 * works.
 *
 * ### Logged events
 *
 * Currently the official Todoist clients present only the most important events that most users may
 * be interested in. There are further types of events related to projects, items and notes that are
 * stored in our database, and can be accessed through the API.
 *
 * The following events are logged for items:
 *
 * - Items added
 * - Items updated (only changes to `content`, `description`, `due_date` and `responsible_uid`)
 * - Items deleted
 * - Items completed
 * - Items uncompleted
 *
 * The following events are logged for notes:
 *
 * - Notes added
 * - Notes updated (only changes to `content` or `file_name` if the former is empty)
 * - Notes deleted
 *
 * The following events are logged for projects:
 *
 * - Projects added
 * - Projects updated (only changes to `name`)
 * - Projects deleted
 * - Projects archived
 * - Projects unarchived
 * - Projects shared
 * - Projects left
 *
 * ### Pagination details
 *
 * The activity log endpoint uses cursor-based pagination with the `cursor` and `limit` query
 * parameters.
 *
 * #### The `limit` parameter
 *
 * Controls how many activity events to return per page.
 *
 * - **Default**: 50
 * - **Maximum**: 200
 *
 * #### The `cursor` parameter
 *
 * An opaque token used to fetch the next page of results. Use the value from the `next_cursor`
 * field of a previous response. When `next_cursor` is `null`, there are no more results to fetch.
 *
 * #### Example
 *
 * To fetch all activity events, start with a request without a cursor:
 *
 * ```bash
 * curl "https://api.todoist.com/api/v1/activities" \
 *   -H "Authorization: Bearer YOUR_TOKEN"
 * ```
 *
 * The response will include a `results` array and a `next_cursor` value:
 *
 * ```json
 * {
 *   "results": [...],
 *   "next_cursor": "eyJwYWdlIjoyLCJsaW1pdCI6NTB9.aGFzaA"
 * }
 * ```
 *
 * To fetch the next page, pass the `next_cursor` value as the `cursor` parameter:
 *
 * ```bash
 * curl "https://api.todoist.com/api/v1/activities?cursor=eyJwYWdlIjoyLCJsaW1pdCI6NTB9.aGFzaA" \
 *   -H "Authorization: Bearer YOUR_TOKEN"
 * ```
 *
 * Continue fetching pages until `next_cursor` is `null`.
 *
 * **Note:** The `page` and `offset` parameters are not supported on this API version. Please refer
 * to the [migration guide](#tag/Migrating-from-v9) for more information.
 */
export class Activity {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Get Activity Logs
   *
   * @remarks
   * Get activity logs.
   *
   * Returns a paginated list of activity events for the user. Events can be filtered by object type
   * (project, item, note, section), event type, and other criteria. Uses cursor-based pagination
   * for efficient navigation through results.
   *
   * @returns Successful Response
   *
   * @throws {@link Activity.GetActivityLogsApiV1ActivitiesGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getActivityLogsApiV1ActivitiesGet(
    request: Activity.GetActivityLogsApiV1ActivitiesGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<PaginatedList, Activity.GetActivityLogsApiV1ActivitiesGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/activities"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          {
            name: "object_type",
            value: request.objectType,
            schema: s.optionalNullable(s.lazy(() => objectTypeSchema)),
          },
          {
            name: "object_id",
            value: request.objectId,
            schema: s.optionalNullable(s.lazy(() => objectIdSchema)),
          },
          {
            name: "parent_project_id",
            value: request.parentProjectId,
            schema: s.optionalNullable(s.lazy(() => parentProjectIdSchema)),
          },
          {
            name: "parent_item_id",
            value: request.parentItemId,
            schema: s.optionalNullable(s.lazy(() => parentItemIdSchema)),
          },
          {
            name: "include_parent_object",
            value: request.includeParentObject,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "include_child_objects",
            value: request.includeChildObjects,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "initiator_id",
            value: request.initiatorId,
            schema: s.optionalNullable(s.lazy(() => initiatorIdSchema)),
          },
          {
            name: "initiator_id_null",
            value: request.initiatorIdNull,
            schema: s.optionalNullable(s.boolean()),
          },
          { name: "event_type", value: request.eventType, schema: s.optionalNullable(s.string()) },
          {
            name: "ensure_last_state",
            value: request.ensureLastState,
            schema: s.defaulted(s.boolean(), false),
          },
          {
            name: "object_event_types",
            value: request.objectEventTypes,
            schema: s.optionalNullable(s.array(s.string())),
          },
          {
            name: "workspace_id",
            value: request.workspaceId,
            schema: s.optionalNullable(s.lazy(() => workspaceIdSchema)),
          },
          { name: "annotate_notes", value: request.annotateNotes, schema: s.defaulted(s.boolean(), false) },
          {
            name: "annotate_parents",
            value: request.annotateParents,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "cursor", value: request.cursor, schema: s.optionalNullable(s.string()) },
          { name: "limit", value: request.limit, schema: s.defaulted(s.int(), 50) },
          { name: "date_from", value: request.dateFrom, schema: s.optionalNullable(s.dateTime()) },
          { name: "date_to", value: request.dateTo, schema: s.optionalNullable(s.dateTime()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: paginatedListSchema },
        errorFactory: Activity.GetActivityLogsApiV1ActivitiesGetError,
      },
      options,
    );
  }
}

export namespace Activity {
  export type GetActivityLogsApiV1ActivitiesGetRequest = {
    objectType?: ObjectType | null;
    objectId?: ObjectId | null;
    parentProjectId?: ParentProjectId | null;
    parentItemId?: ParentItemId | null;
    /** @default false */
    includeParentObject?: boolean;
    /** @default false */
    includeChildObjects?: boolean;
    initiatorId?: InitiatorId | null;
    initiatorIdNull?: boolean | null;
    eventType?: string | null;
    /** @default false */
    ensureLastState?: boolean;
    objectEventTypes?: string[] | null;
    workspaceId?: WorkspaceId | null;
    /** @default false */
    annotateNotes?: boolean;
    /** @default false */
    annotateParents?: boolean;
    cursor?: string | null;
    /** @default 50 */
    limit?: number;
    dateFrom?: Date | null;
    dateTo?: Date | null;
  };

  export const getActivityLogsApiV1ActivitiesGetRequestSchema: Schema<GetActivityLogsApiV1ActivitiesGetRequest> =
    s.lazySchema(() =>
      s.object<GetActivityLogsApiV1ActivitiesGetRequest>({
        objectType: s.optionalNullable(s.lazy(() => objectTypeSchema)),
        objectId: s.optionalNullable(s.lazy(() => objectIdSchema)),
        parentProjectId: s.optionalNullable(s.lazy(() => parentProjectIdSchema)),
        parentItemId: s.optionalNullable(s.lazy(() => parentItemIdSchema)),
        includeParentObject: s.defaulted(s.boolean(), false),
        includeChildObjects: s.defaulted(s.boolean(), false),
        initiatorId: s.optionalNullable(s.lazy(() => initiatorIdSchema)),
        initiatorIdNull: s.optionalNullable(s.boolean()),
        eventType: s.optionalNullable(s.string()),
        ensureLastState: s.defaulted(s.boolean(), false),
        objectEventTypes: s.optionalNullable(s.array(s.string())),
        workspaceId: s.optionalNullable(s.lazy(() => workspaceIdSchema)),
        annotateNotes: s.defaulted(s.boolean(), false),
        annotateParents: s.defaulted(s.boolean(), false),
        cursor: s.optionalNullable(
          s.string().check(s.minLength(1), s.pattern("^[0-9a-zA-Z_-]+\\.[0-9a-zA-Z_-]+$")),
        ),
        limit: s.defaulted(s.int().check(s.gt(0), s.lte(200)), 50),
        dateFrom: s.optionalNullable(s.dateTime()),
        dateTo: s.optionalNullable(s.dateTime()),
      }),
    );

  export class GetActivityLogsApiV1ActivitiesGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetActivityLogsApiV1ActivitiesGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
