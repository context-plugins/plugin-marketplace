from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ChecksContentDtoGroup(SdkBaseModel):
    group_type: Optional[str] = Field(default=UNSET, alias="groupType")
    identity: Optional[str] = UNSET
    name: Optional[str] = UNSET


class ChecksContentDtoGroupDict(TypedDict):
    group_type: NotRequired[str]
    identity: NotRequired[str]
    name: NotRequired[str]
