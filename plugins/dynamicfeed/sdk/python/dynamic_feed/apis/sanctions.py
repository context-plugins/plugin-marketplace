from __future__ import annotations

from typing import Any

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.sanctions_screen_sanctions_get_error import (
    SanctionsScreenSanctionsGetErrorBody,
    sanctions_screen_sanctions_get_error_mapper,
)
from ..server.server import Server


class Sanctions:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = SanctionsWithRawResponse(client, server)

    def sanctions_screen_sanctions_get(
        self,
        *,
        name: str | None = "",
        program: str | None = "",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) — each match tagged
        with its list (US-OFAC | UK). A match means the party is sanctioned — legally binding the instant it's posted;
        models can't know recent designations. Confirm the full official entry before acting. (Requires API key.)

        Args:
            name: name to screen against the US OFAC SDN + UK Sanctions List
            program: optional program/regime filter, e.g. IRAN, CUBA, or a UK regime
            limit: Value sent with the request.
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
            self._with_raw_response.sanctions_screen_sanctions_get(
                name=name,
                program=program,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> SanctionsWithRawResponse:
        return self._with_raw_response


class AsyncSanctions:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncSanctionsWithRawResponse(client, server)

    async def sanctions_screen_sanctions_get(
        self,
        *,
        name: str | None = "",
        program: str | None = "",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) — each match tagged
        with its list (US-OFAC | UK). A match means the party is sanctioned — legally binding the instant it's posted;
        models can't know recent designations. Confirm the full official entry before acting. (Requires API key.)

        Args:
            name: name to screen against the US OFAC SDN + UK Sanctions List
            program: optional program/regime filter, e.g. IRAN, CUBA, or a UK regime
            limit: Value sent with the request.
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
            await self._with_raw_response.sanctions_screen_sanctions_get(
                name=name,
                program=program,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSanctionsWithRawResponse:
        return self._with_raw_response


class SanctionsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def sanctions_screen_sanctions_get(
        self,
        *,
        name: str | None = "",
        program: str | None = "",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SanctionsScreenSanctionsGetErrorBody]:
        """Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) — each match tagged
        with its list (US-OFAC | UK). A match means the party is sanctioned — legally binding the instant it's posted;
        models can't know recent designations. Confirm the full official entry before acting. (Requires API key.)

        Args:
            name: name to screen against the US OFAC SDN + UK Sanctions List
            program: optional program/regime filter, e.g. IRAN, CUBA, or a UK regime
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sanctions"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("program", program),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=sanctions_screen_sanctions_get_error_mapper,
            request_options=request_options,
        )


class AsyncSanctionsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def sanctions_screen_sanctions_get(
        self,
        *,
        name: str | None = "",
        program: str | None = "",
        limit: int | None = 25,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, SanctionsScreenSanctionsGetErrorBody]:
        """Screen a name against the US OFAC SDN + UK Sanctions List (FCDO, Open Government Licence) — each match tagged
        with its list (US-OFAC | UK). A match means the party is sanctioned — legally binding the instant it's posted;
        models can't know recent designations. Confirm the full official entry before acting. (Requires API key.)

        Args:
            name: name to screen against the US OFAC SDN + UK Sanctions List
            program: optional program/regime filter, e.g. IRAN, CUBA, or a UK regime
            limit: Value sent with the request.
            x_api_key: Value sent with the request.
            x_rapidapi_proxy_secret: Value sent with the request.
            x_rapidapi_user: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/sanctions"),
            query_params=[
                param[str | None]("name", name),
                param[str | None]("program", program),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=sanctions_screen_sanctions_get_error_mapper,
            request_options=request_options,
        )
