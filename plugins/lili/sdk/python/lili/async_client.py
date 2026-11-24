from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseLiliClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RawError,
    RetryOptionsOrDict,
    RFC3339DateTime,
    SecuredRawResponse,
    async_empty_response,
    async_json_decoder,
    json_body,
    no_auth,
    param,
    raw_error_response,
    unwrap,
)
from .errors.add_webhook_error import AddWebhookErrorBody, add_webhook_error_mapper
from .errors.delete_webhook_error import DeleteWebhookErrorBody, delete_webhook_error_mapper
from .errors.get_all_error import GetAllErrorBody, get_all_error_mapper
from .errors.get_webhook_error import GetWebhookErrorBody, get_webhook_error_mapper
from .errors.register_account_error import RegisterAccountErrorBody, register_account_error_mapper
from .errors.update_lead_error import UpdateLeadErrorBody, update_lead_error_mapper
from .errors.update_webhook_error import UpdateWebhookErrorBody, update_webhook_error_mapper
from .errors.upload_additional_doc_error import UploadAdditionalDocErrorBody, upload_additional_doc_error_mapper
from .models.lead_request import LeadRequest, LeadRequestDict
from .models.lead_response import LeadResponse
from .models.lead_upload import LeadUpload, LeadUploadDict
from .models.payment_list_response import PaymentListResponse
from .models.payment_request import PaymentRequest, PaymentRequestDict
from .models.payment_response import PaymentResponse
from .models.webhook_create_response import WebhookCreateResponse
from .models.webhook_list_response import WebhookListResponse
from .models.webhook_request_model import WebhookRequestModel, WebhookRequestModelDict
from .models.webhook_response import WebhookResponse
from .server.server import Server


