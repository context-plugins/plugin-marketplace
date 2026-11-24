from __future__ import annotations

from typing import Any

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, OptionalNullable, SdkBaseModel


class CreateProductRequest(SdkBaseModel):
    name: str
    description: OptionalNullable[str] = UNSET
    active: bool = False
    product_code: OptionalNullable[str] = Field(default=UNSET, alias="productCode")
    external_id: OptionalNullable[str] = Field(default=UNSET, alias="externalId")
    metadata: OptionalNullable[dict[str, Any]] = UNSET


class CreateProductRequestDict(TypedDict):
    name: str
    description: NotRequired[str | None]
    active: NotRequired[bool]
    product_code: NotRequired[str | None]
    external_id: NotRequired[str | None]
    metadata: NotRequired[dict[str, Any] | None]
