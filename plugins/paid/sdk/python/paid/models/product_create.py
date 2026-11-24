from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .enums.product_create_type import ProductCreateType, ProductCreateTypeOrStr


class ProductCreate(SdkBaseModel):
    name: str
    description: Optional[str] = UNSET
    external_id: Optional[str] = Field(default=UNSET, alias="externalId")
    type_: ProductCreateTypeOrStr = Field(default=ProductCreateType.PRODUCT, alias="type")
    active: bool = False
    product_code: Optional[str] = Field(default=UNSET, alias="productCode")
    metadata: Optional[dict[str, Any]] = UNSET


class ProductCreateDict(TypedDict):
    name: str
    description: NotRequired[str]
    external_id: NotRequired[str]
    type_: NotRequired[ProductCreateTypeOrStr]
    active: NotRequired[bool]
    product_code: NotRequired[str]
    metadata: NotRequired[dict[str, Any]]
