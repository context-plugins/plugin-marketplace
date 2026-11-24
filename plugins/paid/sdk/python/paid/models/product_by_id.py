from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProductById(SdkBaseModel):
    product_id: str = Field(alias="productId")
    """The Paid product ID"""


class ProductByIdDict(TypedDict):
    product_id: str
