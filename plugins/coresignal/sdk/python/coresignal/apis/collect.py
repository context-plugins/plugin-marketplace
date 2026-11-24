from __future__ import annotations

from uuid import UUID, uuid4

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
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.collect_company_error import CollectCompanyErrorBody, collect_company_error_mapper
from ..models.bulk_collect_request import BulkCollectRequest, BulkCollectRequestDict
from ..models.company import Company
from ..server.server import Server


class Collect:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CollectWithRawResponse(client, server, auth)

    def bulk_collect_companies(
        self, body: BulkCollectRequest | BulkCollectRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> list[Company]:
        """Retrieve multiple full company records by an array of IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of company records

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.bulk_collect_companies(body, request_options=request_options))

    def collect_company(self, id_: int, *, request_options: RequestOptionsOrDict | None = None) -> Company:
        """Retrieve the full company record for the given ID.

        Args:
            id_: Coresignal internal company ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full company record

        Raises:
            ApiError: Company not found Missing or invalid apikey header ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.collect_company(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> CollectWithRawResponse:
        return self._with_raw_response


class AsyncCollect:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCollectWithRawResponse(client, server, auth)

    async def bulk_collect_companies(
        self,
        body: BulkCollectRequest | BulkCollectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[Company]:
        """Retrieve multiple full company records by an array of IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Array of company records

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.bulk_collect_companies(body, request_options=request_options))

    async def collect_company(self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None) -> Company:
        """Retrieve the full company record for the given ID.

        Args:
            id_: Coresignal internal company ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Full company record

        Raises:
            ApiError: Company not found Missing or invalid apikey header ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.collect_company(id_, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncCollectWithRawResponse:
        return self._with_raw_response


class CollectWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def bulk_collect_companies(
        self, body: BulkCollectRequest | BulkCollectRequestDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[list[Company], RawError]:
        """Retrieve multiple full company records by an array of IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk_collect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkCollectRequest | BulkCollectRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[list[Company]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def collect_company(
        self, id_: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Company, CollectCompanyErrorBody]:
        """Retrieve the full company record for the given ID.

        Args:
            id_: Coresignal internal company ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/collect/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=json_decoder[Company],
            error_mapper=collect_company_error_mapper,
            request_options=request_options,
        )


class AsyncCollectWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def bulk_collect_companies(
        self,
        body: BulkCollectRequest | BulkCollectRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[Company], RawError]:
        """Retrieve multiple full company records by an array of IDs.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/bulk_collect"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[BulkCollectRequest | BulkCollectRequestDict](body),
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[list[Company]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def collect_company(
        self, id_: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Company, CollectCompanyErrorBody]:
        """Retrieve the full company record for the given ID.

        Args:
            id_: Coresignal internal company ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/collect/{id}"),
            path_params=[param[int]("id", id_)],
            auth_scheme=self._auth.api_key,
            decoder=async_json_decoder[Company],
            error_mapper=collect_company_error_mapper,
            request_options=request_options,
        )
