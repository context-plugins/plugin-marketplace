import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { FileInput } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { v1FacedetectResponseSchema, type V1FacedetectResponse } from "../models/v1-facedetect-response.js";
import {
  v1HeicconverterResponseSchema,
  type V1HeicconverterResponse,
} from "../models/v1-heicconverter-response.js";
import {
  v1ImageconverterResponseSchema,
  type V1ImageconverterResponse,
} from "../models/v1-imageconverter-response.js";
import {
  v1NsfwimagedetectorResponseSchema,
  type V1NsfwimagedetectorResponse,
} from "../models/v1-nsfwimagedetector-response.js";
import {
  v1QrcodereaderResponseSchema,
  type V1QrcodereaderResponse,
} from "../models/v1-qrcodereader-response.js";
import {
  v1SvgconverterResponseSchema,
  type V1SvgconverterResponse,
} from "../models/v1-svgconverter-response.js";
import {
  v1WebpconverterResponseSchema,
  type V1WebpconverterResponse,
} from "../models/v1-webpconverter-response.js";
import type { Servers } from "../servers.js";

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
   * Face Detector
   *
   * @remarks
   * Detect all faces in an uploaded image and return their bounding box coordinates
   *
   * @returns Successful Response
   *
   * @throws {@link Images.FacedetectError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  facedetect(
    request: Images.FacedetectRequest = {},
    options?: RequestOptions,
  ): ApiPromise<V1FacedetectResponse, Images.FacedetectError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/facedetect"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "confidence", value: request.confidence, schema: s.optional(s.float64()) }],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1FacedetectResponseSchema },
        errorFactory: Images.FacedetectError,
      },
      options,
    );
  }

  /**
   * HEIC Converter
   *
   * @remarks
   * Convert a HEIC/HEIF image to another format. Upload an image file to convert.
   *
   * @returns Successful Response
   *
   * @throws {@link Images.HeicconverterError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  heicconverter(
    request: Images.HeicconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1HeicconverterResponse, Images.HeicconverterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/heicconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "outputFormat", value: request.outputFormat, schema: s.string() },
          { name: "quality", value: request.quality, schema: s.optional(s.int()) },
          { name: "maxWidth", value: request.maxWidth, schema: s.optional(s.int()) },
          { name: "maxHeight", value: request.maxHeight, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1HeicconverterResponseSchema },
        errorFactory: Images.HeicconverterError,
      },
      options,
    );
  }

  /**
   * Image Converter
   *
   * @remarks
   * Convert an image from one format to another. Upload an image file to convert.
   *
   * @returns Successful Response
   *
   * @throws {@link Images.ImageconverterError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  imageconverter(
    request: Images.ImageconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ImageconverterResponse, Images.ImageconverterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/imageconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "outputFormat", value: request.outputFormat, schema: s.string() },
          { name: "quality", value: request.quality, schema: s.optional(s.int()) },
          { name: "maxWidth", value: request.maxWidth, schema: s.optional(s.int()) },
          { name: "maxHeight", value: request.maxHeight, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1ImageconverterResponseSchema },
        errorFactory: Images.ImageconverterError,
      },
      options,
    );
  }

  /**
   * NSFW Image Detector
   *
   * @remarks
   * NSFW Detector is a simple tool for detecting NSFW content. It returns a boolean
   *
   * @returns Successful Response
   *
   * @throws {@link Images.NsfwimagedetectorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  nsfwimagedetector(
    request: Images.NsfwimagedetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1NsfwimagedetectorResponse, Images.NsfwimagedetectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/nsfwimagedetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1NsfwimagedetectorResponseSchema },
        errorFactory: Images.NsfwimagedetectorError,
      },
      options,
    );
  }

  /**
   * QR Code Reader
   *
   * @remarks
   * QR Code Reader is a powerful tool that extracts text and data from QR codes in images. Simply
   * provide an image URL or upload an image containing a QR code to decode its contents.
   *
   * @returns Successful Response
   *
   * @throws {@link Images.QrcodereaderError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  qrcodereader(
    request: Images.QrcodereaderRequest,
    options?: RequestOptions,
  ): ApiPromise<V1QrcodereaderResponse, Images.QrcodereaderError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/qrcodereader"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1QrcodereaderResponseSchema },
        errorFactory: Images.QrcodereaderError,
      },
      options,
    );
  }

  /**
   * SVG Converter
   *
   * @remarks
   * Convert an SVG vector image to a raster format. Upload an SVG file to convert.
   *
   * @returns Successful Response
   *
   * @throws {@link Images.SvgconverterError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  svgconverter(
    request: Images.SvgconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SvgconverterResponse, Images.SvgconverterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/svgconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "outputFormat", value: request.outputFormat, schema: s.string() },
          { name: "quality", value: request.quality, schema: s.optional(s.int()) },
          { name: "maxWidth", value: request.maxWidth, schema: s.optional(s.int()) },
          { name: "maxHeight", value: request.maxHeight, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1SvgconverterResponseSchema },
        errorFactory: Images.SvgconverterError,
      },
      options,
    );
  }

  /**
   * WebP Converter
   *
   * @remarks
   * Convert a WebP image to another format, or convert other formats to WebP. Upload an image file
   * to convert.
   *
   * @returns Successful Response
   *
   * @throws {@link Images.WebpconverterError} when the API answers with an error status — narrow on
   * `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  webpconverter(
    request: Images.WebpconverterRequest,
    options?: RequestOptions,
  ): ApiPromise<V1WebpconverterResponse, Images.WebpconverterError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/webpconverter"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "outputFormat", value: request.outputFormat, schema: s.string() },
          { name: "quality", value: request.quality, schema: s.optional(s.int()) },
          { name: "maxWidth", value: request.maxWidth, schema: s.optional(s.int()) },
          { name: "maxHeight", value: request.maxHeight, schema: s.optional(s.int()) },
        ],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "multipart", value: [{ kind: "file", name: "image", value: request.image }] },
      },
      {
        success: { kind: "json", schema: v1WebpconverterResponseSchema },
        errorFactory: Images.WebpconverterError,
      },
      options,
    );
  }
}

export namespace Images {
  export type FacedetectRequest = {
    /** Minimum confidence threshold for face detection (0.1 to 1.0) */
    confidence?: number;
    /** File to upload (accepted: .jpg, .jpeg, .png, .gif, .webp, max 10MB) */
    image?: FileInput;
  };

  export class FacedetectError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<FacedetectError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type HeicconverterRequest = {
    /** Target format */
    outputFormat: string;
    /** Output quality (applies to jpg/webp) */
    quality?: number;
    /** Maximum width in pixels (maintains aspect ratio) */
    maxWidth?: number;
    /** Maximum height in pixels (maintains aspect ratio) */
    maxHeight?: number;
    /** File to upload (accepted: .heic, .heif, max 10MB) */
    image: FileInput;
  };

  export class HeicconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<HeicconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type ImageconverterRequest = {
    /** Target format */
    outputFormat: string;
    /** Output quality (applies to jpg/webp) */
    quality?: number;
    /** Maximum width in pixels (maintains aspect ratio) */
    maxWidth?: number;
    /** Maximum height in pixels (maintains aspect ratio) */
    maxHeight?: number;
    /**
     * File to upload (accepted: .heic, .heif, .avif, .webp, .png, .jpg, .jpeg, .gif, .tiff, .tif,
     * .bmp, .pdf, .svg, max 10MB)
     */
    image: FileInput;
  };

  export class ImageconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<ImageconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type NsfwimagedetectorRequest = {
    /** File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB) */
    image: FileInput;
  };

  export class NsfwimagedetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<NsfwimagedetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type QrcodereaderRequest = {
    /** File to upload (accepted: .jpg, .jpeg, .png, .gif, max 10MB) */
    image: FileInput;
  };

  export class QrcodereaderError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<QrcodereaderError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SvgconverterRequest = {
    /** Target format */
    outputFormat: string;
    /** Output quality (applies to jpg/webp) */
    quality?: number;
    /** Maximum width in pixels (maintains aspect ratio) */
    maxWidth?: number;
    /** Maximum height in pixels (maintains aspect ratio) */
    maxHeight?: number;
    /** File to upload (accepted: .svg, max 10MB) */
    image: FileInput;
  };

  export class SvgconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SvgconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type WebpconverterRequest = {
    /** Target format */
    outputFormat: string;
    /** Output quality (applies to jpg/webp) */
    quality?: number;
    /** Maximum width in pixels (maintains aspect ratio) */
    maxWidth?: number;
    /** Maximum height in pixels (maintains aspect ratio) */
    maxHeight?: number;
    /** File to upload (accepted: .webp, .png, .jpg, .jpeg, .gif, max 10MB) */
    image: FileInput;
  };

  export class WebpconverterError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<WebpconverterError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
