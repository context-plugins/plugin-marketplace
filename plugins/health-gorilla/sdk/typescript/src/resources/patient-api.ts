import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { bundleSchema, type Bundle } from "../models/bundle.js";
import { operationOutcomeSchema, type OperationOutcome } from "../models/operation-outcome.js";
import { patientSchema, type Patient } from "../models/patient.js";
import type { Servers } from "../servers.js";

/**
 * Patient demographics and patient-scoped record retrieval.
 */
export class PatientApi {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Create a Patient resource
   *
   * @returns Created
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  createPatient(
    request: PatientApi.CreatePatientRequest,
    options?: RequestOptions,
  ): ApiPromise<Patient, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/Patient"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patientSchema },
      },
      {
        success: { kind: "json", schema: patientSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Retrieve all records for a patient
   *
   * @remarks
   * FHIR $everything operation returning a Bundle of all resources in the patient compartment,
   * including federated records retrieved across the national exchange network.
   *
   * @returns A FHIR Bundle of patient-scoped resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  patientEverything(
    request: PatientApi.PatientEverythingRequest,
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Patient/{id}/$everything"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Read a Patient resource by id
   *
   * @returns OK
   *
   * @throws {@link PatientApi.ReadPatientError} when the API answers with an error status — narrow
   * on `err.payload.kind`
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  readPatient(
    request: PatientApi.ReadPatientRequest,
    options?: RequestOptions,
  ): ApiPromise<Patient, PatientApi.ReadPatientError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Patient/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: patientSchema },
        errorFactory: PatientApi.ReadPatientError,
      },
      options,
    );
  }

  /**
   * Search Patient resources
   *
   * @returns A FHIR Bundle of matching Patient resources.
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  searchPatients(
    request: PatientApi.SearchPatientsRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Bundle, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/Patient"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "identifier", value: request.identifier, schema: s.optional(s.string()) },
          { name: "name", value: request.name, schema: s.optional(s.string()) },
          { name: "birthdate", value: request.birthdate, schema: s.optional(s.dateOnly()) },
          { name: "gender", value: request.gender, schema: s.optional(s.string()) },
          { name: "_count", value: request.count, schema: s.optional(s.int()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: bundleSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * Update a Patient resource
   *
   * @returns OK
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link HealthGorillaError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  updatePatient(
    request: PatientApi.UpdatePatientRequest,
    options?: RequestOptions,
  ): ApiPromise<Patient, ApiError> {
    return this.#rawClient.execute(
      {
        method: "PUT",
        urlTemplate: this.#servers.default("/Patient/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "json", value: request.body, schema: patientSchema },
      },
      {
        success: { kind: "json", schema: patientSchema },
        errorFactory: ApiError,
      },
      options,
    );
  }
}

export namespace PatientApi {
  export type CreatePatientRequest = {
    body: Patient;
  };

  export type PatientEverythingRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export type ReadPatientRequest = {
    /** The logical id of the resource. */
    id: string;
  };

  export class ReadPatientError extends ApiError {
    declare readonly payload: Declared<"operationOutcome", OperationOutcome> | Undeclared;

    static readonly errors: ErrorDecoders<ReadPatientError> = [
      { on: 404, kind: "operationOutcome", decode: { kind: "json", schema: operationOutcomeSchema } },
    ];
  }

  export type SearchPatientsRequest = {
    /** A resource identifier (system|value). */
    identifier?: string;
    /** A portion of the name. */
    name?: string;
    birthdate?: string;
    gender?: string;
    /** Number of results per page. */
    count?: number;
  };

  export type UpdatePatientRequest = {
    /** The logical id of the resource. */
    id: string;
    body: Patient;
  };
}
