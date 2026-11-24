from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.access import AsyncAccess
from .apis.additional_information import AsyncAdditionalInformation
from .apis.billing_and_credits import AsyncBillingAndCredits
from .apis.document_api import AsyncDocumentApi
from .apis.identification import AsyncIdentification
from .apis.monitoring import AsyncMonitoring
from .apis.report import AsyncReport
from .apis.reports import AsyncReports
from .apis.seal import AsyncSeal
from .apis.send_to import AsyncSendTo
from .apis.signature import AsyncSignature
from .apis.signature_attachment_api import AsyncSignatureAttachmentApi
from .apis.signature_handling import AsyncSignatureHandling
from .apis.signature_observer_api import AsyncSignatureObserverApi
from .apis.signature_signer import AsyncSignatureSigner
from .apis.user import AsyncUser
from .apis.validation import AsyncValidation
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseSkribbleClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    AsyncHttpClient,
    AsyncHttpx2Client,
    AsyncRawClient,
    AsyncSdkHook,
    AsyncSdkHooksDict,
    BearerAuthScheme,
    LoggingOptionsOrDict,
    RetryOptionsOrDict,
    no_auth,
    param,
)
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncSkribbleClient(BaseSkribbleClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer: str | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            timeout=timeout,
            server_config=server_config,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = AsyncRawClient(
            http_client=(
                custom_async_http_client if custom_async_http_client is not None else AsyncHttpx2Client(timeout=timeout)
            ),
            retry_options=self._retry_options,
            logging_options=self._logging_options,
            hooks=hooks if hooks is not None else [],
            global_headers=[
                param[str]("User-Agent", "SkribbleClient/1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            bearer=BearerAuthScheme(bearer) if bearer is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def access(self) -> AsyncAccess:
        return AsyncAccess(self._raw_client, self._server)

    @cached_property
    def additional_information(self) -> AsyncAdditionalInformation:
        return AsyncAdditionalInformation(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_and_credits(self) -> AsyncBillingAndCredits:
        return AsyncBillingAndCredits(self._raw_client, self._server, self._auth)

    @cached_property
    def document_api(self) -> AsyncDocumentApi:
        return AsyncDocumentApi(self._raw_client, self._server, self._auth)

    @cached_property
    def identification(self) -> AsyncIdentification:
        return AsyncIdentification(self._raw_client, self._server, self._auth)

    @cached_property
    def monitoring(self) -> AsyncMonitoring:
        return AsyncMonitoring(self._raw_client, self._server)

    @cached_property
    def report(self) -> AsyncReport:
        return AsyncReport(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> AsyncReports:
        return AsyncReports(self._raw_client, self._server, self._auth)

    @cached_property
    def seal(self) -> AsyncSeal:
        return AsyncSeal(self._raw_client, self._server, self._auth)

    @cached_property
    def send_to(self) -> AsyncSendTo:
        return AsyncSendTo(self._raw_client, self._server)

    @cached_property
    def signature(self) -> AsyncSignature:
        return AsyncSignature(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_attachment_api(self) -> AsyncSignatureAttachmentApi:
        return AsyncSignatureAttachmentApi(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_handling(self) -> AsyncSignatureHandling:
        return AsyncSignatureHandling(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_observer_api(self) -> AsyncSignatureObserverApi:
        return AsyncSignatureObserverApi(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_signer(self) -> AsyncSignatureSigner:
        return AsyncSignatureSigner(self._raw_client, self._server, self._auth)

    @cached_property
    def user(self) -> AsyncUser:
        return AsyncUser(self._raw_client, self._server, self._auth)

    @cached_property
    def validation(self) -> AsyncValidation:
        return AsyncValidation(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncSkribbleClient
