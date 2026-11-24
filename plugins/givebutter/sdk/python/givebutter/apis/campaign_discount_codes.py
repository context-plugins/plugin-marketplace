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
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.campaigns_discount_codes_destroy_error import (
    CampaignsDiscountCodesDestroyErrorBody,
    campaigns_discount_codes_destroy_error_mapper,
)
from ..errors.campaigns_discount_codes_index_error import (
    CampaignsDiscountCodesIndexErrorBody,
    campaigns_discount_codes_index_error_mapper,
)
from ..errors.campaigns_discount_codes_show_error import (
    CampaignsDiscountCodesShowErrorBody,
    campaigns_discount_codes_show_error_mapper,
)
from ..errors.campaigns_discount_codes_store_error import (
    CampaignsDiscountCodesStoreErrorBody,
    campaigns_discount_codes_store_error_mapper,
)
from ..errors.campaigns_discount_codes_update_error import (
    CampaignsDiscountCodesUpdateErrorBody,
    campaigns_discount_codes_update_error_mapper,
)
from ..models.campaign_discount_code_resource import CampaignDiscountCodeResource
from ..models.store_campaign_discount_code_request import (
    StoreCampaignDiscountCodeRequest,
    StoreCampaignDiscountCodeRequestDict,
)
from ..models.update_campaign_discount_code_request import (
    UpdateCampaignDiscountCodeRequest,
    UpdateCampaignDiscountCodeRequestDict,
)
from ..models.v1_campaigns_discount_codes_response import V1CampaignsDiscountCodesResponse
from ..server.server import Server


class CampaignDiscountCodes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = CampaignDiscountCodesWithRawResponse(client, server, auth)

    def campaigns_discount_codes_destroy(
        self, campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: An error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | V1CampaignsDiscountCodes422Error1 | RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_discount_codes_destroy(
                campaign, discount_code, request_options=request_options
            ),
        )

    def campaigns_discount_codes_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> V1CampaignsDiscountCodesResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(self._with_raw_response.campaigns_discount_codes_index(campaign, request_options=request_options))

    def campaigns_discount_codes_show(
        self, campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> CampaignDiscountCodeResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_discount_codes_show(
                campaign, discount_code, request_options=request_options
            ),
        )

    def campaigns_discount_codes_store(
        self,
        campaign: int,
        body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignDiscountCodeResource:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_discount_codes_store(campaign, body, request_options=request_options)
        )

    def campaigns_discount_codes_update(
        self,
        campaign: int,
        discount_code: int,
        body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> CampaignDiscountCodeResource:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            self._with_raw_response.campaigns_discount_codes_update(
                campaign, discount_code, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> CampaignDiscountCodesWithRawResponse:
        return self._with_raw_response


class AsyncCampaignDiscountCodes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncCampaignDiscountCodesWithRawResponse(client, server, auth)

    async def campaigns_discount_codes_destroy(
        self, campaign: int, discount_code: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            No content

        Raises:
            ApiError: An error Authorization error Not found ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | V1CampaignsDiscountCodes422Error1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_discount_codes_destroy(
                campaign, discount_code, request_options=request_options
            ),
        )

    async def campaigns_discount_codes_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> V1CampaignsDiscountCodesResponse:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Paginated set of ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_discount_codes_index(campaign, request_options=request_options)
        )

    async def campaigns_discount_codes_show(
        self, campaign: int, discount_code: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> CampaignDiscountCodeResource:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found ``error`` is ``AuthorizationException1 | ModelNotFoundException1 |
                RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_discount_codes_show(
                campaign, discount_code, request_options=request_options
            ),
        )

    async def campaigns_discount_codes_store(
        self,
        campaign: int,
        body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignDiscountCodeResource:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_discount_codes_store(
                campaign, body, request_options=request_options
            ),
        )

    async def campaigns_discount_codes_update(
        self,
        campaign: int,
        discount_code: int,
        body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> CampaignDiscountCodeResource:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            ``CampaignDiscountCodeResource``

        Raises:
            ApiError: Authorization error Not found Validation error ``error`` is ``AuthorizationException1 |
                ModelNotFoundException1 | ValidationException1 | RawError``."""
        return unwrap(
            await self._with_raw_response.campaigns_discount_codes_update(
                campaign, discount_code, body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncCampaignDiscountCodesWithRawResponse:
        return self._with_raw_response


class CampaignDiscountCodesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def campaigns_discount_codes_destroy(
        self, campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[None, CampaignsDiscountCodesDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            path_params=[param[int]("campaign", campaign), param[int]("discountCode", discount_code)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=empty_response,
            error_mapper=campaigns_discount_codes_destroy_error_mapper,
            request_options=request_options,
        )

    def campaigns_discount_codes_index(
        self, campaign: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsDiscountCodesResponse, CampaignsDiscountCodesIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[V1CampaignsDiscountCodesResponse],
            error_mapper=campaigns_discount_codes_index_error_mapper,
            request_options=request_options,
        )

    def campaigns_discount_codes_show(
        self, campaign: int, discount_code: int, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            path_params=[param[int]("campaign", campaign), param[int]("discountCode", discount_code)],
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignDiscountCodeResource],
            error_mapper=campaigns_discount_codes_show_error_mapper,
            request_options=request_options,
        )

    def campaigns_discount_codes_store(
        self,
        campaign: int,
        body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignDiscountCodeResource],
            error_mapper=campaigns_discount_codes_store_error_mapper,
            request_options=request_options,
        )

    def campaigns_discount_codes_update(
        self,
        campaign: int,
        discount_code: int,
        body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            path_params=[param[int]("campaign", campaign), param[int]("discountCode", discount_code)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=json_decoder[CampaignDiscountCodeResource],
            error_mapper=campaigns_discount_codes_update_error_mapper,
            request_options=request_options,
        )


class AsyncCampaignDiscountCodesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def campaigns_discount_codes_destroy(
        self, campaign: int, discount_code: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, CampaignsDiscountCodesDestroyErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            path_params=[param[int]("campaign", campaign), param[int]("discountCode", discount_code)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.http,
            decoder=async_empty_response,
            error_mapper=campaigns_discount_codes_destroy_error_mapper,
            request_options=request_options,
        )

    async def campaigns_discount_codes_index(
        self, campaign: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[V1CampaignsDiscountCodesResponse, CampaignsDiscountCodesIndexErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes"),
            path_params=[param[int]("campaign", campaign)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[V1CampaignsDiscountCodesResponse],
            error_mapper=campaigns_discount_codes_index_error_mapper,
            request_options=request_options,
        )

    async def campaigns_discount_codes_show(
        self, campaign: int, discount_code: int, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesShowErrorBody]:
        """Send a ``GET`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            path_params=[param[int]("campaign", campaign), param[int]("discountCode", discount_code)],
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignDiscountCodeResource],
            error_mapper=campaigns_discount_codes_show_error_mapper,
            request_options=request_options,
        )

    async def campaigns_discount_codes_store(
        self,
        campaign: int,
        body: StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesStoreErrorBody]:
        """Send a ``POST`` request.

        Args:
            campaign: The campaign ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes"),
            path_params=[param[int]("campaign", campaign)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[StoreCampaignDiscountCodeRequest | StoreCampaignDiscountCodeRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignDiscountCodeResource],
            error_mapper=campaigns_discount_codes_store_error_mapper,
            request_options=request_options,
        )

    async def campaigns_discount_codes_update(
        self,
        campaign: int,
        discount_code: int,
        body: UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[CampaignDiscountCodeResource, CampaignsDiscountCodesUpdateErrorBody]:
        """Send a ``PUT`` request.

        Args:
            campaign: The campaign ID
            discount_code: The discount code ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v1/campaigns/{campaign}/discount-codes/{discountCode}"),
            path_params=[param[int]("campaign", campaign), param[int]("discountCode", discount_code)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateCampaignDiscountCodeRequest | UpdateCampaignDiscountCodeRequestDict](body),
            auth_scheme=self._auth.http,
            decoder=async_json_decoder[CampaignDiscountCodeResource],
            error_mapper=campaigns_discount_codes_update_error_mapper,
            request_options=request_options,
        )
