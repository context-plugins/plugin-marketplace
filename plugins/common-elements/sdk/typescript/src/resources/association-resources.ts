import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1AssociationsDocumentsResponseSchema,
  type ApiV1AssociationsDocumentsResponse,
} from "../models/api-v1-associations-documents-response.js";
import {
  apiV1AssociationsFinancialsResponseSchema,
  type ApiV1AssociationsFinancialsResponse,
} from "../models/api-v1-associations-financials-response.js";
import {
  apiV1AssociationsGovernanceResponseSchema,
  type ApiV1AssociationsGovernanceResponse,
} from "../models/api-v1-associations-governance-response.js";
import {
  apiV1AssociationsHazardsResponseSchema,
  type ApiV1AssociationsHazardsResponse,
} from "../models/api-v1-associations-hazards-response.js";
import {
  apiV1AssociationsInsuranceResponseSchema,
  type ApiV1AssociationsInsuranceResponse,
} from "../models/api-v1-associations-insurance-response.js";
import {
  apiV1AssociationsLegalResponseSchema,
  type ApiV1AssociationsLegalResponse,
} from "../models/api-v1-associations-legal-response.js";
import {
  apiV1AssociationsParcelsResponseSchema,
  type ApiV1AssociationsParcelsResponse,
} from "../models/api-v1-associations-parcels-response.js";
import {
  apiV1AssociationsPermitsResponseSchema,
  type ApiV1AssociationsPermitsResponse,
} from "../models/api-v1-associations-permits-response.js";
import {
  apiV1AssociationsStructuresResponseSchema,
  type ApiV1AssociationsStructuresResponse,
} from "../models/api-v1-associations-structures-response.js";
import {
  apiV1AssociationsViolationsResponseSchema,
  type ApiV1AssociationsViolationsResponse,
} from "../models/api-v1-associations-violations-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

/**
 * Public record joined to one association: parcels, structures, permits, code enforcement, hazards,
 * insurance, legal, financials, governance and documents. Same request shape for every one, so a
 * client written against one works against all ten.
 */
