from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RawError,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    raw_error_response,
    unwrap,
)
from ..models.plan import Plan
from ..server.server import Server


class PlanApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PlanApiWithRawResponse(client, server, auth)

    def get_plan(self, *, request_options: RequestOptionsOrDict | None = None) -> Plan:
        """Returns details of the current Automate subscription plan including parallel session capacity and current
        usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan details

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.get_plan(request_options=request_options))

    @property
    def with_raw_response(self) -> PlanApiWithRawResponse:
        return self._with_raw_response


class AsyncPlanApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPlanApiWithRawResponse(client, server, auth)

    async def get_plan(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Plan:
        """Returns details of the current Automate subscription plan including parallel session capacity and current
        usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Plan details

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.get_plan(request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncPlanApiWithRawResponse:
        return self._with_raw_response


class PlanApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_plan(self, *, request_options: RequestOptionsOrDict | None = None) -> ApiResult[Plan, RawError]:
        """Returns details of the current Automate subscription plan including parallel session capacity and current
        usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/plan.json"),
            auth_scheme=self._auth.basic_auth,
            decoder=json_decoder[Plan],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


class AsyncPlanApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_plan(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> ApiResult[Plan, RawError]:
        """Returns details of the current Automate subscription plan including parallel session capacity and current
        usage.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/automate/plan.json"),
            auth_scheme=self._auth.basic_auth,
            decoder=async_json_decoder[Plan],
            error_mapper=raw_error_response,
            request_options=request_options,
        )
