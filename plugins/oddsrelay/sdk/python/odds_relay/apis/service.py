from __future__ import annotations

from typing import Any

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    async_text_decoder,
    json_decoder,
    param,
    text_decoder,
    unwrap,
)
from ..errors.get_coverage_error import GetCoverageErrorBody, get_coverage_error_mapper
from ..errors.get_health_error import GetHealthErrorBody, get_health_error_mapper
from ..errors.get_liveness_error import GetLivenessErrorBody, get_liveness_error_mapper
from ..errors.get_open_api_error import GetOpenApiErrorBody, get_open_api_error_mapper
from ..errors.get_status_error import GetStatusErrorBody, get_status_error_mapper
from ..models.health import Health
from ..models.status_odds_relay_service_api import StatusOddsRelayServiceApi
from ..models.unions.v2_coverage_response import V2CoverageResponse
from ..server.server import Server


class Service:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = ServiceWithRawResponse(client, server, auth)

    def get_coverage(
        self, *, region: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V2CoverageResponse:
        """One document per region, in two views. **Keyless** (no ``Authorization`` and no ``x-api-key`` header): per
        product, each (venue, sport) ``live`` or ``interrupted_24h``, no counts and no times, then ``markets``: per
        product, the market keys it carries, each one a value its ``markets`` filter takes now; the per-address shield
        only; ``Cache-Control: public, max-age=60`` and ``Vary: Authorization, X-Api-Key, Accept-Encoding`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. **Keyed** (either header
        present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their
        ``events`` and ``last_seen``; on an account with a scope, only its products and, per product, the venues and
        sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is
        503 ``temporarily_unavailable``); free; the flood cap applies. Both: ``region`` missing means ``uk``, gzip over
        1 kB unless refused, 503 until the first document is built.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The keyless summary, or the keyed document.

        Raises:
            ApiError: Unknown or repeated parameter, a region list, repeat or uppercase code. Keyed:
                ``region_required``. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. Keyed only: ``account_suspended``,
                ``origin_not_allowed``, ``region_not_in_scope``. ``unknown_region``. ``too_many_from_address``, then
                after authentication ``too_many_requests``; the front door's own caps answer an empty-bodied 429.
                ``internal_error``. ``temporarily_unavailable``. 502 from the front door when the API behind it does not
                answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayServiceApi |
                Error401OddsRelayServiceApi | Error403OddsRelayServiceApi | Error404OddsRelayServiceApi |
                Error429OddsRelayServiceApi | Error500OddsRelayServiceApi | Error503OddsRelayServiceApi | RawError``."""
        return unwrap(self._with_raw_response.get_coverage(region=region, request_options=request_options))

    def get_health(self, *, request_options: RequestOptionsOrDict | None = None) -> Health:
        """Each board's ``processed_at``, odds age (``age_s``) and event ``count``, and a verdict: ``degraded`` when a
        board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The boards.

        Raises:
            ApiError: Unknown or repeated parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayServiceApi | Error401OddsRelayServiceApi |
                Error403OddsRelayServiceApi | Error429OddsRelayServiceApi | Error500OddsRelayServiceApi |
                Error503OddsRelayServiceApi | RawError``."""
        return unwrap(self._with_raw_response.get_health(request_options=request_options))

    def get_liveness(self, *, request_options: RequestOptionsOrDict | None = None) -> str:
        """Is the service up. KEYLESS and before every other check. ``text/plain``, ``Cache-Control: no-store``: the
        first line is ``ok`` (200) or ``warming`` (503), then how many boards can be served and any that cannot.
        Liveness only: board freshness is ``/v2/health`` and ``/v2/status``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Up.

        Raises:
            ApiError: Starting: the first line is ``warming``. 502 from the front door when the API behind it does not
                answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``str | RawError``."""
        return unwrap(self._with_raw_response.get_liveness(request_options=request_options))

    def get_open_api(self, *, request_options: RequestOptionsOrDict | None = None) -> Any:
        """This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent.
        ``ETag`` is its SHA-256 (``-gz`` on the gzip copy); 304 on a match; gzip unless refused; ``Cache-Control:
        public, max-age=300``; ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Takes no
        parameters.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            This document.

        Raises:
            ApiError: Any parameter. ``too_many_from_address``; the front door's own caps answer an empty-bodied 429.
                ``internal_error``, also when the document cannot be read. 502 from the front door when the API behind
                it does not answer: an empty body, no ``code``. Retry with backoff. ``error`` is
                ``Error400OddsRelayServiceApi | Error429OddsRelayServiceApi | Error500OddsRelayServiceApi |
                RawError``."""
        return unwrap(self._with_raw_response.get_open_api(request_options=request_options))

    def get_status(
        self, *, region: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> StatusOddsRelayServiceApi:
        """Per product the region serves: ``ok``, ``slow`` or ``stale``, judged on each board's odds age (not servable
        or not held is ``stale``). While boards warm every product reads ``stale`` in a 200. KEYLESS: the per-address
        shield only, a key header is ignored, no token is spent. ``Cache-Control: public, max-age=10`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Plain JSON (never gzip).

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The status.

        Raises:
            ApiError: Unknown or repeated parameter, a region list, repeat or uppercase code. ``unknown_region``.
                ``too_many_from_address``; the front door's own caps answer an empty-bodied 429. ``internal_error``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``temporarily_unavailable`` (a region other than ``uk`` while boards warm). ``error`` is
                ``Error400OddsRelayServiceApi | Error404OddsRelayServiceApi | Error429OddsRelayServiceApi |
                Error500OddsRelayServiceApi | Error503OddsRelayServiceApi | RawError``."""
        return unwrap(self._with_raw_response.get_status(region=region, request_options=request_options))

    @property
    def with_raw_response(self) -> ServiceWithRawResponse:
        return self._with_raw_response


class AsyncService:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncServiceWithRawResponse(client, server, auth)

    async def get_coverage(
        self, *, region: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V2CoverageResponse:
        """One document per region, in two views. **Keyless** (no ``Authorization`` and no ``x-api-key`` header): per
        product, each (venue, sport) ``live`` or ``interrupted_24h``, no counts and no times, then ``markets``: per
        product, the market keys it carries, each one a value its ``markets`` filter takes now; the per-address shield
        only; ``Cache-Control: public, max-age=60`` and ``Vary: Authorization, X-Api-Key, Accept-Encoding`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. **Keyed** (either header
        present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their
        ``events`` and ``last_seen``; on an account with a scope, only its products and, per product, the venues and
        sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is
        503 ``temporarily_unavailable``); free; the flood cap applies. Both: ``region`` missing means ``uk``, gzip over
        1 kB unless refused, 503 until the first document is built.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The keyless summary, or the keyed document.

        Raises:
            ApiError: Unknown or repeated parameter, a region list, repeat or uppercase code. Keyed:
                ``region_required``. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. Keyed only: ``account_suspended``,
                ``origin_not_allowed``, ``region_not_in_scope``. ``unknown_region``. ``too_many_from_address``, then
                after authentication ``too_many_requests``; the front door's own caps answer an empty-bodied 429.
                ``internal_error``. ``temporarily_unavailable``. 502 from the front door when the API behind it does not
                answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``Error400OddsRelayServiceApi |
                Error401OddsRelayServiceApi | Error403OddsRelayServiceApi | Error404OddsRelayServiceApi |
                Error429OddsRelayServiceApi | Error500OddsRelayServiceApi | Error503OddsRelayServiceApi | RawError``."""
        return unwrap(await self._with_raw_response.get_coverage(region=region, request_options=request_options))

    async def get_health(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Health:
        """Each board's ``processed_at``, odds age (``age_s``) and event ``count``, and a verdict: ``degraded`` when a
        board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The boards.

        Raises:
            ApiError: Unknown or repeated parameter. ``missing_api_key``, ``invalid_api_key`` (also a closed account),
                ``revoked_api_key``, ``expired_api_key``, ``paused_api_key``. ``account_suspended``,
                ``origin_not_allowed``. ``too_many_from_address``, then after authentication ``too_many_requests``; the
                front door's own caps answer an empty-bodied 429. ``internal_error``. ``temporarily_unavailable``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``error`` is ``Error400OddsRelayServiceApi | Error401OddsRelayServiceApi |
                Error403OddsRelayServiceApi | Error429OddsRelayServiceApi | Error500OddsRelayServiceApi |
                Error503OddsRelayServiceApi | RawError``."""
        return unwrap(await self._with_raw_response.get_health(request_options=request_options))

    async def get_liveness(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> str:
        """Is the service up. KEYLESS and before every other check. ``text/plain``, ``Cache-Control: no-store``: the
        first line is ``ok`` (200) or ``warming`` (503), then how many boards can be served and any that cannot.
        Liveness only: board freshness is ``/v2/health`` and ``/v2/status``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Up.

        Raises:
            ApiError: Starting: the first line is ``warming``. 502 from the front door when the API behind it does not
                answer: an empty body, no ``code``. Retry with backoff. ``error`` is ``str | RawError``."""
        return unwrap(await self._with_raw_response.get_liveness(request_options=request_options))

    async def get_open_api(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Any:
        """This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent.
        ``ETag`` is its SHA-256 (``-gz`` on the gzip copy); 304 on a match; gzip unless refused; ``Cache-Control:
        public, max-age=300``; ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Takes no
        parameters.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            This document.

        Raises:
            ApiError: Any parameter. ``too_many_from_address``; the front door's own caps answer an empty-bodied 429.
                ``internal_error``, also when the document cannot be read. 502 from the front door when the API behind
                it does not answer: an empty body, no ``code``. Retry with backoff. ``error`` is
                ``Error400OddsRelayServiceApi | Error429OddsRelayServiceApi | Error500OddsRelayServiceApi |
                RawError``."""
        return unwrap(await self._with_raw_response.get_open_api(request_options=request_options))

    async def get_status(
        self, *, region: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> StatusOddsRelayServiceApi:
        """Per product the region serves: ``ok``, ``slow`` or ``stale``, judged on each board's odds age (not servable
        or not held is ``stale``). While boards warm every product reads ``stale`` in a 200. KEYLESS: the per-address
        shield only, a key header is ignored, no token is spent. ``Cache-Control: public, max-age=10`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Plain JSON (never gzip).

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The status.

        Raises:
            ApiError: Unknown or repeated parameter, a region list, repeat or uppercase code. ``unknown_region``.
                ``too_many_from_address``; the front door's own caps answer an empty-bodied 429. ``internal_error``. 502
                from the front door when the API behind it does not answer: an empty body, no ``code``. Retry with
                backoff. ``temporarily_unavailable`` (a region other than ``uk`` while boards warm). ``error`` is
                ``Error400OddsRelayServiceApi | Error404OddsRelayServiceApi | Error429OddsRelayServiceApi |
                Error500OddsRelayServiceApi | Error503OddsRelayServiceApi | RawError``."""
        return unwrap(await self._with_raw_response.get_status(region=region, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncServiceWithRawResponse:
        return self._with_raw_response


class ServiceWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_coverage(
        self, *, region: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V2CoverageResponse, GetCoverageErrorBody]:
        """One document per region, in two views. **Keyless** (no ``Authorization`` and no ``x-api-key`` header): per
        product, each (venue, sport) ``live`` or ``interrupted_24h``, no counts and no times, then ``markets``: per
        product, the market keys it carries, each one a value its ``markets`` filter takes now; the per-address shield
        only; ``Cache-Control: public, max-age=60`` and ``Vary: Authorization, X-Api-Key, Accept-Encoding`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. **Keyed** (either header
        present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their
        ``events`` and ``last_seen``; on an account with a scope, only its products and, per product, the venues and
        sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is
        503 ``temporarily_unavailable``); free; the flood cap applies. Both: ``region`` missing means ``uk``, gzip over
        1 kB unless refused, 503 until the first document is built.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/coverage"),
            query_params=[param[str | None]("region", region)],
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[V2CoverageResponse],
            error_mapper=get_coverage_error_mapper,
            request_options=request_options,
        )

    def get_health(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetHealthErrorBody]:
        """Each board's ``processed_at``, odds age (``age_s``) and event ``count``, and a verdict: ``degraded`` when a
        board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/health"),
            auth_scheme=AnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=json_decoder[Health],
            error_mapper=get_health_error_mapper,
            request_options=request_options,
        )

    def get_liveness(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[str, GetLivenessErrorBody]:
        """Is the service up. KEYLESS and before every other check. ``text/plain``, ``Cache-Control: no-store``: the
        first line is ``ok`` (200) or ``warming`` (503), then how many boards can be served and any that cannot.
        Liveness only: board freshness is ``/v2/health`` and ``/v2/status``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/healthz"),
            decoder=text_decoder[str],
            error_mapper=get_liveness_error_mapper,
            request_options=request_options,
        )

    def get_open_api(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetOpenApiErrorBody]:
        """This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent.
        ``ETag`` is its SHA-256 (``-gz`` on the gzip copy); 304 on a match; gzip unless refused; ``Cache-Control:
        public, max-age=300``; ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Takes no
        parameters.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/openapi.json"),
            decoder=json_decoder[Any],
            error_mapper=get_open_api_error_mapper,
            request_options=request_options,
        )

    def get_status(
        self, *, region: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[StatusOddsRelayServiceApi, GetStatusErrorBody]:
        """Per product the region serves: ``ok``, ``slow`` or ``stale``, judged on each board's odds age (not servable
        or not held is ``stale``). While boards warm every product reads ``stale`` in a 200. KEYLESS: the per-address
        shield only, a key header is ignored, no token is spent. ``Cache-Control: public, max-age=10`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Plain JSON (never gzip).

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/status"),
            query_params=[param[str | None]("region", region)],
            decoder=json_decoder[StatusOddsRelayServiceApi],
            error_mapper=get_status_error_mapper,
            request_options=request_options,
        )


class AsyncServiceWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_coverage(
        self, *, region: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V2CoverageResponse, GetCoverageErrorBody]:
        """One document per region, in two views. **Keyless** (no ``Authorization`` and no ``x-api-key`` header): per
        product, each (venue, sport) ``live`` or ``interrupted_24h``, no counts and no times, then ``markets``: per
        product, the market keys it carries, each one a value its ``markets`` filter takes now; the per-address shield
        only; ``Cache-Control: public, max-age=60`` and ``Vary: Authorization, X-Api-Key, Accept-Encoding`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. **Keyed** (either header
        present, even empty: an invalid key is 401): your key's products the region serves, venues with rows now, their
        ``events`` and ``last_seen``; on an account with a scope, only its products and, per product, the venues and
        sports it admits (markets are not applied: the document has no market grain; a scope that cannot be applied is
        503 ``temporarily_unavailable``); free; the flood cap applies. Both: ``region`` missing means ``uk``, gzip over
        1 kB unless refused, 503 until the first document is built.

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/coverage"),
            query_params=[param[str | None]("region", region)],
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[V2CoverageResponse],
            error_mapper=get_coverage_error_mapper,
            request_options=request_options,
        )

    async def get_health(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Health, GetHealthErrorBody]:
        """Each board's ``processed_at``, odds age (``age_s``) and event ``count``, and a verdict: ``degraded`` when a
        board is past the age bound or cannot be served. Always HTTP 200 whatever the verdict. Free. Plain JSON.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/health"),
            auth_scheme=AsyncAnySchemes(self._auth.bearer_auth, self._auth.api_key_header),
            decoder=async_json_decoder[Health],
            error_mapper=get_health_error_mapper,
            request_options=request_options,
        )

    async def get_liveness(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[str, GetLivenessErrorBody]:
        """Is the service up. KEYLESS and before every other check. ``text/plain``, ``Cache-Control: no-store``: the
        first line is ``ok`` (200) or ``warming`` (503), then how many boards can be served and any that cannot.
        Liveness only: board freshness is ``/v2/health`` and ``/v2/status``.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/healthz"),
            decoder=async_text_decoder[str],
            error_mapper=get_liveness_error_mapper,
            request_options=request_options,
        )

    async def get_open_api(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Any, GetOpenApiErrorBody]:
        """This OpenAPI document. KEYLESS: the per-address shield only, a key header is ignored, no token is spent.
        ``ETag`` is its SHA-256 (``-gz`` on the gzip copy); 304 on a match; gzip unless refused; ``Cache-Control:
        public, max-age=300``; ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Takes no
        parameters.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/openapi.json"),
            decoder=async_json_decoder[Any],
            error_mapper=get_open_api_error_mapper,
            request_options=request_options,
        )

    async def get_status(
        self, *, region: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[StatusOddsRelayServiceApi, GetStatusErrorBody]:
        """Per product the region serves: ``ok``, ``slow`` or ``stale``, judged on each board's odds age (not servable
        or not held is ``stale``). While boards warm every product reads ``stale`` in a 200. KEYLESS: the per-address
        shield only, a key header is ignored, no token is spent. ``Cache-Control: public, max-age=10`` on a 200;
        ``Access-Control-Allow-Origin: *`` on every reply, refusals and errors included. Plain JSON (never gzip).

        Args:
            region: ONE lowercase region code (``/v2/regions`` lists yours). Missing means ``uk``: on a data route only
                when your key covers ``uk``, else 400 ``region_required`` naming a code your key has; on discovery and
                keyless routes always. A comma list, the parameter sent twice or an uppercase code is 400
                ``bad_request``; an unknown code, or one with no live bookmaker here, is 404 ``unknown_region``.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/status"),
            query_params=[param[str | None]("region", region)],
            decoder=async_json_decoder[StatusOddsRelayServiceApi],
            error_mapper=get_status_error_mapper,
            request_options=request_options,
        )
