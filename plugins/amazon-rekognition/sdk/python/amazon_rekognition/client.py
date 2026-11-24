from __future__ import annotations

from collections.abc import Sequence
from functools import cached_property
from types import TracebackType

from typing_extensions import Self

from .apis.celebrity_recognition_api import CelebrityRecognitionApi
from .apis.content_moderation import ContentModeration
from .apis.custom_labels import CustomLabels
from .apis.dataset import Dataset
from .apis.face_api import FaceApi
from .apis.face_collections import FaceCollections
from .apis.face_liveness import FaceLiveness
from .apis.face_search import FaceSearch
from .apis.facial_analysis import FacialAnalysis
from .apis.image_analysis import ImageAnalysis
from .apis.media_analysis_job import MediaAnalysisJob
from .apis.operations import Operations
from .apis.project import Project
from .apis.project_policy_api import ProjectPolicyApi
from .apis.project_version import ProjectVersion
from .apis.stored_video_analysis import StoredVideoAnalysis
from .apis.stream_processor_api import StreamProcessorApi
from .apis.text_detection_api import TextDetectionApi
from .apis.user_api import UserApi
from .auth import AuthSchemes
from .base_client import DEFAULT_TIMEOUT, BaseAmazonRekognitionClient
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


class AmazonRekognitionClient(BaseAmazonRekognitionClient[RawClient]):
    def __init__(
        self,
        *,
        base_url: str | None = None,
        timeout: float = DEFAULT_TIMEOUT,
        retry_options: int | RetryOptionsOrDict | None = None,
        logging_options: LoggingOptionsOrDict | None = None,
        hooks: Sequence[SdkHook] | SdkHooksDict | None = None,
        custom_http_client: HttpClient | None = None,
        sigv4: str | None = None,
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
                param[str]("User-Agent", "AmazonRekognitionClient/0.1.0 Python"),
                param[str]("X-APIMatic-Lang", "Python"),
                param[str]("X-APIMatic-Package-Version", "0.1.0"),
                param[str]("X-APIMatic-Gen-Version", "4.0.0"),
                param[str]("X-APIMatic-OS", OPERATING_SYSTEM),
                param[str]("X-APIMatic-Runtime", PYTHON_RUNTIME),
            ],
        )
        self._auth = AuthSchemes(sigv4=ApiKeyHeaderScheme("Authorization", sigv4) if sigv4 is not None else no_auth)

    @cached_property
    def celebrity_recognition_api(self) -> CelebrityRecognitionApi:
        return CelebrityRecognitionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def content_moderation(self) -> ContentModeration:
        return ContentModeration(self._raw_client, self._server, self._auth)

    @cached_property
    def custom_labels(self) -> CustomLabels:
        return CustomLabels(self._raw_client, self._server, self._auth)

    @cached_property
    def dataset(self) -> Dataset:
        return Dataset(self._raw_client, self._server, self._auth)

    @cached_property
    def face_api(self) -> FaceApi:
        return FaceApi(self._raw_client, self._server, self._auth)

    @cached_property
    def face_collections(self) -> FaceCollections:
        return FaceCollections(self._raw_client, self._server, self._auth)

    @cached_property
    def face_liveness(self) -> FaceLiveness:
        return FaceLiveness(self._raw_client, self._server, self._auth)

    @cached_property
    def face_search(self) -> FaceSearch:
        return FaceSearch(self._raw_client, self._server, self._auth)

    @cached_property
    def facial_analysis(self) -> FacialAnalysis:
        return FacialAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def image_analysis(self) -> ImageAnalysis:
        return ImageAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def media_analysis_job(self) -> MediaAnalysisJob:
        return MediaAnalysisJob(self._raw_client, self._server, self._auth)

    @cached_property
    def operations(self) -> Operations:
        return Operations(self._raw_client, self._server, self._auth)

    @cached_property
    def project(self) -> Project:
        return Project(self._raw_client, self._server, self._auth)

    @cached_property
    def project_policy_api(self) -> ProjectPolicyApi:
        return ProjectPolicyApi(self._raw_client, self._server, self._auth)

    @cached_property
    def project_version(self) -> ProjectVersion:
        return ProjectVersion(self._raw_client, self._server, self._auth)

    @cached_property
    def stored_video_analysis(self) -> StoredVideoAnalysis:
        return StoredVideoAnalysis(self._raw_client, self._server, self._auth)

    @cached_property
    def stream_processor_api(self) -> StreamProcessorApi:
        return StreamProcessorApi(self._raw_client, self._server, self._auth)

    @cached_property
    def text_detection_api(self) -> TextDetectionApi:
        return TextDetectionApi(self._raw_client, self._server, self._auth)

    @cached_property
    def user_api(self) -> UserApi:
        return UserApi(self._raw_client, self._server, self._auth)

    def close(self) -> None:
        self._raw_client.http_client.close()

    def __enter__(self) -> Self:
        return self

    def __exit__(
        self, exc_type: type[BaseException] | None, exc: BaseException | None, exc_tb: TracebackType | None
    ) -> None:
        self.close()


Client = AmazonRekognitionClient
