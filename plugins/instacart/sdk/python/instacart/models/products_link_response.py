from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ProductsLinkResponse(SdkBaseModel):
    products_link_url: Optional[str] = UNSET
    """The unique URL to the generated shopping list or recipe page on Instacart Marketplace."""


class ProductsLinkResponseDict(TypedDict):
    products_link_url: NotRequired[str]
