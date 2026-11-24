from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .widget_item import WidgetItem, WidgetItemDict


class WidgetList(SdkBaseModel):
    """Complete catalogue of widgets supported for the selected customer."""

    items: list[WidgetItem]
    """Supported widgets. Use an item's stable ``alias`` or customer-specific ``id`` with getWidget."""

    row_count: int = Field(alias="rowCount")
    """Number of entries in ``items``."""


class WidgetListDict(TypedDict):
    items: list[WidgetItemDict]
    row_count: int
