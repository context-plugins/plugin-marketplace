from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType
from uuid import UUID, uuid4

from typing_extensions import Self

from .base_client import DEFAULT_TIMEOUT, BaseZeroBounceClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiResult,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncRequestOptionsOrDict,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BaseRawResponse,
    LoggingOptionsOrDict,
    RawError,
    RetryOptionsOrDict,
    async_json_decoder,
    json_body,
    param,
    raw_error_response,
    unwrap,
)
from .models.validate_batch_request import ValidateBatchRequest, ValidateBatchRequestDict
from .models.validate_email_request import ValidateEmailRequest, ValidateEmailRequestDict
from .models.validate_email_response import ValidateEmailResponse
from .server.server import Server


class AsyncZeroBounceClient(BaseZeroBounceClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
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
                param[str]("User-Agent", "ZeroBounceClient/v1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "v1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )

    @cached_property
    def with_raw_response(self) -> AsyncApiWithRawResponse:
        return AsyncApiWithRawResponse(self._raw_client, self._server)

    async def validate(
        self,
        body: ValidateEmailRequest | ValidateEmailRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ValidateEmailResponse:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.validate(body, request_options=request_options))

    async def validate_batch(
        self,
        body: ValidateBatchRequest | ValidateBatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> list[ValidateEmailResponse]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            OK

        Raises:
            ApiError: If the API responds with an error status code. ``error`` is ``RawError``."""
        return unwrap(await self.with_raw_response.validate_batch(body, request_options=request_options))

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


class AsyncApiWithRawResponse(BaseRawResponse[AsyncRawClient, Server]):
    async def validate(
        self,
        body: ValidateEmailRequest | ValidateEmailRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[ValidateEmailResponse, RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/validation/chatgpt-single-email-validation/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ValidateEmailRequest | ValidateEmailRequestDict](body),
            decoder=async_json_decoder[ValidateEmailResponse],
            error_mapper=raw_error_response,
            request_options=request_options,
        )

    async def validate_batch(
        self,
        body: ValidateBatchRequest | ValidateBatchRequestDict,
        *,
        request_options: AsyncRequestOptionsOrDict | None = None,
    ) -> ApiResult[list[ValidateEmailResponse], RawError]:
        """Send a ``POST`` request.

        Args:
            body: The request body.
            request_options: Per-call overrides for this one request, such as a timeout, extra headers, or its retry
                count and statuses.

        Returns:
            An ``ApiResult`` holding the deserialized response or the error body."""
        return await self._client.execute(
            http_method="POST",
            url_template=self._server.default("/api/validation/chatgpt-batch-validation/"),
            headers=[param[UUID]("Idempotency-Key", uuid4())],
            body=json_body[ValidateBatchRequest | ValidateBatchRequestDict](body),
            decoder=async_json_decoder[list[ValidateEmailResponse]],
            error_mapper=raw_error_response,
            request_options=request_options,
        )


AsyncClient = AsyncZeroBounceClient
