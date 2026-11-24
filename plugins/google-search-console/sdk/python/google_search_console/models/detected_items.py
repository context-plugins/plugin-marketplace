from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel
from .item import Item, ItemDict


class DetectedItems(SdkBaseModel):
    """Rich Results items grouped by type."""

    rich_result_type: Optional[str] = Field(default=UNSET, alias="richResultType")
    """Rich Results type"""

    items: Optional[list[Item]] = UNSET
    """List of Rich Results items."""


class DetectedItemsDict(TypedDict):
    rich_result_type: NotRequired[str]
    items: NotRequired[list[ItemDict]]
