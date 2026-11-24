from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class ProductByExternalId(SdkBaseModel):
    external_product_id: str = Field(alias="externalProductId")
    """Your external product ID"""


class ProductByExternalIdDict(TypedDict):
    external_product_id: str
