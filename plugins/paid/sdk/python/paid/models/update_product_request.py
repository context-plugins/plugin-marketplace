from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, OptionalNullable, SdkBaseModel
from .product_attribute_upsert import ProductAttributeUpsert, ProductAttributeUpsertDict


class UpdateProductRequest(SdkBaseModel):
    name: Optional[str] = UNSET
    description: OptionalNullable[str] = UNSET
    active: Optional[bool] = UNSET
    product_code: OptionalNullable[str] = Field(default=UNSET, alias="productCode")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    metadata: OptionalNullable[dict[str, Any]] = UNSET
    product_attributes: Optional[list[ProductAttributeUpsert]] = Field(default=UNSET, alias="productAttributes")


class UpdateProductRequestDict(TypedDict):
    name: NotRequired[str]
    description: NotRequired[str | None]
    active: NotRequired[bool]
    product_code: NotRequired[str | None]
    external_id: NotRequired[str | None]
    metadata: NotRequired[dict[str, Any] | None]
    product_attributes: NotRequired[list[ProductAttributeUpsertDict]]
