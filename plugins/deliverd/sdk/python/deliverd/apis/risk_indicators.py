from __future__ import annotations

from typing import Any
from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_api_v1_risk_indicators_error import (
    GetApiV1RiskIndicatorsErrorBody,
    get_api_v1_risk_indicators_error_mapper,
)
from ..errors.post_api_v1_risk_indicators_by_key_readings_error import (
    PostApiV1RiskIndicatorsByKeyReadingsErrorBody,
    post_api_v1_risk_indicators_by_key_readings_error_mapper,
)
from ..models.api_v1_risk_indicators_readings_request import (
    ApiV1RiskIndicatorsReadingsRequest,
    ApiV1RiskIndicatorsReadingsRequestDict,
)
from ..server.server import Server


class RiskIndicators:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = RiskIndicatorsWithRawResponse(client, server, auth)

    def get_api_v1_risk_indicators(
        self, *, period: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Each indicator the appetite turns on: its figure for the month against the limits it was judged by
        (``green``, ``amber``, ``red`` or ``not_measurable``), the two months before, the trend, where a measured
        indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the
        month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { access, period, periodLabel, appetite, baseline, summary, indicators }

        Raises:
            ApiError: The plan does not include the AI risk scorecard (feature_unavailable) ``error`` is
                ``RawError``."""
        return unwrap(
            self._with_raw_response.get_api_v1_risk_indicators(period=period, request_options=request_options)
        )

    def post_api_v1_risk_indicators_by_key_readings(
        self,
        key: str,
        *,
        body: ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime,
        training. Give ``value``, or ``numerator`` and ``denominator`` for a ratio, and ``evidence`` saying where it
        comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting
        one is a person's, in the app, with a reason. 409 when a figure already stands.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The reading

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            self._with_raw_response.post_api_v1_risk_indicators_by_key_readings(
                key, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> RiskIndicatorsWithRawResponse:
        return self._with_raw_response


class AsyncRiskIndicators:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncRiskIndicatorsWithRawResponse(client, server, auth)

    async def get_api_v1_risk_indicators(
        self, *, period: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> dict[str, Any]:
        """Each indicator the appetite turns on: its figure for the month against the limits it was judged by
        (``green``, ``amber``, ``red`` or ``not_measurable``), the two months before, the trend, where a measured
        indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the
        month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            { access, period, periodLabel, appetite, baseline, summary, indicators }

        Raises:
            ApiError: The plan does not include the AI risk scorecard (feature_unavailable) ``error`` is
                ``RawError``."""
        return unwrap(
            await self._with_raw_response.get_api_v1_risk_indicators(period=period, request_options=request_options)
        )

    async def post_api_v1_risk_indicators_by_key_readings(
        self,
        key: str,
        *,
        body: ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> dict[str, Any]:
        """For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime,
        training. Give ``value``, or ``numerator`` and ``denominator`` for a ratio, and ``evidence`` saying where it
        comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting
        one is a person's, in the app, with a reason. 409 when a figure already stands.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            The reading

        Raises:
            ApiError: The plan does not include Compliance Mode (feature_unavailable). Reads are not refused. ``error``
                is ``RawError``."""
        return unwrap(
            await self._with_raw_response.post_api_v1_risk_indicators_by_key_readings(
                key, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncRiskIndicatorsWithRawResponse:
        return self._with_raw_response


class RiskIndicatorsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_api_v1_risk_indicators(
        self, *, period: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1RiskIndicatorsErrorBody]:
        """Each indicator the appetite turns on: its figure for the month against the limits it was judged by
        (``green``, ``amber``, ``red`` or ``not_measurable``), the two months before, the trend, where a measured
        indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the
        month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/risk-indicators"),
            query_params=[param[str | None]("period", period)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_risk_indicators_error_mapper,
            request_options=request_options,
        )

    def post_api_v1_risk_indicators_by_key_readings(
        self,
        key: str,
        *,
        body: ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1RiskIndicatorsByKeyReadingsErrorBody]:
        """For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime,
        training. Give ``value``, or ``numerator`` and ``denominator`` for a ratio, and ``evidence`` saying where it
        comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting
        one is a person's, in the app, with a reason. 409 when a figure already stands.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/risk-indicators/{key}/readings"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_risk_indicators_by_key_readings_error_mapper,
            request_options=request_options,
        )


class AsyncRiskIndicatorsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_api_v1_risk_indicators(
        self, *, period: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[dict[str, Any], GetApiV1RiskIndicatorsErrorBody]:
        """Each indicator the appetite turns on: its figure for the month against the limits it was judged by
        (``green``, ``amber``, ``red`` or ``not_measurable``), the two months before, the trend, where a measured
        indicator stands this month so far, whether a submitted figure is still owed, and the corrective action the
        month opened. Lower is better for every indicator. Deliverd never stops an agent on a figure.

        Args:
            period: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/risk-indicators"),
            query_params=[param[str | None]("period", period)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=get_api_v1_risk_indicators_error_mapper,
            request_options=request_options,
        )

    async def post_api_v1_risk_indicators_by_key_readings(
        self,
        key: str,
        *,
        body: ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[dict[str, Any], PostApiV1RiskIndicatorsByKeyReadingsErrorBody]:
        """For an indicator whose figure comes from outside Deliverd: access reviews, output sampling, downtime,
        training. Give ``value``, or ``numerator`` and ``denominator`` for a ratio, and ``evidence`` saying where it
        comes from. Judged against the limits in force when it is saved. A key gives a month's first figure; correcting
        one is a person's, in the app, with a reason. 409 when a figure already stands.

        Args:
            key: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/v1/risk-indicators/{key}/readings"),
            path_params=[param[str]("key", key)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ApiV1RiskIndicatorsReadingsRequest | ApiV1RiskIndicatorsReadingsRequestDict | None](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[dict[str, Any]],
            error_mapper=post_api_v1_risk_indicators_by_key_readings_error_mapper,
            request_options=request_options,
        )
