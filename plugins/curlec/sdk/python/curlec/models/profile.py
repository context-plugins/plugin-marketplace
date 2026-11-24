from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .addresses import Addresses, AddressesDict


class Profile(SdkBaseModel):
    category: Optional[str] = UNSET
    """Business category (e.g., healthcare, education, ecommerce)."""

    subcategory: Optional[str] = UNSET
    """Business subcategory."""

    addresses: Optional[Addresses] = UNSET


class ProfileDict(TypedDict):
    category: NotRequired[str]
    subcategory: NotRequired[str]
    addresses: NotRequired[AddressesDict]
