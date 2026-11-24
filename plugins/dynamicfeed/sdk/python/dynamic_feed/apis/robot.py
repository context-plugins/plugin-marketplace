from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.v1_anchor_daily_v1_anchor_daily_get_error import (
    V1AnchorDailyV1AnchorDailyGetErrorBody,
    v1_anchor_daily_v1_anchor_daily_get_error_mapper,
)
from ..errors.v1_robot_receipt_v1_robot_receipt_post_error import (
    V1RobotReceiptV1RobotReceiptPostErrorBody,
    v1_robot_receipt_v1_robot_receipt_post_error_mapper,
)
from ..server.server import Server


class Robot:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = RobotWithRawResponse(client, server)

    def v1_anchor_daily_v1_anchor_daily_get(
        self, *, date: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free & batched via RFC 3161):
        a durable, tamper-evident record of what Dynamic Feed reported. Anchors on first call (idempotent), then returns
        the proof. ?date=YYYY-MM-DD; keyless.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_anchor_daily_v1_anchor_daily_get(date=date, request_options=request_options)
        )

    def v1_anchor_upgrade_v1_anchor_upgrade_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a legacy
        OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."} (legacy {"proof_ots_b64":
        "..."} still accepted).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_anchor_upgrade_v1_anchor_upgrade_post(request_options=request_options))

    def v1_anchor_v1_anchor_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp token proving
        the record existed at time T, independently verifiable, even against us. Body: {"snapshot": {...}} (its
        canonical SHA-256 is timestamped) or {"digest_hex": ""}. Hashes ONLY, never data. Off the verdict hot path (Rung
        C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_anchor_v1_anchor_post(request_options=request_options))

    def v1_awareness_v1_awareness_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the grounded facts
        behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location. NEVER blocks: the feeds fan out
        under a hard deadline and any laggard is dropped with the snapshot flagged ``degraded`` (fail-safe → the verdict
        can never be ``go`` when degraded, it floors to ``caution``). Keyless in v1.

        Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
        "max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with Ed25519 (Rung B) ·
        verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST /v1/anchor (Rung C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_awareness_v1_awareness_post(request_options=request_options))

    def v1_humanoid_v1_humanoid_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot working AMONG
        PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from wind
        (topple risk, high centre of mass), precipitation (slip/footing), temperature (ice underfoot + actuator/battery
        envelope), air quality (tighter, people nearby) and nearby earthquakes · Ed25519-signed, hard-deadline (never
        hangs; degraded floors to caution). ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety
        certification and NOT a guarantee it is safe to act; the robot's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_humanoid_v1_humanoid_post(request_options=request_options))

    def v1_marine_v1_marine_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live significant WAVE
        HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy, geomagnetic activity (GPS/comms) and
        nearby earthquakes (tsunami) · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Inland
        points simply omit the sea-state factor. ADVISORY EVIDENCE only: not a safety certification and not a claim it
        is safe to sail; the vessel's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_marine_v1_marine_post(request_options=request_options))

    def v1_preflight_v1_preflight_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
        {"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off verdict fused from
        wind & weather, air quality, space weather (GPS/comms integrity) and nearby hazards · Ed25519-signed,
        hard-deadline (never hangs; degraded floors to caution). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_preflight_v1_preflight_post(request_options=request_options))

    def v1_road_v1_road_post(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for class=ground. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from weather, air quality
        and nearby earthquakes/hazards along the route · signed, never hangs. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.v1_road_v1_road_post(request_options=request_options))

    def v1_robot_receipt_sample_v1_robot_receipt_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision (an aerial robot
        told CAUTION on degraded GPS, which held). Verify it in-browser via /verify.js, then flip a byte and watch
        verification fail. Advisory evidence only: not a safety system.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            self._with_raw_response.v1_robot_receipt_sample_v1_robot_receipt_sample_get(request_options=request_options)
        )

    def v1_robot_receipt_v1_robot_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot was told and
        which model/policy decided, at the moment it acted. Ed25519-signed, transparency-logged, RFC 3161 timestampable.
        Privacy by CONSTRUCTION: the caller hashes the decision inputs (sensor/awareness context) LOCALLY and sends ONLY
        a fixed-length sha256 + non-PII labels. Body: {"robot_class": "ground|aerial|marine|orbital|humanoid",
        "model_id": "", "verdict": "go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a
        prior /v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key co-signature.
        Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision record existed and is intact
        (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify the action was safe/correct/ lawful, is NOT a
        safety system, and is NOT the actuator (the robot's own certified safety layer decides). Profile of receipt/v1.
        Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            self._with_raw_response.v1_robot_receipt_v1_robot_receipt_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> RobotWithRawResponse:
        return self._with_raw_response


class AsyncRobot:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncRobotWithRawResponse(client, server)

    async def v1_anchor_daily_v1_anchor_daily_get(
        self, *, date: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free & batched via RFC 3161):
        a durable, tamper-evident record of what Dynamic Feed reported. Anchors on first call (idempotent), then returns
        the proof. ?date=YYYY-MM-DD; keyless.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_anchor_daily_v1_anchor_daily_get(
                date=date, request_options=request_options
            ),
        )

    async def v1_anchor_upgrade_v1_anchor_upgrade_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a legacy
        OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."} (legacy {"proof_ots_b64":
        "..."} still accepted).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_anchor_upgrade_v1_anchor_upgrade_post(request_options=request_options)
        )

    async def v1_anchor_v1_anchor_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp token proving
        the record existed at time T, independently verifiable, even against us. Body: {"snapshot": {...}} (its
        canonical SHA-256 is timestamped) or {"digest_hex": ""}. Hashes ONLY, never data. Off the verdict hot path (Rung
        C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_anchor_v1_anchor_post(request_options=request_options))

    async def v1_awareness_v1_awareness_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the grounded facts
        behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location. NEVER blocks: the feeds fan out
        under a hard deadline and any laggard is dropped with the snapshot flagged ``degraded`` (fail-safe → the verdict
        can never be ``go`` when degraded, it floors to ``caution``). Keyless in v1.

        Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
        "max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with Ed25519 (Rung B) ·
        verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST /v1/anchor (Rung C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_awareness_v1_awareness_post(request_options=request_options))

    async def v1_humanoid_v1_humanoid_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot working AMONG
        PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from wind
        (topple risk, high centre of mass), precipitation (slip/footing), temperature (ice underfoot + actuator/battery
        envelope), air quality (tighter, people nearby) and nearby earthquakes · Ed25519-signed, hard-deadline (never
        hangs; degraded floors to caution). ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety
        certification and NOT a guarantee it is safe to act; the robot's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_humanoid_v1_humanoid_post(request_options=request_options))

    async def v1_marine_v1_marine_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live significant WAVE
        HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy, geomagnetic activity (GPS/comms) and
        nearby earthquakes (tsunami) · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Inland
        points simply omit the sea-state factor. ADVISORY EVIDENCE only: not a safety certification and not a claim it
        is safe to sail; the vessel's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_marine_v1_marine_post(request_options=request_options))

    async def v1_preflight_v1_preflight_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
        {"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off verdict fused from
        wind & weather, air quality, space weather (GPS/comms integrity) and nearby hazards · Ed25519-signed,
        hard-deadline (never hangs; degraded floors to caution). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_preflight_v1_preflight_post(request_options=request_options))

    async def v1_road_v1_road_post(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for class=ground. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from weather, air quality
        and nearby earthquakes/hazards along the route · signed, never hangs. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.v1_road_v1_road_post(request_options=request_options))

    async def v1_robot_receipt_sample_v1_robot_receipt_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Any:
        """A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision (an aerial robot
        told CAUTION on degraded GPS, which held). Verify it in-browser via /verify.js, then flip a byte and watch
        verification fail. Advisory evidence only: not a safety system.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self._with_raw_response.v1_robot_receipt_sample_v1_robot_receipt_sample_get(
                request_options=request_options
            ),
        )

    async def v1_robot_receipt_v1_robot_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot was told and
        which model/policy decided, at the moment it acted. Ed25519-signed, transparency-logged, RFC 3161 timestampable.
        Privacy by CONSTRUCTION: the caller hashes the decision inputs (sensor/awareness context) LOCALLY and sends ONLY
        a fixed-length sha256 + non-PII labels. Body: {"robot_class": "ground|aerial|marine|orbital|humanoid",
        "model_id": "", "verdict": "go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a
        prior /v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key co-signature.
        Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision record existed and is intact
        (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify the action was safe/correct/ lawful, is NOT a
        safety system, and is NOT the actuator (the robot's own certified safety layer decides). Profile of receipt/v1.
        Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful Response

        Raises:
            ApiError: Validation Error ``error`` is ``HttpValidationError | RawError``."""
        return unwrap(
            await self._with_raw_response.v1_robot_receipt_v1_robot_receipt_post(
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRobotWithRawResponse:
        return self._with_raw_response


class RobotWithRawResponse(BaseRawResponse[RawClient, Server]):
    def v1_anchor_daily_v1_anchor_daily_get(
        self, *, date: str | None = "", request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1AnchorDailyV1AnchorDailyGetErrorBody]:
        """L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free & batched via RFC 3161):
        a durable, tamper-evident record of what Dynamic Feed reported. Anchors on first call (idempotent), then returns
        the proof. ?date=YYYY-MM-DD; keyless.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/anchor/daily"),
            query_params=[param[str | None]("date", date)],
            decoder=json_decoder[Any],
            error_mapper=v1_anchor_daily_v1_anchor_daily_get_error_mapper,
            request_options=request_options,
        )

    def v1_anchor_upgrade_v1_anchor_upgrade_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a legacy
        OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."} (legacy {"proof_ots_b64":
        "..."} still accepted).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/anchor/upgrade"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_anchor_v1_anchor_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp token proving
        the record existed at time T, independently verifiable, even against us. Body: {"snapshot": {...}} (its
        canonical SHA-256 is timestamped) or {"digest_hex": ""}. Hashes ONLY, never data. Off the verdict hot path (Rung
        C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/anchor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_awareness_v1_awareness_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the grounded facts
        behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location. NEVER blocks: the feeds fan out
        under a hard deadline and any laggard is dropped with the snapshot flagged ``degraded`` (fail-safe → the verdict
        can never be ``go`` when degraded, it floors to ``caution``). Keyless in v1.

        Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
        "max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with Ed25519 (Rung B) ·
        verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST /v1/anchor (Rung C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/awareness"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_humanoid_v1_humanoid_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot working AMONG
        PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from wind
        (topple risk, high centre of mass), precipitation (slip/footing), temperature (ice underfoot + actuator/battery
        envelope), air quality (tighter, people nearby) and nearby earthquakes · Ed25519-signed, hard-deadline (never
        hangs; degraded floors to caution). ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety
        certification and NOT a guarantee it is safe to act; the robot's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/humanoid"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_marine_v1_marine_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live significant WAVE
        HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy, geomagnetic activity (GPS/comms) and
        nearby earthquakes (tsunami) · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Inland
        points simply omit the sea-state factor. ADVISORY EVIDENCE only: not a safety certification and not a claim it
        is safe to sail; the vessel's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/marine"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_preflight_v1_preflight_post(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
        {"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off verdict fused from
        wind & weather, air quality, space weather (GPS/comms integrity) and nearby hazards · Ed25519-signed,
        hard-deadline (never hangs; degraded floors to caution). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/preflight"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_road_v1_road_post(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Any, RawError]:
        """Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for class=ground. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from weather, air quality
        and nearby earthquakes/hazards along the route · signed, never hangs. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/road"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_robot_receipt_sample_v1_robot_receipt_sample_get(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision (an aerial robot
        told CAUTION on degraded GPS, which held). Verify it in-browser via /verify.js, then flip a byte and watch
        verification fail. Advisory evidence only: not a safety system.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/robot-receipt/sample"),
            decoder=json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def v1_robot_receipt_v1_robot_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1RobotReceiptV1RobotReceiptPostErrorBody]:
        """WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot was told and
        which model/policy decided, at the moment it acted. Ed25519-signed, transparency-logged, RFC 3161 timestampable.
        Privacy by CONSTRUCTION: the caller hashes the decision inputs (sensor/awareness context) LOCALLY and sends ONLY
        a fixed-length sha256 + non-PII labels. Body: {"robot_class": "ground|aerial|marine|orbital|humanoid",
        "model_id": "", "verdict": "go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a
        prior /v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key co-signature.
        Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision record existed and is intact
        (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify the action was safe/correct/ lawful, is NOT a
        safety system, and is NOT the actuator (the robot's own certified safety layer decides). Profile of receipt/v1.
        Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/robot-receipt"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[Any],
            error_mapper=v1_robot_receipt_v1_robot_receipt_post_error_mapper,
            request_options=request_options,
        )


class AsyncRobotWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def v1_anchor_daily_v1_anchor_daily_get(
        self, *, date: str | None = "", request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, V1AnchorDailyV1AnchorDailyGetErrorBody]:
        """L2 — the day's world-state snapshot timestamped via RFC 3161 (one hash per day, free & batched via RFC 3161):
        a durable, tamper-evident record of what Dynamic Feed reported. Anchors on first call (idempotent), then returns
        the proof. ?date=YYYY-MM-DD; keyless.

        Args:
            date: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/anchor/daily"),
            query_params=[param[str | None]("date", date)],
            decoder=async_json_decoder[Any],
            error_mapper=v1_anchor_daily_v1_anchor_daily_get_error_mapper,
            request_options=request_options,
        )

    async def v1_anchor_upgrade_v1_anchor_upgrade_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Re-check a stored timestamp proof. RFC 3161 tokens are final at issue (nothing to upgrade); a legacy
        OpenTimestamps proof is folded into its block attestation. Body: {"token_b64": "..."} (legacy {"proof_ots_b64":
        "..."} still accepted).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/anchor/upgrade"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_anchor_v1_anchor_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Timestamp a snapshot's hash with an independent RFC 3161 authority — returns a signed timestamp token proving
        the record existed at time T, independently verifiable, even against us. Body: {"snapshot": {...}} (its
        canonical SHA-256 is timestamped) or {"digest_hex": ""}. Hashes ONLY, never data. Off the verdict hot path (Rung
        C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/anchor"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_awareness_v1_awareness_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Robot situational-awareness v1: ONE call returns a go / caution / no-go verdict plus the grounded facts
        behind it, for a robot (ground|humanoid|aerial|marine|orbital) at a location. NEVER blocks: the feeds fan out
        under a hard deadline and any laggard is dropped with the snapshot flagged ``degraded`` (fail-safe → the verdict
        can never be ``go`` when degraded, it floors to ``caution``). Keyless in v1.

        Body: {"robot":{"id","class"},"location":{"lat","lon","alt_m"},"radius_km"?,"domains"?,
        "max_staleness_s"?,"limits"?,"deadline_ms"?,"require_signed"?}. Every response is signed with Ed25519 (Rung B) ·
        verify against GET /.well-known/keys. Timestamp a snapshot's hash via POST /v1/anchor (Rung C).

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/awareness"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_humanoid_v1_humanoid_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Humanoid PRE-OPERATION check: a preset over /v1/awareness for class=humanoid (a bipedal robot working AMONG
        PEOPLE). POST {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from wind
        (topple risk, high centre of mass), precipitation (slip/footing), temperature (ice underfoot + actuator/battery
        envelope), air quality (tighter, people nearby) and nearby earthquakes · Ed25519-signed, hard-deadline (never
        hangs; degraded floors to caution). ADVISORY EVIDENCE ONLY: proof of what was true at a time, NOT a safety
        certification and NOT a guarantee it is safe to act; the robot's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/humanoid"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_marine_v1_marine_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Marine vessel / USV PRE-OPERATION check: a preset over /v1/awareness for class=marine. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from live significant WAVE
        HEIGHT (the primary driver), wind, a heavy-precipitation storm proxy, geomagnetic activity (GPS/comms) and
        nearby earthquakes (tsunami) · Ed25519-signed, hard-deadline (never hangs; degraded floors to caution). Inland
        points simply omit the sea-state factor. ADVISORY EVIDENCE only: not a safety certification and not a claim it
        is safe to sail; the vessel's own stack owns every action. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/marine"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_preflight_v1_preflight_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Drone PRE-FLIGHT safety check: a preset over /v1/awareness for class=aerial. POST
        {"location":{"lat","lon","alt_m"?},"radius_km"?}. Returns a go / caution / no-go take-off verdict fused from
        wind & weather, air quality, space weather (GPS/comms integrity) and nearby hazards · Ed25519-signed,
        hard-deadline (never hangs; degraded floors to caution). Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/preflight"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_road_v1_road_post(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """Ground / autonomous-vehicle OVER-THE-HORIZON hazard check: a preset over /v1/awareness for class=ground. POST
        {"location":{"lat","lon"},"radius_km"?}. Returns a go / caution / no-go verdict fused from weather, air quality
        and nearby earthquakes/hazards along the route · signed, never hangs. Keyless.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/road"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_robot_receipt_sample_v1_robot_receipt_sample_get(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, RawError]:
        """A keyless, signed SAMPLE robot-receipt/v1: the 'black box' record of an embodied-AI decision (an aerial robot
        told CAUTION on degraded GPS, which held). Verify it in-browser via /verify.js, then flip a byte and watch
        verification fail. Advisory evidence only: not a safety system.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/robot-receipt/sample"),
            decoder=async_json_decoder[Any],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def v1_robot_receipt_v1_robot_receipt_post(
        self,
        *,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, V1RobotReceiptV1RobotReceiptPostErrorBody]:
        """WITNESS a single robot / embodied-AI DECISION: the neutral 'black box' receipt of what a robot was told and
        which model/policy decided, at the moment it acted. Ed25519-signed, transparency-logged, RFC 3161 timestampable.
        Privacy by CONSTRUCTION: the caller hashes the decision inputs (sensor/awareness context) LOCALLY and sends ONLY
        a fixed-length sha256 + non-PII labels. Body: {"robot_class": "ground|aerial|marine|orbital|humanoid",
        "model_id": "", "verdict": "go|caution|no-go", "inputs_sha256": ""} plus optional decision, awareness_ref (a
        prior /v1/awareness snapshot_id), region (COARSE, no precise coords), latency_ms, and a BYO-key co-signature.
        Auth: a FREE key (POST /signup). ADVISORY EVIDENCE ONLY: proves the decision record existed and is intact
        (tamper-EVIDENT, verifiable via /verify.js); it does NOT certify the action was safe/correct/ lawful, is NOT a
        safety system, and is NOT the actuator (the robot's own certified safety layer decides). Profile of receipt/v1.
        Anchor via POST /v1/anchor.

        Args:
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/robot-receipt"),
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=v1_robot_receipt_v1_robot_receipt_post_error_mapper,
            request_options=request_options,
        )
