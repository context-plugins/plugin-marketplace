from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .product_result2 import ProductResult2, ProductResult2Dict


class Result8(SdkBaseModel):
    product_results: list[ProductResult2] = Field(alias="productResults")
    """One entry: the product panel of the card that issued the token. Same shape as Google Search and AI Mode
    ``productResults``. Only ``title`` is always present."""


class Result8Dict(TypedDict):
    product_results: list[ProductResult2Dict]
