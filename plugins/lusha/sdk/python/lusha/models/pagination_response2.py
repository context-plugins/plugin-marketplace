from __future__ import annotations

from pydantic import Field
from typing_extensions import TypedDict

from ..core import SdkBaseModel


class PaginationResponse2(SdkBaseModel):
    total: int
    limit: int
    offset: int
    has_more: bool = Field(alias="hasMore")


class PaginationResponse2Dict(TypedDict):
    total: int
    limit: int
    offset: int
    has_more: bool
