from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Shopper(SdkBaseModel):
    """Information about the current shopper assigned to the order."""

    name: Optional[str] = UNSET
    """The first name of the shopper."""

    phone_number: Optional[str] = UNSET
    """A masked phone number for contacting the shopper."""


class ShopperDict(TypedDict):
    name: NotRequired[str]
    phone_number: NotRequired[str]
