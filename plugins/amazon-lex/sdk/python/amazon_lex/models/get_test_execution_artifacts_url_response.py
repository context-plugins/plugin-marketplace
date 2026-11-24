from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetTestExecutionArtifactsUrlResponse(SdkBaseModel):
    test_execution_id: Optional[str] = Field(default=UNSET, alias="testExecutionId")
    """The unique identifier of the completed test execution."""

    download_artifacts_url: Optional[str] = Field(default=UNSET, alias="downloadArtifactsUrl")
    """The pre-signed Amazon S3 URL to download completed test execution."""


class GetTestExecutionArtifactsUrlResponseDict(TypedDict):
    test_execution_id: NotRequired[str]
    download_artifacts_url: NotRequired[str]
