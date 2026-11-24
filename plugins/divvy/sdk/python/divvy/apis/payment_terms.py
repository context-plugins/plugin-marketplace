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
from ..errors.create_payment_term_error import CreatePaymentTermErrorBody, create_payment_term_error_mapper
from ..errors.get_payment_term_error import GetPaymentTermErrorBody, get_payment_term_error_mapper
from ..errors.list_payment_terms_error import ListPaymentTermsErrorBody, list_payment_terms_error_mapper
from ..errors.update_payment_term_error import UpdatePaymentTermErrorBody, update_payment_term_error_mapper
from ..models.create_payment_term_request_dto import CreatePaymentTermRequestDto, CreatePaymentTermRequestDtoDict
from ..models.list_response_dto_payment_term_response_dto import ListResponseDtoPaymentTermResponseDto
from ..models.payment_term_response_dto import PaymentTermResponseDto
from ..models.update_payment_term_request_dto import UpdatePaymentTermRequestDto, UpdatePaymentTermRequestDtoDict
from ..server.server import Server


class PaymentTerms:
    def __init__(self, client: RawClient, server: Server) -> None:
        self._with_raw_response = PaymentTermsWithRawResponse(client, server)

    def create_payment_term(
        self,
        organization_id: str,
        body: CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentTermResponseDto:
        """Create a new payment term for the organization. Use payment terms to set the number of days the customer has
        to pay a vendor. You can set ``paymentTermId`` in bills and invoices.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a payment term response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.create_payment_term(
                organization_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    def get_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentTermResponseDto:
        """Get details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get payment term details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.get_payment_term(
                organization_id,
                payment_term_id,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def list_payment_terms(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ListResponseDtoPaymentTermResponseDto:
        """Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of payment terms response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.list_payment_terms(
                organization_id,
                max_=max_,
                sort=sort,
                filters=filters,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    def update_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        body: UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentTermResponseDto:
        """Update details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a payment term response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            self._with_raw_response.update_payment_term(
                organization_id,
                payment_term_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> PaymentTermsWithRawResponse:
        return self._with_raw_response


class AsyncPaymentTerms:
    def __init__(self, client: AsyncRawClient, server: Server) -> None:
        self._with_raw_response = AsyncPaymentTermsWithRawResponse(client, server)

    async def create_payment_term(
        self,
        organization_id: str,
        body: CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentTermResponseDto:
        """Create a new payment term for the organization. Use payment terms to set the number of days the customer has
        to pay a vendor. You can set ``paymentTermId`` in bills and invoices.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Create a payment term response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.create_payment_term(
                organization_id, body, session_id=session_id, dev_key=dev_key, request_options=request_options
            ),
        )

    async def get_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentTermResponseDto:
        """Get details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get payment term details response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.get_payment_term(
                organization_id,
                payment_term_id,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def list_payment_terms(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ListResponseDtoPaymentTermResponseDto:
        """Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Get list of payment terms response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.list_payment_terms(
                organization_id,
                max_=max_,
                sort=sort,
                filters=filters,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    async def update_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        body: UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentTermResponseDto:
        """Update details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Update a payment term response

        Raises:
            ApiError: List of errors. List of errors. ``error`` is ``list[BdcError] | RawError``."""
        return unwrap(
            await self._with_raw_response.update_payment_term(
                organization_id,
                payment_term_id,
                body,
                session_id=session_id,
                dev_key=dev_key,
                request_options=request_options,
            ),
        )

    @property
    def with_raw_response(self) -> AsyncPaymentTermsWithRawResponse:
        return self._with_raw_response


class PaymentTermsWithRawResponse(BaseRawResponse[RawClient, Server]):
    def create_payment_term(
        self,
        organization_id: str,
        body: CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentTermResponseDto, CreatePaymentTermErrorBody]:
        """Create a new payment term for the organization. Use payment terms to set the number of days the customer has
        to pay a vendor. You can set ``paymentTermId`` in bills and invoices.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict](body),
            decoder=json_decoder[PaymentTermResponseDto],
            error_mapper=create_payment_term_error_mapper,
            request_options=request_options,
        )

    def get_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentTermResponseDto, GetPaymentTermErrorBody]:
        """Get details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms/{paymentTermId}"),
            path_params=[param[str]("organizationId", organization_id), param[str]("paymentTermId", payment_term_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[PaymentTermResponseDto],
            error_mapper=get_payment_term_error_mapper,
            request_options=request_options,
        )

    def list_payment_terms(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoPaymentTermResponseDto, ListPaymentTermsErrorBody]:
        """Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms"),
            path_params=[param[str]("organizationId", organization_id)],
            query_params=[
                param[int | None]("max", max_), param[str | None]("sort", sort), param[str | None]("filters", filters)
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=json_decoder[ListResponseDtoPaymentTermResponseDto],
            error_mapper=list_payment_terms_error_mapper,
            request_options=request_options,
        )

    def update_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        body: UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentTermResponseDto, UpdatePaymentTermErrorBody]:
        """Update details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms/{paymentTermId}"),
            path_params=[param[str]("organizationId", organization_id), param[str]("paymentTermId", payment_term_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict](body),
            decoder=json_decoder[PaymentTermResponseDto],
            error_mapper=update_payment_term_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentTermsWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def create_payment_term(
        self,
        organization_id: str,
        body: CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentTermResponseDto, CreatePaymentTermErrorBody]:
        """Create a new payment term for the organization. Use payment terms to set the number of days the customer has
        to pay a vendor. You can set ``paymentTermId`` in bills and invoices.

        Args:
            organization_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms"),
            path_params=[param[str]("organizationId", organization_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[CreatePaymentTermRequestDto | CreatePaymentTermRequestDtoDict](body),
            decoder=async_json_decoder[PaymentTermResponseDto],
            error_mapper=create_payment_term_error_mapper,
            request_options=request_options,
        )

    async def get_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentTermResponseDto, GetPaymentTermErrorBody]:
        """Get details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms/{paymentTermId}"),
            path_params=[param[str]("organizationId", organization_id), param[str]("paymentTermId", payment_term_id)],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[PaymentTermResponseDto],
            error_mapper=get_payment_term_error_mapper,
            request_options=request_options,
        )

    async def list_payment_terms(
        self,
        organization_id: str,
        *,
        max_: int | None = None,
        sort: str | None = None,
        filters: str | None = None,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ListResponseDtoPaymentTermResponseDto, ListPaymentTermsErrorBody]:
        """Get a list of payment terms for the organization. By default, you get 20 results on one page of results. Set
        ``max`` in your request to get up to 100 results on one page.

        See Search operations with lists in the Guides section for filtering, sorting, and pagination examples.

        Args:
            organization_id: Value sent with the request.
            max_: Value sent with the request.
            sort: Value sent with the request.
            filters: Value sent with the request.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms"),
            path_params=[param[str]("organizationId", organization_id)],
            query_params=[
                param[int | None]("max", max_), param[str | None]("sort", sort), param[str | None]("filters", filters)
            ],
            headers=[param[str | None]("sessionId", session_id), param[str | None]("devKey", dev_key)],
            decoder=async_json_decoder[ListResponseDtoPaymentTermResponseDto],
            error_mapper=list_payment_terms_error_mapper,
            request_options=request_options,
        )

    async def update_payment_term(
        self,
        organization_id: str,
        payment_term_id: str,
        body: UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict,
        *,
        session_id: str | None = None,
        dev_key: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentTermResponseDto, UpdatePaymentTermErrorBody]:
        """Update details about an existing payment term.

        Args:
            organization_id: Value sent with the request.
            payment_term_id: Value sent with the request.
            body: The request body.
            session_id: Value sent with the request.
            dev_key: Value sent with the request.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/v3/organizations/{organizationId}/payment-terms/{paymentTermId}"),
            path_params=[param[str]("organizationId", organization_id), param[str]("paymentTermId", payment_term_id)],
            headers=[
                param[str | None]("sessionId", session_id),
                param[str | None]("devKey", dev_key),
                param[UUID]("Idempotency-Key", uuid4()),
            ],
            body=json_body[UpdatePaymentTermRequestDto | UpdatePaymentTermRequestDtoDict](body),
            decoder=async_json_decoder[PaymentTermResponseDto],
            error_mapper=update_payment_term_error_mapper,
            request_options=request_options,
        )
