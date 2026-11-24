from __future__ import annotations

from typing import Any
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
from ..errors.archive_value_receipt_error import ArchiveValueReceiptErrorBody, archive_value_receipt_error_mapper
from ..errors.get_value_receipt_by_id_error import GetValueReceiptByIdErrorBody, get_value_receipt_by_id_error_mapper
from ..errors.list_value_receipts_error import ListValueReceiptsErrorBody, list_value_receipts_error_mapper
from ..errors.publish_value_receipt_error import PublishValueReceiptErrorBody, publish_value_receipt_error_mapper
from ..errors.refresh_value_receipt_error import RefreshValueReceiptErrorBody, refresh_value_receipt_error_mapper
from ..errors.seal_value_receipt_error import SealValueReceiptErrorBody, seal_value_receipt_error_mapper
from ..errors.sync_value_receipt_error import SyncValueReceiptErrorBody, sync_value_receipt_error_mapper
from ..errors.unarchive_value_receipt_error import UnarchiveValueReceiptErrorBody, unarchive_value_receipt_error_mapper
from ..errors.unpublish_value_receipt_error import UnpublishValueReceiptErrorBody, unpublish_value_receipt_error_mapper
from ..models.enums.value_receipts_get_parameters_archived import (
    ValueReceiptsGetParametersArchived,
    ValueReceiptsGetParametersArchivedOrStr,
)
from ..models.publish_value_receipt_body import PublishValueReceiptBody, PublishValueReceiptBodyDict
from ..models.success_response import SuccessResponse
from ..models.sync_value_receipt_request import SyncValueReceiptRequest, SyncValueReceiptRequestDict
from ..models.value_receipt_detail import ValueReceiptDetail
from ..models.value_receipt_list_response import ValueReceiptListResponse
from ..models.value_receipt_sync_response import ValueReceiptSyncResponse
from ..server.server import Server


