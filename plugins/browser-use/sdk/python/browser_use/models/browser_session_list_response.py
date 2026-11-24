from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .browser_session_item_view import BrowserSessionItemView, BrowserSessionItemViewDict


class BrowserSessionListResponse(SdkBaseModel):
    """Response model for paginated browser session list requests."""

    items: list[BrowserSessionItemView]
    """List of browser session views for the current page"""

    total_items: int = Field(alias="totalItems")
    """Total number of items in the list"""

    page_number: int = Field(alias="pageNumber")
    """Page number"""

    page_size: int = Field(alias="pageSize")
    """Number of items per page"""


class BrowserSessionListResponseDict(TypedDict):
    items: list[BrowserSessionItemViewDict]
    total_items: int
    page_number: int
    page_size: int
