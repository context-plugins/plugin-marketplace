from __future__ import annotations

from uuid import UUID, uuid4

from ..core import (
    ApiResult,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    BaseRawResponse,
    RawClient,
    RequestOptionsOrDict,
    async_empty_response,
    async_json_decoder,
    empty_response,
    json_body,
    json_decoder,
    param,
    unwrap,
)
from ..errors.add_reimbursement_receipt_error import (
    AddReimbursementReceiptErrorBody,
    add_reimbursement_receipt_error_mapper,
)
from ..errors.approve_or_deny_reimbursement_error import (
    ApproveOrDenyReimbursementErrorBody,
    approve_or_deny_reimbursement_error_mapper,
)
from ..errors.create_image_upload_url_error import CreateImageUploadUrlErrorBody, create_image_upload_url_error_mapper
from ..errors.create_reimbursement_error import CreateReimbursementErrorBody, create_reimbursement_error_mapper
from ..errors.delete_reimbursement_error import DeleteReimbursementErrorBody, delete_reimbursement_error_mapper
from ..errors.delete_reimbursement_receipt_error import (
    DeleteReimbursementReceiptErrorBody,
    delete_reimbursement_receipt_error_mapper,
)
from ..errors.get_reimbursement_error import GetReimbursementErrorBody, get_reimbursement_error_mapper
from ..errors.list_reimbursements_error import ListReimbursementsErrorBody, list_reimbursements_error_mapper
from ..errors.update_reimbursement_error import UpdateReimbursementErrorBody, update_reimbursement_error_mapper
from ..models.create_reimbursement_request_dto import CreateReimbursementRequestDto, CreateReimbursementRequestDtoDict
from ..models.pagination_response_dto_reimbursement_response_dto import PaginationResponseDtoReimbursementResponseDto
from ..models.receipt_image import ReceiptImage
from ..models.reimbursement_action_request_dto import ReimbursementActionRequestDto, ReimbursementActionRequestDtoDict
from ..models.reimbursement_image_upload_url_response_dto import ReimbursementImageUploadUrlResponseDto
from ..models.reimbursement_receipt_request_dto import (
    ReimbursementReceiptRequestDto,
    ReimbursementReceiptRequestDtoDict,
)
from ..models.reimbursement_response_dto import ReimbursementResponseDto
from ..models.update_reimbursement_request_dto import UpdateReimbursementRequestDto, UpdateReimbursementRequestDtoDict
from ..server.server import Server


