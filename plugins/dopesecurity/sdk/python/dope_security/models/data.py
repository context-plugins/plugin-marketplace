from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel
from .pagination_response import PaginationResponse, PaginationResponseDict


class Data(SdkBaseModel):
    page_info: PaginationResponse = Field(alias="pageInfo")
    """Information about current and next page for cursor based pagination"""

    custom_categories: list[str] = Field(alias="customCategories")


class DataDict(TypedDict):
    page_info: PaginationResponseDict
    custom_categories: list[str]
