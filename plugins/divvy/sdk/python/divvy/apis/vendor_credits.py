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
from ..errors.archive_vendor_credit_error import ArchiveVendorCreditErrorBody, archive_vendor_credit_error_mapper
from ..errors.bulk_archive_vendor_credit_error import (
    BulkArchiveVendorCreditErrorBody,
    bulk_archive_vendor_credit_error_mapper,
)
from ..errors.bulk_create_vendor_credit_error import (
    BulkCreateVendorCreditErrorBody,
    bulk_create_vendor_credit_error_mapper,
)
from ..errors.bulk_replace_vendor_credit_error import (
    BulkReplaceVendorCreditErrorBody,
    bulk_replace_vendor_credit_error_mapper,
)
from ..errors.bulk_update_vendor_credit_error import (
    BulkUpdateVendorCreditErrorBody,
    bulk_update_vendor_credit_error_mapper,
)
from ..errors.create_vendor_credit_error import CreateVendorCreditErrorBody, create_vendor_credit_error_mapper
from ..errors.get_vendor_credit_error import GetVendorCreditErrorBody, get_vendor_credit_error_mapper
from ..errors.list_vendor_credits_error import ListVendorCreditsErrorBody, list_vendor_credits_error_mapper
from ..errors.replace_vendor_credit_error import ReplaceVendorCreditErrorBody, replace_vendor_credit_error_mapper
from ..errors.update_vendor_credit_error import UpdateVendorCreditErrorBody, update_vendor_credit_error_mapper
from ..models.create_vendor_credit_request_dto import CreateVendorCreditRequestDto, CreateVendorCreditRequestDtoDict
from ..models.list_response_dto_vendor_credit_with_usage_response_dto import (
    ListResponseDtoVendorCreditWithUsageResponseDto,
)
from ..models.replace_vendor_credit_request_dto import ReplaceVendorCreditRequestDto, ReplaceVendorCreditRequestDtoDict
from ..models.replace_vendor_credit_with_id_request_dto import (
    ReplaceVendorCreditWithIdRequestDto,
    ReplaceVendorCreditWithIdRequestDtoDict,
)
from ..models.update_vendor_credit_request_dto import UpdateVendorCreditRequestDto, UpdateVendorCreditRequestDtoDict
from ..models.update_vendor_credit_with_id_request_dto import (
    UpdateVendorCreditWithIdRequestDto,
    UpdateVendorCreditWithIdRequestDtoDict,
)
from ..models.vendor_credit_bulk_response_dto import VendorCreditBulkResponseDto
from ..models.vendor_credit_response_dto import VendorCreditResponseDto
from ..models.vendor_credit_with_usage_response_dto import VendorCreditWithUsageResponseDto
from ..server.server import Server


