from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.project_visibility import ProjectVisibilityOrStr


class UpdateProjectVisibilityOutput(SdkBaseModel):
    project_arn: Optional[str] = Field(default=UNSET, alias="projectArn")
    """The Amazon Resource Name (ARN) of the build project."""

    public_project_alias: Optional[str] = Field(default=UNSET, alias="publicProjectAlias")
    """Contains the project identifier used with the public build APIs."""

    project_visibility: Optional[ProjectVisibilityOrStr] = Field(default=UNSET, alias="projectVisibility")


class UpdateProjectVisibilityOutputDict(TypedDict):
    project_arn: NotRequired[str]
    public_project_alias: NotRequired[str]
    project_visibility: NotRequired[ProjectVisibilityOrStr]
