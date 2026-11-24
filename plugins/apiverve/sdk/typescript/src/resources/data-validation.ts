import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import {
  v1CardvalidatorResponseSchema,
  type V1CardvalidatorResponse,
} from "../models/v1-cardvalidator-response.js";
import {
  v1DisposablephoneResponseSchema,
  type V1DisposablephoneResponse,
} from "../models/v1-disposablephone-response.js";
import {
  v1EmaildisposablecheckerResponseSchema,
  type V1EmaildisposablecheckerResponse,
} from "../models/v1-emaildisposablechecker-response.js";
import {
  v1EmailvalidatorResponseSchema,
  type V1EmailvalidatorResponse,
} from "../models/v1-emailvalidator-response.js";
import {
  v1PasswordstrengthResponseSchema,
  type V1PasswordstrengthResponse,
} from "../models/v1-passwordstrength-response.js";
import {
  v1PhonenumbervalidatorResponseSchema,
  type V1PhonenumbervalidatorResponse,
} from "../models/v1-phonenumbervalidator-response.js";
import {
  v1SeovalidatorRequestSchema,
  type V1SeovalidatorRequest,
} from "../models/v1-seovalidator-request.js";
import {
  v1SeovalidatorResponseSchema,
  type V1SeovalidatorResponse,
} from "../models/v1-seovalidator-response.js";
import {
  v1SpamdetectorRequestSchema,
  type V1SpamdetectorRequest,
} from "../models/v1-spamdetector-request.js";
import {
  v1SpamdetectorResponseSchema,
  type V1SpamdetectorResponse,
} from "../models/v1-spamdetector-response.js";
import {
  v1UsernameprofanityResponseSchema,
  type V1UsernameprofanityResponse,
} from "../models/v1-usernameprofanity-response.js";
import type { Servers } from "../servers.js";

