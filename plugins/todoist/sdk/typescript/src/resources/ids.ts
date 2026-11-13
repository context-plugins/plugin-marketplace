import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { idMappingSchema, type IdMapping } from "../models/id-mapping.js";
import { objNameSchema, type ObjName } from "../models/obj-name.js";
import { todoistErrorSchema, type TodoistError } from "../models/todoist-error.js";
import type { Servers } from "../servers.js";

/**
 * Endpoints related to ID mappings between v1 and v2
 */
export class Ids {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Id Mappings
   *
   * @remarks
   * Translates IDs from v1 to v2 or vice versa.
   *
   * IDs are not unique across object types, hence the need to specify the object type.
   *
   * When V1 ids are provided, the function will return the corresponding V2 ids, if they exist, and
   * vice versa.
   *
   * When no objects are found, an empty list is returned.
   *
   * @returns Successful Response
   *
   * @throws {@link Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link TodoistApiError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  idMappingsApiV1IdMappingsObjNameObjIdsGet(
    request: Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetRequest,
    options?: RequestOptions,
  ): ApiPromise<IdMapping[], Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/id_mappings/{obj_name}/{obj_ids}"),
        auth: this.#auth.bearerAuth,
        pathParams: [
          { name: "obj_name", value: request.objName, schema: objNameSchema },
          { name: "obj_ids", value: request.objIds, schema: s.string() },
        ],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.array(s.lazy(() => idMappingSchema)) },
        errorFactory: Ids.IdMappingsApiV1IdMappingsObjNameObjIdsGetError,
      },
      options,
    );
  }
}

export namespace Ids {
  export type IdMappingsApiV1IdMappingsObjNameObjIdsGetRequest = {
    objName: ObjName;
    objIds: string;
  };

  export class IdMappingsApiV1IdMappingsObjNameObjIdsGetError extends ApiError {
    declare readonly payload:
      | Declared<"todoistError", TodoistError>
      | Declared<"todoistError2", TodoistError>
      | Declared<"todoistError3", TodoistError>
      | Declared<"todoistError4", TodoistError>
      | Undeclared;

    static readonly errors: ErrorDecoders<IdMappingsApiV1IdMappingsObjNameObjIdsGetError> = [
      { on: 400, kind: "todoistError", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 401, kind: "todoistError2", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 403, kind: "todoistError3", decode: { kind: "json", schema: todoistErrorSchema } },
      { on: 404, kind: "todoistError4", decode: { kind: "json", schema: todoistErrorSchema } },
    ];
  }
}
