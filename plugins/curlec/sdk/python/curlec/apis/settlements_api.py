from __future__ import annotations

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
    json_decoder,
    param,
    unwrap,
)
from ..errors.fetch_all_settlements_error import FetchAllSettlementsErrorBody, fetch_all_settlements_error_mapper
from ..errors.fetch_settlement_error import FetchSettlementErrorBody, fetch_settlement_error_mapper
from ..errors.fetch_settlement_recon_error import FetchSettlementReconErrorBody, fetch_settlement_recon_error_mapper
from ..models.settlement import Settlement
from ..models.settlements_recon_combined_response import SettlementsReconCombinedResponse
from ..models.settlements_response import SettlementsResponse
from ..server.server import Server


class SettlementsApi:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = SettlementsApiWithRawResponse(client, server, auth)

    def fetch_all_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SettlementsResponse:
        """Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account.
        Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of settlements.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_settlements(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def fetch_settlement(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> Settlement:
        """Retrieve details of a specific settlement transaction.

        Args:
            id_: Settlement ID (setl_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settlement details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_settlement(id_, request_options=request_options))

    def fetch_settlement_recon(
        self,
        year: int,
        month: int,
        *,
        day: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SettlementsReconCombinedResponse:
        """Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a
        payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000
        records per call.

        Args:
            year: Settlement year in YYYY format.
            month: Settlement month in MM format (01–12).
            day: Settlement day in DD format (1–31). Omit to fetch the full month.
            count: Records per call. Maximum 1000. Default 10.
            skip: Records to skip for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reconciliation report records.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_settlement_recon(
                year, month, day=day, count=count, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> SettlementsApiWithRawResponse:
        return self._with_raw_response


class AsyncSettlementsApi:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncSettlementsApiWithRawResponse(client, server, auth)

    async def fetch_all_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SettlementsResponse:
        """Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account.
        Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of settlements.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_settlements(
                from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def fetch_settlement(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Settlement:
        """Retrieve details of a specific settlement transaction.

        Args:
            id_: Settlement ID (setl_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Settlement details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_settlement(id_, request_options=request_options))

    async def fetch_settlement_recon(
        self,
        year: int,
        month: int,
        *,
        day: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SettlementsReconCombinedResponse:
        """Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a
        payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000
        records per call.

        Args:
            year: Settlement year in YYYY format.
            month: Settlement month in MM format (01–12).
            day: Settlement day in DD format (1–31). Omit to fetch the full month.
            count: Records per call. Maximum 1000. Default 10.
            skip: Records to skip for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Reconciliation report records.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_settlement_recon(
                year, month, day=day, count=count, skip=skip, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncSettlementsApiWithRawResponse:
        return self._with_raw_response


class SettlementsApiWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def fetch_all_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SettlementsResponse, FetchAllSettlementsErrorBody]:
        """Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account.
        Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[SettlementsResponse],
            error_mapper=fetch_all_settlements_error_mapper,
            request_options=request_options,
        )

    def fetch_settlement(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Settlement, FetchSettlementErrorBody]:
        """Retrieve details of a specific settlement transaction.

        Args:
            id_: Settlement ID (setl_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[Settlement],
            error_mapper=fetch_settlement_error_mapper,
            request_options=request_options,
        )

    def fetch_settlement_recon(
        self,
        year: int,
        month: int,
        *,
        day: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SettlementsReconCombinedResponse, FetchSettlementReconErrorBody]:
        """Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a
        payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000
        records per call.

        Args:
            year: Settlement year in YYYY format.
            month: Settlement month in MM format (01–12).
            day: Settlement day in DD format (1–31). Omit to fetch the full month.
            count: Records per call. Maximum 1000. Default 10.
            skip: Records to skip for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/recon/combined"),
            query_params=[
                param[int]("year", year),
                param[int]("month", month),
                param[int | None]("day", day),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[SettlementsReconCombinedResponse],
            error_mapper=fetch_settlement_recon_error_mapper,
            request_options=request_options,
        )


class AsyncSettlementsApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def fetch_all_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SettlementsResponse, FetchAllSettlementsErrorBody]:
        """Retrieve a paginated list of settlements. Each settlement represents a batch transfer to your bank account.
        Maximum 100 per call.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[SettlementsResponse],
            error_mapper=fetch_all_settlements_error_mapper,
            request_options=request_options,
        )

    async def fetch_settlement(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Settlement, FetchSettlementErrorBody]:
        """Retrieve details of a specific settlement transaction.

        Args:
            id_: Settlement ID (setl_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[Settlement],
            error_mapper=fetch_settlement_error_mapper,
            request_options=request_options,
        )

    async def fetch_settlement_recon(
        self,
        year: int,
        month: int,
        *,
        day: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SettlementsReconCombinedResponse, FetchSettlementReconErrorBody]:
        """Retrieve a detailed transaction-level reconciliation report for a given month (or day). Each record maps a
        payment, refund, transfer, or adjustment to its settlement. Use for accounting reconciliation. Maximum 1000
        records per call.

        Args:
            year: Settlement year in YYYY format.
            month: Settlement month in MM format (01–12).
            day: Settlement day in DD format (1–31). Omit to fetch the full month.
            count: Records per call. Maximum 1000. Default 10.
            skip: Records to skip for pagination.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/recon/combined"),
            query_params=[
                param[int]("year", year),
                param[int]("month", month),
                param[int | None]("day", day),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[SettlementsReconCombinedResponse],
            error_mapper=fetch_settlement_recon_error_mapper,
            request_options=request_options,
        )
