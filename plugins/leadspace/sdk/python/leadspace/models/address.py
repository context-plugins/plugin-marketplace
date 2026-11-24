from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Address(SdkBaseModel):
    country: Optional[str] = UNSET
    state: Optional[str] = UNSET
    city: Optional[str] = UNSET


class AddressDict(TypedDict):
    country: NotRequired[str]
    state: NotRequired[str]
    city: NotRequired[str]
