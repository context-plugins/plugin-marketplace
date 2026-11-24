import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  errorContentstackPersonalizeManagementAttributesApiSchema,
  type ErrorContentstackPersonalizeManagementAttributesApi,
} from "../models/error-contentstack-personalize-management-attributes-api.js";
import { manifestSchema, type Manifest } from "../models/manifest.js";
import type { Servers } from "../servers.js";

/**
 * The manifest endpoint returns a list of all active experiences and their corresponding variants
 * that are activated for the current user based on their attributes and audience membership.
 */
export class ManifestApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * Get personalization manifest
   *
   * @remarks
   * Returns a list of all active personalization experiences and their corresponding content
   * variant mappings for the current user. The manifest is evaluated in real-time based on the
   * user's attributes and current audience memberships. This endpoint is called at the beginning of
   * a user session to determine which content variants to display.
   *
   * @returns The personalization manifest with active experiences and variants.
   *
   * @throws {@link ManifestApi.GetManifestError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ContentstackError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getManifest(
    request: ManifestApi.GetManifestRequest,
    options?: RequestOptions,
  ): ApiPromise<Manifest, ManifestApi.GetManifestError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.defaultContentstackEventsApi("/manifest"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-project-uid", value: request.xProjectUid, schema: s.string() },
          {
            name: "x-cs-personalize-user-uid",
            value: request.xCsPersonalizeUserUid,
            schema: s.optional(s.string()),
          },
          { name: "x-forwarded-for", value: request.xForwardedFor, schema: s.optional(s.string()) },
          { name: "user-agent", value: request.userAgent, schema: s.optional(s.string()) },
          { name: "referer", value: request.referer, schema: s.optional(s.string()) },
          { name: "x-page-url", value: request.xPageUrl, schema: s.optional(s.string()) },
          { name: "x-live-attributes", value: request.xLiveAttributes, schema: s.optional(s.string()) },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: manifestSchema },
        errorFactory: ManifestApi.GetManifestError,
      },
      options,
    );
  }
}

export namespace ManifestApi {
  export type GetManifestRequest = {
    /** The UID of the Contentstack Personalize project. */
    xProjectUid: string;
    /**
     * The unique identifier for the end user. If not provided, a new anonymous user will be created
     * and the UID returned in the response headers.
     */
    xCsPersonalizeUserUid?: string;
    /** Original client IP address for geolocation-based targeting. */
    xForwardedFor?: string;
    /** User agent string for device-based targeting rules. */
    userAgent?: string;
    /** Referring URL for referral-based audience rules. */
    referer?: string;
    /** Current page URL for page-based audience targeting rules. */
    xPageUrl?: string;
    /**
     * JSON-encoded object of real-time attribute values to evaluate audience rules against without
     * persisting them.
     */
    xLiveAttributes?: string;
  };

  export class GetManifestError extends ApiError {
    declare readonly payload:
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Declared<
          "errorContentstackPersonalizeManagementAttributesApi2",
          ErrorContentstackPersonalizeManagementAttributesApi
        >
      | Undeclared;

    static readonly errors: ErrorDecoders<GetManifestError> = [
      {
        on: 400,
        kind: "errorContentstackPersonalizeManagementAttributesApi",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
      {
        on: 403,
        kind: "errorContentstackPersonalizeManagementAttributesApi2",
        decode: { kind: "json", schema: errorContentstackPersonalizeManagementAttributesApiSchema },
      },
    ];
  }
}
