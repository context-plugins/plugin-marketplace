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
from ..errors.create_ad_set_error import CreateAdSetErrorBody, create_ad_set_error_mapper
from ..errors.get_ad_set_error import GetAdSetErrorBody, get_ad_set_error_mapper
from ..errors.list_ad_sets_error import ListAdSetsErrorBody, list_ad_sets_error_mapper
from ..errors.update_ad_set_error import UpdateAdSetErrorBody, update_ad_set_error_mapper
from ..models.ad_set import AdSet
from ..models.ad_set_create import AdSetCreate, AdSetCreateDict
from ..models.ad_set_list import AdSetList
from ..models.ad_set_update import AdSetUpdate, AdSetUpdateDict
from ..models.create_response import CreateResponse
from ..models.success_response import SuccessResponse
from ..server.server import Server


class AdSets:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = AdSetsWithRawResponse(client, server, auth)

    def create_ad_set(
        self,
        ad_account_id: str,
        body: AdSetCreate | AdSetCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid
        strategy.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad set created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_ad_set(ad_account_id, body, request_options=request_options))

    def get_ad_set(
        self, ad_set_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> AdSet:
        """Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization
        settings.

        Args:
            ad_set_id: The ID of the ad set
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved ad set details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.get_ad_set(ad_set_id, fields=fields, request_options=request_options))

    def list_ad_sets(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> AdSetList:
        """Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization
        configurations.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of ad sets

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.list_ad_sets(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    def update_ad_set(
        self,
        ad_set_id: str,
        body: AdSetUpdate | AdSetUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

        Args:
            ad_set_id: The ID of the ad set
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad set updated successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_ad_set(ad_set_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AdSetsWithRawResponse:
        return self._with_raw_response


class AsyncAdSets:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncAdSetsWithRawResponse(client, server, auth)

    async def create_ad_set(
        self,
        ad_account_id: str,
        body: AdSetCreate | AdSetCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CreateResponse:
        """Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid
        strategy.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad set created successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_ad_set(ad_account_id, body, request_options=request_options))

    async def get_ad_set(
        self, ad_set_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> AdSet:
        """Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization
        settings.

        Args:
            ad_set_id: The ID of the ad set
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved ad set details

        Raises:
            ApiError: Invalid or expired access token The requested resource was not found ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.get_ad_set(ad_set_id, fields=fields, request_options=request_options)
        )

    async def list_ad_sets(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> AdSetList:
        """Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization
        configurations.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            limit: Maximum number of objects to return per page. Default is 25.
            after: Cursor for pagination to retrieve the next page of results
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Successfully retrieved list of ad sets

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.list_ad_sets(
                ad_account_id, fields=fields, limit=limit, after=after, request_options=request_options
            ),
        )

    async def update_ad_set(
        self,
        ad_set_id: str,
        body: AdSetUpdate | AdSetUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

        Args:
            ad_set_id: The ID of the ad set
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Ad set updated successfully

        Raises:
            ApiError: Invalid request parameters or malformed request body Invalid or expired access token ``error`` is
                ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_ad_set(ad_set_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncAdSetsWithRawResponse:
        return self._with_raw_response


class AdSetsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def create_ad_set(
        self,
        ad_account_id: str,
        body: AdSetCreate | AdSetCreateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateAdSetErrorBody]:
        """Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid
        strategy.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/adsets"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdSetCreate | AdSetCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[CreateResponse],
            error_mapper=create_ad_set_error_mapper,
            request_options=request_options,
        )

    def get_ad_set(
        self, ad_set_id: str, *, fields: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[AdSet, GetAdSetErrorBody]:
        """Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization
        settings.

        Args:
            ad_set_id: The ID of the ad set
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{ad_set_id}"),
            path_params=[param[str]("ad_set_id", ad_set_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AdSet],
            error_mapper=get_ad_set_error_mapper,
            request_options=request_options,
        )

    def list_ad_sets(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[AdSetList, ListAdSetsErrorBody]:
        """Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization
        configurations.

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
            url_template=self._server.default("/act_{ad_account_id}/adsets"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[AdSetList],
            error_mapper=list_ad_sets_error_mapper,
            request_options=request_options,
        )

    def update_ad_set(
        self,
        ad_set_id: str,
        body: AdSetUpdate | AdSetUpdateDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, UpdateAdSetErrorBody]:
        """Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

        Args:
            ad_set_id: The ID of the ad set
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{ad_set_id}"),
            path_params=[param[str]("ad_set_id", ad_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdSetUpdate | AdSetUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=json_decoder[SuccessResponse],
            error_mapper=update_ad_set_error_mapper,
            request_options=request_options,
        )


class AsyncAdSetsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def create_ad_set(
        self,
        ad_account_id: str,
        body: AdSetCreate | AdSetCreateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CreateResponse, CreateAdSetErrorBody]:
        """Creates a new ad set within a campaign. Defines targeting, budget, schedule, optimization goal, and bid
        strategy.

        Args:
            ad_account_id: The ID of the ad account (numeric, without the act_ prefix)
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/act_{ad_account_id}/adsets"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdSetCreate | AdSetCreateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[CreateResponse],
            error_mapper=create_ad_set_error_mapper,
            request_options=request_options,
        )

    async def get_ad_set(
        self, ad_set_id: str, *, fields: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[AdSet, GetAdSetErrorBody]:
        """Retrieves the details of a specific ad set including targeting, budget, scheduling, and optimization
        settings.

        Args:
            ad_set_id: The ID of the ad set
            fields: Comma-separated list of fields to include in the response. If omitted, default fields are returned.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/{ad_set_id}"),
            path_params=[param[str]("ad_set_id", ad_set_id)],
            query_params=[param[str | None]("fields", fields)],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AdSet],
            error_mapper=get_ad_set_error_mapper,
            request_options=request_options,
        )

    async def list_ad_sets(
        self,
        ad_account_id: str,
        *,
        fields: str | None = None,
        limit: int | None = 25,
        after: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[AdSetList, ListAdSetsErrorBody]:
        """Retrieves all ad sets for the specified ad account. Returns targeting, budget, scheduling, and optimization
        configurations.

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
            url_template=self._server.default("/act_{ad_account_id}/adsets"),
            path_params=[param[str]("ad_account_id", ad_account_id)],
            query_params=[
                param[str | None]("fields", fields),
                param[int | None]("limit", limit),
                param[str | None]("after", after),
            ],
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[AdSetList],
            error_mapper=list_ad_sets_error_mapper,
            request_options=request_options,
        )

    async def update_ad_set(
        self,
        ad_set_id: str,
        body: AdSetUpdate | AdSetUpdateDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, UpdateAdSetErrorBody]:
        """Updates an existing ad set. Supports modifying targeting, budget, schedule, and optimization settings.

        Args:
            ad_set_id: The ID of the ad set
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/{ad_set_id}"),
            path_params=[param[str]("ad_set_id", ad_set_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[AdSetUpdate | AdSetUpdateDict](body),
            auth_scheme=self._auth.bearer_auth,
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=update_ad_set_error_mapper,
            request_options=request_options,
        )
