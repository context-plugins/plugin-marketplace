from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .shopping_product2 import ShoppingProduct2, ShoppingProduct2Dict


class Entity1(SdkBaseModel):
    type_: str = Field(alias="type")
    """Entity type identifier"""

    name: str
    """Entity name"""

    product: Optional[ShoppingProduct2] = UNSET
    """The product listing that ChatGPT attached to the entity, without ``position``. Present only with
    ``include.shopping: true``, and only when ChatGPT attached a listing. The listing of a gpt-6 product card is in
    ``inlineProducts`` instead."""


class Entity1Dict(TypedDict):
    type_: str
    name: str
    product: NotRequired[ShoppingProduct2Dict]
