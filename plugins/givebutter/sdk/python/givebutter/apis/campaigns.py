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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    raw_error_response,
    unwrap,
)
from ..errors.campaigns_destroy_error import CampaignsDestroyErrorBody, campaigns_destroy_error_mapper
from ..errors.campaigns_show_error import CampaignsShowErrorBody, campaigns_show_error_mapper
from ..errors.campaigns_store_error import CampaignsStoreErrorBody, campaigns_store_error_mapper
from ..errors.campaigns_update_error import CampaignsUpdateErrorBody, campaigns_update_error_mapper
from ..models.campaign_resource import CampaignResource
from ..models.store_campaign_request import StoreCampaignRequest, StoreCampaignRequestDict
from ..models.update_campaign_request import UpdateCampaignRequest, UpdateCampaignRequestDict
from ..models.v1_campaigns_response import V1CampaignsResponse
from ..server.server import Server


class Campaigns:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignsWithRawResponse(client, server, auth)

    def campaigns_destroy(self, campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> None:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                V1Campaigns409Error1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_destroy(campaign, request_options=request_options))

    def campaigns_index(
        self, *, scope: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> V1CampaignsResponse:
        """Send a ``GET`` request.

        Args:
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(self._with_raw_response.campaigns_index(scope=scope, request_options=request_options))

    def campaigns_show(self, campaign: int, *, request_options: RequestOptionsOrDict | None = None) -> CampaignResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_show(campaign, request_options=request_options))

    def campaigns_store(
        self,
        body: StoreCampaignRequest | StoreCampaignRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_store(body, request_options=request_options))

    def campaigns_update(
        self,
        campaign: int,
        *,
        body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignResource:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(self._with_raw_response.campaigns_update(campaign, body=body, request_options=request_options))

    @property
    def with_raw_response(self) -> CampaignsWithRawResponse:
        return self._with_raw_response


class AsyncCampaigns:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignsWithRawResponse(client, server, auth)

    async def campaigns_destroy(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                V1Campaigns409Error1 | RawError``."""
        return unwrap(await self._with_raw_response.campaigns_destroy(campaign, request_options=request_options))

    async def campaigns_index(
        self, *, scope: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CampaignsResponse:
        """Send a ``GET`` request.

        Args:
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignResource``

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self._with_raw_response.campaigns_index(scope=scope, request_options=request_options))

    async def campaigns_show(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CampaignResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Not found ``error`` is ``ModelNotFoundException1 | RawError``."""
        return unwrap(await self._with_raw_response.campaigns_show(campaign, request_options=request_options))

    async def campaigns_store(
        self,
        body: StoreCampaignRequest | StoreCampaignRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignResource:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Validation error ``error`` is ``ValidationException1 | RawError``."""
        return unwrap(await self._with_raw_response.campaigns_store(body, request_options=request_options))

    async def campaigns_update(
        self,
        campaign: int,
        *,
        body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignResource:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignResource``

        Raises:
            ApiError: Authorization error Validation error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_update(campaign, body=body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncCampaignsWithRawResponse:
        return self._with_raw_response


class CampaignsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def campaigns_destroy(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CampaignsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=campaigns_destroy_error_mapper,
            request_options=request_options,
        )

    def campaigns_index(
        self, *, scope: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns"),
            query_params=[param[str | None]("scope", scope)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1CampaignsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    def campaigns_show(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignResource, CampaignsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignResource],
            error_mapper=campaigns_show_error_mapper,
            request_options=request_options,
        )

    def campaigns_store(
        self,
        body: StoreCampaignRequest | StoreCampaignRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignResource, CampaignsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreCampaignRequest | StoreCampaignRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignResource],
            error_mapper=campaigns_store_error_mapper,
            request_options=request_options,
        )

    def campaigns_update(
        self,
        campaign: int,
        *,
        body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignResource, CampaignsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCampaignRequest | UpdateCampaignRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignResource],
            error_mapper=campaigns_update_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def campaigns_destroy(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CampaignsDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=campaigns_destroy_error_mapper,
            request_options=request_options,
        )

    async def campaigns_index(
        self, *, scope: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            scope: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns"),
            query_params=[param[str | None]("scope", scope)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1CampaignsResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def campaigns_show(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignResource, CampaignsShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignResource],
            error_mapper=campaigns_show_error_mapper,
            request_options=request_options,
        )

    async def campaigns_store(
        self,
        body: StoreCampaignRequest | StoreCampaignRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignResource, CampaignsStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/campaigns"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreCampaignRequest | StoreCampaignRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignResource],
            error_mapper=campaigns_store_error_mapper,
            request_options=request_options,
        )

    async def campaigns_update(
        self,
        campaign: int,
        *,
        body: UpdateCampaignRequest | UpdateCampaignRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignResource, CampaignsUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/campaigns/{campaign}"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCampaignRequest | UpdateCampaignRequestDict | None](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignResource],
            error_mapper=campaigns_update_error_mapper,
            request_options=request_options,
        )
