from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class DeleteProjectRequest(SdkBaseModel):
    project_arn: str = Field(alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the project that you want to delete."""


class DeleteProjectRequestDict(TypedDict):
    project_arn: str
