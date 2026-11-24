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
from ..errors.create_custom_audience_error import CreateCustomAudienceErrorBody, create_custom_audience_error_mapper
from ..errors.list_custom_audiences_error import ListCustomAudiencesErrorBody, list_custom_audiences_error_mapper
from ..models.create_response import CreateResponse
from ..models.custom_audience_create import CustomAudienceCreate, CustomAudienceCreateDict
from ..models.custom_audience_list import CustomAudienceList
from ..server.server import Server


class CustomAudiences:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CustomAudiencesWithRawResponse(client, server, auth)

    def create_custom_audience(
        self,
        ad_account_id: str,
        body: CustomAudienceCreate | CustomAudienceCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences,
        app activity audiences, and lookalike audiences.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Custom audience created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.create_custom_audience(ad_account_id, body, request_options=request_options)
        )

    def list_custom_audiences(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CustomAudienceList:
        """Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate
        sizes.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of custom audiences

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_custom_audiences(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CustomAudiencesWithRawResponse:
        return self._with_raw_response


class AsyncCustomAudiences:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCustomAudiencesWithRawResponse(client, server, auth)

    async def create_custom_audience(
        self,
        ad_account_id: str,
        body: CustomAudienceCreate | CustomAudienceCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences,
        app activity audiences, and lookalike audiences.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Custom audience created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.create_custom_audience(ad_account_id, body, request_options=request_options)
        )

    async def list_custom_audiences(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CustomAudienceList:
        """Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate
        sizes.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of custom audiences

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_custom_audiences(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCustomAudiencesWithRawResponse:
        return self._with_raw_response


class CustomAudiencesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_custom_audience(
        self,
        ad_account_id: str,
        body: CustomAudienceCreate | CustomAudienceCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateCustomAudienceErrorBody]:
        """Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences,
        app activity audiences, and lookalike audiences.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/customaudiences"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomAudienceCreate | CustomAudienceCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_custom_audience_error_mapper,
            request_options=request_options,
        )

    def list_custom_audiences(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomAudienceList, ListCustomAudiencesErrorBody]:
        """Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate
        sizes.

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
            url_template=self._server.default("/act_{ad_account_id}/customaudiences"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CustomAudienceList],
            error_mapper=list_custom_audiences_error_mapper,
            request_options=request_options,
        )


class AsyncCustomAudiencesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_custom_audience(
        self,
        ad_account_id: str,
        body: CustomAudienceCreate | CustomAudienceCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateCustomAudienceErrorBody]:
        """Creates a new custom audience for ad targeting. Supports customer file audiences, website custom audiences,
        app activity audiences, and lookalike audiences.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/customaudiences"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CustomAudienceCreate | CustomAudienceCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_custom_audience_error_mapper,
            request_options=request_options,
        )

    async def list_custom_audiences(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CustomAudienceList, ListCustomAudiencesErrorBody]:
        """Retrieves all custom audiences for the specified ad account. Returns audience configurations and approximate
        sizes.

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
            url_template=self._server.default("/act_{ad_account_id}/customaudiences"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CustomAudienceList],
            error_mapper=list_custom_audiences_error_mapper,
            request_options=request_options,
        )