export class AssociationResources {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Governing and recorded documents held for the association, with their source…
   *
   * @remarks
   * Governing and recorded documents held for the association, with their source and recording
   * date. Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationDocumentsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationDocuments(
    request: AssociationResources.ResourceAssociationDocumentsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsDocumentsResponse, AssociationResources.ResourceAssociationDocumentsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/documents"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsDocumentsResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationDocumentsError,
      },
      options,
    );
  }

  /**
   * Financial public record for the association, including IRS Form 990 filings…
   *
   * @remarks
   * Financial public record for the association, including IRS Form 990 filings where it files one.
   * Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationFinancialsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationFinancials(
    request: AssociationResources.ResourceAssociationFinancialsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1AssociationsFinancialsResponse,
    AssociationResources.ResourceAssociationFinancialsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/financials"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsFinancialsResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationFinancialsError,
      },
      options,
    );
  }

  /**
   * Governance record for the association: filings, officers over time, and…
   *
   * @remarks
   * Governance record for the association: filings, officers over time, and registered agent
   * history. Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationGovernanceError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationGovernance(
    request: AssociationResources.ResourceAssociationGovernanceRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1AssociationsGovernanceResponse,
    AssociationResources.ResourceAssociationGovernanceError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/governance"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsGovernanceResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationGovernanceError,
      },
      options,
    );
  }

  /**
   * Natural-hazard exposure for the association's location: recorded storm events…
   *
   * @remarks
   * Natural-hazard exposure for the association's location: recorded storm events and county-level
   * risk. Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationHazardsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationHazards(
    request: AssociationResources.ResourceAssociationHazardsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsHazardsResponse, AssociationResources.ResourceAssociationHazardsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/hazards"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsHazardsResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationHazardsError,
      },
      options,
    );
  }

  /**
   * Insurance-side public record touching the association, including coverage and…
   *
   * @remarks
   * Insurance-side public record touching the association, including coverage and carrier filings
   * where published. Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationInsuranceError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationInsurance(
    request: AssociationResources.ResourceAssociationInsuranceRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsInsuranceResponse, AssociationResources.ResourceAssociationInsuranceError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/insurance"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsInsuranceResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationInsuranceError,
      },
      options,
    );
  }

  /**
   * Litigation and legal history recorded against the association, and the counsel…
   *
   * @remarks
   * Litigation and legal history recorded against the association, and the counsel of record where
   * published. Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationLegalError} when the API answers with an
   * error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationLegal(
    request: AssociationResources.ResourceAssociationLegalRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsLegalResponse, AssociationResources.ResourceAssociationLegalError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/legal"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsLegalResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationLegalError,
      },
      options,
    );
  }

  /**
   * County parcel records matched to the association: the physical footprint behind…
   *
   * @remarks
   * County parcel records matched to the association: the physical footprint behind the corporate
   * record. Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationParcelsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationParcels(
    request: AssociationResources.ResourceAssociationParcelsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsParcelsResponse, AssociationResources.ResourceAssociationParcelsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/parcels"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsParcelsResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationParcelsError,
      },
      options,
    );
  }

  /**
   * Municipal building permits recorded against the association, with work type…
   *
   * @remarks
   * Municipal building permits recorded against the association, with work type, value and date.
   * Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationPermitsError} when the API answers with
   * an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationPermits(
    request: AssociationResources.ResourceAssociationPermitsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsPermitsResponse, AssociationResources.ResourceAssociationPermitsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/permits"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsPermitsResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationPermitsError,
      },
      options,
    );
  }

  /**
   * Building footprints and recorded structural characteristics for the…
   *
   * @remarks
   * Building footprints and recorded structural characteristics for the association's buildings.
   * Live description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationStructuresError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationStructures(
    request: AssociationResources.ResourceAssociationStructuresRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1AssociationsStructuresResponse,
    AssociationResources.ResourceAssociationStructuresError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/structures"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsStructuresResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationStructuresError,
      },
      options,
    );
  }

  /**
   * Code enforcement cases recorded against the association by the local…
   *
   * @remarks
   * Code enforcement cases recorded against the association by the local jurisdiction. Live
   * description, provenance and coverage caveat come from /api/v1/datasets.
   *
   * **Plan:** Row access is plan-gated per source; counts and coverage are returned at every plan
   * so the size of what is behind the gate is visible.
   *
   * - Read `meta.coverage` before treating an empty result as an absence. A resource can return
   *   zero rows because nothing happened, or because that jurisdiction is not matched yet, and
   *   those are different facts. The coverage caveat says which.
   *
   * @returns Success.
   *
   * @throws {@link AssociationResources.ResourceAssociationViolationsError} when the API answers
   * with an error status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  resourceAssociationViolations(
    request: AssociationResources.ResourceAssociationViolationsRequest,
    options?: RequestOptions,
  ): ApiPromise<
    ApiV1AssociationsViolationsResponse,
    AssociationResources.ResourceAssociationViolationsError
  > {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/violations"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
          { name: "source", value: request.source, schema: s.optional(s.string()) },
          { name: "since", value: request.since, schema: s.optional(s.dateOnly()) },
          { name: "until", value: request.until, schema: s.optional(s.dateOnly()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsViolationsResponseSchema },
        errorFactory: AssociationResources.ResourceAssociationViolationsError,
      },
      options,
    );
  }
}

export namespace AssociationResources {
  export type ResourceAssociationDocumentsRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationDocumentsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationDocumentsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationFinancialsRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationFinancialsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationFinancialsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationGovernanceRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationGovernanceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationGovernanceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationHazardsRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationHazardsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationHazardsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationInsuranceRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationInsuranceError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationInsuranceError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationLegalRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationLegalError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationLegalError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationParcelsRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationParcelsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationParcelsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationPermitsRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationPermitsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationPermitsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationStructuresRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationStructuresError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationStructuresError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type ResourceAssociationViolationsRequest = {
    /** Association id. */
    id: string;
    /**
     * Rows per page, 1-500 (default 50). Your plan's row cap and the source's own page ceiling can
     * only lower this; the response's `meta` block reports what was actually applied.
     */
    limit?: number;
    /** Pagination offset, 0-100000 (default 0). */
    offset?: number;
    /**
     * Narrow the read to one physical source behind the resource, e.g. `parcels.fl`. Source keys
     * are listed by /api/v1/datasets.
     */
    source?: string;
    /** Only records on or after this ISO date (YYYY-MM-DD). */
    since?: string;
    /** Only records on or before this ISO date (YYYY-MM-DD). */
    until?: string;
  };

  export class ResourceAssociationViolationsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<ResourceAssociationViolationsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
