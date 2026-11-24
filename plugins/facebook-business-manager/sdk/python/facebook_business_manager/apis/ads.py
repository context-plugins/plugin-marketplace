from __future__ import annotations

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
from ..errors.create_ad_error import CreateAdErrorBody, create_ad_error_mapper
from ..errors.get_ad_error import GetAdErrorBody, get_ad_error_mapper
from ..errors.list_ads_error import ListAdsErrorBody, list_ads_error_mapper
from ..models.ad import Ad
from ..models.ad_create import AdCreate, AdCreateDict
from ..models.ad_list import AdList
from ..models.create_response import CreateResponse
from ..server.server import Server


class Ads:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AdsWithRawResponse(client, server, auth)

    def create_ad(
        self, ad_account_id: str, body: AdCreate | AdCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> CreateResponse:
        """Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at
        the ad set level.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_ad(ad_account_id, body, request_options=request_options))

    def get_ad(
        self, ad_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> Ad:
        """Retrieves the details of a specific ad including its creative, status, and configuration.

        Args:
            ad_id: The ID of the ad
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved ad details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_ad(ad_id, fields=fields, request_options=request_options))

    def list_ads(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdList:
        """Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of ads

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_ads(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AdsWithRawResponse:
        return self._with_raw_response


class AsyncAds:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAdsWithRawResponse(client, server, auth)

    async def create_ad(
        self,
        ad_account_id: str,
        body: AdCreate | AdCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at
        the ad set level.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_ad(ad_account_id, body, request_options=request_options))

    async def get_ad(
        self, ad_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> Ad:
        """Retrieves the details of a specific ad including its creative, status, and configuration.

        Args:
            ad_id: The ID of the ad
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved ad details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.get_ad(ad_id, fields=fields, request_options=request_options))

    async def list_ads(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdList:
        """Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of ads

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_ads(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAdsWithRawResponse:
        return self._with_raw_response


class AdsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_ad(
        self, ad_account_id: str, body: AdCreate | AdCreateDict, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CreateResponse, CreateAdErrorBody]:
        """Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at
        the ad set level.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/ads"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdCreate | AdCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_ad_error_mapper,
            request_options=request_options,
        )

    def get_ad(
        self, ad_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[Ad, GetAdErrorBody]:
        """Retrieves the details of a specific ad including its creative, status, and configuration.

        Args:
            ad_id: The ID of the ad
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{ad_id}"),
            path_params=[param[str]("ad_id", ad_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[Ad],
            error_mapper=get_ad_error_mapper,
            request_options=request_options,
        )

    def list_ads(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdList, ListAdsErrorBody]:
        """Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}/ads"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AdList],
            error_mapper=list_ads_error_mapper,
            request_options=request_options,
        )


class AsyncAdsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_ad(
        self,
        ad_account_id: str,
        body: AdCreate | AdCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateAdErrorBody]:
        """Creates a new ad within an ad set. Associates an ad creative with targeting and delivery settings defined at
        the ad set level.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/ads"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdCreate | AdCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_ad_error_mapper,
            request_options=request_options,
        )

    async def get_ad(
        self, ad_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[Ad, GetAdErrorBody]:
        """Retrieves the details of a specific ad including its creative, status, and configuration.

        Args:
            ad_id: The ID of the ad
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{ad_id}"),
            path_params=[param[str]("ad_id", ad_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[Ad],
            error_mapper=get_ad_error_mapper,
            request_options=request_options,
        )

    async def list_ads(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdList, ListAdsErrorBody]:
        """Retrieves all ads for the specified ad account. Returns ad configurations including creative associations and
        status.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/act_{ad_account_id}/ads"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AdList],
            error_mapper=list_ads_error_mapper,
            request_options=request_options,
        )
