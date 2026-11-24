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
from ..errors.purchases_index_error import PurchasesIndexErrorBody, purchases_index_error_mapper
from ..models.api_v1_purchases_response import ApiV1PurchasesResponse
from ..server.server import Server


class Purchases:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PurchasesWithRawResponse(client, server, auth)

    def purchases_index(
        self, *, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiV1PurchasesResponse:
        """Retrieve a paginated list of DID numbers purchased by the authenticated user.

        **Features:**
        - Ordered by most recent first
        - Pagination: 100 DIDs per page (max 1000)
        - Available in JSON and CSV formats

        **Returned Information:**
        - DID number and status
        - Purchase and expiration dates
        - Monthly cost and features
        - SMS/voice capabilities

        ``purchases[].number`` feeds purchases_destinations_index, purchases_destinations_create,
        purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and sms_create: it is
        the ``purchase_id`` of the destination operations, an entry of ``did_numbers[]`` when releasing numbers, and
        ``sm[source]`` when the number has SMS enabled. See also: numbers_index, the same numbers with their inventory
        id.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns paginated list of purchased DID numbers in JSON format

        Raises:
            ApiError: Returns 403 error when API token is incorrect ``error`` is ``ApiV1Purchases403Error1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.purchases_index(page=page, per_page=per_page, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> PurchasesWithRawResponse:
        return self._with_raw_response


class AsyncPurchases:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPurchasesWithRawResponse(client, server, auth)

    async def purchases_index(
        self,
        *,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiV1PurchasesResponse:
        """Retrieve a paginated list of DID numbers purchased by the authenticated user.

        **Features:**
        - Ordered by most recent first
        - Pagination: 100 DIDs per page (max 1000)
        - Available in JSON and CSV formats

        **Returned Information:**
        - DID number and status
        - Purchase and expiration dates
        - Monthly cost and features
        - SMS/voice capabilities

        ``purchases[].number`` feeds purchases_destinations_index, purchases_destinations_create,
        purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and sms_create: it is
        the ``purchase_id`` of the destination operations, an entry of ``did_numbers[]`` when releasing numbers, and
        ``sm[source]`` when the number has SMS enabled. See also: numbers_index, the same numbers with their inventory
        id.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully returns paginated list of purchased DID numbers in JSON format

        Raises:
            ApiError: Returns 403 error when API token is incorrect ``error`` is ``ApiV1Purchases403Error1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.purchases_index(page=page, per_page=per_page, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPurchasesWithRawResponse:
        return self._with_raw_response


class PurchasesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def purchases_index(
        self, *, page: int | None = 1, per_page: int | None = 20, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ApiV1PurchasesResponse, PurchasesIndexErrorBody]:
        """Retrieve a paginated list of DID numbers purchased by the authenticated user.

        **Features:**
        - Ordered by most recent first
        - Pagination: 100 DIDs per page (max 1000)
        - Available in JSON and CSV formats

        **Returned Information:**
        - DID number and status
        - Purchase and expiration dates
        - Monthly cost and features
        - SMS/voice capabilities

        ``purchases[].number`` feeds purchases_destinations_index, purchases_destinations_create,
        purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and sms_create: it is
        the ``purchase_id`` of the destination operations, an entry of ``did_numbers[]`` when releasing numbers, and
        ``sm[source]`` when the number has SMS enabled. See also: numbers_index, the same numbers with their inventory
        id.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/purchases"),
            query_params=[param[int | None]("page", page), param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[ApiV1PurchasesResponse],
            error_mapper=purchases_index_error_mapper,
            request_options=request_options,
        )


class AsyncPurchasesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def purchases_index(
        self,
        *,
        page: int | None = 1,
        per_page: int | None = 20,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ApiV1PurchasesResponse, PurchasesIndexErrorBody]:
        """Retrieve a paginated list of DID numbers purchased by the authenticated user.

        **Features:**
        - Ordered by most recent first
        - Pagination: 100 DIDs per page (max 1000)
        - Available in JSON and CSV formats

        **Returned Information:**
        - DID number and status
        - Purchase and expiration dates
        - Monthly cost and features
        - SMS/voice capabilities

        ``purchases[].number`` feeds purchases_destinations_index, purchases_destinations_create,
        purchases_destinations_update, purchases_destinations_destroy, numbers_purchase_destroy and sms_create: it is
        the ``purchase_id`` of the destination operations, an entry of ``did_numbers[]`` when releasing numbers, and
        ``sm[source]`` when the number has SMS enabled. See also: numbers_index, the same numbers with their inventory
        id.

        Args:
            page: Page number for pagination (starts from 1)
            per_page: Number of items per page
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/api/v1/purchases"),
            query_params=[param[int | None]("page", page), param[int | None]("per_page", per_page)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[ApiV1PurchasesResponse],
            error_mapper=purchases_index_error_mapper,
            request_options=request_options,
        )
