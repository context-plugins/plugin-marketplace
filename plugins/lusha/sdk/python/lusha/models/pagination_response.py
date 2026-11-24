from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class PaginationResponse(SdkBaseModel):
    total: int
    limit: Optional[int] = UNSET
    offset: Optional[int] = UNSET
    has_more: bool = Field(alias="hasMore")


class PaginationResponseDict(TypedDict):
    total: int
    limit: NotRequired[int]
    offset: NotRequired[int]
    has_more: bool
