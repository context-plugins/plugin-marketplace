import type { AuthSchemes } from "../auth-schemes.js";
import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import * as s from "../core/validation/index.js";
import {
  apiV1AssociationsBuildingSafetyResponseSchema,
  type ApiV1AssociationsBuildingSafetyResponse,
} from "../models/api-v1-associations-building-safety-response.js";
import {
  apiV1AssociationsBuildingsResponseSchema,
  type ApiV1AssociationsBuildingsResponse,
} from "../models/api-v1-associations-buildings-response.js";
import {
  apiV1AssociationsByAddressResponseSchema,
  type ApiV1AssociationsByAddressResponse,
} from "../models/api-v1-associations-by-address-response.js";
import {
  apiV1AssociationsLookupResponseSchema,
  type ApiV1AssociationsLookupResponse,
} from "../models/api-v1-associations-lookup-response.js";
import {
  apiV1AssociationsManagementResponseSchema,
  type ApiV1AssociationsManagementResponse,
} from "../models/api-v1-associations-management-response.js";
import {
  apiV1AssociationsMatchResponseSchema,
  type ApiV1AssociationsMatchResponse,
} from "../models/api-v1-associations-match-response.js";
import {
  apiV1AssociationsNearbyResponseSchema,
  type ApiV1AssociationsNearbyResponse,
} from "../models/api-v1-associations-nearby-response.js";
import {
  apiV1AssociationsOfficersResponseSchema,
  type ApiV1AssociationsOfficersResponse,
} from "../models/api-v1-associations-officers-response.js";
import {
  apiV1AssociationsResponseSchema,
  type ApiV1AssociationsResponse,
} from "../models/api-v1-associations-response.js";
import {
  apiV1AssociationsRiskResponseSchema,
  type ApiV1AssociationsRiskResponse,
} from "../models/api-v1-associations-risk-response.js";
import {
  apiV1AssociationsVendorsResponseSchema,
  type ApiV1AssociationsVendorsResponse,
} from "../models/api-v1-associations-vendors-response.js";
import { errorInternalSchema, type Error } from "../models/error.js";
import type { Servers } from "../servers.js";

export class Associations {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;
  readonly #auth: AuthSchemes;

  constructor(rawClient: RawClient, servers: Servers, auth: AuthSchemes) {
    this.#rawClient = rawClient;
    this.#servers = servers;
    this.#auth = auth;
  }

