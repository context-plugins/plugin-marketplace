from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CreateProjectVersionResponse(SdkBaseModel):
    project_version_arn: Optional[str] = Field(default=UNSET, alias="ProjectVersionArn")
    """The ARN of the model or the project version that was created. Use DescribeProjectVersion to get the current
    status of the training operation."""


class CreateProjectVersionResponseDict(TypedDict):
    project_version_arn: NotRequired[str]
