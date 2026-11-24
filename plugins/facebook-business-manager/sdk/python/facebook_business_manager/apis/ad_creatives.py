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
from ..errors.create_ad_creative_error import CreateAdCreativeErrorBody, create_ad_creative_error_mapper
from ..errors.list_ad_creatives_error import ListAdCreativesErrorBody, list_ad_creatives_error_mapper
from ..models.ad_creative_create import AdCreativeCreate, AdCreativeCreateDict
from ..models.ad_creative_list import AdCreativeList
from ..models.create_response import CreateResponse
from ..server.server import Server


class AdCreatives:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AdCreativesWithRawResponse(client, server, auth)

    def create_ad_creative(
        self,
        ad_account_id: str,
        body: AdCreativeCreate | AdCreativeCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad creative created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_ad_creative(ad_account_id, body, request_options=request_options))

    def list_ad_creatives(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdCreativeList:
        """Retrieves all ad creatives for the specified ad account.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of ad creatives

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_ad_creatives(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AdCreativesWithRawResponse:
        return self._with_raw_response


class AsyncAdCreatives:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAdCreativesWithRawResponse(client, server, auth)

    async def create_ad_creative(
        self,
        ad_account_id: str,
        body: AdCreativeCreate | AdCreativeCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad creative created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_ad_creative(ad_account_id, body, request_options=request_options)
        )

    async def list_ad_creatives(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdCreativeList:
        """Retrieves all ad creatives for the specified ad account.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of ad creatives

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_ad_creatives(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncAdCreativesWithRawResponse:
        return self._with_raw_response


class AdCreativesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_ad_creative(
        self,
        ad_account_id: str,
        body: AdCreativeCreate | AdCreativeCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateAdCreativeErrorBody]:
        """Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/adcreatives"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdCreativeCreate | AdCreativeCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_ad_creative_error_mapper,
            request_options=request_options,
        )

    def list_ad_creatives(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdCreativeList, ListAdCreativesErrorBody]:
        """Retrieves all ad creatives for the specified ad account.

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
            url_template=self._server.default("/act_{ad_account_id}/adcreatives"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AdCreativeList],
            error_mapper=list_ad_creatives_error_mapper,
            request_options=request_options,
        )


class AsyncAdCreativesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_ad_creative(
        self,
        ad_account_id: str,
        body: AdCreativeCreate | AdCreativeCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateAdCreativeErrorBody]:
        """Creates a new ad creative with image, video, copy, and call-to-action configurations for use in ads.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/adcreatives"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdCreativeCreate | AdCreativeCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_ad_creative_error_mapper,
            request_options=request_options,
        )

    async def list_ad_creatives(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdCreativeList, ListAdCreativesErrorBody]:
        """Retrieves all ad creatives for the specified ad account.

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
            url_template=self._server.default("/act_{ad_account_id}/adcreatives"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AdCreativeList],
            error_mapper=list_ad_creatives_error_mapper,
            request_options=request_options,
        )
