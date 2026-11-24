from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.binary_api import AsyncBinaryApi
from .apis.capability_statement_api import AsyncCapabilityStatementApi
from .apis.coverage_api import AsyncCoverageApi
from .apis.diagnostic_report_api import AsyncDiagnosticReportApi
from .apis.document_reference_api import AsyncDocumentReferenceApi
from .apis.observation import AsyncObservation
from .apis.patient_api import AsyncPatientApi
from .apis.practitioner_api import AsyncPractitionerApi
from .apis.request_group_api import AsyncRequestGroupApi
from .apis.service_request_api import AsyncServiceRequestApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseHealthGorillaClient
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


class AsyncHealthGorillaClient(BaseHealthGorillaClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
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
                param[str]("User-Agent", "HealthGorillaClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def binary_api(self) -> AsyncBinaryApi:
        return AsyncBinaryApi(self._raw_client, self._server, self._auth)

    @cached_property
    def capability_statement_api(self) -> AsyncCapabilityStatementApi:
        return AsyncCapabilityStatementApi(self._raw_client, self._server, self._auth)

    @cached_property
    def coverage_api(self) -> AsyncCoverageApi:
        return AsyncCoverageApi(self._raw_client, self._server, self._auth)

    @cached_property
    def diagnostic_report_api(self) -> AsyncDiagnosticReportApi:
        return AsyncDiagnosticReportApi(self._raw_client, self._server, self._auth)

    @cached_property
    def document_reference_api(self) -> AsyncDocumentReferenceApi:
        return AsyncDocumentReferenceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def observation(self) -> AsyncObservation:
        return AsyncObservation(self._raw_client, self._server, self._auth)

    @cached_property
    def patient_api(self) -> AsyncPatientApi:
        return AsyncPatientApi(self._raw_client, self._server, self._auth)

    @cached_property
    def practitioner_api(self) -> AsyncPractitionerApi:
        return AsyncPractitionerApi(self._raw_client, self._server, self._auth)

    @cached_property
    def request_group_api(self) -> AsyncRequestGroupApi:
        return AsyncRequestGroupApi(self._raw_client, self._server, self._auth)

    @cached_property
    def service_request_api(self) -> AsyncServiceRequestApi:
        return AsyncServiceRequestApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncHealthGorillaClient
