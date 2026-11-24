from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .address import Address, AddressDict


class IntentCompanyInput(SdkBaseModel):
    name: str
    """Name of the company (required)"""

    website: Optional[str] = UNSET
    phone: Optional[str] = UNSET
    address: Optional[Address] = UNSET


class IntentCompanyInputDict(TypedDict):
    name: str
    website: NotRequired[str]
    phone: NotRequired[str]
    address: NotRequired[AddressDict]
