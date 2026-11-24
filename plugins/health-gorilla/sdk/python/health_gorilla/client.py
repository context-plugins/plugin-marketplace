from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.binary_api import BinaryApi
from .apis.capability_statement_api import CapabilityStatementApi
from .apis.coverage_api import CoverageApi
from .apis.diagnostic_report_api import DiagnosticReportApi
from .apis.document_reference_api import DocumentReferenceApi
from .apis.observation import Observation
from .apis.patient_api import PatientApi
from .apis.practitioner_api import PractitionerApi
from .apis.request_group_api import RequestGroupApi
from .apis.service_request_api import ServiceRequestApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseHealthGorillaClient
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


class HealthGorillaClient(BaseHealthGorillaClient[RawClient]):
    def __init__(
        self,
        *,
        environment: Environment = "production",
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        bearer_auth: str | None = None,
    ) -> None:
        super().__init__(
            environment=environment,
            base_url=base_url,
            timeout=timeout,
            retry_options=retry_options,
            logging_options=logging_options,
        )
        self._raw_client = RawClient(
            http_client=custom_http_client if custom_http_client is not None else Httpx2Client(timeout=timeout),
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
        self._auth = AuthSchemes(bearer_auth=BearerAuthScheme(bearer_auth) if bearer_auth is not None else no_auth)

    @cached_property
    def binary_api(self) -> BinaryApi:
        return BinaryApi(self._raw_client, self._server, self._auth)

    @cached_property
    def capability_statement_api(self) -> CapabilityStatementApi:
        return CapabilityStatementApi(self._raw_client, self._server, self._auth)

    @cached_property
    def coverage_api(self) -> CoverageApi:
        return CoverageApi(self._raw_client, self._server, self._auth)

    @cached_property
    def diagnostic_report_api(self) -> DiagnosticReportApi:
        return DiagnosticReportApi(self._raw_client, self._server, self._auth)

    @cached_property
    def document_reference_api(self) -> DocumentReferenceApi:
        return DocumentReferenceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def observation(self) -> Observation:
        return Observation(self._raw_client, self._server, self._auth)

    @cached_property
    def patient_api(self) -> PatientApi:
        return PatientApi(self._raw_client, self._server, self._auth)

    @cached_property
    def practitioner_api(self) -> PractitionerApi:
        return PractitionerApi(self._raw_client, self._server, self._auth)

    @cached_property
    def request_group_api(self) -> RequestGroupApi:
        return RequestGroupApi(self._raw_client, self._server, self._auth)

    @cached_property
    def service_request_api(self) -> ServiceRequestApi:
        return ServiceRequestApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = HealthGorillaClient
