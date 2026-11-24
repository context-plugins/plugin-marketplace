from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .group import Group, GroupDict


class IdentityApiGroupResponse(SdkBaseModel):
    results: Optional[list[Group]] = UNSET


class IdentityApiGroupResponseDict(TypedDict):
    results: NotRequired[list[GroupDict]]
