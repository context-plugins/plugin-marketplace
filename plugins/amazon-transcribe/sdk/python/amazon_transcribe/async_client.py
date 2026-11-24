from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.call_analytics_category import AsyncCallAnalyticsCategory
from .apis.call_analytics_job_api import AsyncCallAnalyticsJobApi
from .apis.language_model_api import AsyncLanguageModelApi
from .apis.medical_scribe_job_api import AsyncMedicalScribeJobApi
from .apis.medical_transcription_job_api import AsyncMedicalTranscriptionJobApi
from .apis.medical_vocabulary import AsyncMedicalVocabulary
from .apis.operations import AsyncOperations
from .apis.transcription_jobs import AsyncTranscriptionJobs
from .apis.vocabularies import AsyncVocabularies
from .apis.vocabulary_filter import AsyncVocabularyFilter
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonTranscribeClient
from .core import (
    OPERATING_SYSTEM,
    PYTHON_RUNTIME,
    ApiKeyHeaderScheme,
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
from .server.environment import Environment
from .server.server_config import ServerConfigOrDict


class AsyncAmazonTranscribeClient(BaseAmazonTranscribeClient[AsyncRawClient]):
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
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonTranscribeClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AsyncAuthSchemes(
            sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth
        )

    @cached_property
    def call_analytics_category(self) -> AsyncCallAnalyticsCategory:
        return AsyncCallAnalyticsCategory(self._raw_client, self._server, self._auth)

    @cached_property
    def call_analytics_job_api(self) -> AsyncCallAnalyticsJobApi:
        return AsyncCallAnalyticsJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def language_model_api(self) -> AsyncLanguageModelApi:
        return AsyncLanguageModelApi(self._raw_client, self._server, self._auth)

    @cached_property
    def medical_scribe_job_api(self) -> AsyncMedicalScribeJobApi:
        return AsyncMedicalScribeJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def medical_transcription_job_api(self) -> AsyncMedicalTranscriptionJobApi:
        return AsyncMedicalTranscriptionJobApi(self._raw_client, self._server, self._auth)

    @cached_property
    def medical_vocabulary(self) -> AsyncMedicalVocabulary:
        return AsyncMedicalVocabulary(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def transcription_jobs(self) -> AsyncTranscriptionJobs:
        return AsyncTranscriptionJobs(self._raw_client, self._server, self._auth)

    @cached_property
    def vocabularies(self) -> AsyncVocabularies:
        return AsyncVocabularies(self._raw_client, self._server, self._auth)

    @cached_property
    def vocabulary_filter(self) -> AsyncVocabularyFilter:
        return AsyncVocabularyFilter(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonTranscribeClient
