from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .extension_view import ExtensionView, ExtensionViewDict


class ExtensionListResponse(SdkBaseModel):
    items: list[ExtensionView]
    total_items: int = Field(alias="totalItems")
    """Total number of items in the list"""

    page_number: int = Field(alias="pageNumber")
    """Page number"""

    page_size: int = Field(alias="pageSize")
    """Number of items per page"""


class ExtensionListResponseDict(TypedDict):
    items: list[ExtensionViewDict]
    total_items: int
    page_number: int
    page_size: int
