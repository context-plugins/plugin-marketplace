import { ApiError, type Declared, type Undeclared } from "../core/api-error.js";
import type { ApiPromise } from "../core/api-promise.js";
import type { RequestOptions } from "../core/api-request.js";
import { noneAuth } from "../core/auth/schemes.js";
import type { RawClient } from "../core/raw-client.js";
import type { ErrorDecoders } from "../core/response-decoder.js";
import { uuid } from "../core/uuid.js";
import * as s from "../core/validation/index.js";
import { httpValidationErrorSchema, type HttpValidationError } from "../models/http-validation-error.js";
import { xApiKeySchema, type XApiKey } from "../models/unions/xapi-key.js";
import {
  xRapidapiProxySecretSchema,
  type XRapidapiProxySecret,
} from "../models/unions/xrapidapi-proxy-secret.js";
import { xRapidapiUserSchema, type XRapidapiUser } from "../models/unions/xrapidapi-user.js";
import type { Servers } from "../servers.js";

export class Robot {
  readonly #rawClient: RawClient;
  readonly #servers: Servers;

  constructor(rawClient: RawClient, servers: Servers) {
    this.#rawClient = rawClient;
    this.#servers = servers;
  }

  /**
   * V1 Anchor Daily
   *
   * @remarks
   * L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free & batched
   * via RFC 3161): a durable, tamper-evident record of what Dynamic Feed reported. Anchors on first
   * call (idempotent), then returns the proof. ?date=YYYY-MM-DD; keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link Robot.V1AnchorDailyV1AnchorDailyGetError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AnchorDailyV1AnchorDailyGet(
    request: Robot.V1AnchorDailyV1AnchorDailyGetRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Robot.V1AnchorDailyV1AnchorDailyGetError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/anchor/daily"),
        auth: noneAuth,
        pathParams: [],
        query: [{ name: "date", value: request.date, schema: s.optional(s.string()) }],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Robot.V1AnchorDailyV1AnchorDailyGetError,
      },
      options,
    );
  }

  /**
   * V1 Anchor Upgrade
   *
   * @remarks
   * Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a
   * legacy OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."}
   * (legacy {"proof_ots_b64": "..."} still accepted).
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AnchorUpgradeV1AnchorUpgradePost(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/anchor/upgrade"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Anchor
   *
   * @remarks
   * Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp
   * token proving the record existed at time T, independently verifiable, even against us. Body:
   * {"snapshot": {...}} (its canonical SHA-256 is timestamped) or {"digest_hex": ""}. Hashes ONLY,
   * never data. Off the verdict hot path (Rung C).
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AnchorV1AnchorPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/anchor"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Awareness
   *
   * @remarks
   * Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the
   * grounded facts behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location.
   * NEVER blocks: the feeds fan out under a hard deadline and any laggard is dropped with the
   * snapshot flagged `degraded` (fail-safe → the verdict can never be `go` when degraded, it floors
   * to `caution`). Keyless in v1.
   *
   * Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
   * "max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with
   * Ed25519 (Rung B) · verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST
   * /v1/anchor (Rung C).
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1AwarenessV1AwarenessPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/awareness"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Humanoid
   *
   * @remarks
   * Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot
   * working AMONG PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution /
   * no-go verdict fused from wind (topple risk, high centre of mass), precipitation (slip/footing),
   * temperature (ice underfoot + actuator/battery envelope), air quality (tighter, people nearby)
   * and nearby earthquakes · Ed25519-signed, hard-deadline (never hangs; degraded floors to
   * caution). ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety certification
   * and NOT a guarantee it is safe to act; the robot's own stack owns every action. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1HumanoidV1HumanoidPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/humanoid"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Marine
   *
   * @remarks
   * Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
   * {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live
   * significant WAVE HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy,
   * geomagnetic activity (GPS/comms) and nearby earthquakes (tsunami) · Ed25519-signed,
   * hard-deadline (never hangs; degraded floors to caution). Inland points simply omit the
   * sea-state factor. ADVISORY EVIDENCE only: not a safety certification and not a claim it is safe
   * to sail; the vessel's own stack owns every action. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1MarineV1MarinePost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/marine"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Preflight
   *
   * @remarks
   * Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
   * {"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off
   * verdict fused from wind & weather, air quality, space weather (GPS/comms integrity) and nearby
   * hazards · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1PreflightV1PreflightPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/preflight"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Road
   *
   * @remarks
   * Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for
   * class=ground. POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go
   * verdict fused from weather, air quality and nearby earthquakes/hazards along the route ·
   * signed, never hangs. Keyless.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1RoadV1RoadPost(options?: RequestOptions): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/road"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [{ name: "Idempotency-Key", value: uuid(), schema: s.string() }],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Robot Receipt Sample
   *
   * @remarks
   * A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision
   * (an aerial robot told CAUTION on degraded GPS, which held). Verify it in-browser via
   * /verify.js, then flip a byte and watch verification fail. Advisory evidence only: not a safety
   * system.
   *
   * @returns Successful Response
   *
   * @throws {@link ApiError} when the API answers with an error status
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1RobotReceiptSampleV1RobotReceiptSampleGet(
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, ApiError> {
    return this.#rawClient.execute(
      {
        method: "GET",
        urlTemplate: this.#servers.default("/v1/robot-receipt/sample"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: ApiError,
      },
      options,
    );
  }

  /**
   * V1 Robot Receipt
   *
   * @remarks
   * WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot
   * was told and which model/policy decided, at the moment it acted. Ed25519-signed,
   * transparency-logged, RFC 3161 timestampable. Privacy by CONSTRUCTION: the caller hashes the
   * decision inputs (sensor/awareness context) LOCALLY and sends ONLY a fixed-length sha256 +
   * non-PII labels. Body: {"robot_class": "ground|aerial|marine|orbital|humanoid", "model_id": "",
   * "verdict": "go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a
   * prior /v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key
   * co-signature. Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision
   * record existed and is intact (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify
   * the action was safe/correct/ lawful, is NOT a safety system, and is NOT the actuator (the
   * robot's own certified safety layer decides). Profile of receipt/v1. Anchor via POST /v1/anchor.
   *
   * @returns Successful Response
   *
   * @throws {@link Robot.V1RobotReceiptV1RobotReceiptPostError} when the API answers with an error
   * status — narrow on `err.payload.kind`
   *
   * @throws {@link DynamicFeedError} when no usable response was produced: a connection failure, a
   * timeout, a body that would not decode, a value that would not encode, or a credential that
   * could not be obtained
   */
  v1RobotReceiptV1RobotReceiptPost(
    request: Robot.V1RobotReceiptV1RobotReceiptPostRequest = {},
    options?: RequestOptions,
  ): ApiPromise<Record<string, unknown>, Robot.V1RobotReceiptV1RobotReceiptPostError> {
    return this.#rawClient.execute(
      {
        method: "POST",
        urlTemplate: this.#servers.default("/v1/robot-receipt"),
        auth: noneAuth,
        pathParams: [],
        query: [],
        headers: [
          { name: "x-api-key", value: request.xApiKey, schema: s.optional(s.lazy(() => xApiKeySchema)) },
          {
            name: "x-rapidapi-proxy-secret",
            value: request.xRapidapiProxySecret,
            schema: s.optional(s.lazy(() => xRapidapiProxySecretSchema)),
          },
          {
            name: "x-rapidapi-user",
            value: request.xRapidapiUser,
            schema: s.optional(s.lazy(() => xRapidapiUserSchema)),
          },
          { name: "Idempotency-Key", value: uuid(), schema: s.string() },
        ],
        body: { kind: "empty" },
      },
      {
        success: { kind: "json", schema: s.record(s.string(), s.unknown()) },
        errorFactory: Robot.V1RobotReceiptV1RobotReceiptPostError,
      },
      options,
    );
  }
}

export namespace Robot {
  export type V1AnchorDailyV1AnchorDailyGetRequest = {
    date?: string;
  };

  export class V1AnchorDailyV1AnchorDailyGetError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1AnchorDailyV1AnchorDailyGetError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }

  export type V1RobotReceiptV1RobotReceiptPostRequest = {
    xApiKey?: XApiKey;
    xRapidapiProxySecret?: XRapidapiProxySecret;
    xRapidapiUser?: XRapidapiUser;
  };

  export class V1RobotReceiptV1RobotReceiptPostError extends ApiError {
    declare readonly payload: Declared<"httpValidationError", HttpValidationError> | Undeclared;

    static readonly errors: ErrorDecoders<V1RobotReceiptV1RobotReceiptPostError> = [
      { on: 422, kind: "httpValidationError", decode: { kind: "json", schema: httpValidationErrorSchema } },
    ];
  }
}
