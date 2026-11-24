from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ResellerContact(SdkBaseModel):
    name: Optional[str] = UNSET
    email_address: Optional[str] = UNSET
    phone: Optional[str] = UNSET


class ResellerContactDict(TypedDict):
    name: NotRequired[str]
    email_address: NotRequired[str]
    phone: NotRequired[str]
