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
from ..errors.federal_register_federal_register_get_error import (
    FederalRegisterFederalRegisterGetErrorBody,
    federal_register_federal_register_get_error_mapper,
)
from ..server.server import Server


class FederalRegister:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = FederalRegisterWithRawResponse(client, server)

    def federal_register_federal_register_get(
        self,
        *,
        query: str | None = "",
        doc_type: str | None = "",
        agency: str | None = "",
        days: int | None = 7,
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless NARA
        source). Answers what regulation took effect or what the President signed. (Requires API key.)

        Args:
            query: text search
            doc_type: RULE | PRORULE | NOTICE | PRESDOCU
            agency: agency slug, e.g. securities-and-exchange-commission
            days: Value sent with the request.
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
            self._with_raw_response.federal_register_federal_register_get(
                query=query,
                doc_type=doc_type,
                agency=agency,
                days=days,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> FederalRegisterWithRawResponse:
        return self._with_raw_response


class AsyncFederalRegister:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncFederalRegisterWithRawResponse(client, server)

    async def federal_register_federal_register_get(
        self,
        *,
        query: str | None = "",
        doc_type: str | None = "",
        agency: str | None = "",
        days: int | None = 7,
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> Any:
        """Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless NARA
        source). Answers what regulation took effect or what the President signed. (Requires API key.)

        Args:
            query: text search
            doc_type: RULE | PRORULE | NOTICE | PRESDOCU
            agency: agency slug, e.g. securities-and-exchange-commission
            days: Value sent with the request.
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
            await self._with_raw_response.federal_register_federal_register_get(
                query=query,
                doc_type=doc_type,
                agency=agency,
                days=days,
                limit=limit,
                x_api_key=x_api_key,
                x_rapidapi_proxy_secret=x_rapidapi_proxy_secret,
                x_rapidapi_user=x_rapidapi_user,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncFederalRegisterWithRawResponse:
        return self._with_raw_response


class FederalRegisterWithRawResponse(BaseRawResponse[RawClient, Server]):
    def federal_register_federal_register_get(
        self,
        *,
        query: str | None = "",
        doc_type: str | None = "",
        agency: str | None = "",
        days: int | None = 7,
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, FederalRegisterFederalRegisterGetErrorBody]:
        """Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless NARA
        source). Answers what regulation took effect or what the President signed. (Requires API key.)

        Args:
            query: text search
            doc_type: RULE | PRORULE | NOTICE | PRESDOCU
            agency: agency slug, e.g. securities-and-exchange-commission
            days: Value sent with the request.
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
            url_template=self._server.default("/federal-register"),
            query_params=[
                param[str | None]("query", query),
                param[str | None]("doc_type", doc_type),
                param[str | None]("agency", agency),
                param[int | None]("days", days),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=json_decoder[Any],
            error_mapper=federal_register_federal_register_get_error_mapper,
            request_options=request_options,
        )


class AsyncFederalRegisterWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def federal_register_federal_register_get(
        self,
        *,
        query: str | None = "",
        doc_type: str | None = "",
        agency: str | None = "",
        days: int | None = 7,
        limit: int | None = 20,
        x_api_key: str | None = None,
        x_rapidapi_proxy_secret: str | None = None,
        x_rapidapi_user: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[Any, FederalRegisterFederalRegisterGetErrorBody]:
        """Recent US Federal Register documents — rules, proposed rules, notices, executive orders (keyless NARA
        source). Answers what regulation took effect or what the President signed. (Requires API key.)

        Args:
            query: text search
            doc_type: RULE | PRORULE | NOTICE | PRESDOCU
            agency: agency slug, e.g. securities-and-exchange-commission
            days: Value sent with the request.
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
            url_template=self._server.default("/federal-register"),
            query_params=[
                param[str | None]("query", query),
                param[str | None]("doc_type", doc_type),
                param[str | None]("agency", agency),
                param[int | None]("days", days),
                param[int | None]("limit", limit),
            ],
            headers=[
                param[str | None]("x-api-key", x_api_key),
                param[str | None]("x-rapidapi-proxy-secret", x_rapidapi_proxy_secret),
                param[str | None]("x-rapidapi-user", x_rapidapi_user),
            ],
            decoder=async_json_decoder[Any],
            error_mapper=federal_register_federal_register_get_error_mapper,
            request_options=request_options,
        )
