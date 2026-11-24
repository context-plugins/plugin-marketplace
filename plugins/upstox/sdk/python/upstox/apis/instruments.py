from __future__ import annotations

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    RawClient,
    RequestOptionsOrDict,
    SecuredRawResponse,
    async_json_decoder,
    json_decoder,
    param,
    unwrap,
)
from ..errors.search_instrument_error import SearchInstrumentErrorBody, search_instrument_error_mapper
from ..models.search_instrument_response import SearchInstrumentResponse
from ..server.server import Server


class Instruments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InstrumentsWithRawResponse(client, server, auth)

    def search_instrument(
        self,
        query: str,
        *,
        exchanges: str | None = None,
        segments: str | None = None,
        instrument_types: str | None = None,
        expiry: str | None = None,
        atm_offset: int | None = None,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SearchInstrumentResponse:
        """This API provides the functionality to retrieve the instrument details for searched query

        Args:
            query: natural language query
            exchanges: Comma separated exchanges
            segments: Comma separated segments
            instrument_types: Comma separated instrument types
            expiry: expiry in format: yyyy-MM-dd
            atm_offset: page number greater than or equal to 1
            page_number: ATM offset number for queries like ATM, ATM+1, ATM-1, etc.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.search_instrument(
                query,
                exchanges=exchanges,
                segments=segments,
                instrument_types=instrument_types,
                expiry=expiry,
                atm_offset=atm_offset,
                page_number=page_number,
                records=records,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> InstrumentsWithRawResponse:
        return self._with_raw_response


class AsyncInstruments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInstrumentsWithRawResponse(client, server, auth)

    async def search_instrument(
        self,
        query: str,
        *,
        exchanges: str | None = None,
        segments: str | None = None,
        instrument_types: str | None = None,
        expiry: str | None = None,
        atm_offset: int | None = None,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SearchInstrumentResponse:
        """This API provides the functionality to retrieve the instrument details for searched query

        Args:
            query: natural language query
            exchanges: Comma separated exchanges
            segments: Comma separated segments
            instrument_types: Comma separated instrument types
            expiry: expiry in format: yyyy-MM-dd
            atm_offset: page number greater than or equal to 1
            page_number: ATM offset number for queries like ATM, ATM+1, ATM-1, etc.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.search_instrument(
                query,
                exchanges=exchanges,
                segments=segments,
                instrument_types=instrument_types,
                expiry=expiry,
                atm_offset=atm_offset,
                page_number=page_number,
                records=records,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncInstrumentsWithRawResponse:
        return self._with_raw_response


class InstrumentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def search_instrument(
        self,
        query: str,
        *,
        exchanges: str | None = None,
        segments: str | None = None,
        instrument_types: str | None = None,
        expiry: str | None = None,
        atm_offset: int | None = None,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchInstrumentResponse, SearchInstrumentErrorBody]:
        """This API provides the functionality to retrieve the instrument details for searched query

        Args:
            query: natural language query
            exchanges: Comma separated exchanges
            segments: Comma separated segments
            instrument_types: Comma separated instrument types
            expiry: expiry in format: yyyy-MM-dd
            atm_offset: page number greater than or equal to 1
            page_number: ATM offset number for queries like ATM, ATM+1, ATM-1, etc.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/instruments/search"),
            query_params=[
                param[str]("query", query),
                param[str | None]("exchanges", exchanges),
                param[str | None]("segments", segments),
                param[str | None]("instrument_types", instrument_types),
                param[str | None]("expiry", expiry),
                param[int | None]("atm_offset", atm_offset),
                param[int | None]("page_number", page_number),
                param[int | None]("records", records),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[SearchInstrumentResponse],
            error_mapper=search_instrument_error_mapper,
            request_options=request_options,
        )


class AsyncInstrumentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def search_instrument(
        self,
        query: str,
        *,
        exchanges: str | None = None,
        segments: str | None = None,
        instrument_types: str | None = None,
        expiry: str | None = None,
        atm_offset: int | None = None,
        page_number: int | None = 1,
        records: int | None = 10,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SearchInstrumentResponse, SearchInstrumentErrorBody]:
        """This API provides the functionality to retrieve the instrument details for searched query

        Args:
            query: natural language query
            exchanges: Comma separated exchanges
            segments: Comma separated segments
            instrument_types: Comma separated instrument types
            expiry: expiry in format: yyyy-MM-dd
            atm_offset: page number greater than or equal to 1
            page_number: ATM offset number for queries like ATM, ATM+1, ATM-1, etc.
            records: no of records in a single page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/instruments/search"),
            query_params=[
                param[str]("query", query),
                param[str | None]("exchanges", exchanges),
                param[str | None]("segments", segments),
                param[str | None]("instrument_types", instrument_types),
                param[str | None]("expiry", expiry),
                param[int | None]("atm_offset", atm_offset),
                param[int | None]("page_number", page_number),
                param[int | None]("records", records),
            ],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[SearchInstrumentResponse],
            error_mapper=search_instrument_error_mapper,
            request_options=request_options,
        )
