from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class FamilyMemberData(SdkBaseModel):
    user_id: Optional[str] = UNSET
    name: Optional[str] = UNSET


class FamilyMemberDataDict(TypedDict):
    user_id: NotRequired[str]
    name: NotRequired[str]