  /**
   * Everything on public record about an association’s physical buildings, joined…
   *
   * @remarks
   * Everything on public record about an association’s physical buildings, joined into one call:
   * Florida SIRS filings, county milestone/recertification rolls, elevator certificates, pool
   * inspections, parcel building characteristics, and HUD FHA condo approval. The structural
   * sibling of the risk endpoint, which reports county-level FEMA hazard instead.
   *
   * - Coverage is uneven by design: county recertification rolls are Miami-Dade and Broward only,
   *   SIRS is Florida condo, HUD FHA is national. Branch on has_data and layer_counts. An absent
   *   record means nothing was filed with a source we ingest, not that the association is
   *   compliant.
   * - Arrays are truncated at 500 rows per layer. The example above shows the arrays empty for
   *   brevity; live responses carry the rows.
   * - Reference data only, not a structural determination. Confirm anything load-bearing with a
   *   licensed engineer.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsBuildingSafetyError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsBuildingSafety(
    request: Associations.AssociationsBuildingSafetyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsBuildingSafetyResponse, Associations.AssociationsBuildingSafetyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/building-safety"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsBuildingSafetyResponseSchema },
        errorFactory: Associations.AssociationsBuildingSafetyError,
      },
      options,
    );
  }

  /**
   * Building footprint, roof/facade area estimates, floor count, and recorded…
   *
   * @remarks
   * Building footprint, roof/facade area estimates, floor count, and recorded structural facts
   * (measured stories, year built, FL Ch. 553 milestone relevance) for an association, derived from
   * mapped building outlines and county parcel rolls.
   *
   * - Requires the "valuations" scope, not "associations" — the one endpoint in this group that
   *   does.
   * - Footprint coverage is uneven outside FL/NC/MA/NY/WI; a low building_count can mean sparse
   *   mapping, not a small property. Recorded structural facts (stories, year_built,
   *   milestone_inspection_relevant) are Florida-only today.
   * - Reference data only. Confirm anything load-bearing with a licensed engineer.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsBuildingsError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsBuildings(
    request: Associations.AssociationsBuildingsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsBuildingsResponse, Associations.AssociationsBuildingsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/buildings"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsBuildingsResponseSchema },
        errorFactory: Associations.AssociationsBuildingsError,
      },
      options,
    );
  }

  /**
   * Resolve a property address to the association that governs it
   *
   * @remarks
   * Resolve a property address to the association that governs it. Dedicated parcel-backed contract
   * for a book of property addresses. /associations/match and /lookup also route a street-shaped q
   * through this same resolve path so an address is never scored as a name.
   *
   * - Coverage is real but not complete everywhere: this only returns a hit where a parcel has
   *   already been deterministically linked to an association. An empty result includes a hint
   *   pointing at /associations/match as a name-based fallback. It does not mean the property has
   *   no association, only that we do not have the link yet.
   * - Nothing here is a guess made at request time. A result is always a parcel a matcher already
   *   linked to an organization, never a fuzzy score computed on the fly — which is what makes
   *   /match the wrong tool for this and this the wrong tool for a bare name.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsByAddressError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsByAddress(
    request: Associations.AssociationsByAddressRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsByAddressResponse, Associations.AssociationsByAddressError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/by-address"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "address", value: request.address, schema: s.string() },
          { name: "zip", value: request.zip, schema: s.string() },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsByAddressResponseSchema },
        errorFactory: Associations.AssociationsByAddressError,
      },
      options,
    );
  }

  /**
   * The core record for one association: identity, location, registration status…
   *
   * @remarks
   * The core record for one association: identity, location, registration status, and
   * management-firm-of-record, in one call. The starting point once you have an id from lookup,
   * match, or nearby.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsDetailError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsDetail(
    request: Associations.AssociationsDetailRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsResponse, Associations.AssociationsDetailError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsResponseSchema },
        errorFactory: Associations.AssociationsDetailError,
      },
      options,
    );
  }

  /**
   * Browse and filter community associations by state, county, subtype or…
   *
   * @remarks
   * Browse and filter community associations by state, county, subtype or registration number. For
   * a name, `q` is a literal SUBSTRING filter: it matches only when your text appears verbatim in
   * the filed corporate name, so "SUNSET RIDGE CONDO ASSN" will not find "Sunset Ridge Condominium
   * Association, Inc.". If you are reconciling names from your own system, use
   * /api/v1/associations/match instead. If `q` is a street address, the request is resolved against
   * linked parcels (same path as /associations/by-address) rather than as a name substring. Use
   * lookup when you hold an exact key: a registration number, or a real substring of the filed
   * name.
   *
   * **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsLookupError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsLookup(
    request: Associations.AssociationsLookupRequest = {},
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsLookupResponse, Associations.AssociationsLookupError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/lookup"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.optional(s.string()) },
          { name: "state", value: request.state, schema: s.optional(s.string()) },
          { name: "subtype", value: request.subtype, schema: s.optional(s.string()) },
          { name: "county", value: request.county, schema: s.optional(s.string()) },
          { name: "registration_number", value: request.registrationNumber, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
          { name: "offset", value: request.offset, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsLookupResponseSchema },
        errorFactory: Associations.AssociationsLookupError,
      },
      options,
    );
  }

  /**
   * Who manages this association
   *
   * @remarks
   * Who manages this association. `best` is the strongest management company on file and `sources`
   * is every public-record source that names one (state condo and HOA filings, management
   * certificates, CAM licensing records, registered agents), best first. The public association
   * page and data.commonelements.com read the same rows. Any management relationship confirmed on
   * the platform itself comes back separately.
   *
   * - Coverage is by state: Florida, Texas, Nevada, Utah, Virginia and Arizona. About a quarter of
   *   Florida associations and about a tenth nationally have a management company on file. Outside
   *   those states an empty result says nothing about whether the association is managed.
   * - Treat `inferred: true` as likely, not as fact. Those rows come from a match we made (a
   *   licensed firm's office address or email domain), not from a filing that names the firm.
   * - The public-record rows and confirmed_relationships can disagree, and that is meaningful:
   *   sources reflect the filings, confirmed_relationships reflects what the platform's own users
   *   have confirmed. Treat `best` as the source of record when they differ.
   * - Both empty means no manager is on record at all, which for a professionally-managed
   *   association usually means self-managed or an unfiled change.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsManagementError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsManagement(
    request: Associations.AssociationsManagementRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsManagementResponse, Associations.AssociationsManagementError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/management"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsManagementResponseSchema },
        errorFactory: Associations.AssociationsManagementError,
      },
      options,
    );
  }

  /**
   * Fuzzy name matching for entity resolution: given a messy association name from…
   *
   * @remarks
   * Fuzzy name matching for entity resolution: given a messy association name from your own system,
   * get back the best-matching Common Elements records with a similarity score. Use this to
   * reconcile a book of business against the directory, where an exact-string lookup would miss
   * "Pelican Bay Comm. Assn." against "PELICAN BAY COMMUNITY ASSOCIATION, INC.". If `q` is a street
   * address (house number, city, state, ZIP), the request is resolved against linked parcels
   * instead of names, the same path as /associations/by-address. Name-scoring an address attaches
   * the wrong community.
   *
   * - Similarity is trigram-based, so word order matters less than shared character runs. A score
   *   above roughly 0.45 is usually a confident match; between 0.25 and 0.45, review before
   *   merging.
   * - If q looks like a street address, the response includes resolved_via: "address" and
   *   match_confidence of exact or building. Those rows are parcel links, not name guesses. An
   *   empty list means we do not have that address linked yet. Address-shaped q never falls through
   *   to name matching.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsMatchError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsMatch(
    request: Associations.AssociationsMatchRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsMatchResponse, Associations.AssociationsMatchError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/match"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "q", value: request.q, schema: s.string() },
          { name: "state", value: request.state, schema: s.string() },
          { name: "county", value: request.county, schema: s.optional(s.string()) },
          { name: "min_similarity", value: request.minSimilarity, schema: s.optional(s.float64()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsMatchResponseSchema },
        errorFactory: Associations.AssociationsMatchError,
      },
      options,
    );
  }

  /**
   * Find associations within a radius of a coordinate, sorted nearest first
   *
   * @remarks
   * Find associations within a radius of a coordinate, sorted nearest first. Built for "what
   * communities are around this property" workflows: territory planning, route density for a
   * service vendor, or comparable-community selection.
   *
   * **Plan:** Free keys: up to 50 rows per request; paid tiers raise the cap.
   *
   * - Only associations with recorded coordinates are searchable here. Coverage of geocoded records
   *   varies by state, so an empty result is not proof no association exists at that location.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsNearbyError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsNearby(
    request: Associations.AssociationsNearbyRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsNearbyResponse, Associations.AssociationsNearbyError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/nearby"),
        auth: this.#auth.bearerAuth,
        pathParams: [],
        query: [
          { name: "lat", value: request.lat, schema: s.float64() },
          { name: "lng", value: request.lng, schema: s.float64() },
          { name: "radius_km", value: request.radiusKm, schema: s.optional(s.float64()) },
          { name: "subtype", value: request.subtype, schema: s.optional(s.string()) },
          { name: "limit", value: request.limit, schema: s.optional(s.float64()) },
        ],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsNearbyResponseSchema },
        errorFactory: Associations.AssociationsNearbyError,
      },
      options,
    );
  }

  /**
   * The current board/officer roster on file for an association, from state officer…
   *
   * @remarks
   * The current board/officer roster on file for an association, from state officer filings.
   * Coverage is strongest in the eight states with published officer rolls. Board-turnover events
   * on the change feed come from diffing successive snapshots of this roster, so they currently
   * exist only for the states that have had more than one snapshot.
   *
   * - This is the current roster only. For board history over time (who served when, and each
   *   turnover as an event), use data.commonelements.com or the change feed's board_turnover /
   *   officer_* events.
   * - An empty array means no officer filing is on record for this association, not necessarily
   *   that the board has vacancies.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsOfficersError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsOfficers(
    request: Associations.AssociationsOfficersRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsOfficersResponse, Associations.AssociationsOfficersError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/officers"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsOfficersResponseSchema },
        errorFactory: Associations.AssociationsOfficersError,
      },
      options,
    );
  }

  /**
   * Retrieve flood zone, reserve-study health, and geographic risk signals for a…
   *
   * @remarks
   * Retrieve flood zone, reserve-study health, and geographic risk signals for a specific
   * association. Useful for underwriting, due diligence, and loan origination workflows.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsRiskError} when the API answers with an error status —
   * narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsRisk(
    request: Associations.AssociationsRiskRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsRiskResponse, Associations.AssociationsRiskError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/risk"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsRiskResponseSchema },
        errorFactory: Associations.AssociationsRiskError,
      },
      options,
    );
  }

  /**
   * The vendors and service providers an association is on record working with…
   *
   * @remarks
   * The vendors and service providers an association is on record working with, from confirmed
   * relationship edges in the Common Elements graph. Answers "who already services this community"
   * before you bid against them or refer into them.
   *
   * - Only confirmed, active relationships appear. An empty array means no vendor edge is recorded,
   *   not that the association self-performs the work.
   *
   * @returns Success.
   *
   * @throws {@link Associations.AssociationsVendorsError} when the API answers with an error status
   * — narrow on `err.payload.kind`
   *
   * @throws {@link CommonElementsError} when no usable response was produced: a connection failure,
   * a timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  associationsVendors(
    request: Associations.AssociationsVendorsRequest,
    options?: RequestOptions,
  ): ApiPromise<ApiV1AssociationsVendorsResponse, Associations.AssociationsVendorsError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/api/v1/associations/{id}/vendors"),
        auth: this.#auth.bearerAuth,
        pathParams: [{ name: "id", value: request.id, schema: s.string() }],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: apiV1AssociationsVendorsResponseSchema },
        errorFactory: Associations.AssociationsVendorsError,
      },
      options,
    );
  }
}

export namespace Associations {
  export type AssociationsBuildingSafetyRequest = {
    /** Association UUID. */
    id: string;
  };

  export class AssociationsBuildingSafetyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsBuildingSafetyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsBuildingsRequest = {
    /** Association id. */
    id: string;
  };

  export class AssociationsBuildingsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsBuildingsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsByAddressRequest = {
    /** Street address, minimum 3 characters. Unit numbers are fine — see match_confidence below. */
    address: string;
    /**
     * 5-digit ZIP or ZIP+4. A 4-digit ZIP (leading zero dropped by Excel) is padded. Matching is
     * scoped to the ZIP.
     */
    zip: string;
    /** Max candidates to return, 1 to 5 (default 3). */
    limit?: number;
  };

  export class AssociationsByAddressError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsByAddressError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsDetailRequest = {
    /** Association id. */
    id: string;
  };

  export class AssociationsDetailError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsDetailError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsLookupRequest = {
    /**
     * Exact substring of the filed corporate name, case-insensitive. Not fuzzy; for messy names use
     * /associations/match. A street address (with ZIP) is resolved as an address, not as a name.
     */
    q?: string;
    /** Two-letter state filter, e.g. "FL". */
    state?: string;
    /** One of "hoa", "condo", "coop". */
    subtype?: string;
    /** County filter, case-insensitive, e.g. "Broward" or "Pima". */
    county?: string;
    /**
     * Exact state registry corp/document number (Sunbiz document number, ACC entity id, ...),
     * case-insensitive. Returned as external_document_number.
     */
    registrationNumber?: string;
    /** Max results to return (default 20, max 100; free tier is clamped lower). */
    limit?: number;
    /** Pagination offset (default 0). */
    offset?: number;
  };

  export class AssociationsLookupError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsLookupError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsManagementRequest = {
    /** Association id. */
    id: string;
  };

  export class AssociationsManagementError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsManagementError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsMatchRequest = {
    /**
     * The name to match, minimum 3 characters. A street address (with ZIP) is resolved as an
     * address, not as a name.
     */
    q: string;
    /** Two-letter state code. Required; matching is scoped per state. */
    state: string;
    /** Optional county filter, case-insensitive. */
    county?: string;
    /** Trigram similarity floor, 0.1 to 0.99 (default 0.25). Raise it for stricter matches. */
    minSimilarity?: number;
    /** Max candidates to return, 1 to 10 (default 5). */
    limit?: number;
  };

  export class AssociationsMatchError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsMatchError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsNearbyRequest = {
    /** Latitude, -90 to 90. */
    lat: number;
    /** Longitude, -180 to 180. */
    lng: number;
    /** Search radius in kilometres, 0.1 to 50 (default 2). */
    radiusKm?: number;
    /** One of "hoa", "condo", "coop". */
    subtype?: string;
    /** Max results, 1 to 50 (default 20). */
    limit?: number;
  };

  export class AssociationsNearbyError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsNearbyError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsOfficersRequest = {
    /** Association id. */
    id: string;
  };

  export class AssociationsOfficersError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsOfficersError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsRiskRequest = {
    /** Association ID from the lookup endpoint. */
    id: string;
  };

  export class AssociationsRiskError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsRiskError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }

  export type AssociationsVendorsRequest = {
    /** Association UUID. */
    id: string;
  };

  export class AssociationsVendorsError extends ApiError {
    declare readonly payload:
      | Declared<"error", Error>
      | Declared<"error2", Error>
      | Declared<"error3", Error>
      | Declared<"error4", Error>
      | Declared<"error5", Error>
      | Declared<"error6", Error>
      | Undeclared;

    static readonly errors: ErrorDecoders<AssociationsVendorsError> = [
      { on: 400, kind: "error", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 401, kind: "error2", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 403, kind: "error3", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 404, kind: "error4", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 429, kind: "error5", decode: { kind: "json", schema: errorInternalSchema } },
      { on: 500, kind: "error6", decode: { kind: "json", schema: errorInternalSchema } },
    ];
  }
}
