from __future__ import annotations

from uuid import UUID, uuid4

from ..auth import AsyncAuthSchemes, AuthSchemes
from ..core import (
    AnySchemes,
    ApiResult,
    AsyncAnySchemes,
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
from ..errors.close_qr_code_error import CloseQrCodeErrorBody, close_qr_code_error_mapper
from ..errors.create_qr_code_error import CreateQrCodeErrorBody, create_qr_code_error_mapper
from ..errors.fetch_all_qr_codes_error import FetchAllQrCodesErrorBody, fetch_all_qr_codes_error_mapper
from ..errors.fetch_qr_code_error import FetchQrCodeErrorBody, fetch_qr_code_error_mapper
from ..errors.fetch_qr_code_payments_error import FetchQrCodePaymentsErrorBody, fetch_qr_code_payments_error_mapper
from ..errors.update_qr_code_error import UpdateQrCodeErrorBody, update_qr_code_error_mapper
from ..models.payments_qr_codes_payments_response import PaymentsQrCodesPaymentsResponse
from ..models.payments_qr_codes_request import PaymentsQrCodesRequest, PaymentsQrCodesRequestDict
from ..models.payments_qr_codes_request1 import PaymentsQrCodesRequest1, PaymentsQrCodesRequest1Dict
from ..models.payments_qr_codes_response import PaymentsQrCodesResponse
from ..models.qr_code import QrCode
from ..server.server import Server


class QrCodes:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = QrCodesWithRawResponse(client, server, auth)

    def close_qr_code(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> QrCode:
        """Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            QR code closed. Status changes to 'closed'.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.close_qr_code(id_, request_options=request_options))

    def create_qr_code(
        self,
        body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature;
        requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days.
        multiple_use QR codes have no expiry restriction.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            QR code created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.create_qr_code(body, request_options=request_options))

    def fetch_all_qr_codes(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        customer_id: str | None = None,
        payment_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentsQrCodesResponse:
        """Retrieve all QR codes. Filter by customer_id or payment_id.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            customer_id: Filter by customer ID (cust_*).
            payment_id: Filter QR codes associated with a specific payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of QR codes.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            self._with_raw_response.fetch_all_qr_codes(
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                customer_id=customer_id,
                payment_id=payment_id,
                request_options=request_options,
            ),
        )

    def fetch_qr_code(self, id_: str, *, request_options: RequestOptionsOrDict | None = None) -> QrCode:
        """Retrieve details of a specific QR code including payment counts and status.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            QR code details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(self._with_raw_response.fetch_qr_code(id_, request_options=request_options))

    def fetch_qr_code_payments(
        self,
        id_: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PaymentsQrCodesPaymentsResponse:
        """Retrieve all payments made against a specific QR code.

        Args:
            id_: QR code ID (qr_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of payments for the QR code.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            self._with_raw_response.fetch_qr_code_payments(
                id_, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    def update_qr_code(
        self,
        id_: str,
        body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Update the notes field of a QR code. Only notes can be modified after creation.

        Args:
            id_: QR code ID (qr_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated QR code.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(self._with_raw_response.update_qr_code(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> QrCodesWithRawResponse:
        return self._with_raw_response


class AsyncQrCodes:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncQrCodesWithRawResponse(client, server, auth)

    async def close_qr_code(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> QrCode:
        """Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            QR code closed. Status changes to 'closed'.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.close_qr_code(id_, request_options=request_options))

    async def create_qr_code(
        self,
        body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature;
        requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days.
        multiple_use QR codes have no expiry restriction.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            QR code created.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Rate limit exceeded. Implement exponential backoff with jitter before
                retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.create_qr_code(body, request_options=request_options))

    async def fetch_all_qr_codes(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        customer_id: str | None = None,
        payment_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentsQrCodesResponse:
        """Retrieve all QR codes. Filter by customer_id or payment_id.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            customer_id: Filter by customer ID (cust_*).
            payment_id: Filter QR codes associated with a specific payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of QR codes.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Rate limit exceeded. Implement
                exponential backoff with jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_all_qr_codes(
                from_=from_,
                to=to,
                count=count,
                skip=skip,
                customer_id=customer_id,
                payment_id=payment_id,
                request_options=request_options,
            ),
        )

    async def fetch_qr_code(self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None) -> QrCode:
        """Retrieve details of a specific QR code including payment counts and status.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            QR code details.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(await self._with_raw_response.fetch_qr_code(id_, request_options=request_options))

    async def fetch_qr_code_payments(
        self,
        id_: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentsQrCodesPaymentsResponse:
        """Retrieve all payments made against a specific QR code.

        Args:
            id_: QR code ID (qr_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Collection of payments for the QR code.

        Raises:
            ApiError: Authentication failed. Invalid or missing API key credentials. Resource not found. Rate limit
                exceeded. Implement exponential backoff with jitter before retrying. ``error`` is ``Error |
                RawError``."""
        return unwrap(
            await self._with_raw_response.fetch_qr_code_payments(
                id_, from_=from_, to=to, count=count, skip=skip, request_options=request_options
            ),
        )

    async def update_qr_code(
        self,
        id_: str,
        body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> QrCode:
        """Update the notes field of a QR code. Only notes can be modified after creation.

        Args:
            id_: QR code ID (qr_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Updated QR code.

        Raises:
            ApiError: Bad request. Invalid parameters or missing required fields. Authentication failed. Invalid or
                missing API key credentials. Resource not found. Rate limit exceeded. Implement exponential backoff with
                jitter before retrying. ``error`` is ``Error | RawError``."""
        return unwrap(await self._with_raw_response.update_qr_code(id_, body, request_options=request_options))

    @property
    def with_raw_response(self) -> AsyncQrCodesWithRawResponse:
        return self._with_raw_response


class QrCodesWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def close_qr_code(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QrCode, CloseQrCodeErrorBody]:
        """Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/qr_codes/{id}/close"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[QrCode],
            error_mapper=close_qr_code_error_mapper,
            request_options=request_options,
        )

    def create_qr_code(
        self,
        body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, CreateQrCodeErrorBody]:
        """Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature;
        requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days.
        multiple_use QR codes have no expiry restriction.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/qr_codes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsQrCodesRequest | PaymentsQrCodesRequestDict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[QrCode],
            error_mapper=create_qr_code_error_mapper,
            request_options=request_options,
        )

    def fetch_all_qr_codes(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        customer_id: str | None = None,
        payment_id: str | None = None,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsQrCodesResponse, FetchAllQrCodesErrorBody]:
        """Retrieve all QR codes. Filter by customer_id or payment_id.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            customer_id: Filter by customer ID (cust_*).
            payment_id: Filter QR codes associated with a specific payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/qr_codes"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[str | None]("customer_id", customer_id),
                param[str | None]("payment_id", payment_id),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsQrCodesResponse],
            error_mapper=fetch_all_qr_codes_error_mapper,
            request_options=request_options,
        )

    def fetch_qr_code(
        self, id_: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[QrCode, FetchQrCodeErrorBody]:
        """Retrieve details of a specific QR code including payment counts and status.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/qr_codes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[QrCode],
            error_mapper=fetch_qr_code_error_mapper,
            request_options=request_options,
        )

    def fetch_qr_code_payments(
        self,
        id_: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsQrCodesPaymentsResponse, FetchQrCodePaymentsErrorBody]:
        """Retrieve all payments made against a specific QR code.

        Args:
            id_: QR code ID (qr_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/qr_codes/{id}/payments"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[PaymentsQrCodesPaymentsResponse],
            error_mapper=fetch_qr_code_payments_error_mapper,
            request_options=request_options,
        )

    def update_qr_code(
        self,
        id_: str,
        body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, UpdateQrCodeErrorBody]:
        """Update the notes field of a QR code. Only notes can be modified after creation.

        Args:
            id_: QR code ID (qr_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/payments/qr_codes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict](body),
            auth_scheme=AnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=json_decoder[QrCode],
            error_mapper=update_qr_code_error_mapper,
            request_options=request_options,
        )


class AsyncQrCodesWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def close_qr_code(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QrCode, CloseQrCodeErrorBody]:
        """Deactivate a QR code to stop accepting new payments. Once closed, the QR code cannot be reopened.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/qr_codes/{id}/close"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[QrCode],
            error_mapper=close_qr_code_error_mapper,
            request_options=request_options,
        )

    async def create_qr_code(
        self,
        body: PaymentsQrCodesRequest | PaymentsQrCodesRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, CreateQrCodeErrorBody]:
        """Create a UPI QR code for accepting digital payments. Only upi_qr type is supported (on-demand feature;
        requires merchant activation). single_use QR codes require fixed_amount=true and close_by maximum is 45 days.
        multiple_use QR codes have no expiry restriction.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/payments/qr_codes"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsQrCodesRequest | PaymentsQrCodesRequestDict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[QrCode],
            error_mapper=create_qr_code_error_mapper,
            request_options=request_options,
        )

    async def fetch_all_qr_codes(
        self,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        customer_id: str | None = None,
        payment_id: str | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsQrCodesResponse, FetchAllQrCodesErrorBody]:
        """Retrieve all QR codes. Filter by customer_id or payment_id.

        Args:
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            customer_id: Filter by customer ID (cust_*).
            payment_id: Filter QR codes associated with a specific payment.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/qr_codes"),
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
                param[str | None]("customer_id", customer_id),
                param[str | None]("payment_id", payment_id),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsQrCodesResponse],
            error_mapper=fetch_all_qr_codes_error_mapper,
            request_options=request_options,
        )

    async def fetch_qr_code(
        self, id_: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[QrCode, FetchQrCodeErrorBody]:
        """Retrieve details of a specific QR code including payment counts and status.

        Args:
            id_: QR code ID (qr_*).
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/qr_codes/{id}"),
            path_params=[param[str]("id", id_)],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[QrCode],
            error_mapper=fetch_qr_code_error_mapper,
            request_options=request_options,
        )

    async def fetch_qr_code_payments(
        self,
        id_: str,
        *,
        from_: int | None = None,
        to: int | None = None,
        count: int | None = 10,
        skip: int | None = 0,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentsQrCodesPaymentsResponse, FetchQrCodePaymentsErrorBody]:
        """Retrieve all payments made against a specific QR code.

        Args:
            id_: QR code ID (qr_*).
            from_: Unix timestamp (seconds). Fetch records created on or after this time.
            to: Unix timestamp (seconds). Fetch records created on or before this time.
            count: Number of records to return per call. Maximum 100. Default 10.
            skip: Number of records to skip. Use with count for pagination. Default 0.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/payments/qr_codes/{id}/payments"),
            path_params=[param[str]("id", id_)],
            query_params=[
                param[int | None]("from", from_),
                param[int | None]("to", to),
                param[int | None]("count", count),
                param[int | None]("skip", skip),
            ],
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[PaymentsQrCodesPaymentsResponse],
            error_mapper=fetch_qr_code_payments_error_mapper,
            request_options=request_options,
        )

    async def update_qr_code(
        self,
        id_: str,
        body: PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[QrCode, UpdateQrCodeErrorBody]:
        """Update the notes field of a QR code. Only notes can be modified after creation.

        Args:
            id_: QR code ID (qr_*).
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PATCH",
            url_template=self._server.default("/payments/qr_codes/{id}"),
            path_params=[param[str]("id", id_)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentsQrCodesRequest1 | PaymentsQrCodesRequest1Dict](body),
            auth_scheme=AsyncAnySchemes(
                self._auth.basic_auth, self._auth.oauth2_authorization_code, self._auth.oauth2_client_credentials
            ),
            decoder=async_json_decoder[QrCode],
            error_mapper=update_qr_code_error_mapper,
            request_options=request_options,
        )
