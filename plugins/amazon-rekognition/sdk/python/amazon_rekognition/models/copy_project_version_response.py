from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class CopyProjectVersionResponse(SdkBaseModel):
    project_version_arn: Optional[str] = Field(default=UNSET, alias="ProjectVersionArn")
    """The ARN of the copied model version in the destination project."""


class CopyProjectVersionResponseDict(TypedDict):
    project_version_arn: NotRequired[str]
