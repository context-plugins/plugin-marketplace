from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateProjectResponse(SdkBaseModel):
    project_arn: Optional[str] = Field(default=UNSET, alias="ProjectArn")
    """The Amazon Resource Name (ARN) of the new project. You can use the ARN to configure IAM access to the project."""


class CreateProjectResponseDict(TypedDict):
    project_arn: NotRequired[str]
