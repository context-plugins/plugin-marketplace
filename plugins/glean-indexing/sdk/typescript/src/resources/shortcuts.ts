import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class Shortcuts {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Bulk index external shortcuts
   *
   * @remarks
   * Replaces all the currently indexed shortcuts using paginated batch API calls. Note that this
   * endpoint is used for indexing shortcuts not hosted by Glean. If you want to upload shortcuts
   * that would be hosted by Glean, please use the `/uploadshortcuts` endpoint. For information on
   * what you can do with Golinks, which are Glean-hosted shortcuts, please refer to
   * [this](https://docs.glean.com/user-guide/knowledge/go-links/how-go-links-work) page.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.BulkIndexExternalShortcutsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  bulkIndexExternalShortcuts(
    options?: RequestOptions,
  ): ApiPromise<undefined, Shortcuts.BulkIndexExternalShortcutsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/bulkindexshortcuts"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shortcuts.BulkIndexExternalShortcutsError,
      },
      options,
    );
  }

  /**
   * Upload shortcuts
   *
   * @remarks
   * Creates glean shortcuts for uploaded shortcuts info. Glean would host the shortcuts, and they
   * can be managed in the knowledge tab once uploaded.
   *
   * @returns OK
   *
   * @throws {@link Shortcuts.UploadShortcutsError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link GleanIndexingApiError} when no usable response was produced: a connection
   * failure, a timeout, a body that would not decode, a value that would not encode, or a
   * credential that could not be obtained
   */
  uploadShortcuts(options?: RequestOptions): ApiPromise<undefined, Shortcuts.UploadShortcutsError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/api/index/v1/uploadshortcuts"),
        auth: this.#auth.apiToken,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "empty" },
        errorFactory: Shortcuts.UploadShortcutsError,
      },
      options,
    );
  }
}

export namespace Shortcuts {
  export class BulkIndexExternalShortcutsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<BulkIndexExternalShortcutsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }

  export class UploadShortcutsError extends ApiError {
    declare readonly payload:
      | Declared<"error400", undefined>
      | Declared<"error401", undefined>
      | Declared<"error409", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UploadShortcutsError> = [
      { on: 400, kind: "error400", decode: { kind: "empty" } },
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 409, kind: "error409", decode: { kind: "empty" } },
    ];
  }
}
