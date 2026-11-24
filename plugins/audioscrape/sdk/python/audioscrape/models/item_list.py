from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item import Item, ItemDict


class ItemList(SdkBaseModel):
    items: list[Item]
    limit: int
    offset: int
    total: int


class ItemListDict(TypedDict):
    items: list[ItemDict]
    limit: int
    offset: int
    total: int
