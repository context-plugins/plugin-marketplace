from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.project_visibility import ProjectVisibilityOrStr


class UpdateProjectVisibilityInput(SdkBaseModel):
    project_arn: str = Field(alias="projectArn")
    """The Amazon Resource Name (ARN) of the build project."""

    project_visibility: ProjectVisibilityOrStr = Field(alias="projectVisibility")
    resource_access_role: Optional[str] = Field(default=UNSET, alias="resourceAccessRole")
    """The ARN of the IAM role that enables CodeBuild to access the CloudWatch Logs and Amazon S3 artifacts for the
    project's builds."""


class UpdateProjectVisibilityInputDict(TypedDict):
    project_arn: str
    project_visibility: ProjectVisibilityOrStr
    resource_access_role: NotRequired[str]
