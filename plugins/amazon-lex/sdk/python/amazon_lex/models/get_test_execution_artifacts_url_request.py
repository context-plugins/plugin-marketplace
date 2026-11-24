from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class GetTestExecutionArtifactsUrlRequest(SdkBaseModel):
    test_execution_id: str = Field(alias="testExecutionId")
    """The unique identifier of the completed test execution."""


class GetTestExecutionArtifactsUrlRequestDict(TypedDict):
    test_execution_id: str