class Reimbursements:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = ReimbursementsWithRawResponse(client, server)

    def add_reimbursement_receipt(
        self,
        reimbursement_id: str,
        body: ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> list[ReceiptImage]:
        """Add a receipt to an existing reimbursement. In the request, use the same upload url that you used to upload
        the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload
        URL.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add a reimbursement receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.add_reimbursement_receipt(
                reimbursement_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def approve_or_deny_reimbursement(
        self,
        reimbursement_id: str,
        body: ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Approve or deny a reimbursement request.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Approve or deny a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.approve_or_deny_reimbursement(
                reimbursement_id, body, api_token=api_token, request_options=request_options
            ),
        )

    def create_image_upload_url(
        self, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ReimbursementImageUploadUrlResponseDto:
        """Create a reimbursement image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the reimbursement. For example, to
        upload a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as
        ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for reimbursement images.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a reimbursement upload URL response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_image_upload_url(api_token=api_token, request_options=request_options)
        )

    def create_reimbursement(
        self,
        body: CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Create a new reimbursement.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_reimbursement(body, api_token=api_token, request_options=request_options)
        )

    def delete_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is
        not available in the list of reimbursements.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_reimbursement(
                reimbursement_id, api_token=api_token, request_options=request_options
            ),
        )

    def delete_reimbursement_receipt(
        self,
        reimbursement_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is
        not available in the reimbursement details.

        Args:
            reimbursement_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a reimbursement receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.delete_reimbursement_receipt(
                reimbursement_id, receipt_id, api_token=api_token, request_options=request_options
            ),
        )

    def get_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Get details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get reimbursement details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_reimbursement(
                reimbursement_id, api_token=api_token, request_options=request_options
            ),
        )

    def list_reimbursements(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoReimbursementResponseDto:
        """Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of reimbursements response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_reimbursements(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    def update_reimbursement(
        self,
        reimbursement_id: str,
        body: UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Update details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_reimbursement(
                reimbursement_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> ReimbursementsWithRawResponse:
        return self._with_raw_response


class AsyncReimbursements:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncReimbursementsWithRawResponse(client, server)

    async def add_reimbursement_receipt(
        self,
        reimbursement_id: str,
        body: ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ReceiptImage]:
        """Add a receipt to an existing reimbursement. In the request, use the same upload url that you used to upload
        the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload
        URL.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Add a reimbursement receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.add_reimbursement_receipt(
                reimbursement_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def approve_or_deny_reimbursement(
        self,
        reimbursement_id: str,
        body: ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Approve or deny a reimbursement request.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Approve or deny a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.approve_or_deny_reimbursement(
                reimbursement_id, body, api_token=api_token, request_options=request_options
            ),
        )

    async def create_image_upload_url(
        self, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ReimbursementImageUploadUrlResponseDto:
        """Create a reimbursement image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the reimbursement. For example, to
        upload a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as
        ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for reimbursement images.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a reimbursement upload URL response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_image_upload_url(api_token=api_token, request_options=request_options)
        )

    async def create_reimbursement(
        self,
        body: CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Create a new reimbursement.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_reimbursement(
                body, api_token=api_token, request_options=request_options
            ),
        )

    async def delete_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is
        not available in the list of reimbursements.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_reimbursement(
                reimbursement_id, api_token=api_token, request_options=request_options
            ),
        )

    async def delete_reimbursement_receipt(
        self,
        reimbursement_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is
        not available in the reimbursement details.

        Args:
            reimbursement_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Delete a reimbursement receipt response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.delete_reimbursement_receipt(
                reimbursement_id, receipt_id, api_token=api_token, request_options=request_options
            ),
        )

    async def get_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Get details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get reimbursement details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_reimbursement(
                reimbursement_id, api_token=api_token, request_options=request_options
            ),
        )

    async def list_reimbursements(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaginationResponseDtoReimbursementResponseDto:
        """Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of reimbursements response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_reimbursements(
                next_page=next_page,
                prev_page=prev_page,
                max_=max_,
                sort=sort,
                filters=filters,
                api_token=api_token,
                request_options=request_options,
            ),
        )

    async def update_reimbursement(
        self,
        reimbursement_id: str,
        body: UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ReimbursementResponseDto:
        """Update details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a reimbursement response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_reimbursement(
                reimbursement_id, body, api_token=api_token, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncReimbursementsWithRawResponse:
        return self._with_raw_response


class ReimbursementsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def add_reimbursement_receipt(
        self,
        reimbursement_id: str,
        body: ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReceiptImage], AddReimbursementReceiptErrorBody]:
        """Add a receipt to an existing reimbursement. In the request, use the same upload url that you used to upload
        the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload
        URL.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}/receipts"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict](body),
            decoder=json_decoder[list[ReceiptImage]],
            error_mapper=add_reimbursement_receipt_error_mapper,
            request_options=request_options,
        )

    def approve_or_deny_reimbursement(
        self,
        reimbursement_id: str,
        body: ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, ApproveOrDenyReimbursementErrorBody]:
        """Approve or deny a reimbursement request.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}/action"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict](body),
            decoder=json_decoder[ReimbursementResponseDto],
            error_mapper=approve_or_deny_reimbursement_error_mapper,
            request_options=request_options,
        )

    def create_image_upload_url(
        self, *, api_token: str | None = None, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[ReimbursementImageUploadUrlResponseDto, CreateImageUploadUrlErrorBody]:
        """Create a reimbursement image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the reimbursement. For example, to
        upload a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as
        ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for reimbursement images.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements/image-upload-url"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=json_decoder[ReimbursementImageUploadUrlResponseDto],
            error_mapper=create_image_upload_url_error_mapper,
            request_options=request_options,
        )

    def create_reimbursement(
        self,
        body: CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, CreateReimbursementErrorBody]:
        """Create a new reimbursement.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict](body),
            decoder=json_decoder[ReimbursementResponseDto],
            error_mapper=create_reimbursement_error_mapper,
            request_options=request_options,
        )

    def delete_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteReimbursementErrorBody]:
        """Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is
        not available in the list of reimbursements.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_reimbursement_error_mapper,
            request_options=request_options,
        )

    def delete_reimbursement_receipt(
        self,
        reimbursement_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteReimbursementReceiptErrorBody]:
        """Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is
        not available in the reimbursement details.

        Args:
            reimbursement_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}/receipts/{receiptId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id), param[str]("receiptId", receipt_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=empty_response,
            error_mapper=delete_reimbursement_receipt_error_mapper,
            request_options=request_options,
        )

    def get_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, GetReimbursementErrorBody]:
        """Get details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[ReimbursementResponseDto],
            error_mapper=get_reimbursement_error_mapper,
            request_options=request_options,
        )

    def list_reimbursements(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoReimbursementResponseDto, ListReimbursementsErrorBody]:
        """Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/reimbursements"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=json_decoder[PaginationResponseDtoReimbursementResponseDto],
            error_mapper=list_reimbursements_error_mapper,
            request_options=request_options,
        )

    def update_reimbursement(
        self,
        reimbursement_id: str,
        body: UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, UpdateReimbursementErrorBody]:
        """Update details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict](body),
            decoder=json_decoder[ReimbursementResponseDto],
            error_mapper=update_reimbursement_error_mapper,
            request_options=request_options,
        )


class AsyncReimbursementsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def add_reimbursement_receipt(
        self,
        reimbursement_id: str,
        body: ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ReceiptImage], AddReimbursementReceiptErrorBody]:
        """Add a receipt to an existing reimbursement. In the request, use the same upload url that you used to upload
        the receipt image. See Create a reimbursement upload URL to learn about creating a reimbursement image upload
        URL.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}/receipts"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReimbursementReceiptRequestDto | ReimbursementReceiptRequestDtoDict](body),
            decoder=async_json_decoder[list[ReceiptImage]],
            error_mapper=add_reimbursement_receipt_error_mapper,
            request_options=request_options,
        )

    async def approve_or_deny_reimbursement(
        self,
        reimbursement_id: str,
        body: ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, ApproveOrDenyReimbursementErrorBody]:
        """Approve or deny a reimbursement request.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}/action"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ReimbursementActionRequestDto | ReimbursementActionRequestDtoDict](body),
            decoder=async_json_decoder[ReimbursementResponseDto],
            error_mapper=approve_or_deny_reimbursement_error_mapper,
            request_options=request_options,
        )

    async def create_image_upload_url(
        self, *, api_token: str | None = None, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[ReimbursementImageUploadUrlResponseDto, CreateImageUploadUrlErrorBody]:
        """Create a reimbursement image upload URL.

        From the response, use the upload ``url`` to upload a receipt image for the reimbursement. For example, to
        upload a JPEG image, use the following ``curl`` command. To upload a PNG image, set the content type as
        ``image/png``.

        ```
        curl '{upload_url}' -H 'Content-Type: image/jpeg' --upload-file {file_name_with_extension}
        ```

        **Note**: BILL supports JPG and PNG file formats for reimbursement images.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements/image-upload-url"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_json_decoder[ReimbursementImageUploadUrlResponseDto],
            error_mapper=create_image_upload_url_error_mapper,
            request_options=request_options,
        )

    async def create_reimbursement(
        self,
        body: CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, CreateReimbursementErrorBody]:
        """Create a new reimbursement.

        See Reimbursements in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/spend/reimbursements"),
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[CreateReimbursementRequestDto | CreateReimbursementRequestDtoDict](body),
            decoder=async_json_decoder[ReimbursementResponseDto],
            error_mapper=create_reimbursement_error_mapper,
            request_options=request_options,
        )

    async def delete_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteReimbursementErrorBody]:
        """Delete an existing reimbursement. A deleted reimbursement cannot be restored. The deleted reimbursement is
        not available in the list of reimbursements.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_reimbursement_error_mapper,
            request_options=request_options,
        )

    async def delete_reimbursement_receipt(
        self,
        reimbursement_id: str,
        receipt_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, DeleteReimbursementReceiptErrorBody]:
        """Delete a receipt from an existing reimbursement. A deleted receipt cannot be restored. The deleted receipt is
        not available in the reimbursement details.

        Args:
            reimbursement_id: Value sent with the request.
            receipt_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}/receipts/{receiptId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id), param[str]("receiptId", receipt_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            decoder=async_empty_response,
            error_mapper=delete_reimbursement_receipt_error_mapper,
            request_options=request_options,
        )

    async def get_reimbursement(
        self,
        reimbursement_id: str,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, GetReimbursementErrorBody]:
        """Get details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[ReimbursementResponseDto],
            error_mapper=get_reimbursement_error_mapper,
            request_options=request_options,
        )

    async def list_reimbursements(
        self,
        *,
        next_page: str | None = None,
        prev_page: str | None = None,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaginationResponseDtoReimbursementResponseDto, ListReimbursementsErrorBody]:
        """Get a list of reimbursement objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        Args:
            next_page: Value sent with the request.
            prev_page: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/spend/reimbursements"),
            query_params=[
                param[str | None]("nextPage", next_page),
                param[str | None]("prevPage", prev_page),
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
            ],
            headers=[param[str | None]("apiToken", api_token)],
            decoder=async_json_decoder[PaginationResponseDtoReimbursementResponseDto],
            error_mapper=list_reimbursements_error_mapper,
            request_options=request_options,
        )

    async def update_reimbursement(
        self,
        reimbursement_id: str,
        body: UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict,
        *,
        api_token: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ReimbursementResponseDto, UpdateReimbursementErrorBody]:
        """Update details about an existing reimbursement.

        Args:
            reimbursement_id: Value sent with the request.
            body: The request body.
            api_token: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/spend/reimbursements/{reimbursementId}"),
            path_params=[param[str]("reimbursementId", reimbursement_id)],
            headers=[param[str | None]("apiToken", api_token), param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[UpdateReimbursementRequestDto | UpdateReimbursementRequestDtoDict](body),
            decoder=async_json_decoder[ReimbursementResponseDto],
            error_mapper=update_reimbursement_error_mapper,
            request_options=request_options,
        )
