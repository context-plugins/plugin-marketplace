from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Customer1(SdkBaseModel):
    contact: str
    name: Optional[str] = UNSET
    email: Optional[str] = UNSET
    customer_id: Optional[str] = UNSET


class Customer1Dict(TypedDict):
    contact: str
    name: NotRequired[str]
    email: NotRequired[str]
    customer_id: NotRequired[str]
