from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Residential(SdkBaseModel):
    street: Optional[str] = UNSET
    city: Optional[str] = UNSET
    state: Optional[str] = UNSET
    postal_code: Optional[str] = UNSET
    country: Optional[str] = UNSET


class ResidentialDict(TypedDict):
    street: NotRequired[str]
    city: NotRequired[str]
    state: NotRequired[str]
    postal_code: NotRequired[str]
    country: NotRequired[str]
