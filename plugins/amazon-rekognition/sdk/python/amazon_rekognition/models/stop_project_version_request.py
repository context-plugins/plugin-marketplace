from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class StopProjectVersionRequest(SdkBaseModel):
    project_version_arn: str = Field(alias="ProjectVersionArn")
    """The Amazon Resource Name (ARN) of the model version that you want to stop. This operation requires permissions to
    perform the rekognition:StopProjectVersion action."""


class StopProjectVersionRequestDict(TypedDict):
    project_version_arn: str
