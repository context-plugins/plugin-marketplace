import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { anyAuth, noneAuth } from "../core/auth/schemes.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import type { Schema } from "../core/validation/schema.js";
import { device1Schema, type Device1 } from "../models/device1.js";
import { errorResponseSchema, type ErrorResponse } from "../models/error-response.js";
import { Format1, format1Schema } from "../models/format1.js";
import {
  screenshotJsonResponseInternalSchema,
  type ScreenshotJsonResponse,
} from "../models/screenshot-json-response.js";
import { screenshotRequestInternalSchema, type ScreenshotRequest } from "../models/screenshot-request.js";
import { v1ArtifactRequestInternalSchema, type V1ArtifactRequest } from "../models/v1-artifact-request.js";
import { v1ArtifactResponseSchema, type V1ArtifactResponse } from "../models/v1-artifact-response.js";
import { v1ExtractRequestInternalSchema, type V1ExtractRequest } from "../models/v1-extract-request.js";
import { v1ExtractResponseSchema, type V1ExtractResponse } from "../models/v1-extract-response.js";
import {
  v1RenderLinkRequestInternalSchema,
  type V1RenderLinkRequest,
} from "../models/v1-render-link-request.js";
import { v1RenderLinkResponseSchema, type V1RenderLinkResponse } from "../models/v1-render-link-response.js";
import { WaitUntil1, waitUntil1Schema } from "../models/wait-until1.js";
import type { Servers } from "../servers.js";

/**
 * Capture webpage screenshots
 */
