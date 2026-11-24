from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.call_analytics_category import CallAnalyticsCategory
from .apis.call_analytics_job_api import CallAnalyticsJobApi
from .apis.language_model_api import LanguageModelApi
from .apis.medical_scribe_job_api import MedicalScribeJobApi
from .apis.medical_transcription_job_api import MedicalTranscriptionJobApi
from .apis.medical_vocabulary import MedicalVocabulary
from .apis.operations import Operations
from .apis.transcription_jobs import TranscriptionJobs
from .apis.vocabularies import Vocabularies
from .apis.vocabulary_filter import VocabularyFilter
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonTranscribeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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


class AmazonTranscribeClient(BaseAmazonTranscribeClient[RawClient]):
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
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonTranscribeClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def call_analytics_category(self) -> CallAnalyticsCategory:
        return CallAnalyticsCategory(self._raw_client, self._server, self._auth)

    @cached_property
    def call_analytics_job_api(self) -> CallAnalyticsJobApi:
        return CallAnalyticsJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def language_model_api(self) -> LanguageModelApi:
        return LanguageModelApi(self._raw_client, self._server, self._auth)

    @cached_property
    def medical_scribe_job_api(self) -> MedicalScribeJobApi:
        return MedicalScribeJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def medical_transcription_job_api(self) -> MedicalTranscriptionJobApi:
        return MedicalTranscriptionJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def medical_vocabulary(self) -> MedicalVocabulary:
        return MedicalVocabulary(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> Operations:
        return Operations(self._raw_client, self._server, self._auth)

    @cached_property
    def transcription_jobs(self) -> TranscriptionJobs:
        return TranscriptionJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def vocabularies(self) -> Vocabularies:
        return Vocabularies(self._raw_client, self._server, self._auth)

    @cached_property
    def vocabulary_filter(self) -> VocabularyFilter:
        return VocabularyFilter(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AmazonTranscribeClient