class ValueReceipts:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ValueReceiptsWithRawResponse(client, server)

    def archive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Soft-archive a value receipt. Archived VRs are hidden from list by default.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.archive_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def get_value_receipt_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ValueReceiptDetail:
        """Get a value receipt by ID, including its publish/share state.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.get_value_receipt_by_id(id_, authorization, request_options=request_options)
        )

    def list_value_receipts(
        self,
        authorization: str,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        product_id: str | None = None,
        archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueReceiptListResponse:
        """List value receipts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer display ID.
            external_customer_id: Filter by customer external ID.
            order_id: Value sent with the request.
            product_id: Value sent with the request.
            archived: Include archived value receipts. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.list_value_receipts(
                authorization,
                limit=limit,
                offset=offset,
                customer_id=customer_id,
                external_customer_id=external_customer_id,
                order_id=order_id,
                product_id=product_id,
                archived=archived,
                request_options=request_options,
            ),
        )

    def publish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueReceiptDetail:
        """Make a value receipt publicly accessible via URL.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.publish_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def refresh_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueReceiptSyncResponse:
        """Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed
        VRs cannot be refreshed.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.refresh_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def seal_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated
        or re-populated.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.seal_value_receipt(id_, authorization, body=body, request_options=request_options)
        )

    def sync_value_receipt(
        self,
        authorization: str,
        *,
        body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueReceiptSyncResponse:
        """Find or create a value receipt by natural key (customer + product/order + dates), then populate it with
        current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without
        re-populating.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.sync_value_receipt(authorization, body=body, request_options=request_options)
        )

    def unarchive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Restore an archived value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.unarchive_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    def unpublish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ValueReceiptDetail:
        """Revoke public access to a value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            self._with_raw_response.unpublish_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ValueReceiptsWithRawResponse:
        return self._with_raw_response


class AsyncValueReceipts:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncValueReceiptsWithRawResponse(client, server)

    async def archive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Soft-archive a value receipt. Archived VRs are hidden from list by default.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def get_value_receipt_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ValueReceiptDetail:
        """Get a value receipt by ID, including its publish/share state.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.get_value_receipt_by_id(id_, authorization, request_options=request_options)
        )

    async def list_value_receipts(
        self,
        authorization: str,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        product_id: str | None = None,
        archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueReceiptListResponse:
        """List value receipts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer display ID.
            external_customer_id: Filter by customer external ID.
            order_id: Value sent with the request.
            product_id: Value sent with the request.
            archived: Include archived value receipts. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.list_value_receipts(
                authorization,
                limit=limit,
                offset=offset,
                customer_id=customer_id,
                external_customer_id=external_customer_id,
                order_id=order_id,
                product_id=product_id,
                archived=archived,
                request_options=request_options,
            ),
        )

    async def publish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueReceiptDetail:
        """Make a value receipt publicly accessible via URL.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.publish_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def refresh_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueReceiptSyncResponse:
        """Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed
        VRs cannot be refreshed.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.refresh_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def seal_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated
        or re-populated.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 409 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.seal_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def sync_value_receipt(
        self,
        authorization: str,
        *,
        body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueReceiptSyncResponse:
        """Find or create a value receipt by natural key (customer + product/order + dates), then populate it with
        current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without
        re-populating.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 400 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.sync_value_receipt(authorization, body=body, request_options=request_options)
        )

    async def unarchive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> SuccessResponse:
        """Restore an archived value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.unarchive_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    async def unpublish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValueReceiptDetail:
        """Revoke public access to a value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            200

        Raises:
            ApiError: 404 500 ``error`` is ``ErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.unpublish_value_receipt(
                id_, authorization, body=body, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncValueReceiptsWithRawResponse:
        return self._with_raw_response


class ValueReceiptsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, ArchiveValueReceiptErrorBody]:
        """Soft-archive a value receipt. Archived VRs are hidden from list by default.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[SuccessResponse],
            error_mapper=archive_value_receipt_error_mapper,
            request_options=request_options,
        )

    def get_value_receipt_by_id(
        self, id_: str, authorization: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ValueReceiptDetail, GetValueReceiptByIdErrorBody]:
        """Get a value receipt by ID, including its publish/share state.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ValueReceiptDetail],
            error_mapper=get_value_receipt_by_id_error_mapper,
            request_options=request_options,
        )

    def list_value_receipts(
        self,
        authorization: str,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        product_id: str | None = None,
        archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptListResponse, ListValueReceiptsErrorBody]:
        """List value receipts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer display ID.
            external_customer_id: Filter by customer external ID.
            order_id: Value sent with the request.
            product_id: Value sent with the request.
            archived: Include archived value receipts. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("customerId", customer_id),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("orderId", order_id),
                param[str | None]("productId", product_id),
                param[ValueReceiptsGetParametersArchivedOrStr | None]("archived", archived),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=json_decoder[ValueReceiptListResponse],
            error_mapper=list_value_receipts_error_mapper,
            request_options=request_options,
        )

    def publish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptDetail, PublishValueReceiptErrorBody]:
        """Make a value receipt publicly accessible via URL.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/publish"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublishValueReceiptBody | PublishValueReceiptBodyDict | None](body),
            decoder=json_decoder[ValueReceiptDetail],
            error_mapper=publish_value_receipt_error_mapper,
            request_options=request_options,
        )

    def refresh_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptSyncResponse, RefreshValueReceiptErrorBody]:
        """Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed
        VRs cannot be refreshed.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/refresh"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[ValueReceiptSyncResponse],
            error_mapper=refresh_value_receipt_error_mapper,
            request_options=request_options,
        )

    def seal_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, SealValueReceiptErrorBody]:
        """Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated
        or re-populated.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/seal"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[SuccessResponse],
            error_mapper=seal_value_receipt_error_mapper,
            request_options=request_options,
        )

    def sync_value_receipt(
        self,
        authorization: str,
        *,
        body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptSyncResponse, SyncValueReceiptErrorBody]:
        """Find or create a value receipt by natural key (customer + product/order + dates), then populate it with
        current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without
        re-populating.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/sync"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncValueReceiptRequest | SyncValueReceiptRequestDict | None](body),
            decoder=json_decoder[ValueReceiptSyncResponse],
            error_mapper=sync_value_receipt_error_mapper,
            request_options=request_options,
        )

    def unarchive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, UnarchiveValueReceiptErrorBody]:
        """Restore an archived value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/unarchive"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[SuccessResponse],
            error_mapper=unarchive_value_receipt_error_mapper,
            request_options=request_options,
        )

    def unpublish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptDetail, UnpublishValueReceiptErrorBody]:
        """Revoke public access to a value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/unpublish"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=json_decoder[ValueReceiptDetail],
            error_mapper=unpublish_value_receipt_error_mapper,
            request_options=request_options,
        )


class AsyncValueReceiptsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, ArchiveValueReceiptErrorBody]:
        """Soft-archive a value receipt. Archived VRs are hidden from list by default.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/archive"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=archive_value_receipt_error_mapper,
            request_options=request_options,
        )

    async def get_value_receipt_by_id(
        self, id_: str, authorization: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ValueReceiptDetail, GetValueReceiptByIdErrorBody]:
        """Get a value receipt by ID, including its publish/share state.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ValueReceiptDetail],
            error_mapper=get_value_receipt_by_id_error_mapper,
            request_options=request_options,
        )

    async def list_value_receipts(
        self,
        authorization: str,
        *,
        limit: int | None = 50,
        offset: int | None = 0,
        customer_id: str | None = None,
        external_customer_id: str | None = None,
        order_id: str | None = None,
        product_id: str | None = None,
        archived: ValueReceiptsGetParametersArchivedOrStr | None = ValueReceiptsGetParametersArchived.FALSE,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptListResponse, ListValueReceiptsErrorBody]:
        """List value receipts for the organization

        Args:
            authorization: API Key authentication using Bearer token
            limit: Value sent with the request.
            offset: Value sent with the request.
            customer_id: Filter by customer display ID.
            external_customer_id: Filter by customer external ID.
            order_id: Value sent with the request.
            product_id: Value sent with the request.
            archived: Include archived value receipts. Defaults to false.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/"),
            query_params=[
                param[int | None]("limit", limit),
                param[int | None]("offset", offset),
                param[str | None]("customerId", customer_id),
                param[str | None]("externalCustomerId", external_customer_id),
                param[str | None]("orderId", order_id),
                param[str | None]("productId", product_id),
                param[ValueReceiptsGetParametersArchivedOrStr | None]("archived", archived),
            ],
            headers=[param[str]("Authorization", authorization)],
            decoder=async_json_decoder[ValueReceiptListResponse],
            error_mapper=list_value_receipts_error_mapper,
            request_options=request_options,
        )

    async def publish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: PublishValueReceiptBody | PublishValueReceiptBodyDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptDetail, PublishValueReceiptErrorBody]:
        """Make a value receipt publicly accessible via URL.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/publish"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PublishValueReceiptBody | PublishValueReceiptBodyDict | None](body),
            decoder=async_json_decoder[ValueReceiptDetail],
            error_mapper=publish_value_receipt_error_mapper,
            request_options=request_options,
        )

    async def refresh_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptSyncResponse, RefreshValueReceiptErrorBody]:
        """Re-populate an existing draft value receipt with current data inline. Returns the slim sync response. Sealed
        VRs cannot be refreshed.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/refresh"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[ValueReceiptSyncResponse],
            error_mapper=refresh_value_receipt_error_mapper,
            request_options=request_options,
        )

    async def seal_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, SealValueReceiptErrorBody]:
        """Transition a draft value receipt to sealed (posted) status. Sealed VRs are immutable — they cannot be updated
        or re-populated.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/seal"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=seal_value_receipt_error_mapper,
            request_options=request_options,
        )

    async def sync_value_receipt(
        self,
        authorization: str,
        *,
        body: SyncValueReceiptRequest | SyncValueReceiptRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptSyncResponse, SyncValueReceiptErrorBody]:
        """Find or create a value receipt by natural key (customer + product/order + dates), then populate it with
        current data inline. Returns the ID, status, and public URL. Posted (sealed) VRs are returned as-is without
        re-populating.

        Args:
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/sync"),
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[SyncValueReceiptRequest | SyncValueReceiptRequestDict | None](body),
            decoder=async_json_decoder[ValueReceiptSyncResponse],
            error_mapper=sync_value_receipt_error_mapper,
            request_options=request_options,
        )

    async def unarchive_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[SuccessResponse, UnarchiveValueReceiptErrorBody]:
        """Restore an archived value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/unarchive"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[SuccessResponse],
            error_mapper=unarchive_value_receipt_error_mapper,
            request_options=request_options,
        )

    async def unpublish_value_receipt(
        self,
        id_: str,
        authorization: str,
        *,
        body: Any | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValueReceiptDetail, UnpublishValueReceiptErrorBody]:
        """Revoke public access to a value receipt.

        Args:
            id_: Value sent with the request.
            authorization: API Key authentication using Bearer token
            body: Body
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default_reference_analytics_experimental_api("/value-receipts/{id}/unpublish"),
            path_params=[param[str]("id", id_)],
            headers=[param[str]("Authorization", authorization), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[Any | None](body),
            decoder=async_json_decoder[ValueReceiptDetail],
            error_mapper=unpublish_value_receipt_error_mapper,
            request_options=request_options,
        )
