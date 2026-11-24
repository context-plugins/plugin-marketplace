import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { allAuth, anyAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import {
  cloudflowTemplateListResponseSchema,
  type CloudflowTemplateListResponse,
} from "../models/cloudflow-template-list-response.js";
import { cloudflowTemplateSchema, type CloudflowTemplate } from "../models/cloudflow-template.js";
import { errorSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Browse the catalogue of read-only CloudFlow templates (blueprints) used to create flows.
 */
export class Templates {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Retrieve a template
   *
   * @remarks
   * Returns a single CloudFlow template by ID.
   *
   * @returns OK
   *
   * @throws {@link Templates.GetCloudflowTemplate2Error} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getCloudflowTemplate2(
    request: Templates.GetCloudflowTemplate2Request,
    options?: RequestOptions,
  ): ApiPromise<CloudflowTemplate, Templates.GetCloudflowTemplate2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/templates/{templateId}"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [{ name: "templateId", value: request.templateId, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowTemplateSchema },
        errorFactory: Templates.GetCloudflowTemplate2Error,
      },
      options,
    );
  }

  /**
   * List templates
   *
   * @remarks
   * Returns the catalogue of available CloudFlow templates (blueprints). Templates are read-only.
   * To create a flow from a template, use `POST /flows` with a `templateId`.
   *
   * @returns OK
   *
   * @throws {@link Templates.ListCloudflowTemplates2Error} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DoiTError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  listCloudflowTemplates2(
    request: Templates.ListCloudflowTemplates2Request = {},
    options?: RequestOptions,
  ): ApiPromise<CloudflowTemplateListResponse, Templates.ListCloudflowTemplates2Error> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/cloudflow/v1/templates"),
        auth: anyAuth(this.#auth.apiKey, allAuth(this.#auth.tenantId, this.#auth.apiKey)),
        pathParams: [],
        query: [
          { name: "maxResults", value: request.maxResults, schema: s.defaulted(s.int(), 50) },
          { name: "pageToken", value: request.pageToken, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: cloudflowTemplateListResponseSchema },
        errorFactory: Templates.ListCloudflowTemplates2Error,
      },
      options,
    );
  }
}

export namespace Templates {
  export type GetCloudflowTemplate2Request = {
    templateId: string;
  };

  export class GetCloudflowTemplate2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetCloudflowTemplate2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorSchema } },
    ];
  }

  export type ListCloudflowTemplates2Request = {
    /** Maximum number of templates to return (1–500). Defaults to 50. @default 50 */
    maxResults?: number;
    /**
     * Opaque cursor for the next page, taken from `pageToken` in the previous response. Omit to
     * start from the beginning.
     */
    pageToken?: string;
  };

  export const listCloudflowTemplates2RequestSchema: Schema<ListCloudflowTemplates2Request> = s.lazySchema(
    () =>
      s.object<ListCloudflowTemplates2Request>({
        maxResults: s.defaulted(s.int().check(s.gte(1), s.lte(500)), 50),
        pageToken: s.optional(s.string()),
      }),
  );

  export class ListCloudflowTemplates2Error extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ListCloudflowTemplates2Error> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorSchema } },
      { on: 500, kind: "error4", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
