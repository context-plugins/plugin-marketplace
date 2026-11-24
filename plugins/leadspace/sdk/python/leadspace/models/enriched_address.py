from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class EnrichedAddress(SdkBaseModel):
    country: Optional[str] = UNSET
    state: Optional[str] = UNSET
    city: Optional[str] = UNSET
    region: Optional[str] = UNSET
    address: Optional[str] = UNSET
    zipcode: Optional[str] = UNSET


class EnrichedAddressDict(TypedDict):
    country: NotRequired[str]
    state: NotRequired[str]
    city: NotRequired[str]
    region: NotRequired[str]
    address: NotRequired[str]
    zipcode: NotRequired[str]
