from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.celebrity_recognition_api import AsyncCelebrityRecognitionApi
from .apis.content_moderation import AsyncContentModeration
from .apis.custom_labels import AsyncCustomLabels
from .apis.dataset import AsyncDataset
from .apis.face_api import AsyncFaceApi
from .apis.face_collections import AsyncFaceCollections
from .apis.face_liveness import AsyncFaceLiveness
from .apis.face_search import AsyncFaceSearch
from .apis.facial_analysis import AsyncFacialAnalysis
from .apis.image_analysis import AsyncImageAnalysis
from .apis.media_analysis_job import AsyncMediaAnalysisJob
from .apis.operations import AsyncOperations
from .apis.project import AsyncProject
from .apis.project_policy_api import AsyncProjectPolicyApi
from .apis.project_version import AsyncProjectVersion
from .apis.stored_video_analysis import AsyncStoredVideoAnalysis
from .apis.stream_processor_api import AsyncStreamProcessorApi
from .apis.text_detection_api import AsyncTextDetectionApi
from .apis.user_api import AsyncUserApi
from .auth import AsyncAuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonRekognitionClient
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


class AsyncAmazonRekognitionClient(BaseAmazonRekognitionClient[AsyncRawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[AsyncSdkHook] | AsyncSdkHooksDict | None = None,
        custom_async_http_client: AsyncHttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonRekognitionClient/0.1.0 Python"),
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
    def celebrity_recognition_api(self) -> AsyncCelebrityRecognitionApi:
        return AsyncCelebrityRecognitionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def content_moderation(self) -> AsyncContentModeration:
        return AsyncContentModeration(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_labels(self) -> AsyncCustomLabels:
        return AsyncCustomLabels(self._raw_client, self._server, self._auth)

    @cached_property
    def dataset(self) -> AsyncDataset:
        return AsyncDataset(self._raw_client, self._server, self._auth)

    @cached_property
    def face_api(self) -> AsyncFaceApi:
        return AsyncFaceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def face_collections(self) -> AsyncFaceCollections:
        return AsyncFaceCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def face_liveness(self) -> AsyncFaceLiveness:
        return AsyncFaceLiveness(self._raw_client, self._server, self._auth)

    @cached_property
    def face_search(self) -> AsyncFaceSearch:
        return AsyncFaceSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def facial_analysis(self) -> AsyncFacialAnalysis:
        return AsyncFacialAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def image_analysis(self) -> AsyncImageAnalysis:
        return AsyncImageAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def media_analysis_job(self) -> AsyncMediaAnalysisJob:
        return AsyncMediaAnalysisJob(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> AsyncOperations:
        return AsyncOperations(self._raw_client, self._server, self._auth)

    @cached_property
    def project(self) -> AsyncProject:
        return AsyncProject(self._raw_client, self._server, self._auth)

    @cached_property
    def project_policy_api(self) -> AsyncProjectPolicyApi:
        return AsyncProjectPolicyApi(self._raw_client, self._server, self._auth)

    @cached_property
    def project_version(self) -> AsyncProjectVersion:
        return AsyncProjectVersion(self._raw_client, self._server, self._auth)

    @cached_property
    def stored_video_analysis(self) -> AsyncStoredVideoAnalysis:
        return AsyncStoredVideoAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def stream_processor_api(self) -> AsyncStreamProcessorApi:
        return AsyncStreamProcessorApi(self._raw_client, self._server, self._auth)

    @cached_property
    def text_detection_api(self) -> AsyncTextDetectionApi:
        return AsyncTextDetectionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> AsyncUserApi:
        return AsyncUserApi(self._raw_client, self._server, self._auth)

    async def aclose(self) -> None:
        await self._raw_client.http_client.aclose()

    async def __aenter__(self) -> Self:
        return self

    async def __aexit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        await self.aclose()


AsyncClient = AsyncAmazonRekognitionClient