class AsyncLiliClient(BaseLiliClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        access_key: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "LiliClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            access_key=ApiKeyHeaderScheme("Authorization", access_key) if access_key is not None else no_auth
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server, self._auth)

    async def add_webhook(
        self,
        body: WebhookRequestModel | WebhookRequestModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookCreateResponse:
        """The Create Webhook API registers a new Webhook Listener in the Lili platform.

        As part of the response object, a token is returned. This token will be returned on any future webhook call to
        ensure webhook legitimacy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request ``error`` is ``JsonErrorResponse | RawError``."""
        return unwrap(await self.with_raw_response.add_webhook(body, request_options=request_options))

    async def create_payment_notification(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """Gets a PDF containing a bank letter for a customer

        Args:
            customer_id: The customer ID, as provided in the create lead response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.create_payment_notification(customer_id, request_options=request_options)
        )

    async def delete_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> None:
        """The Delete Webhook API is used to completely delete a registered webhook.

        Args:
            webhook_id: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request ``error`` is ``JsonErrorResponse | RawError``."""
        return unwrap(await self.with_raw_response.delete_webhook(webhook_id, request_options=request_options))

    async def get_all(self, *, request_options: AsyncRequestOptionsOrDict | None = None) -> WebhookListResponse:
        """The Get all webhooks returns a list of all the webhooks the platform registered in Lili

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request ``error`` is ``JsonErrorResponse | RawError``."""
        return unwrap(await self.with_raw_response.get_all(request_options=request_options))

    async def get_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> WebhookResponse:
        """The Get Webhook Details returns the details of an webhook that was registered in the Lili system.

        Args:
            webhook_id: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request ``error`` is ``JsonErrorResponse | RawError``."""
        return unwrap(await self.with_raw_response.get_webhook(webhook_id, request_options=request_options))

    async def payment_list(
        self,
        *,
        customer_id: str | None = None,
        receiver_account_number: str | None = None,
        start_date: RFC3339DateTime | None = None,
        end_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentListResponse:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID, as provided in the create lead response
            receiver_account_number: The receiver account number
            start_date: Start date for the payment list
            end_date: End date for the payment list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            List of payments related to the customer

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(
            await self.with_raw_response.payment_list(
                customer_id=customer_id,
                receiver_account_number=receiver_account_number,
                start_date=start_date,
                end_date=end_date,
                request_options=request_options,
            ),
        )

    async def put_lili_api_v1_payments(
        self,
        *,
        body: PaymentRequest | PaymentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> PaymentResponse:
        """Creates a payment notification in the Lili system

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Payment request created

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.put_lili_api_v1_payments(body=body, request_options=request_options))

    async def register_account(
        self,
        *,
        body: LeadRequest | LeadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> LeadResponse:
        """The Create Application API is used to create a new Application in the Lili platform.

        The respon contains a UUID representing the applicant that was created in the Lili platform, and a URL that
        allows initializing the application process with the pre-filled information.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Created with a URL of the onboarding link

        Raises:
            ApiError: Bad Request ``error`` is ``Any | RawError``."""
        return unwrap(await self.with_raw_response.register_account(body=body, request_options=request_options))

    async def update_lead(
        self,
        customer_id: str,
        *,
        body: LeadRequest | LeadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """The Update Lead API is used to update an existing lead in the Lili platform.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Success

        Raises:
            ApiError: Bad Request ``error`` is ``Any | RawError``."""
        return unwrap(await self.with_raw_response.update_lead(customer_id, body=body, request_options=request_options))

    async def update_webhook(
        self,
        webhook_id: str,
        body: WebhookRequestModel | WebhookRequestModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> WebhookResponse:
        """The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is used to disable
        an active webhook, or reactivate it.

        Args:
            webhook_id: The webhook ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: Bad Request ``error`` is ``JsonErrorResponse | RawError``."""
        return unwrap(await self.with_raw_response.update_webhook(webhook_id, body, request_options=request_options))

    async def upload_additional_doc(
        self,
        customer_id: str,
        *,
        body: LeadUpload | LeadUploadDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> None:
        """The Upload Additional Document API is used to upload an additional document to the Lili platform for a given
        lead.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            Document uploaded

        Raises:
            ApiError: Bad Request ``error`` is ``Any | RawError``."""
        return unwrap(
            await self.with_raw_response.upload_additional_doc(customer_id, body=body, request_options=request_options)
        )

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(SecuredRawResponse[AsyncRawClient, Server, AsyncAuthSchemes]):
    async def add_webhook(
        self,
        body: WebhookRequestModel | WebhookRequestModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookCreateResponse, AddWebhookErrorBody]:
        """The Create Webhook API registers a new Webhook Listener in the Lili platform.

        As part of the response object, a token is returned. This token will be returned on any future webhook call to
        ensure webhook legitimacy.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/lili/api/v1/webhooks"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookRequestModel | WebhookRequestModelDict](body),
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[WebhookCreateResponse],
            error_mapper=add_webhook_error_mapper,
            request_options=request_options,
        )

    async def create_payment_notification(
        self, customer_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, RawError]:
        """Gets a PDF containing a bank letter for a customer

        Args:
            customer_id: The customer ID, as provided in the create lead response
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/lili/api/v1/{customerId}/bankLetter"),
            path_params=[param[str]("customerId", customer_id)],
            auth_scheme=self._auth.access_key,
            decoder=async_empty_response,
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def delete_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[None, DeleteWebhookErrorBody]:
        """The Delete Webhook API is used to completely delete a registered webhook.

        Args:
            webhook_id: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="DELETE",
            url_template=self._server.default("/lili/api/v1/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            auth_scheme=self._auth.access_key,
            decoder=async_empty_response,
            error_mapper=delete_webhook_error_mapper,
            request_options=request_options,
        )

    async def get_all(
        self, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookListResponse, GetAllErrorBody]:
        """The Get all webhooks returns a list of all the webhooks the platform registered in Lili

        Args:
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/lili/api/v1/webhooks"),
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[WebhookListResponse],
            error_mapper=get_all_error_mapper,
            request_options=request_options,
        )

    async def get_webhook(
        self, webhook_id: str, *, request_options: AsyncRequestOptionsOrDict | None = None
    ) -> ApiResult[WebhookResponse, GetWebhookErrorBody]:
        """The Get Webhook Details returns the details of an webhook that was registered in the Lili system.

        Args:
            webhook_id: The webhook ID
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/lili/api/v1/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=get_webhook_error_mapper,
            request_options=request_options,
        )

    async def payment_list(
        self,
        *,
        customer_id: str | None = None,
        receiver_account_number: str | None = None,
        start_date: RFC3339DateTime | None = None,
        end_date: RFC3339DateTime | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentListResponse, RawError]:
        """Send a ``GET`` request.

        Args:
            customer_id: The customer ID, as provided in the create lead response
            receiver_account_number: The receiver account number
            start_date: Start date for the payment list
            end_date: End date for the payment list
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="GET",
            url_template=self._server.default("/lili/api/v1/partner/payments"),
            query_params=[
                param[str | None]("customerId", customer_id),
                param[str | None]("receiverAccountNumber", receiver_account_number),
                param[RFC3339DateTime | None]("startDate", start_date),
                param[RFC3339DateTime | None]("endDate", end_date),
            ],
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[PaymentListResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def put_lili_api_v1_payments(
        self,
        *,
        body: PaymentRequest | PaymentRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[PaymentResponse, RawError]:
        """Creates a payment notification in the Lili system

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/lili/api/v1/payments"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[PaymentRequest | PaymentRequestDict | None](body),
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[PaymentResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def register_account(
        self,
        *,
        body: LeadRequest | LeadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[LeadResponse, RegisterAccountErrorBody]:
        """The Create Application API is used to create a new Application in the Lili platform.

        The respon contains a UUID representing the applicant that was created in the Lili platform, and a URL that
        allows initializing the application process with the pre-filled information.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/lili/api/v1/lead"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LeadRequest | LeadRequestDict | None](body),
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[LeadResponse],
            error_mapper=register_account_error_mapper,
            request_options=request_options,
        )

    async def update_lead(
        self,
        customer_id: str,
        *,
        body: LeadRequest | LeadRequestDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UpdateLeadErrorBody]:
        """The Update Lead API is used to update an existing lead in the Lili platform.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/lili/api/v1/lead/{customerId}"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LeadRequest | LeadRequestDict | None](body),
            auth_scheme=self._auth.access_key,
            decoder=async_empty_response,
            error_mapper=update_lead_error_mapper,
            request_options=request_options,
        )

    async def update_webhook(
        self,
        webhook_id: str,
        body: WebhookRequestModel | WebhookRequestModelDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[WebhookResponse, UpdateWebhookErrorBody]:
        """The Update Webhook updates a webhook that is registered in the Lili system. Usually, this is used to disable
        an active webhook, or reactivate it.

        Args:
            webhook_id: The webhook ID
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/lili/api/v1/webhooks/{webhookId}"),
            path_params=[param[str]("webhookId", webhook_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[WebhookRequestModel | WebhookRequestModelDict](body),
            auth_scheme=self._auth.access_key,
            decoder=async_json_decoder[WebhookResponse],
            error_mapper=update_webhook_error_mapper,
            request_options=request_options,
        )

    async def upload_additional_doc(
        self,
        customer_id: str,
        *,
        body: LeadUpload | LeadUploadDict | None = None,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[None, UploadAdditionalDocErrorBody]:
        """The Upload Additional Document API is used to upload an additional document to the Lili platform for a given
        lead.

        Args:
            customer_id: Value sent with the request.
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="PUT",
            url_template=self._server.default("/lili/api/v1/lead/{customerId}/upload"),
            path_params=[param[str]("customerId", customer_id)],
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[LeadUpload | LeadUploadDict | None](body),
            auth_scheme=self._auth.access_key,
            decoder=async_empty_response,
            error_mapper=upload_additional_doc_error_mapper,
            request_options=request_options,
        )


AsyncClient = AsyncLiliClient
