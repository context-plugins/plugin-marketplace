from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.auth_api import AsyncAuthApi
from .apis.history import AsyncHistory
from .apis.images import AsyncImages
from .apis.lien_theft import AsyncLienTheft
from .apis.market_value import AsyncMarketValue
from .apis.plate_decoder import AsyncPlateDecoder
from .apis.recalls import AsyncRecalls
from .apis.recognition import AsyncRecognition
from .apis.specifications import AsyncSpecifications
from .apis.year_make_model import AsyncYearMakeModel
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCarsXeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiKeyQueryScheme,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)


class AsyncCarsXeClient(BaseCarsXeClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        api_key_query: str | None = None,
        x402_payment: str | None = None,
        recalls_batch_token: str | None = None,
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
                param[str]("User-Agent", "CarsXeClient/1 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            api_key_query=ApiKeyQueryScheme("key", api_key_query) if api_key_query is not None else no_auth,
            x402_payment=ApiKeyHeaderScheme("PAYMENT-SIGNATURE", x402_payment) if x402_payment is not None else no_auth,
            recalls_batch_token=(
                ApiKeyHeaderScheme("X-CarsXE-Batch-Token", recalls_batch_token)
                if recalls_batch_token is not None
                else no_auth
            ),
        )

    @cached_property
    def auth_api(self) -> AsyncAuthApi:
        return AsyncAuthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def history(self) -> AsyncHistory:
        return AsyncHistory(self._raw_client, self._server, self._auth)

    @cached_property
    def images(self) -> AsyncImages:
        return AsyncImages(self._raw_client, self._server, self._auth)

    @cached_property
    def lien_theft(self) -> AsyncLienTheft:
        return AsyncLienTheft(self._raw_client, self._server, self._auth)

    @cached_property
    def market_value(self) -> AsyncMarketValue:
        return AsyncMarketValue(self._raw_client, self._server, self._auth)

    @cached_property
    def plate_decoder(self) -> AsyncPlateDecoder:
        return AsyncPlateDecoder(self._raw_client, self._server, self._auth)

    @cached_property
    def recalls(self) -> AsyncRecalls:
        return AsyncRecalls(self._raw_client, self._server, self._auth)

    @cached_property
    def recognition(self) -> AsyncRecognition:
        return AsyncRecognition(self._raw_client, self._server, self._auth)

    @cached_property
    def specifications(self) -> AsyncSpecifications:
        return AsyncSpecifications(self._raw_client, self._server, self._auth)

    @cached_property
    def year_make_model(self) -> AsyncYearMakeModel:
        return AsyncYearMakeModel(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncCarsXeClient
