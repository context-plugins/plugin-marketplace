from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.auth_api import AuthApi
from .apis.history import History
from .apis.images import Images
from .apis.lien_theft import LienTheft
from .apis.market_value import MarketValue
from .apis.plate_decoder import PlateDecoder
from .apis.recalls import Recalls
from .apis.recognition import Recognition
from .apis.specifications import Specifications
from .apis.year_make_model import YearMakeModel
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseCarsXeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
    ApiKeyQueryScheme,
    HttpClient,
    Httpx2Client,
    LoggingOptionsOrDict,
    RawClient,
    RetryOptionsOrDict,
    SdkHook,
    SdkHooksDict,
    no_auth,
    param,
)


class CarsXeClient(BaseCarsXeClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        api_key_query: str | None = None,
        x402_payment: str | None = None,
        recalls_batch_token: str | None = None,
    ) -> None:
        super().__init__(
            base_url=base_url, timeout=timeout, retry_options=retry_options, logging_options=logging_options
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            api_key_query=ApiKeyQueryScheme("key", api_key_query) if api_key_query is not None else no_auth,
            x402_payment=ApiKeyHeaderScheme("PAYMENT-SIGNATURE", x402_payment) if x402_payment is not None else no_auth,
            recalls_batch_token=(
                ApiKeyHeaderScheme("X-CarsXE-Batch-Token", recalls_batch_token)
                if recalls_batch_token is not None
                else no_auth
            ),
        )

    @cached_property
    def auth_api(self) -> AuthApi:
        return AuthApi(self._raw_client, self._server, self._auth)

    @cached_property
    def history(self) -> History:
        return History(self._raw_client, self._server, self._auth)

    @cached_property
    def images(self) -> Images:
        return Images(self._raw_client, self._server, self._auth)

    @cached_property
    def lien_theft(self) -> LienTheft:
        return LienTheft(self._raw_client, self._server, self._auth)

    @cached_property
    def market_value(self) -> MarketValue:
        return MarketValue(self._raw_client, self._server, self._auth)

    @cached_property
    def plate_decoder(self) -> PlateDecoder:
        return PlateDecoder(self._raw_client, self._server, self._auth)

    @cached_property
    def recalls(self) -> Recalls:
        return Recalls(self._raw_client, self._server, self._auth)

    @cached_property
    def recognition(self) -> Recognition:
        return Recognition(self._raw_client, self._server, self._auth)

    @cached_property
    def specifications(self) -> Specifications:
        return Specifications(self._raw_client, self._server, self._auth)

    @cached_property
    def year_make_model(self) -> YearMakeModel:
        return YearMakeModel(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = CarsXeClient
