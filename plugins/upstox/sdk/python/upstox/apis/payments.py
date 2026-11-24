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
from ..errors.cancel_payout_error import CancelPayoutErrorBody, cancel_payout_error_mapper
from ..errors.get_payin_history_error import GetPayinHistoryErrorBody, get_payin_history_error_mapper
from ..errors.get_payout_history_error import GetPayoutHistoryErrorBody, get_payout_history_error_mapper
from ..errors.get_payout_modes_error import GetPayoutModesErrorBody, get_payout_modes_error_mapper
from ..errors.initiate_payout_error import InitiatePayoutErrorBody, initiate_payout_error_mapper
from ..errors.modify_payout_error import ModifyPayoutErrorBody, modify_payout_error_mapper
from ..models.initiate_payout_request import InitiatePayoutRequest, InitiatePayoutRequestDict
from ..models.modify_payout_request import ModifyPayoutRequest, ModifyPayoutRequestDict
from ..models.payment_history_response import PaymentHistoryResponse
from ..models.payout_details_response import PayoutDetailsResponse
from ..models.payout_modes_response import PayoutModesResponse
from ..server.server import Server


class Payments:
    def __init__(self, client: RawClient, server: Server, auth: AuthSchemes) -> None:
        self._with_raw_response = PaymentsWithRawResponse(client, server, auth)

    def cancel_payout(
        self, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> PayoutDetailsResponse:
        """Send a ``DELETE`` request.

        Args:
            transaction_id: Payout transaction id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.cancel_payout(transaction_id, request_options=request_options))

    def get_payin_history(self, *, request_options: RequestOptionsOrDict | None = None) -> PaymentHistoryResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_payin_history(request_options=request_options))

    def get_payout_history(self, *, request_options: RequestOptionsOrDict | None = None) -> PaymentHistoryResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_payout_history(request_options=request_options))

    def get_payout_modes(self, *, request_options: RequestOptionsOrDict | None = None) -> PayoutModesResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.get_payout_modes(request_options=request_options))

    def initiate_payout(
        self,
        body: InitiatePayoutRequest | InitiatePayoutRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PayoutDetailsResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.initiate_payout(body, request_options=request_options))

    def modify_payout(
        self,
        transaction_id: str,
        body: ModifyPayoutRequest | ModifyPayoutRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> PayoutDetailsResponse:
        """Send a ``PUT`` request.

        Args:
            transaction_id: Payout transaction id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(self._with_raw_response.modify_payout(transaction_id, body, request_options=request_options))

    @property
    def with_raw_response(self) -> PaymentsWithRawResponse:
        return self._with_raw_response


class AsyncPayments:
    def __init__(self, client: AsyncRawClient, server: Server, auth: AsyncAuthSchemes) -> None:
        self._with_raw_response = AsyncPaymentsWithRawResponse(client, server, auth)

    async def cancel_payout(
        self, transaction_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PayoutDetailsResponse:
        """Send a ``DELETE`` request.

        Args:
            transaction_id: Payout transaction id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.cancel_payout(transaction_id, request_options=request_options))

    async def get_payin_history(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentHistoryResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_payin_history(request_options=request_options))

    async def get_payout_history(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PaymentHistoryResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_payout_history(request_options=request_options))

    async def get_payout_modes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> PayoutModesResponse:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.get_payout_modes(request_options=request_options))

    async def initiate_payout(
        self,
        body: InitiatePayoutRequest | InitiatePayoutRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PayoutDetailsResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(await self._with_raw_response.initiate_payout(body, request_options=request_options))

    async def modify_payout(
        self,
        transaction_id: str,
        body: ModifyPayoutRequest | ModifyPayoutRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PayoutDetailsResponse:
        """Send a ``PUT`` request.

        Args:
            transaction_id: Payout transaction id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Method Not Allowed Bad Request Internal Server Error Forbidden Locked Unprocessable Entity Too
                Many Requests ``error`` is ``ApiGatewayErrorResponse | RawError``."""
        return unwrap(
            await self._with_raw_response.modify_payout(transaction_id, body, request_options=request_options)
        )

    @property
    def with_raw_response(self) -> AsyncPaymentsWithRawResponse:
        return self._with_raw_response


class PaymentsWithRawResponse(SecuredRawResponse[RawClient, Server, AuthSchemes]):
    def cancel_payout(
        self, transaction_id: str, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutDetailsResponse, CancelPayoutErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            transaction_id: Payout transaction id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/user/payments/payout/{transaction_id}"),
            path_params=[param[str]("transaction_id", transaction_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PayoutDetailsResponse],
            error_mapper=cancel_payout_error_mapper,
            request_options=request_options,
        )

    def get_payin_history(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentHistoryResponse, GetPayinHistoryErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/payments/payin"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PaymentHistoryResponse],
            error_mapper=get_payin_history_error_mapper,
            request_options=request_options,
        )

    def get_payout_history(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentHistoryResponse, GetPayoutHistoryErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/payments/payout"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PaymentHistoryResponse],
            error_mapper=get_payout_history_error_mapper,
            request_options=request_options,
        )

    def get_payout_modes(
        self, *, request_options: RequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutModesResponse, GetPayoutModesErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/payments/payout/modes"),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PayoutModesResponse],
            error_mapper=get_payout_modes_error_mapper,
            request_options=request_options,
        )

    def initiate_payout(
        self,
        body: InitiatePayoutRequest | InitiatePayoutRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutDetailsResponse, InitiatePayoutErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/user/payments/payout"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InitiatePayoutRequest | InitiatePayoutRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PayoutDetailsResponse],
            error_mapper=initiate_payout_error_mapper,
            request_options=request_options,
        )

    def modify_payout(
        self,
        transaction_id: str,
        body: ModifyPayoutRequest | ModifyPayoutRequestDict,
        *,
        request_options: RequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutDetailsResponse, ModifyPayoutErrorBody]:
        """Send a ``PUT`` request.

        Args:
            transaction_id: Payout transaction id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/user/payments/payout/{transaction_id}"),
            path_params=[param[str]("transaction_id", transaction_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModifyPayoutRequest | ModifyPayoutRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=json_decoder[PayoutDetailsResponse],
            error_mapper=modify_payout_error_mapper,
            request_options=request_options,
        )


class AsyncPaymentsWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def cancel_payout(
        self, transaction_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutDetailsResponse, CancelPayoutErrorBody]:
        """Send a ``DELETE`` request.

        Args:
            transaction_id: Payout transaction id
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/v2/user/payments/payout/{transaction_id}"),
            path_params=[param[str]("transaction_id", transaction_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PayoutDetailsResponse],
            error_mapper=cancel_payout_error_mapper,
            request_options=request_options,
        )

    async def get_payin_history(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentHistoryResponse, GetPayinHistoryErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/payments/payin"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PaymentHistoryResponse],
            error_mapper=get_payin_history_error_mapper,
            request_options=request_options,
        )

    async def get_payout_history(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PaymentHistoryResponse, GetPayoutHistoryErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/payments/payout"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PaymentHistoryResponse],
            error_mapper=get_payout_history_error_mapper,
            request_options=request_options,
        )

    async def get_payout_modes(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[PayoutModesResponse, GetPayoutModesErrorBody]:
        """Send a ``GET`` request.

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/v2/user/payments/payout/modes"),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PayoutModesResponse],
            error_mapper=get_payout_modes_error_mapper,
            request_options=request_options,
        )

    async def initiate_payout(
        self,
        body: InitiatePayoutRequest | InitiatePayoutRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutDetailsResponse, InitiatePayoutErrorBody]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/v2/user/payments/payout"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[InitiatePayoutRequest | InitiatePayoutRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PayoutDetailsResponse],
            error_mapper=initiate_payout_error_mapper,
            request_options=request_options,
        )

    async def modify_payout(
        self,
        transaction_id: str,
        body: ModifyPayoutRequest | ModifyPayoutRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PayoutDetailsResponse, ModifyPayoutErrorBody]:
        """Send a ``PUT`` request.

        Args:
            transaction_id: Payout transaction id
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/v2/user/payments/payout/{transaction_id}"),
            path_params=[param[str]("transaction_id", transaction_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ModifyPayoutRequest | ModifyPayoutRequestDict](body),
            auth_scheme=self._auth.oauth2,
            decoder=async_json_decoder[PayoutDetailsResponse],
            error_mapper=modify_payout_error_mapper,
            request_options=request_options,
        )
