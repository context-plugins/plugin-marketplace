from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Support(SdkBaseModel):
    email: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    policy_url: Optional[str] = UNSET


class SupportDict(TypedDict):
    email: NotRequired[str]
    phone: NotRequired[str]
    policy_url: NotRequired[str]