export class Screenshot {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Mint a signed hosted-render URL
   *
   * @remarks
   * Returns a self-contained, signed URL you can paste straight into `` (or an ``). No backend or
   * storage on your side: `GET /v1/render` renders it on the first request, caches the result in R2
   * under a deterministic key, and serves the cached copy on every repeat — so a widely-shared link
   * costs one render, not one per crawl. The link encodes the (signed, tamper-proof) render params,
   * the owning account, and an expiry. Credits are charged to the link owner on each cache-miss
   * render only.
   *
   * @returns Signed render link
   *
   * @throws {@link Screenshot.CreateRenderLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createRenderLink(
    request: Screenshot.CreateRenderLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<V1RenderLinkResponse, Screenshot.CreateRenderLinkError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/render/link"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1RenderLinkRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1RenderLinkResponseSchema },
        errorFactory: Screenshot.CreateRenderLinkError,
      },
      options,
    );
  }

  /**
   * Extract clean content from a URL
   *
   * @remarks
   * Turns a single URL into clean reader-mode content — Markdown, JSON, or article HTML — pulled
   * from the fully-rendered page (so it works on JavaScript-heavy sites). Text only; for image +
   * text in one call use `POST /v1/screenshot/json` with `extract: true`.
   *
   * @returns Extracted content
   *
   * @throws {@link Screenshot.ExtractContentError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  extractContent(
    request: Screenshot.ExtractContentRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ExtractResponse, Screenshot.ExtractContentError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/extract"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ExtractRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1ExtractResponseSchema },
        errorFactory: Screenshot.ExtractContentError,
      },
      options,
    );
  }

  /**
   * Capture screenshot via query parameters
   *
   * @remarks
   * Returns the screenshot as a binary image. Supports `` embedding and browser-based access. All
   * POST parameters are accepted as query params. Accepts API key via `Authorization: Bearer`,
   * `x-api-key` header, or `?key=` query param.
   *
   * @returns Screenshot captured successfully
   *
   * @throws {@link Screenshot.GetScreenshotError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  getScreenshot(
    request: Screenshot.GetScreenshotRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Screenshot.GetScreenshotError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/screenshot"),
        auth: anyAuth(this.#auth.bearerAuth, this.#auth.apiKeyHeader, this.#auth.apiKeyQuery),
        pathParams: [],
        query: [
          { name: "url", value: request.url, schema: s.string() },
          { name: "format", value: request.format, schema: s.defaulted(format1Schema, Format1.Png) },
          { name: "width", value: request.width, schema: s.defaulted(s.int(), 1280) },
          { name: "height", value: request.height, schema: s.defaulted(s.int(), 800) },
          { name: "fullPage", value: request.fullPage, schema: s.defaulted(s.boolean(), false) },
          { name: "quality", value: request.quality, schema: s.optional(s.int()) },
          { name: "delay", value: request.delay, schema: s.defaulted(s.int(), 0) },
          { name: "darkMode", value: request.darkMode, schema: s.defaulted(s.boolean(), false) },
          {
            name: "deviceScaleFactor",
            value: request.deviceScaleFactor,
            schema: s.defaulted(s.float64(), 2),
          },
          { name: "blockAds", value: request.blockAds, schema: s.defaulted(s.boolean(), true) },
          { name: "timeout", value: request.timeout, schema: s.defaulted(s.int(), 30) },
          {
            name: "waitUntil",
            value: request.waitUntil,
            schema: s.defaulted(waitUntil1Schema, WaitUntil1.Networkidle2),
          },
          { name: "waitForSelector", value: request.waitForSelector, schema: s.optional(s.string()) },
          { name: "bestAttempt", value: request.bestAttempt, schema: s.defaulted(s.boolean(), true) },
          { name: "selector", value: request.selector, schema: s.optional(s.string()) },
          { name: "device", value: request.device, schema: s.optional(s.lazy(() => device1Schema)) },
          {
            name: "blockCookieBanners",
            value: request.blockCookieBanners,
            schema: s.defaulted(s.boolean(), false),
          },
          { name: "resizeWidth", value: request.resizeWidth, schema: s.optional(s.int()) },
          { name: "resizeHeight", value: request.resizeHeight, schema: s.optional(s.int()) },
          { name: "key", value: request.key, schema: s.optional(s.string()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Screenshot.GetScreenshotError,
      },
      options,
    );
  }

  /**
   * Capture screenshot (returns image binary)
   *
   * @remarks
   * Accepts a JSON body with capture parameters. Returns the screenshot as a binary image with
   * metadata in response headers (`x-screenshot-*`, `x-rendex-*`).
   *
   * @returns Screenshot captured successfully
   *
   * @throws {@link Screenshot.PostScreenshotError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postScreenshot(
    request: Screenshot.PostScreenshotRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Screenshot.PostScreenshotError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/screenshot"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: screenshotRequestInternalSchema },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Screenshot.PostScreenshotError,
      },
      options,
    );
  }

  /**
   * Capture screenshot (returns base64 JSON)
   *
   * @remarks
   * Same capture parameters as `POST /v1/screenshot`, but returns the image as a base64-encoded
   * string inside a JSON envelope with full metadata.
   *
   * @returns Screenshot captured successfully
   *
   * @throws {@link Screenshot.PostScreenshotJsonError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  postScreenshotJson(
    request: Screenshot.PostScreenshotJsonRequest,
    options?: RequestOptions,
  ): ApiPromise<ScreenshotJsonResponse, Screenshot.PostScreenshotJsonError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/screenshot/json"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: screenshotRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: screenshotJsonResponseInternalSchema },
        errorFactory: Screenshot.PostScreenshotJsonError,
      },
      options,
    );
  }

  /**
   * Render a branded PDF + PNG artifact from Markdown or HTML
   *
   * @remarks
   * One call that turns Markdown or HTML plus a small branding theme into a branded PDF, a PNG, and
   * a hosted share page — built for AI agents and ChatGPT apps that produce a finished document and
   * need a downloadable, shareable result. Pass the document body in `content` (Markdown by
   * default, or set `inputFormat: html`), an optional `branding` theme (logo, accent color, font,
   * header, footer), and an optional `pageSetup` (paper size, orientation, margins, scale,
   * viewport). Choose the output `formats` — `pdf`, `png`, or both. Each requested format charges 1
   * credit from the same shared pool as the rendering endpoints, drawn with the same `rdx_` key;
   * the full charge is refunded on a render failure. The response returns short-lived signed URLs
   * for each rendered format plus a `shareUrl` to a hosted preview page; all expire after
   * `expiresIn` seconds (default 24h).
   *
   * @returns Rendered artifact URLs
   *
   * @throws {@link Screenshot.RenderArtifactError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  renderArtifact(
    request: Screenshot.RenderArtifactRequest,
    options?: RequestOptions,
  ): ApiPromise<V1ArtifactResponse, Screenshot.RenderArtifactError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/artifact"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1ArtifactRequestInternalSchema },
      },
      {
        success: { kind: "json", schema: v1ArtifactResponseSchema },
        errorFactory: Screenshot.RenderArtifactError,
      },
      options,
    );
  }

  /**
   * Serve a signed render link
   *
   * @remarks
   * Public endpoint — the HMAC signature in the URL is the auth boundary (no API key). Renders on
   * the first hit and returns the image/PDF bytes; subsequent hits serve the cached copy. Normally
   * you don't call this directly — embed the URL returned by `POST /v1/render/link`. The
   * `x-rendex-cache` response header is `hit` or `miss`.
   *
   * @returns Rendered image or PDF
   *
   * @throws {@link Screenshot.ServeRenderLinkError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link RendexError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  serveRenderLink(
    request: Screenshot.ServeRenderLinkRequest,
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, Screenshot.ServeRenderLinkError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/render"),
        auth: noneAuth,
        pathParams: [],
        query: [
          { name: "p", value: request.p, schema: s.string() },
          { name: "uid", value: request.uid, schema: s.string() },
          { name: "exp", value: request.exp, schema: s.int() },
          { name: "sig", value: request.sig, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: Screenshot.ServeRenderLinkError,
      },
      options,
    );
  }
}

export namespace Screenshot {
  export type CreateRenderLinkRequest = {
    body: V1RenderLinkRequest;
  };

  export class CreateRenderLinkError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<CreateRenderLinkError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 413, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ExtractContentRequest = {
    body: V1ExtractRequest;
  };

  export class ExtractContentError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<ExtractContentError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 413, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 422, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type GetScreenshotRequest = {
    /** Webpage URL to capture (must be a valid URL) */
    url: string;
    /** Output format @default Format1.Png */
    format?: Format1;
    /** Viewport width in pixels @default 1280 */
    width?: number;
    /** Viewport height in pixels @default 800 */
    height?: number;
    /** Capture full scrollable page (capped at 16384px height) @default false */
    fullPage?: boolean;
    /** Image quality (JPEG and WebP only) */
    quality?: number;
    /** Wait milliseconds after page load before capture @default 0 */
    delay?: number;
    /** Emulate dark color scheme (prefers-color-scheme: dark) @default false */
    darkMode?: boolean;
    /** Device pixel ratio (2 for Retina, 3 for high-DPI) @default 2 */
    deviceScaleFactor?: number;
    /** Block ads, trackers, and chat widgets @default true */
    blockAds?: boolean;
    /** Navigation timeout in seconds @default 30 */
    timeout?: number;
    /** Page readiness condition before capture @default WaitUntil1.Networkidle2 */
    waitUntil?: WaitUntil1;
    /** CSS selector to wait for before capture */
    waitForSelector?: string;
    /** Return partial screenshot on timeout instead of failing @default true */
    bestAttempt?: boolean;
    /** CSS selector of element to capture instead of full page */
    selector?: string;
    /** Device preset that sets viewport, scale, and user agent in one parameter */
    device?: Device1;
    /** Hide common cookie and consent walls before capture @default false */
    blockCookieBanners?: boolean;
    /**
     * Downscale the output to this width (image formats only). Aspect ratio preserved when only one
     * dimension is set. Never upscales.
     */
    resizeWidth?: number;
    /** Downscale the output to this height (image formats only). */
    resizeHeight?: number;
    /** API key (alternative to Authorization header) */
    key?: string;
  };

  export const getScreenshotRequestSchema: Schema<GetScreenshotRequest> = s.lazySchema(() =>
    s.object<GetScreenshotRequest>({
      url: s.string().check(s.url()),
      format: s.defaulted(format1Schema, Format1.Png),
      width: s.defaulted(s.int().check(s.gte(320), s.lte(3840)), 1280),
      height: s.defaulted(s.int().check(s.gte(240), s.lte(2160)), 800),
      fullPage: s.defaulted(s.boolean(), false),
      quality: s.optional(s.int().check(s.gte(1), s.lte(100))),
      delay: s.defaulted(s.int().check(s.gte(0), s.lte(10000)), 0),
      darkMode: s.defaulted(s.boolean(), false),
      deviceScaleFactor: s.defaulted(s.float64().check(s.gte(1), s.lte(3)), 2),
      blockAds: s.defaulted(s.boolean(), true),
      timeout: s.defaulted(s.int().check(s.gte(5), s.lte(60)), 30),
      waitUntil: s.defaulted(waitUntil1Schema, WaitUntil1.Networkidle2),
      waitForSelector: s.optional(s.string().check(s.maxLength(500))),
      bestAttempt: s.defaulted(s.boolean(), true),
      selector: s.optional(s.string().check(s.maxLength(500))),
      device: s.optional(s.lazy(() => device1Schema)),
      blockCookieBanners: s.defaulted(s.boolean(), false),
      resizeWidth: s.optional(s.int().check(s.gte(16), s.lte(3840))),
      resizeHeight: s.optional(s.int().check(s.gte(16), s.lte(2160))),
      key: s.optional(s.string()),
    }),
  );

  export class GetScreenshotError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<GetScreenshotError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 408, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostScreenshotRequest = {
    body: ScreenshotRequest;
  };

  export class PostScreenshotError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostScreenshotError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 408, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type PostScreenshotJsonRequest = {
    body: ScreenshotRequest;
  };

  export class PostScreenshotJsonError extends ApiError {
    declare readonly payload:
      | Declared<"errorResponse", ErrorResponse>
      | Declared<"errorResponse2", ErrorResponse>
      | Declared<"errorResponse3", ErrorResponse>
      | Declared<"errorResponse4", ErrorResponse>
      | Declared<"errorResponse5", ErrorResponse>
      | Undeclared;

    static readonly errors: ErrorDecoders<PostScreenshotJsonError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 401, kind: "errorResponse2", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 408, kind: "errorResponse3", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 429, kind: "errorResponse4", decode: { kind: "json", schema: errorResponseSchema } },
      { on: 500, kind: "errorResponse5", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type RenderArtifactRequest = {
    body: V1ArtifactRequest;
  };

  export class RenderArtifactError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<RenderArtifactError> = [
      { on: 400, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }

  export type ServeRenderLinkRequest = {
    /** Signed params token */
    p: string;
    /** Owning account id */
    uid: string;
    /** Expiry (unix seconds) */
    exp: number;
    /** HMAC signature */
    sig: string;
  };

  export class ServeRenderLinkError extends ApiError {
    declare readonly payload: Declared<"errorResponse", ErrorResponse> | Undeclared;

    static readonly errors: ErrorDecoders<ServeRenderLinkError> = [
      { on: 403, kind: "errorResponse", decode: { kind: "json", schema: errorResponseSchema } },
    ];
  }
}
