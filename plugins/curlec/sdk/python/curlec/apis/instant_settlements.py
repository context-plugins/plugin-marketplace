from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.create_instant_settlement_error import (
    CreateInstantSettlementErrorBody,
    create_instant_settlement_error_mapper,
)
from ..errors.fetch_all_instant_settlements_error import (
    FetchAllInstantSettlementsErrorBody,
    fetch_all_instant_settlements_error_mapper,
)
from ..errors.fetch_instant_settlement_error import (
    FetchInstantSettlementErrorBody,
    fetch_instant_settlement_error_mapper,
)
from ..models.enums.expand_razorpay_instant_settlements_api import ExpandRazorpayInstantSettlementsApiOrStr
from ..models.instant_settlement import InstantSettlement
from ..models.settlements_ondemand_request import SettlementsOndemandRequest, SettlementsOndemandRequestDict
from ..models.settlements_ondemand_response import SettlementsOndemandResponse
from ..server.server import Server


class InstantSettlements:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = InstantSettlementsWithRawResponse(client, server, auth)

    def create_instant_settlement(
        self,
        body: SettlementsOndemandRequest | SettlementsOndemandRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InstantSettlement:
        """Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees
        apply. Use settle_full_balance=true to settle everything available, or specify an amount.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Instant settlement initiated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_instant_settlement(body, request_options=request_options))

    def fetch_all_instant_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SettlementsOndemandResponse:
        """Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual
        payout records inline.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of instant settlements.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_instant_settlements(
                from_=from_, to=to, count=count, skip=skip, expand=expand, request_options=request_options
            ),
        )

    def fetch_instant_settlement(
        self,
        id_: str,
        *,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> InstantSettlement:
        """Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout
        records.

        Args:
            id_: Instant settlement ID (setlod_*).
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Instant settlement details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.fetch_instant_settlement(id_, expand=expand, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> InstantSettlementsWithRawResponse:
        return self._with_raw_response


class AsyncInstantSettlements:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncInstantSettlementsWithRawResponse(client, server, auth)

    async def create_instant_settlement(
        self,
        body: SettlementsOndemandRequest | SettlementsOndemandRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InstantSettlement:
        """Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees
        apply. Use settle_full_balance=true to settle everything available, or specify an amount.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Instant settlement initiated.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_instant_settlement(body, request_options=request_options))

    async def fetch_all_instant_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SettlementsOndemandResponse:
        """Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual
        payout records inline.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of instant settlements.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_instant_settlements(
                from_=from_, to=to, count=count, skip=skip, expand=expand, request_options=request_options
            ),
        )

    async def fetch_instant_settlement(
        self,
        id_: str,
        *,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> InstantSettlement:
        """Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout
        records.

        Args:
            id_: Instant settlement ID (setlod_*).
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Instant settlement details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_instant_settlement(id_, expand=expand, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncInstantSettlementsWithRawResponse:
        return self._with_raw_response


class InstantSettlementsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_instant_settlement(
        self,
        body: SettlementsOndemandRequest | SettlementsOndemandRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InstantSettlement, CreateInstantSettlementErrorBody]:
        """Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees
        apply. Use settle_full_balance=true to settle everything available, or specify an amount.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/settlements/ondemand"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SettlementsOndemandRequest | SettlementsOndemandRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[InstantSettlement],
            error_mapper=create_instant_settlement_error_mapper,
            request_options=request_options,
        )

    def fetch_all_instant_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SettlementsOndemandResponse, FetchAllInstantSettlementsErrorBody]:
        """Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual
        payout records inline.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/ondemand"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[ExpandRazorpayInstantSettlementsApiOrStr | None]("expand[]", expand),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[SettlementsOndemandResponse],
            error_mapper=fetch_all_instant_settlements_error_mapper,
            request_options=request_options,
        )

    def fetch_instant_settlement(
        self,
        id_: str,
        *,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[InstantSettlement, FetchInstantSettlementErrorBody]:
        """Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout
        records.

        Args:
            id_: Instant settlement ID (setlod_*).
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/ondemand/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[ExpandRazorpayInstantSettlementsApiOrStr | None]("expand[]", expand)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[InstantSettlement],
            error_mapper=fetch_instant_settlement_error_mapper,
            request_options=request_options,
        )


class AsyncInstantSettlementsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_instant_settlement(
        self,
        body: SettlementsOndemandRequest | SettlementsOndemandRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InstantSettlement, CreateInstantSettlementErrorBody]:
        """Request an on-demand (instant) settlement of your available Razorpay balance to your bank account. Fees
        apply. Use settle_full_balance=true to settle everything available, or specify an amount.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/settlements/ondemand"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SettlementsOndemandRequest | SettlementsOndemandRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[InstantSettlement],
            error_mapper=create_instant_settlement_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_instant_settlements(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SettlementsOndemandResponse, FetchAllInstantSettlementsErrorBody]:
        """Retrieve a list of all on-demand instant settlements. Use expand[]=ondemand_payouts to include individual
        payout records inline.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/ondemand"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[ExpandRazorpayInstantSettlementsApiOrStr | None]("expand[]", expand),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[SettlementsOndemandResponse],
            error_mapper=fetch_all_instant_settlements_error_mapper,
            request_options=request_options,
        )

    async def fetch_instant_settlement(
        self,
        id_: str,
        *,
        expand: ExpandRazorpayInstantSettlementsApiOrStr | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[InstantSettlement, FetchInstantSettlementErrorBody]:
        """Retrieve details of a specific on-demand instant settlement. Use expand[]=ondemand_payouts to include payout
        records.

        Args:
            id_: Instant settlement ID (setlod_*).
            expand: Set to ondemand_payouts to include payout details.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/settlements/ondemand/{id}"),
            path_params=[param[str]("id", id_)],
            query_params=[param[ExpandRazorpayInstantSettlementsApiOrStr | None]("expand[]", expand)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[InstantSettlement],
            error_mapper=fetch_instant_settlement_error_mapper,
            request_options=request_options,
        )
