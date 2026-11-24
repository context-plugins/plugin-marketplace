from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class AddressInput(SdkBaseModel):
    country: Optional[str] = UNSET
    state: Optional[str] = UNSET
    city: Optional[str] = UNSET
    street: Optional[str] = UNSET
    postalcode: Optional[str] = UNSET


class AddressInputDict(TypedDict):
    country: NotRequired[str]
    state: NotRequired[str]
    city: NotRequired[str]
    street: NotRequired[str]
    postalcode: NotRequired[str]
