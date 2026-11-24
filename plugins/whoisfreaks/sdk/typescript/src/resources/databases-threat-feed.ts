import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { BinaryContent } from "../core/binary.js";
import type { RawClient } from "../core/raw-client.js";
import * as s from "../core/validation/index.js";
import type { Servers } from "../servers.js";

export class DatabasesThreatFeed {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Download the daily malware threat feed (CSV)
   *
   * @returns Malware threat feed as CSV
   * (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadThreatFeedMalware(
    request: DatabasesThreatFeed.DownloadThreatFeedMalwareRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/download/threat-feed/malware"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download a sample of the malware threat feed (CSV)
   *
   * @returns Sample malware threat feed as CSV
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadThreatFeedMalwareSample(options?: RequestOptions): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/download/threat-feed/malware/sample"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download the daily phishing threat feed (CSV)
   *
   * @returns Phishing threat feed as CSV
   * (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadThreatFeedPhishing(
    request: DatabasesThreatFeed.DownloadThreatFeedPhishingRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/download/threat-feed/phishing"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download a sample of the phishing threat feed (CSV)
   *
   * @returns Sample phishing threat feed as CSV
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadThreatFeedPhishingSample(options?: RequestOptions): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/download/threat-feed/phishing/sample"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download the daily spam threat feed (CSV)
   *
   * @returns Spam threat feed as CSV
   * (domain,threat_type,confidence,first_seen,last_seen,No_of_threat_matched_pivots)
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadThreatFeedSpam(
    request: DatabasesThreatFeed.DownloadThreatFeedSpamRequest = {},
    options?: RequestOptions,
  ): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/download/threat-feed/spam"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Download a sample of the spam threat feed (CSV)
   *
   * @returns Sample spam threat feed as CSV
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link WhoisFreaksError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  downloadThreatFeedSpamSample(options?: RequestOptions): ApiPromise<BinaryContent, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v3.4/download/threat-feed/spam/sample"),
        auth: this.#auth.apiKeyAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "binary", contentType: "application/octet-stream" },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace DatabasesThreatFeed {
  export type DownloadThreatFeedMalwareRequest = {
    /** Feed date (yyyy-MM-dd); defaults to latest available */
    date?: string;
  };

  export type DownloadThreatFeedPhishingRequest = {
    /** Feed date (yyyy-MM-dd); defaults to latest available */
    date?: string;
  };

  export type DownloadThreatFeedSpamRequest = {
    /** Feed date (yyyy-MM-dd); defaults to latest available */
    date?: string;
  };
}
