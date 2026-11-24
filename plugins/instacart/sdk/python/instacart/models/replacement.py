from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class Replacement(SdkBaseModel):
    """Details about the replacement product suggested by the shopper."""

    product_name: Optional[str] = UNSET
    """The name of the replacement product."""

    product_id: Optional[str] = UNSET
    """The product identifier of the replacement."""

    quantity: Optional[int] = UNSET
    """The quantity of the replacement product."""


class ReplacementDict(TypedDict):
    product_name: NotRequired[str]
    product_id: NotRequired[str]
    quantity: NotRequired[int]
