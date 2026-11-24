from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Pagination(SdkBaseModel):
    page: float
    limit: float
    total: float
    total_pages: float = Field(alias="totalPages")


class PaginationDict(TypedDict):
    page: float
    limit: float
    total: float
    total_pages: float
