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
from ..errors.get_option_contracts_error import GetOptionContractsErrorBody, get_option_contracts_error_mapper
from ..errors.get_put_call_option_chain_error import (
    GetPutCallOptionChainErrorBody,
    get_put_call_option_chain_error_mapper,
)
from ..models.get_option_chain_response import GetOptionChainResponse
from ..models.get_option_contract_response import GetOptionContractResponse
from ..server.server import Server


class Options:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = OptionsWithRawResponse(client, server, auth)

    def get_option_contracts(
        self,
        instrument_key: str,
        *,
        expiry_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> GetOptionContractResponse:
        """This API provides the functionality to retrieve the option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_option_contracts(
                instrument_key, expiry_date=expiry_date, request_options=request_options
            ),
        )

    def get_put_call_option_chain(
        self, instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> GetOptionChainResponse:
        """This API provides the functionality to retrieve the option chain

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_put_call_option_chain(
                instrument_key, expiry_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> OptionsWithRawResponse:
        return self._with_raw_response


class AsyncOptions:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncOptionsWithRawResponse(client, server, auth)

    async def get_option_contracts(
        self,
        instrument_key: str,
        *,
        expiry_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> GetOptionContractResponse:
        """This API provides the functionality to retrieve the option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_option_contracts(
                instrument_key, expiry_date=expiry_date, request_options=request_options
            ),
        )

    async def get_put_call_option_chain(
        self, instrument_key: str, expiry_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> GetOptionChainResponse:
        """This API provides the functionality to retrieve the option chain

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successful

        Raises:
            ApiError: Method Not Allowed Internal Server Error Forbidden Locked Unprocessable Entity Too Many Requests
                ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_put_call_option_chain(
                instrument_key, expiry_date, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncOptionsWithRawResponse:
        return self._with_raw_response


class OptionsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def get_option_contracts(
        self,
        instrument_key: str,
        *,
        expiry_date: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[GetOptionContractResponse, GetOptionContractsErrorBody]:
        """This API provides the functionality to retrieve the option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/option/contract"),
            query_params=[param[str]("instrument_key", instrument_key), param[str | None]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetOptionContractResponse],
            error_mapper=get_option_contracts_error_mapper,
            request_options=request_options,
        )

    def get_put_call_option_chain(
        self, instrument_key: str, expiry_date: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[GetOptionChainResponse, GetPutCallOptionChainErrorBody]:
        """This API provides the functionality to retrieve the option chain

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/option/chain"),
            query_params=[param[str]("instrument_key", instrument_key), param[str]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[GetOptionChainResponse],
            error_mapper=get_put_call_option_chain_error_mapper,
            request_options=request_options,
        )


class AsyncOptionsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def get_option_contracts(
        self,
        instrument_key: str,
        *,
        expiry_date: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[GetOptionContractResponse, GetOptionContractsErrorBody]:
        """This API provides the functionality to retrieve the option contracts

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/option/contract"),
            query_params=[param[str]("instrument_key", instrument_key), param[str | None]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetOptionContractResponse],
            error_mapper=get_option_contracts_error_mapper,
            request_options=request_options,
        )

    async def get_put_call_option_chain(
        self, instrument_key: str, expiry_date: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[GetOptionChainResponse, GetPutCallOptionChainErrorBody]:
        """This API provides the functionality to retrieve the option chain

        Args:
            instrument_key: Instrument key for an underlying symbol
            expiry_date: Expiry date in format: YYYY-mm-dd
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/option/chain"),
            query_params=[param[str]("instrument_key", instrument_key), param[str]("expiry_date", expiry_date)],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[GetOptionChainResponse],
            error_mapper=get_put_call_option_chain_error_mapper,
            request_options=request_options,
        )
