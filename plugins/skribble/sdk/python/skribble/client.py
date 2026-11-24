from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.access import Access
from .apis.additional_information import AdditionalInformation
from .apis.billing_and_credits import BillingAndCredits
from .apis.document_api import DocumentApi
from .apis.identification import Identification
from .apis.monitoring import Monitoring
from .apis.report import Report
from .apis.reports import Reports
from .apis.seal import Seal
from .apis.send_to import SendTo
from .apis.signature import Signature
from .apis.signature_attachment_api import SignatureAttachmentApi
from .apis.signature_handling import SignatureHandling
from .apis.signature_observer_api import SignatureObserverApi
from .apis.signature_signer import SignatureSigner
from .apis.user import User
from .apis.validation import Validation
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseSkribbleClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    BearerAuthScheme,
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class SkribbleClient(BaseSkribbleClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        timeout: float = DEFAULT_TIMEOUT,
        server_config: ServerConfigOrDict | None = None,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
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
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(
            bearer=BearerAuthScheme(bearer) if bearer is not None else no_auth,
            bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth,
        )

    @cached_property
    def access(self) -> Access:
        return Access(self._raw_client, self._server)

    @cached_property
    def additional_information(self) -> AdditionalInformation:
        return AdditionalInformation(self._raw_client, self._server, self._auth)

    @cached_property
    def billing_and_credits(self) -> BillingAndCredits:
        return BillingAndCredits(self._raw_client, self._server, self._auth)

    @cached_property
    def document_api(self) -> DocumentApi:
        return DocumentApi(self._raw_client, self._server, self._auth)

    @cached_property
    def identification(self) -> Identification:
        return Identification(self._raw_client, self._server, self._auth)

    @cached_property
    def monitoring(self) -> Monitoring:
        return Monitoring(self._raw_client, self._server)

    @cached_property
    def report(self) -> Report:
        return Report(self._raw_client, self._server, self._auth)

    @cached_property
    def reports(self) -> Reports:
        return Reports(self._raw_client, self._server, self._auth)

    @cached_property
    def seal(self) -> Seal:
        return Seal(self._raw_client, self._server, self._auth)

    @cached_property
    def send_to(self) -> SendTo:
        return SendTo(self._raw_client, self._server)

    @cached_property
    def signature(self) -> Signature:
        return Signature(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_attachment_api(self) -> SignatureAttachmentApi:
        return SignatureAttachmentApi(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_handling(self) -> SignatureHandling:
        return SignatureHandling(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_observer_api(self) -> SignatureObserverApi:
        return SignatureObserverApi(self._raw_client, self._server, self._auth)

    @cached_property
    def signature_signer(self) -> SignatureSigner:
        return SignatureSigner(self._raw_client, self._server, self._auth)

    @cached_property
    def user(self) -> User:
        return User(self._raw_client, self._server, self._auth)

    @cached_property
    def validation(self) -> Validation:
        return Validation(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = SkribbleClient
