from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_json_decoder,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.get_pricing_error import GetPricingErrorBody, get_pricing_error_mapper
from ..errors.list_pricing_error import ListPricingErrorBody, list_pricing_error_mapper
from ..errors.update_pricing_error import UpdatePricingErrorBody, update_pricing_error_mapper
from ..models.pricing_list_response import PricingListResponse
from ..models.pricing_response import PricingResponse
from ..models.update_pricing_request import UpdatePricingRequest, UpdatePricingRequestDict
from ..server.server import Server


class PricingApi:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PricingApiWithRawResponse(client, server)

    def get_pricing(
        self, product_attribute_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PricingResponse:
        """Returns pricing and credit benefits for a single product attribute.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_pricing(product_attribute_id, authorization, request_options=request_options)
        )

    def list_pricing(
        self, product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PricingListResponse:
        """Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing
        configuration and credit benefits.

        Args:
            product_id: Product display ID or UUID
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.list_pricing(product_id, authorization, request_options=request_options))

    def update_pricing(
        self,
        product_attribute_id: UUID,
        authorization: str,
        *,
        body: UpdatePricingRequest | UpdatePricingRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PricingResponse:
        """Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing
        benefits. If omitted, existing benefits are preserved.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.update_pricing(
                product_attribute_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> PricingApiWithRawResponse:
        return self._with_raw_response


class AsyncPricingApi:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPricingApiWithRawResponse(client, server)

    async def get_pricing(
        self,
        product_attribute_id: UUID,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PricingResponse:
        """Returns pricing and credit benefits for a single product attribute.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_pricing(
                product_attribute_id, authorization, request_options=request_options
            ),
        )

    async def list_pricing(
        self, product_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PricingListResponse:
        """Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing
        configuration and credit benefits.

        Args:
            product_id: Product display ID or UUID
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_pricing(product_id, authorization, request_options=request_options)
        )

    async def update_pricing(
        self,
        product_attribute_id: UUID,
        authorization: str,
        *,
        body: UpdatePricingRequest | UpdatePricingRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PricingResponse:
        """Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing
        benefits. If omitted, existing benefits are preserved.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.update_pricing(
                product_attribute_id, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPricingApiWithRawResponse:
        return self._with_raw_response


class PricingApiWithRawResponse(BaseRawResponse[RawClient, Server]):
    def get_pricing(
        self, product_attribute_id: UUID, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PricingResponse, GetPricingErrorBody]:
        """Returns pricing and credit benefits for a single product attribute.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/pricing/{productAttributeId}"),
            path_params=[param[UUID]("productAttributeId", product_attribute_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PricingResponse],
            error_mapper=get_pricing_error_mapper,
            request_options=request_options,
        )

    def list_pricing(
        self, product_id: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PricingListResponse, ListPricingErrorBody]:
        """Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing
        configuration and credit benefits.

        Args:
            product_id: Product display ID or UUID
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/pricing/"),
            query_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[PricingListResponse],
            error_mapper=list_pricing_error_mapper,
            request_options=request_options,
        )

    def update_pricing(
        self,
        product_attribute_id: UUID,
        authorization: str,
        *,
        body: UpdatePricingRequest | UpdatePricingRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PricingResponse, UpdatePricingErrorBody]:
        """Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing
        benefits. If omitted, existing benefits are preserved.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/pricing/{productAttributeId}"),
            path_params=[param[UUID]("productAttributeId", product_attribute_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePricingRequest | UpdatePricingRequestDict | None](body),
            decoder=json_decoder[PricingResponse],
            error_mapper=update_pricing_error_mapper,
            request_options=request_options,
        )


class AsyncPricingApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def get_pricing(
        self,
        product_attribute_id: UUID,
        authorization: str,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PricingResponse, GetPricingErrorBody]:
        """Returns pricing and credit benefits for a single product attribute.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/pricing/{productAttributeId}"),
            path_params=[param[UUID]("productAttributeId", product_attribute_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PricingResponse],
            error_mapper=get_pricing_error_mapper,
            request_options=request_options,
        )

    async def list_pricing(
        self, product_id: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PricingListResponse, ListPricingErrorBody]:
        """Returns pricing for all product attributes of a product. Each entry includes the attribute's pricing
        configuration and credit benefits.

        Args:
            product_id: Product display ID or UUID
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/pricing/"),
            query_params=[param[str]("productId", product_id)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[PricingListResponse],
            error_mapper=list_pricing_error_mapper,
            request_options=request_options,
        )

    async def update_pricing(
        self,
        product_attribute_id: UUID,
        authorization: str,
        *,
        body: UpdatePricingRequest | UpdatePricingRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PricingResponse, UpdatePricingErrorBody]:
        """Updates pricing on an existing product attribute. If creditBenefits is provided, it fully replaces existing
        benefits. If omitted, existing benefits are preserved.

        Args:
            product_attribute_id: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default_reference_analytics_experimental_api("/pricing/{productAttributeId}"),
            path_params=[param[UUID]("productAttributeId", product_attribute_id)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdatePricingRequest | UpdatePricingRequestDict | None](body),
            decoder=async_json_decoder[PricingResponse],
            error_mapper=update_pricing_error_mapper,
            request_options=request_options,
        )
