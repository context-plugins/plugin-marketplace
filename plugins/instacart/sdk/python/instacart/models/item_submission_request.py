from __future__ import annotations

from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .item import Item, ItemDict


class ItemSubmissionRequest(SdkBaseModel):
    items: list[Item]
    """The list of items to create or update at specific store locations."""


class ItemSubmissionRequestDict(TypedDict):
    items: list[ItemDict]
