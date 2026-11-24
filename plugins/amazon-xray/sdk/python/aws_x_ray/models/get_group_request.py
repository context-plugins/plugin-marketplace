from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class GetGroupRequest(SdkBaseModel):
    group_name: Optional[str] = Field(default=UNSET, alias="GroupName")
    """The case-sensitive name of the group."""

    group_arn: Optional[str] = Field(default=UNSET, alias="GroupARN")
    """The ARN of the group that was generated on creation."""


class GetGroupRequestDict(TypedDict):
    group_name: NotRequired[str]
    group_arn: NotRequired[str]
