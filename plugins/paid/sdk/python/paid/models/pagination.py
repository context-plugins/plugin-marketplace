from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class Pagination(SdkBaseModel):
    limit: int
    offset: int
    total: int
    has_more: bool = Field(alias="hasMore")


class PaginationDict(TypedDict):
    limit: int
    offset: int
    total: int
    has_more: bool
