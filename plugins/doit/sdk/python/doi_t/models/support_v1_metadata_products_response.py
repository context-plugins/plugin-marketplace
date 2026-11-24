from __future__ import annotations

from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .product_api import ProductApi, ProductApiDict


class SupportV1MetadataProductsResponse(SdkBaseModel):
    products: Optional[list[ProductApi]] = UNSET


class SupportV1MetadataProductsResponseDict(TypedDict):
    products: NotRequired[list[ProductApiDict]]
