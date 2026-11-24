import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, orAnonymous } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import { angleSchema, type Angle } from "../models/angle.js";
import { errorSchema, type Error } from "../models/error.js";
import { Format, formatSchema } from "../models/format.js";
import { imagesResponseSchema, type ImagesResponse } from "../models/images-response.js";
import { licenseSchema, type License } from "../models/license.js";
import { photoTypeSchema, type PhotoType } from "../models/photo-type.js";
import { sizeSchema, type Size } from "../models/size.js";
import { usageLimitErrorSchema, type UsageLimitError } from "../models/usage-limit-error.js";
import type { Servers } from "../servers.js";

/**
 * Vehicle images by make/model
 */
export class Images {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Vehicle Images
   *
   * @remarks
   * Retrieve images of a vehicle by make, model and other filters.
   *
   * @returns Images retrieved.
   *
   * @throws {@link Images.GetVehicleImagesError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link CarsXeError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getVehicleImages(
    request: Images.GetVehicleImagesRequest,
    options?: RequestOptions,
  ): ApiPromise<ImagesResponse, Images.GetVehicleImagesError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/images"),
        auth: orAnonymous(anyAuth(this.#auth.apiKeyQuery, this.#auth.x402Payment)),
        pathParams: [],
        query: [
          { name: "make", value: request.make, schema: s.string() },
          { name: "model", value: request.model, schema: s.string() },
          { name: "year", value: request.year, schema: s.optional(s.string()) },
          { name: "trim", value: request.trim, schema: s.optional(s.string()) },
          { name: "color", value: request.color, schema: s.optional(s.string()) },
          { name: "transparent", value: request.transparent, schema: s.optional(s.boolean()) },
          { name: "angle", value: request.angle, schema: s.optional(s.lazy(() => angleSchema)) },
          { name: "photoType", value: request.photoType, schema: s.optional(s.lazy(() => photoTypeSchema)) },
          { name: "size", value: request.size, schema: s.optional(s.lazy(() => sizeSchema)) },
          { name: "license", value: request.license, schema: s.optional(s.lazy(() => licenseSchema)) },
          { name: "format", value: request.format, schema: s.defaulted(formatSchema, Format.Json) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: imagesResponseSchema },
        errorFactory: Images.GetVehicleImagesError,
      },
      options,
    );
  }
}

export namespace Images {
  export type GetVehicleImagesRequest = {
    /** The vehicle make. */
    make: string;
    /** The vehicle model. */
    model: string;
    /** The vehicle year. */
    year?: string;
    /** The vehicle trim. */
    trim?: string;
    /** The vehicle color. */
    color?: string;
    /** Prioritize images with transparent background. Defaults to `true`. */
    transparent?: boolean;
    /** The angle to show the car in. */
    angle?: Angle;
    /**
     * Request images of the interior, exterior or engine. Can only be used in conjunction with
     * year, make, model and trim query params.
     */
    photoType?: PhotoType;
    /** Request images of a given size. Defaults to all sizes. */
    size?: Size;
    /** Filter images by license type. Leave blank to return all images. */
    license?: License;
    /** The format of the response. One of `json` or `xml`. @default Format.Json */
    format?: Format;
  };

  export class GetVehicleImagesError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"usageLimitError", UsageLimitError>
      | Declared<"error3", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetVehicleImagesError> = [
      { on: 401, kind: "error", decode: { kind: "json", schema: errorSchema } },
      { on: 404, kind: "error2", decode: { kind: "json", schema: errorSchema } },
      { on: 429, kind: "usageLimitError", decode: { kind: "json", schema: usageLimitErrorSchema } },
      { on: 500, kind: "error3", decode: { kind: "json", schema: errorSchema } },
    ];
  }
}
