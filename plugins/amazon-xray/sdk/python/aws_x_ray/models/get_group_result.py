from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group import Group, GroupDict


class GetGroupResult(SdkBaseModel):
    group: Optional[Group] = Field(default=UNSET, alias="Group")


class GetGroupResultDict(TypedDict):
    group: NotRequired[GroupDict]
