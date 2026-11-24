from __future__ import annotations

from pydantic import Field
from typing_extensions import NotRequired, TypedDict

from ..core import UNSET, Optional, SdkBaseModel


class ListCollectionsRequest(SdkBaseModel):
    next_token: Optional[str] = Field(default=UNSET, alias="NextToken")
    """Pagination token from the previous response."""

    max_results: Optional[int] = Field(default=UNSET, alias="MaxResults")
    """Maximum number of collection IDs to return."""


class ListCollectionsRequestDict(TypedDict):
    next_token: NotRequired[str]
    max_results: NotRequired[int]