export class DataValidation {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Card Validator
   *
   * @remarks
   * Validate a card number to ensure it is valid
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.CardvalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  cardvalidator(
    request: DataValidation.CardvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1CardvalidatorResponse, DataValidation.CardvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/cardvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "number", value: request.number, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1CardvalidatorResponseSchema },
        errorFactory: DataValidation.CardvalidatorError,
      },
      options,
    );
  }

  /**
   * Disposable Phone Number Checker
   *
   * @remarks
   * Checks whether a given phone number is a known disposable or temporary number from SMS
   * receiving services.
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.DisposablephoneError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  disposablephone(
    request: DataValidation.DisposablephoneRequest,
    options?: RequestOptions,
  ): ApiPromise<V1DisposablephoneResponse, DataValidation.DisposablephoneError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/disposablephone"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "phone", value: request.phone, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1DisposablephoneResponseSchema },
        errorFactory: DataValidation.DisposablephoneError,
      },
      options,
    );
  }

  /**
   * Disposable Email Checker
   *
   * @remarks
   * Check if an email address is disposable
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.EmaildisposablecheckerError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  emaildisposablechecker(
    request: DataValidation.EmaildisposablecheckerRequest,
    options?: RequestOptions,
  ): ApiPromise<V1EmaildisposablecheckerResponse, DataValidation.EmaildisposablecheckerError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/emaildisposablechecker"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "email", value: request.email, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1EmaildisposablecheckerResponseSchema },
        errorFactory: DataValidation.EmaildisposablecheckerError,
      },
      options,
    );
  }

  /**
   * Email Validator
   *
   * @remarks
   * Validate if an email address is valid and exists
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.EmailvalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  emailvalidator(
    request: DataValidation.EmailvalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1EmailvalidatorResponse, DataValidation.EmailvalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/emailvalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "email", value: request.email, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1EmailvalidatorResponseSchema },
        errorFactory: DataValidation.EmailvalidatorError,
      },
      options,
    );
  }

  /**
   * Password Strength
   *
   * @remarks
   * Check the strength of a password
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.PasswordstrengthError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  passwordstrength(
    request: DataValidation.PasswordstrengthRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PasswordstrengthResponse, DataValidation.PasswordstrengthError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/passwordstrength"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "password", value: request.password, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PasswordstrengthResponseSchema },
        errorFactory: DataValidation.PasswordstrengthError,
      },
      options,
    );
  }

  /**
   * Phone Number Validator
   *
   * @remarks
   * Validate a phone number
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.PhonenumbervalidatorError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  phonenumbervalidator(
    request: DataValidation.PhonenumbervalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1PhonenumbervalidatorResponse, DataValidation.PhonenumbervalidatorError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/phonenumbervalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [
          { name: "number", value: request.number, schema: s.string() },
          { name: "country", value: request.country, schema: s.string() },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1PhonenumbervalidatorResponseSchema },
        errorFactory: DataValidation.PhonenumbervalidatorError,
      },
      options,
    );
  }

  /**
   * SEO Quick Validator
   *
   * @remarks
   * Validate the SEO metrics of a web page
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.SeovalidatorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  seovalidator(
    request: DataValidation.SeovalidatorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SeovalidatorResponse, DataValidation.SeovalidatorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/seovalidator"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SeovalidatorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SeovalidatorResponseSchema },
        errorFactory: DataValidation.SeovalidatorError,
      },
      options,
    );
  }

  /**
   * Spam Detector
   *
   * @remarks
   * Detect spam in a body of text. Also utilize an email address or IP address to validate the
   * given text against the spam database
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.SpamdetectorError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  spamdetector(
    request: DataValidation.SpamdetectorRequest,
    options?: RequestOptions,
  ): ApiPromise<V1SpamdetectorResponse, DataValidation.SpamdetectorError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/spamdetector"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: v1SpamdetectorRequestSchema },
      },
      {
        success: { kind: "json", schema: v1SpamdetectorResponseSchema },
        errorFactory: DataValidation.SpamdetectorError,
      },
      options,
    );
  }

  /**
   * Username Profanity
   *
   * @remarks
   * Check if a username is inappropriate or profane
   *
   * @returns Successful Response
   *
   * @throws {@link DataValidation.UsernameprofanityError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link ApiVerveError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  usernameprofanity(
    request: DataValidation.UsernameprofanityRequest,
    options?: RequestOptions,
  ): ApiPromise<V1UsernameprofanityResponse, DataValidation.UsernameprofanityError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/usernameprofanity"),
        auth: this.#auth.apiKey,
        pathParams: [],
        query: [{ name: "username", value: request.username, schema: s.string() }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: v1UsernameprofanityResponseSchema },
        errorFactory: DataValidation.UsernameprofanityError,
      },
      options,
    );
  }
}

export namespace DataValidation {
  export type CardvalidatorRequest = {
    /** The card number to validate */
    number: string;
  };

  export class CardvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<CardvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type DisposablephoneRequest = {
    /** The phone number to check in E.164 format (e.g., +12085813945) */
    phone: string;
  };

  export class DisposablephoneError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<DisposablephoneError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EmaildisposablecheckerRequest = {
    /** The email address to check (e.g., support@myspace.com) */
    email: string;
  };

  export class EmaildisposablecheckerError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmaildisposablecheckerError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type EmailvalidatorRequest = {
    /** The email address to validate (e.g., support@myspace.com) */
    email: string;
  };

  export class EmailvalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<EmailvalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PasswordstrengthRequest = {
    /** The password to check the strength of */
    password: string;
  };

  export class PasswordstrengthError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PasswordstrengthError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type PhonenumbervalidatorRequest = {
    /** The phone number to validate */
    number: string;
    /** The country code of the phone number (e.g., us, uk) */
    country: string;
  };

  export class PhonenumbervalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<PhonenumbervalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SeovalidatorRequest = {
    body: V1SeovalidatorRequest;
  };

  export class SeovalidatorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SeovalidatorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type SpamdetectorRequest = {
    body: V1SpamdetectorRequest;
  };

  export class SpamdetectorError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<SpamdetectorError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }

  export type UsernameprofanityRequest = {
    /** The username to check if it is inappropriate or profane */
    username: string;
  };

  export class UsernameprofanityError extends ApiError {
    declare readonly payload:
      | Declared<"error401", undefined>
      | Declared<"error404", undefined>
      | Declared<"error500", undefined>
      | Undeclared;

    static readonly errors: ErrorDecoders<UsernameprofanityError> = [
      { on: 401, kind: "error401", decode: { kind: "empty" } },
      { on: 404, kind: "error404", decode: { kind: "empty" } },
      { on: 500, kind: "error500", decode: { kind: "empty" } },
    ];
  }
}