class VendorCredits:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = VendorCreditsWithRawResponse(client, server)

    def archive_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Archive an existing vendor credit. In the response, the ``archived`` field is set as ``true``. An archived
        vendor credit cannot be restored.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.archive_vendor_credit(
                vendor_credit_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_archive_vendor_credit(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Archive multiple vendor credits with one API request. In the response, the ``archived`` field for each object
        is set as ``true``. An archived vendor credit cannot be restored.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_archive_vendor_credit(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_create_vendor_credit(
        self,
        body: list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one ``POST
        /v3/vendor-credits/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_create_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_replace_vendor_credit(
        self,
        body: list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Update the number of line items in multiple vendor credits with one API request. You can also update other
        details for each vendor credit.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_replace_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def bulk_update_vendor_credit(
        self,
        body: list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Update details about line items in multiple vendor credits with one API request. You can also update other
        vendor credit details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.bulk_update_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def create_vendor_credit(
        self,
        body: CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Create a vendor credit.

        With a vendor credit, you can adjust the amount that you owe a vendor.

        See Vendor credits in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditWithUsageResponseDto:
        """Get details about an existing vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor credit details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_vendor_credit(
                vendor_credit_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def list_vendor_credits(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoVendorCreditWithUsageResponseDto:
        """Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_vendor_credits(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def replace_vendor_credit(
        self,
        vendor_credit_id: str,
        body: ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Update the number of line items in a vendor credit. You can also update other vendor credit details.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.replace_vendor_credit(
                vendor_credit_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def update_vendor_credit(
        self,
        vendor_credit_id: str,
        body: UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Update details about a vendor credit line item. You can also update other vendor credit line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_vendor_credit(
                vendor_credit_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> VendorCreditsWithRawResponse:
        return self._with_raw_response


class AsyncVendorCredits:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncVendorCreditsWithRawResponse(client, server)

    async def archive_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Archive an existing vendor credit. In the response, the ``archived`` field is set as ``true``. An archived
        vendor credit cannot be restored.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.archive_vendor_credit(
                vendor_credit_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_archive_vendor_credit(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Archive multiple vendor credits with one API request. In the response, the ``archived`` field for each object
        is set as ``true``. An archived vendor credit cannot be restored.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Archive multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_archive_vendor_credit(
                ids, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_create_vendor_credit(
        self,
        body: list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one ``POST
        /v3/vendor-credits/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_create_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_replace_vendor_credit(
        self,
        body: list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Update the number of line items in multiple vendor credits with one API request. You can also update other
        details for each vendor credit.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_replace_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def bulk_update_vendor_credit(
        self,
        body: list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditBulkResponseDto:
        """Update details about line items in multiple vendor credits with one API request. You can also update other
        vendor credit details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update multiple vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.bulk_update_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def create_vendor_credit(
        self,
        body: CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Create a vendor credit.

        With a vendor credit, you can adjust the amount that you owe a vendor.

        See Vendor credits in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_vendor_credit(
                body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditWithUsageResponseDto:
        """Get details about an existing vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get vendor credit details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_vendor_credit(
                vendor_credit_id, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def list_vendor_credits(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoVendorCreditWithUsageResponseDto:
        """Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of vendor credits response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_vendor_credits(
                max_=max_,
                sort=sort,
                filters=filters,
                page=page,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def replace_vendor_credit(
        self,
        vendor_credit_id: str,
        body: ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Update the number of line items in a vendor credit. You can also update other vendor credit details.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Replace a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.replace_vendor_credit(
                vendor_credit_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def update_vendor_credit(
        self,
        vendor_credit_id: str,
        body: UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> VendorCreditResponseDto:
        """Update details about a vendor credit line item. You can also update other vendor credit line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a vendor credit response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_vendor_credit(
                vendor_credit_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    @property
    def with_raw_response(self) -> AsyncVendorCreditsWithRawResponse:
        return self._with_raw_response


class VendorCreditsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def archive_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, ArchiveVendorCreditErrorBody]:
        """Archive an existing vendor credit. In the response, the ``archived`` field is set as ``true``. An archived
        vendor credit cannot be restored.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}/archive"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[VendorCreditResponseDto],
            error_mapper=archive_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def bulk_archive_vendor_credit(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkArchiveVendorCreditErrorBody]:
        """Archive multiple vendor credits with one API request. In the response, the ``archived`` field for each object
        is set as ``true``. An archived vendor credit cannot be restored.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_archive_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def bulk_create_vendor_credit(
        self,
        body: list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkCreateVendorCreditErrorBody]:
        """Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one ``POST
        /v3/vendor-credits/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict]](body),
            decoder=json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_create_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def bulk_replace_vendor_credit(
        self,
        body: list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkReplaceVendorCreditErrorBody]:
        """Update the number of line items in multiple vendor credits with one API request. You can also update other
        details for each vendor credit.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/vendor-credits/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict]](body),
            decoder=json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_replace_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def bulk_update_vendor_credit(
        self,
        body: list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkUpdateVendorCreditErrorBody]:
        """Update details about line items in multiple vendor credits with one API request. You can also update other
        vendor credit details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/vendor-credits/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict]](body),
            decoder=json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_update_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def create_vendor_credit(
        self,
        body: CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, CreateVendorCreditErrorBody]:
        """Create a vendor credit.

        With a vendor credit, you can adjust the amount that you owe a vendor.

        See Vendor credits in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict](body),
            decoder=json_decoder[VendorCreditResponseDto],
            error_mapper=create_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def get_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditWithUsageResponseDto, GetVendorCreditErrorBody]:
        """Get details about an existing vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[VendorCreditWithUsageResponseDto],
            error_mapper=get_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def list_vendor_credits(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoVendorCreditWithUsageResponseDto, ListVendorCreditsErrorBody]:
        """Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendor-credits"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoVendorCreditWithUsageResponseDto],
            error_mapper=list_vendor_credits_error_mapper,
            request_options=request_options,
        )

    def replace_vendor_credit(
        self,
        vendor_credit_id: str,
        body: ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, ReplaceVendorCreditErrorBody]:
        """Update the number of line items in a vendor credit. You can also update other vendor credit details.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict](body),
            decoder=json_decoder[VendorCreditResponseDto],
            error_mapper=replace_vendor_credit_error_mapper,
            request_options=request_options,
        )

    def update_vendor_credit(
        self,
        vendor_credit_id: str,
        body: UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, UpdateVendorCreditErrorBody]:
        """Update details about a vendor credit line item. You can also update other vendor credit line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict](body),
            decoder=json_decoder[VendorCreditResponseDto],
            error_mapper=update_vendor_credit_error_mapper,
            request_options=request_options,
        )


class AsyncVendorCreditsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def archive_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, ArchiveVendorCreditErrorBody]:
        """Archive an existing vendor credit. In the response, the ``archived`` field is set as ``true``. An archived
        vendor credit cannot be restored.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}/archive"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[VendorCreditResponseDto],
            error_mapper=archive_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def bulk_archive_vendor_credit(
        self,
        ids: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkArchiveVendorCreditErrorBody]:
        """Archive multiple vendor credits with one API request. In the response, the ``archived`` field for each object
        is set as ``true``. An archived vendor credit cannot be restored.

        Args:
            ids: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits/bulk/archive"),
            query_params=[param[str]("ids", ids)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            decoder=async_json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_archive_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def bulk_create_vendor_credit(
        self,
        body: list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkCreateVendorCreditErrorBody]:
        """Create multiple vendor credits with one API request. You can create up to 50 vendor credits with one ``POST
        /v3/vendor-credits/bulk`` request.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict]](body),
            decoder=async_json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_create_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def bulk_replace_vendor_credit(
        self,
        body: list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkReplaceVendorCreditErrorBody]:
        """Update the number of line items in multiple vendor credits with one API request. You can also update other
        details for each vendor credit.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/vendor-credits/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[ReplaceVendorCreditWithIdRequestDto | ReplaceVendorCreditWithIdRequestDtoDict]](body),
            decoder=async_json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_replace_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def bulk_update_vendor_credit(
        self,
        body: list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict],
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditBulkResponseDto, BulkUpdateVendorCreditErrorBody]:
        """Update details about line items in multiple vendor credits with one API request. You can also update other
        vendor credit details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/vendor-credits/bulk"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[list[UpdateVendorCreditWithIdRequestDto | UpdateVendorCreditWithIdRequestDtoDict]](body),
            decoder=async_json_decoder[VendorCreditBulkResponseDto],
            error_mapper=bulk_update_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def create_vendor_credit(
        self,
        body: CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, CreateVendorCreditErrorBody]:
        """Create a vendor credit.

        With a vendor credit, you can adjust the amount that you owe a vendor.

        See Vendor credits in the Guides section for more information, sample requests, and responses.

        Args:
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/vendor-credits"),
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreateVendorCreditRequestDto | CreateVendorCreditRequestDtoDict](body),
            decoder=async_json_decoder[VendorCreditResponseDto],
            error_mapper=create_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def get_vendor_credit(
        self,
        vendor_credit_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditWithUsageResponseDto, GetVendorCreditErrorBody]:
        """Get details about an existing vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[VendorCreditWithUsageResponseDto],
            error_mapper=get_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def list_vendor_credits(
        self,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        page: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoVendorCreditWithUsageResponseDto, ListVendorCreditsErrorBody]:
        """Get a list of vendor credit objects. By default, you get 20 results on one page of results. Set ``max`` in
        your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            page: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/vendor-credits"),
            query_params=[
                param[int | None]("max", max_),
                param[str | None]("sort", sort),
                param[str | None]("filters", filters),
                param[str | None]("page", page),
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoVendorCreditWithUsageResponseDto],
            error_mapper=list_vendor_credits_error_mapper,
            request_options=request_options,
        )

    async def replace_vendor_credit(
        self,
        vendor_credit_id: str,
        body: ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, ReplaceVendorCreditErrorBody]:
        """Update the number of line items in a vendor credit. You can also update other vendor credit details.

        You can use the PUT operation to add, remove, or replace the number of line items in a vendor credit. A set of
        rules apply with the PUT operation.
        * When you add a new line item, a new line item ``id`` is generated in the vendor credit.
        * When you omit an existing line item ``id``, the line item is removed from the vendor credit.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[ReplaceVendorCreditRequestDto | ReplaceVendorCreditRequestDtoDict](body),
            decoder=async_json_decoder[VendorCreditResponseDto],
            error_mapper=replace_vendor_credit_error_mapper,
            request_options=request_options,
        )

    async def update_vendor_credit(
        self,
        vendor_credit_id: str,
        body: UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[VendorCreditResponseDto, UpdateVendorCreditErrorBody]:
        """Update details about a vendor credit line item. You can also update other vendor credit line item details.

        You can use the PATCH operation to modify line item details, such as ``amount``, ``quantity``, and
        ``description``. The vendor credit line item ``id`` does not change with a PATCH operation.

        Args:
            vendor_credit_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/vendor-credits/{vendorCreditId}"),
            path_params=[param[str]("vendorCreditId", vendor_credit_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdateVendorCreditRequestDto | UpdateVendorCreditRequestDtoDict](body),
            decoder=async_json_decoder[VendorCreditResponseDto],
            error_mapper=update_vendor_credit_error_mapper,
            request_options=request_options,
        )
