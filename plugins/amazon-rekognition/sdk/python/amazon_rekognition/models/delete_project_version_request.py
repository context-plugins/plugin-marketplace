from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteProjectVersionRequest(SdkBaseModel):
    project_version_arn: str = Field(alias="ProjectVersionArn")
    """The Amazon Resource Name (ARN) of the project version that you want to delete."""


class DeleteProjectVersionRequestDict(TypedDict):
    project_version_arn: str
